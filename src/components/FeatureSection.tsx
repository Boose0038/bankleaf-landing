
import { FeatureCard } from "./ui/FeatureCard";
import { 
  CreditCard, 
  Lock, 
  PieChart, 
  Wallet, 
  BadgePercent, 
  Zap 
} from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Quick Payments",
      description: "Send and receive money instantly, with no hidden fees or delays."
    },
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description: "Your finances are secured with end-to-end encryption and biometric verification."
    },
    {
      icon: PieChart,
      title: "Smart Analytics",
      description: "Gain insights into your spending habits with detailed analytics and reports."
    },
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Store all your cards and accounts in one secure, easy-to-access location."
    },
    {
      icon: BadgePercent,
      title: "Cashback Rewards",
      description: "Earn cashback on every purchase with our reward system."
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Transfer money between accounts or to friends in seconds, not days."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 stagger-animation">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-bank-accent bg-bank-accent/10 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need in one place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete suite of banking tools designed around your needs, not ours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
