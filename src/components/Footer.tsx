
import { cn } from "@/lib/utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "News", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licenses", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-bank-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold text-bank-primary mb-4 inline-block">
              BankLeaf
            </a>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Modern banking for a digital world. Secure, simple, and designed for your needs.
            </p>
          </div>
          
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="col-span-1">
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-bank-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-bank-muted/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground order-2 md:order-1 mt-4 md:mt-0">
            © {currentYear} BankLeaf. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 md:order-2">
            <a href="#" className="text-muted-foreground hover:text-bank-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-bank-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-bank-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-bank-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
