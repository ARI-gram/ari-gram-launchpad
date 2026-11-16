import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { reveal } from "@/lib/reveal";
import { ProjectCard } from "./ProjectCard";
import { featuredProject, projects, workStats } from "@/content/work";

/** Homepage strip: the featured project plus the projects marked `onHomepage`, linking to /work. */
const homepageProjects = [
  {
    id: "featured",
    title: featuredProject.title,
    type: "Business website",
    industry: "Construction",
    description: "Catalogue for irrigation, plumbing, electrical and building supplies, with WhatsApp quote lists.",
    image: featuredProject.image,
    live: featuredProject.live,
  },
  ...projects.filter((p) => p.onHomepage),
];

export const PortfolioSection = () => (
  <section id="work" className="py-20 lg:py-28">
    <div className="wrap">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div {...reveal()}>
          <span className="eyebrow">Featured projects</span>
          <h2 className="section-title mt-4">Work that is live today.</h2>
        </div>
        <div className="max-w-[380px]" {...reveal(100)}>
          <p className="text-muted-foreground">
            {workStats.live} websites and apps we've built for Kenyan businesses, all running right now.
          </p>
          <Link to="/work" className="group mt-2 inline-flex items-center gap-1 font-display text-sm font-bold text-brand-blue">
            See all our work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homepageProjects.map((p, i) => (
          <ProjectCard
            key={p.id}
            {...reveal(i * 100)}
            title={p.title}
            type={p.type}
            industry={p.industry}
            description={p.description}
            image={p.image}
            live={p.live}
          />
        ))}
      </div>
    </div>
  </section>
);
