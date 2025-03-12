
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
import { CSSProperties } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  className,
  style,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 hover-lift",
        popular ? "gradient-border shadow-lg relative" : "",
        className
      )}
      style={style}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-gradient-to-r from-bank-secondary to-bank-accent text-white rounded-full">
          Popular
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-bank-secondary shrink-0 mr-2" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <AnimatedButton
        variant={popular ? "primary" : "outline"}
        className="w-full"
      >
        Get Started
      </AnimatedButton>
    </div>
  );
};
