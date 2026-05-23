import { CornerMeta } from "@/components/CornerMeta";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { ImmersiveBackdrop } from "@/components/ImmersiveBackdrop";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TeamSection } from "@/components/sections/TeamSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-portfolio-base">
      <ImmersiveBackdrop />
      <div className="grain" aria-hidden="true" />
      <CursorGlow />
      <Navbar />
      <CornerMeta />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <ExpertiseSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
