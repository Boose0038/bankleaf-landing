
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedGradient = ({
  className,
  children,
}: AnimatedGradientProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-bank-secondary/20 via-bank-accent/20 to-bank-secondary/20 animate-gradient-shift bg-[length:400%_400%]",
        mounted ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
