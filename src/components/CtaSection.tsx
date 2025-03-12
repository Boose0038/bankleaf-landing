
import { AnimatedButton } from "./ui/AnimatedButton";
import { AnimatedGradient } from "./ui/AnimatedGradient";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-20 relative">
      <AnimatedGradient className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-16 text-center stagger-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience modern banking?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already made the switch. Get started in minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton variant="primary" size="lg">
              Create Free Account
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};
