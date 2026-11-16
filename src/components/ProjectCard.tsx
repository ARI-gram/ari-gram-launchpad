import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  type: string;
  industry?: string;
  description: string;
  image: string;
  live: string;
  className?: string;
  style?: CSSProperties;
  "data-reveal"?: string;
};

/** Card for a live client project: screenshot, type, industry, short description, link out. */
export const ProjectCard = ({ title, type, industry, description, image, live, className, ...rest }: ProjectCardProps) => (
  <a
    href={live}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-[0_14px_34px_rgba(20,24,32,0.10)]",
      className,
    )}
    {...rest}
  >
    <div className="relative aspect-[16/11] overflow-hidden border-b border-border bg-sand">
      {/* Fallback shown if the image fails to load */}
      <span className="absolute inset-0 grid place-items-center p-4 text-center font-display text-lg font-extrabold text-ink/40">{title}</span>
      <img
        src={image}
        alt={`${title} website`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="relative h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
    <div className="flex flex-1 flex-col gap-1.5 p-5">
      <div className="flex items-center justify-between gap-2">
        <small className="font-display text-[11.5px] font-bold uppercase tracking-[0.1em] text-amber">{type}</small>
        {industry && <span className="text-xs text-muted-foreground">{industry}</span>}
      </div>
      <h3 className="text-[17px] font-bold text-ink">{title}</h3>
      <p className="text-[14px] text-muted-foreground">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand-blue">
        Visit site <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </div>
  </a>
);
