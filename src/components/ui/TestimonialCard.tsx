
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import { CSSProperties } from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
  style?: CSSProperties;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  className,
  style,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl hover-lift border border-bank-accent/20",
        className
      )}
      style={style}
    >
      <QuoteIcon className="w-10 h-10 text-bank-accent mb-4" />
      <p className="text-lg mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
