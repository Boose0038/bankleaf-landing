
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl hover-lift",
        className
      )}
    >
      <QuoteIcon className="w-10 h-10 text-bank-accent/20 mb-4" />
      <p className="text-lg mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
