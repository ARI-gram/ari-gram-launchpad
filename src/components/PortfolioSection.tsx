import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Jowany Electricals",
    category: "Business Website",
    description:
      "A professional electrical supplies website showcasing products, services, and company credibility.",
    tags: ["Business Site", "Product Showcase", "Branding"],
    image:
      "https://jowany-electricals.co.ke/image/product%2015.jpg",
    live: "https://jowany-electricals.co.ke/",
  },
  {
    title: "Time Vault Kenya",
    category: "Business Website",
    description:
      "A premium watch and timepiece showcase website built for brand presence and customer trust.",
    tags: ["React", "Landing Page", "Branding"],
    image:
      "https://images.unsplash.com/photo-1558505780-e7a9d70b4bab?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    live: "https://time-vault-kenya.netlify.app/",
  },
  {
    title: "AriGram Connect Shop",
    category: "Online Shop",
    description:
      "A modern coffee and retail shop website designed for showcasing products and customer engagement.",
    tags: ["React", "E-commerce", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1556742526-795a8eac090e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y29mZmVlfGVufDB8fDB8fHww",
    live: "https://arigram-connect-shop.netlify.app/",
  },
  {
    title: "My Meal Time",
    category: "Food Ordering",
    description:
      "A restaurant and meal ordering platform focused on simplicity, speed, and visual appeal.",
    tags: ["React", "Food App", "Ordering System"],
    image:
      "https://plus.unsplash.com/premium_photo-1745946640151-7bd1d1f93554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    live: "https://my-meal-time.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    category: "Web App",
    description:
      "Full-stack e-commerce solution with payment integration and inventory management.",
    tags: ["React", "Node.js", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Workflow Automation",
    category: "n8n Integration",
    description:
      "Automated lead processing and CRM sync for a marketing agency.",
    tags: ["n8n", "API", "Webhooks"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Business Dashboard",
    category: "Web App",
    description:
      "Real-time analytics dashboard with custom reporting and data visualization.",
    tags: ["React", "Charts", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-mono text-gold">// Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-premium">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of our recent work and solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-gold/90 text-gold-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.live && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of our work?
          </p>
          <Button variant="goldOutline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
