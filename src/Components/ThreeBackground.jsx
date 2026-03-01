import { useRef, useEffect } from "react";
import * as THREE from "three";

const CYAN = 0x22d3ee;
const GREEN = 0x10b981;
const AMBER = 0xf59e0b;
const WHITE = 0xe0f2fe;

/**
 * Cybersecurity-themed Three.js background:
 * - Matrix-style drifting particles + network connection lines
 * - Hex grid, wireframe rings, scan plane, wireframe sphere
 */
export default function ThreeBackground({ className = "", opacity = 0.4 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Dark background so cyan/green/amber elements are clearly visible
    renderer.setClearColor(0x030304, 0.94);
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    // ---- 1. Floating particles (matrix-style spread) ----
    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount); // for drift phase
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
      randoms[i] = Math.random() * Math.PI * 2;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("random", new THREE.BufferAttribute(randoms, 1));
    const particleMaterial = new THREE.PointsMaterial({
      color: CYAN,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ---- 2. Network lines (connect nearby particles) ----
    const positionAttr = particleGeometry.attributes.position;
    const linePositions = [];
    const maxDist = 3.2;
    const maxConnections = 5;
    for (let i = 0; i < particleCount; i++) {
      const ix = positionAttr.getX(i);
      const iy = positionAttr.getY(i);
      const iz = positionAttr.getZ(i);
      let count = 0;
      for (let j = i + 1; j < particleCount && count < maxConnections; j++) {
        const jx = positionAttr.getX(j);
        const jy = positionAttr.getY(j);
        const jz = positionAttr.getZ(j);
        const d = Math.hypot(jx - ix, jy - iy, jz - iz);
        if (d < maxDist) {
          linePositions.push(ix, iy, iz, jx, jy, jz);
          count++;
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setDrawRange(0, linePositions.length / 3);
    lineGeometry.computeBoundingSphere();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: GREEN,
      transparent: true,
      opacity: 0.22,
    });
    const networkLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(networkLines);

    // ---- 3. Hex grid (flat, behind) ----
    const hexRadius = 0.5;
    const hexShape = new THREE.Shape();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
      const x = Math.cos(a) * hexRadius;
      const y = Math.sin(a) * hexRadius;
      if (i === 0) hexShape.moveTo(x, y);
      else hexShape.lineTo(x, y);
    }
    hexShape.closePath();
    const hexGeom = new THREE.ShapeGeometry(hexShape);
    const hexGrid = new THREE.Group();
    const hexMaterial = new THREE.MeshBasicMaterial({
      color: CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const gridW = 10,
      gridH = 7;
    for (let gx = -gridW; gx <= gridW; gx++) {
      for (let gy = -gridH; gy <= gridH; gy++) {
        const x = gx * hexRadius * 1.8 + (gy % 2) * hexRadius * 0.9;
        const y = gy * hexRadius * 1.55;
        const hex = new THREE.Mesh(hexGeom, hexMaterial);
        hex.position.set(x, y, -6);
        hex.rotation.z = Math.PI / 2;
        hexGrid.add(hex);
      }
    }
    scene.add(hexGrid);

    // ---- 4. Wireframe rings (radar / scan feel) ----
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(5, 0.025, 8, 64),
      new THREE.MeshBasicMaterial({ color: CYAN, wireframe: true, transparent: true, opacity: 0.32 })
    );
    ring1.rotation.x = Math.PI / 2.2;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.5, 0.015, 6, 48),
      new THREE.MeshBasicMaterial({ color: GREEN, wireframe: true, transparent: true, opacity: 0.26 })
    );
    ring2.rotation.x = Math.PI / 2;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(6.5, 0.02, 6, 56),
      new THREE.MeshBasicMaterial({ color: AMBER, wireframe: true, transparent: true, opacity: 0.2 })
    );
    ring3.rotation.x = Math.PI / 2.8;
    ring3.rotation.z = Math.PI / 6;
    scene.add(ring3);

    // ---- 5. Wireframe sphere (digital globe) ----
    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.2, 1),
      new THREE.MeshBasicMaterial({ color: CYAN, wireframe: true, transparent: true, opacity: 0.2 })
    );
    sphere.position.z = -2;
    scene.add(sphere);

    // ---- 6. Scan plane (horizontal moving bar) ----
    const scanGeom = new THREE.PlaneGeometry(40, 0.08);
    const scanMat = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const scanPlane = new THREE.Mesh(scanGeom, scanMat);
    scanPlane.rotation.x = -Math.PI / 2;
    scanPlane.position.z = -4;
    scene.add(scanPlane);

    // ---- 7. Floating "data orbs" (small glowing spheres) ----
    const orbGeom = new THREE.SphereGeometry(0.08, 8, 8);
    const orbs = [];
    for (let o = 0; o < 12; o++) {
      const orb = new THREE.Mesh(
        orbGeom,
        new THREE.MeshBasicMaterial({
          color: o % 3 === 0 ? AMBER : o % 3 === 1 ? GREEN : CYAN,
          transparent: true,
          opacity: 0.4,
        })
      );
      orb.position.set((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 8);
      orbs.push({ mesh: orb, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.4 });
      scene.add(orb);
    }

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const dt = clock.getDelta();

      // Particles: slow spin + gentle vertical drift (matrix feel)
      particles.rotation.y = t * 0.12;
      const pos = particleGeometry.attributes.position;
      const rnd = particleGeometry.attributes.random;
      for (let i = 0; i < particleCount; i++) {
        const py = pos.getY(i);
        pos.setY(i, py - dt * 0.8);
        if (py < -14) pos.setY(i, 14);
        else if (py > 14) pos.setY(i, -14);
      }
      pos.needsUpdate = true;

      // Network lines rotate with particles
      networkLines.rotation.y = particles.rotation.y;

      // Hex grid slow move
      hexGrid.rotation.z = t * 0.03;
      hexGrid.position.x = Math.sin(t * 0.2) * 0.5;

      // Rings
      ring1.rotation.z = t * 0.15;
      ring2.rotation.z = t * -0.2;
      ring3.rotation.z = t * 0.1;

      // Sphere
      sphere.rotation.y = t * 0.08;
      sphere.rotation.x = t * 0.05;

      // Scan plane: move up and down
      scanPlane.position.y = Math.sin(t * 0.6) * 6;

      // Orbs float
      orbs.forEach(({ mesh, phase, speed }) => {
        mesh.position.y += Math.sin(t * speed + phase) * 0.002;
        mesh.position.x += Math.cos(t * speed * 0.7 + phase) * 0.0015;
        mesh.material.opacity = 0.35 + Math.sin(t * 2 + phase) * 0.2;
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      hexGeom.dispose();
      hexMaterial.dispose();
      scanGeom.dispose();
      scanMat.dispose();
      orbGeom.dispose();
      [ring1, ring2, ring3, sphere].forEach((m) => {
        m.geometry?.dispose();
        m.material?.dispose();
      });
      orbs.forEach(({ mesh }) => {
        mesh.geometry?.dispose();
        mesh.material?.dispose();
      });
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden
    />
  );
}
