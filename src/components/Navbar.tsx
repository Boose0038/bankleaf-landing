
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "./ui/AnimatedButton";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-bank-primary">
            BankLeaf
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-bank-primary hover:text-bank-secondary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-bank-primary hover:text-bank-secondary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-bank-primary hover:text-bank-secondary transition-colors">
              Testimonials
            </a>
            <AnimatedButton variant="secondary" size="sm">
              Sign In
            </AnimatedButton>
            <AnimatedButton variant="primary" size="sm">
              Get Started
            </AnimatedButton>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-bank-primary" />
            ) : (
              <Menu className="w-6 h-6 text-bank-primary" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-bank-primary py-2 border-b border-bank-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-bank-primary py-2 border-b border-bank-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-bank-primary py-2 border-b border-bank-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="flex space-x-2 pt-2">
                <AnimatedButton
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </AnimatedButton>
                <AnimatedButton
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </AnimatedButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
