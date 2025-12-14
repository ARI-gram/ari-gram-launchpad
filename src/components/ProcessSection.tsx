import { MessageSquare, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Understand",
    description: "We listen to your needs, challenges, and goals to fully understand the problem.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design",
    description: "We craft a tailored solution with clear architecture and user-focused design.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build & Automate",
    description: "We develop your solution using modern tools and integrate smart automations.",
  },
  {
    icon: TestTube,
    step: "04",
    title: "Test & Optimize",
    description: "Rigorous testing ensures everything works perfectly before launch.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Support & Scale",
    description: "We provide ongoing support and help you scale as your needs grow.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-mono text-primary">// Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A clear, collaborative process that delivers results
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                <div className="glass rounded-2xl p-6 h-full hover:-translate-y-2 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-button">
                    {step.step}
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
