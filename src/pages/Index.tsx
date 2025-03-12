
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".animate-fade-in");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          element.classList.add("opacity-100");
          element.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    // Initial check for elements in viewport
    setTimeout(handleScrollAnimation, 100);

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
