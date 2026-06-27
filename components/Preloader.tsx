import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".mask-logo",
      {
        scale: 0.3,
        rotate: 0,
        transformOrigin: "50% 50%",
      },
      {
        scale: 5,
        rotate: 2,
        duration: 2,
        ease: "expo.inOut",
      }
    ).to(container.current, {
      opacity: 0,
      duration: 0.6,
      onComplete,
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="logoMask">
            <rect width="100%" height="100%" fill="black" />

            <image
              className="mask-logo"
              href="/Images/logo.pngverge"
              x="300"
              y="200"
              width="200"
              height="200"
            />
          </mask>
        </defs>

        <image
          href="/Images/logo.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
           mask="url(#logoMask)"
        />
      </svg>
    </div>
  );
}