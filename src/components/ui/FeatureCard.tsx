
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { CSSProperties } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  style?: CSSProperties;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  style,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl hover-lift border border-bank-accent/20",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-bank-secondary/20 to-bank-accent/20">
        <Icon className="w-6 h-6 text-bank-secondary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
