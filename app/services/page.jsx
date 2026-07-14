import ServicesHero from "@/components/ServicesHero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesCta from "@/components/ServicesCta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nos Services | Dev Agency",
  description:
    "Découvrez nos services : développement web, applications mobiles, SEO, SEM et création de sites WordPress.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesSection />
      <ProcessSection />
      <ServicesCta />
      <Footer />
    </main>
  );
}
