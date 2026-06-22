import LogoLoop from '@/components/Logo';


// Alternative with image sources
const imageLogos = [
  { src: "/logos/log1.png", alt: "Company 1" },
  { src: "/logos/log2.png", alt: "Company 2" },
  { src: "/logos/log3.png", alt: "Company 3" },
   { src: "/logos/log4.png", alt: "Company 3" },
    { src: "/logos/log5.png", alt: "Company 3"},
     { src: "/logos/log6.png", alt: "Company 3" },
      { src: "/logos/log7.png", alt: "Company 3" },
       { src: "/logos/log8.png", alt: "Company 3" },
];

export default function Log() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}