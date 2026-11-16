import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
  <>
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <IndustriesSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </main>
    <Footer />
  </>
  );
};

export default Index;
