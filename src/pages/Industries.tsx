import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";
import { industries, type Industry, type Proof, type ProofStatus } from "@/content/industries";

const statusClass: Record<ProofStatus, string> = {
  Live: "bg-[#E3F5EA] text-[#17733F]",
  "In development": "bg-[#FFF4E0] text-[#8A5A10]",
  "Coming soon": "bg-[#EEF2F7] text-[#3A4A63]",
};

/** A piece of real work shown as a pill; links out to live sites or to the product on /solutions. */
const ProofChip = ({ proof }: { proof: Proof }) => {
  const inner = (
    <>
      {proof.label}
      {proof.status && (
        <small className={cn("rounded-full px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.04em]", statusClass[proof.status])}>
          {proof.status}
        </small>
      )}
      {proof.href?.startsWith("http") && <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />}
    </>
  );
  const cls = "inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-ink";
  if (!proof.href) return <span className={cls}>{inner}</span>;
  if (proof.href.startsWith("http"))
    return (
      <a href={proof.href} target="_blank" rel="noopener noreferrer" className={cn(cls, "transition-colors hover:border-ink/40")}>
        {inner}
      </a>
    );
  return (
    <Link to={proof.href} className={cn(cls, "transition-colors hover:border-ink/40")}>
      {inner}
    </Link>
  );
};

const IndustryIndex = () => (
  <section className="pb-4 pt-20 lg:pt-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">Where we work</span>
        <h2 className="section-title mt-4 max-w-[640px]">Five kinds of business we know well.</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <a
            key={ind.id}
            href={`#${ind.id}`}
            {...reveal(i * 80)}
            className={cn(
              "group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-[0_14px_34px_rgba(20,24,32,0.10)]",
              i === industries.length - 1 && "col-span-2 lg:col-span-1",
            )}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={ind.image(500)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
            </div>
            <div className="px-4 pb-4 pt-3.5">
              <b className="block font-display text-base text-ink">{ind.name}</b>
              <small className="text-[13px] text-muted-foreground">{ind.short}</small>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const IndustrySection = ({ industry, index }: { industry: Industry; index: number }) => {
  const flip = index % 2 === 1;
  return (
    <section
      id={industry.id}
      className="grid scroll-mt-4 items-start gap-10 border-b border-border py-16 last:border-b-0 lg:grid-cols-[1fr_1.1fr] lg:gap-[72px] lg:py-[104px]"
    >
      <div className={cn("lg:sticky lg:top-24", flip && "lg:order-2")} {...reveal(0, "zoom")}>
        <img
          src={industry.image(1000)}
          srcSet={`${industry.image(600)} 600w, ${industry.image(1000)} 1000w`}
          sizes="(min-width: 1024px) 520px, 100vw"
          alt={industry.imageAlt}
          loading="lazy"
          className="aspect-[4/3.3] w-full rounded-2xl object-cover"
        />
      </div>

      <div {...reveal(120)}>
        <span className="eyebrow">{industry.name}</span>
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.12] text-ink md:text-[36px]">{industry.title}</h2>
        <p className="mt-3.5 text-[16.5px] leading-relaxed text-ink/80">{industry.intro}</p>

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="border-b-2 border-ink pb-2.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              Common challenges
            </h3>
            <ul>
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-2.5 border-b border-border py-3 text-[14.5px] text-ink/85">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="border-b-2 border-amber pb-2.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              How we help
            </h3>
            <ul>
              {industry.help.map((h) => (
                <li key={h} className="flex gap-2.5 border-b border-border py-3 text-[14.5px] text-ink/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Our work here</h3>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {industry.proof.map((p) => (
              <ProofChip key={p.label} proof={p} />
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link to={industry.primary.to} className="btn btn-primary group">
            {industry.primary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {industry.secondary && (
            <Link to={industry.secondary.to} className="group inline-flex items-center gap-1 font-display text-sm font-bold text-brand-blue">
              {industry.secondary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

const otherSteps = [
  { title: "We listen", text: "How your team works today and what slows it down." },
  { title: "We map it out", text: "A clear plan and screens you approve before anything is built." },
  { title: "We build and stay", text: "Launch, training and support as your business grows." },
];

const OtherIndustries = () => (
  <section className="bg-sand py-20 lg:py-28">
    <div className="wrap">
      <div className="grid gap-8 rounded-2xl border border-border bg-white px-6 py-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14 lg:p-12" {...reveal()}>
        <div>
          <span className="eyebrow">Don't see your industry?</span>
          <h2 className="mt-3 text-[26px] font-extrabold leading-tight text-ink md:text-[34px]">We learn how your business works first.</h2>
          <p className="mt-3 text-muted-foreground">
            Every project starts the same way, whatever the industry. If your business runs on paper, spreadsheets or
            WhatsApp, we can probably help.
          </p>
          <Link to="/contact#form" className="btn btn-primary group mt-6">
            Tell us about your business <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ol className="border-t border-border">
          {otherSteps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[44px_1fr] gap-3 border-b border-border py-4">
              <span className="font-display text-sm font-bold text-amber">0{i + 1}</span>
              <div>
                <h3 className="text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const Industries = () => {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = "Industries | ARI-GRAM Technologies";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          image={images.nairobiSkyline}
          crumb="Industries"
          eyebrow="Industries we serve"
          title="Software shaped by the industry it runs in."
          text="A contractor, a shop and a payroll office don't work the same way, so their software shouldn't either. Here's what we've learned in each and how we help."
        />
        <IndustryIndex />
        <div className="wrap">
          {industries.map((ind, i) => (
            <IndustrySection key={ind.id} industry={ind} index={i} />
          ))}
        </div>
        <OtherIndustries />
        <CtaBand
          eyebrow="Let's talk"
          title="Software that fits your industry."
          text="Tell us what your business does. We'll come back with ideas that fit how your industry really works."
        />
      </main>
      <Footer />
    </>
  );
};

export default Industries;
