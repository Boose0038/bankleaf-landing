
import { AnimatedButton } from "./ui/AnimatedButton";
import { AnimatedGradient } from "./ui/AnimatedGradient";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <AnimatedGradient className="absolute inset-0 -z-10" />
      
      {/* Abstract Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-bank-secondary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-bank-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center stagger-animation">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-bank-accent bg-bank-accent/10 rounded-full">
            The Banking Revolution
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Banking made <span className="text-gradient">simple</span>, the way it should be
          </h1>
          <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
            BankLeaf combines the power of modern technology with elegant design to create a seamless, intuitive banking experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton variant="primary" size="lg">
              Get Started Free
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-center gap-8 items-center text-left">
            <div className="glass-card rounded-2xl p-6 w-full md:w-1/3">
              <div className="text-4xl font-bold text-bank-secondary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Customer satisfaction across all services</p>
            </div>
            <div className="glass-card rounded-2xl p-6 w-full md:w-1/3">
              <div className="text-4xl font-bold text-bank-secondary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Customer service and technical support</p>
            </div>
            <div className="glass-card rounded-2xl p-6 w-full md:w-1/3">
              <div className="text-4xl font-bold text-bank-secondary mb-2">5M+</div>
              <p className="text-sm text-muted-foreground">Customers worldwide using our service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
