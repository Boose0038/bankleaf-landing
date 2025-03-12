
import { PricingCard } from "./ui/PricingCard";

export const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "Free",
      description: "For individuals just getting started",
      features: [
        "No minimum balance",
        "Up to 3 accounts",
        "Basic analytics",
        "Mobile banking app",
        "Standard customer support"
      ],
      popular: false
    },
    {
      title: "Premium",
      price: "$9.99",
      description: "For individuals who want more",
      features: [
        "No minimum balance",
        "Unlimited accounts",
        "Advanced analytics",
        "Mobile banking app",
        "Priority customer support",
        "Cashback rewards",
        "No foreign transaction fees"
      ],
      popular: true
    },
    {
      title: "Business",
      price: "$19.99",
      description: "For businesses and teams",
      features: [
        "No minimum balance",
        "Unlimited accounts",
        "Team access management",
        "Business analytics",
        "Mobile banking app",
        "24/7 dedicated support",
        "Expense tracking",
        "Invoicing tools"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-bank-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 stagger-animation">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-bank-accent bg-bank-accent/10 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees or surprises. Choose the plan that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
