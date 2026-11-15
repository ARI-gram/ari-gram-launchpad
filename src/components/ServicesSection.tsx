import { ArrowUpRight, BarChart3, Code2, Monitor, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { reveal } from "@/lib/reveal";

const services = [
  {
    icon: Code2,
    id: "software",
    title: "Software Development",
    text: "Custom business applications built for your workflow.",
    items: ["Custom applications", "Workflow automation", "API integrations"],
  },
  {
    icon: Monitor,
    id: "web",
    title: "Web Solutions",
    text: "Websites and web platforms that bring in customers.",
    items: ["Business websites", "E-commerce", "Portals & dashboards"],
  },
  {
    icon: BarChart3,
    id: "systems",
    title: "Business Systems",
    text: "Ready-built systems adapted to your company.",
    items: ["POS & inventory", "HR & payroll", "ERP & materials"],
  },
  {
    icon: Palette,
    id: "creative",
    title: "Digital Creative",
    text: "Brand identity and content that look as good as you work.",
    items: ["Branding & logos", "Posters & social media", "Video editing"],
  },
];

export const ServicesSection = () => (
  <section id="services" className="bg-sand py-20 lg:py-28">
    <div className="wrap">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[620px]" {...reveal()}>
          <span className="eyebrow">What we do</span>
          <h2 className="section-title mt-4">Four ways we help businesses work better.</h2>
        </div>
        <p className="max-w-[380px] text-[16px] text-muted-foreground" {...reveal(120)}>
          One partner for the software you run on and the digital presence your customers see.
        </p>
      </div>

      <div className="mt-12 grid overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 1 }}>
        {services.map(({ id, icon: Icon, title, text, items }, i) => (
          <article key={title} className="group flex flex-col gap-3 bg-white p-7 transition-colors hover:bg-[#FBFAF7]" {...reveal(i * 110)}>
            <Icon className="h-7 w-7 text-brand-blue transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.6} />
            <h3 className="mt-3 text-[19px] font-bold text-ink">{title}</h3>
            <p className="text-[14.5px] text-muted-foreground">{text}</p>
            <ul className="mt-1 space-y-1.5 text-[14px] text-ink/80">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-2.5">
                  <span className="h-1 w-3 rounded bg-amber" /> {it}
                </li>
              ))}
            </ul>
            <Link to={`/services#${id}`} className="mt-auto inline-flex items-center gap-1 pt-4 font-display text-sm font-bold text-brand-blue">
              Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
