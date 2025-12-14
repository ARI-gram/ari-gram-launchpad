import { Code2, Zap, Shield, Users } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Delivered", value: "50+" },
  { icon: Zap, label: "Automations Built", value: "100+" },
  { icon: Shield, label: "Issues Resolved", value: "200+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full">
              <span className="text-sm font-mono text-gold">// About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Solving Tech Problems for{" "}
              <span className="text-gradient-premium">Real People</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ARI-gram Technologies is dedicated to solving community and business 
              tech problems. From building custom websites and web applications to 
              automating workflows with n8n and troubleshooting software issues — 
              we're here to help.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently led by one passionate developer, we're growing as demand 
              increases. Our focus is on delivering quality solutions that actually 
              work, not just look good on paper.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold">Developer-First Approach</p>
                <p className="text-sm text-muted-foreground">Quality code, honest pricing</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-gold mb-4" />
                <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
