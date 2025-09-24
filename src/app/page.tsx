import HeroSection from "@/app/components/hero-section";
import StatsSection from "@/app/components/stats-section";
import ServicesSection from "@/app/components/services-section";
import TeamSection from "@/app/components/team-section";
import ProjectsSection from "@/app/components/projects-section";
import ContactSection from "@/app/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
