import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import PortfolioSection from "@/components/Portfolio";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
