
import { TestimonialCard } from "./ui/TestimonialCard";

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "BankLeaf has completely changed how I think about banking. The interface is clean, intuitive, and it takes seconds to do what used to take hours.",
      author: "Sarah Johnson",
      role: "Small Business Owner"
    },
    {
      quote: "As someone who travels frequently, having a bank that understands international needs is crucial. BankLeaf has saved me thousands in fees.",
      author: "Michael Chen",
      role: "Digital Nomad"
    },
    {
      quote: "The analytics features have helped me understand my spending habits and save more effectively. I've never been more financially aware.",
      author: "Emily Rodriguez",
      role: "Financial Analyst"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 stagger-animation">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-bank-accent bg-bank-accent/10 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
