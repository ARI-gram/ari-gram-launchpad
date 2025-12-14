import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import { TechBackground } from "./TechBackground";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated tech background */}
      <TechBackground />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-glow-gold animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-mono text-gold">
              Building the future of tech solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            We Build, Automate &{" "}
            <span className="text-gradient-premium">Fix Software Systems</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Websites, apps, n8n automation, and software problem-solving for 
            businesses and individuals. Transform your ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <MessageCircle className="w-5 h-5" />
                Ask a Question
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a 
              href="https://wa.me/254726875878" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono">0726875878</span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a 
              href="mailto:ari.gram.technologies@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono">ari.gram.technologies@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
