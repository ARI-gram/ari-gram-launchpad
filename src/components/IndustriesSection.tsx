import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { reveal } from "@/lib/reveal";
import { industries } from "@/content/industries";

/** Homepage summary of the industries; each links to its section on /industries. */
export const IndustriesSection = () => (
  <section id="industries" className="bg-sand py-20 lg:py-24">
    <div className="wrap">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" {...reveal()}>
        <div>
          <span className="eyebrow">Industries we serve</span>
          <h2 className="section-title mt-4 max-w-[620px]">Software shaped by the industry it runs in.</h2>
        </div>
        <Link to="/industries" className="group inline-flex items-center gap-1 font-display text-sm font-bold text-brand-blue">
          All industries <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <li
            key={ind.id}
            {...reveal(i * 90)}
            className="border-b border-ink/15 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:first-child>a]:pl-0"
          >
            <Link to={`/industries#${ind.id}`} className="group block py-6 pr-6 lg:pl-6">
              <span className="font-display text-xs font-bold text-amber">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-ink transition-colors group-hover:text-brand-blue">{ind.name}</h3>
              <p className="mt-1 text-[14px] text-muted-foreground">{ind.short}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
