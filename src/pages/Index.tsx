import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import AreasSection from "@/components/landing/AreasSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import EmotionalSection from "@/components/landing/EmotionalSection";
import NationalSection from "@/components/landing/NationalSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <AuthoritySection />
      <EmotionalSection />
      <NationalSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
