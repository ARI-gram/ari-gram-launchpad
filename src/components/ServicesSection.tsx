import { Globe, Workflow, Wrench, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Websites & Apps",
    description: "Custom websites and web apps built to solve real problems. From landing pages to full-stack applications, we create digital experiences that convert.",
    features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Workflow,
    title: "Automation (n8n)",
    description: "Automate repetitive tasks and workflows efficiently. Connect your tools, save time, and let machines do the boring work while you focus on growth.",
    features: ["Workflow Design", "API Integrations", "Data Sync", "Custom Triggers"],
  },
  {
    icon: Wrench,
    title: "Software Issues",
    description: "Bug fixing, performance optimization, and system recovery. When things break, we fix them fast and prevent future problems.",
    features: ["Bug Fixing", "Performance Tuning", "Security Patches", "Code Reviews"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-mono text-gold">// Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient-premium">Build & Fix</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive tech solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="group/btn" asChild>
                  <a href="#contact">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
