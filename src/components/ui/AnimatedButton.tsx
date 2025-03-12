
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-bank-secondary focus:ring-offset-2",
          "before:absolute before:inset-0 before:z-0 before:transition-all before:duration-500",
          "hover-lift",
          {
            // Variant styles
            "bg-gradient-to-r from-bank-secondary to-bank-accent text-white": variant === "primary",
            "before:opacity-0 before:bg-gradient-to-r before:from-bank-secondary before:to-bank-accent before:hover:opacity-10": variant === "primary",
            
            "bg-white text-bank-primary border border-bank-muted": variant === "secondary",
            "before:opacity-0 before:bg-gradient-to-r before:from-bank-secondary/10 before:to-bank-accent/10 before:hover:opacity-100": variant === "secondary",
            
            "bg-transparent text-bank-primary border border-bank-muted": variant === "outline",
            "before:opacity-0 before:bg-gradient-to-r before:from-bank-secondary/10 before:to-bank-accent/10 before:hover:opacity-100": variant === "outline",
            
            "bg-transparent text-bank-primary": variant === "ghost",
            "before:opacity-0 before:bg-gradient-to-r before:from-bank-secondary/10 before:to-bank-accent/10 before:hover:opacity-100": variant === "ghost",
            
            // Size styles
            "text-xs px-3 py-1": size === "sm",
            "text-sm px-5 py-2": size === "md",
            "text-base px-6 py-3": size === "lg"
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
