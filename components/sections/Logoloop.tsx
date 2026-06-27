import LogoLoop from '@/components/Logo';


// Alternative with image sources
const imageLogos = [
  { src: "/logos/log1.png", alt: "Company 1" },
  // { src: "/logos/log2.png", alt: "Company 2" },?
  { src: "/logos/log3.png", alt: "Company 3" },
   { src: "/logos/log4.png", alt: "Company 3" },
    { src: "/logos/log5.png", alt: "Company 3"},
     { src: "/logos/log6.png", alt: "Company 3" },
      { src: "/logos/log7.png", alt: "Company 3" },
       { src: "/logos/log8.png", alt: "Company 3" },
];

export default function Log() {
  return (
    <div className='relative h-[25vh] overflow-hidden w-full'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={100}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}