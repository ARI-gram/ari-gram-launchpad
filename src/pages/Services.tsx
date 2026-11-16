import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";
import { faqs, projectSteps, services, supportItems, type Service } from "@/content/services";

const jumpLinks = [
  ...services.map((s) => ({ id: s.id, label: s.name })),
  { id: "support", label: "Support" },
  { id: "faq", label: "FAQ" },
];

/** Sticky row of links to each section; highlights the section currently on screen. */
const JumpNav = () => {
  const [active, setActive] = useState(jumpLinks[0].id);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = jumpLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Keep the active pill visible in the sideways-scrolling bar on phones.
  useEffect(() => {
    const bar = barRef.current;
    const pill = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (bar && pill) {
      bar.scrollTo({ left: pill.offsetLeft - bar.clientWidth / 2 + pill.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav aria-label="Services on this page" className="sticky top-[68px] z-40 border-b border-border bg-white/95 backdrop-blur">
      <div ref={barRef} className="wrap flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {jumpLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            data-id={l.id}
            aria-current={active === l.id ? "true" : undefined}
            className={cn(
              "whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
              active === l.id ? "border-ink bg-ink text-white" : "border-border text-ink/75 hover:border-ink/40 hover:text-ink",
            )}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

const ServiceBlock = ({ service, index }: { service: Service; index: number }) => {
  const flip = index % 2 === 1;
  return (
    <section
      id={service.id}
      className="grid scroll-mt-16 items-center gap-10 border-b border-border py-16 last:border-b-0 lg:grid-cols-2 lg:gap-[72px] lg:py-24"
    >
      <div className={cn("group relative overflow-hidden rounded-xl", flip && "lg:order-2")} {...reveal(0, "zoom")}>
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 font-display text-[13px] font-extrabold text-ink">
          0{index + 1}
        </span>
      </div>

      <div {...reveal(120)}>
        <span className="eyebrow">{service.name}</span>
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.12] text-ink md:text-[36px]">{service.title}</h2>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink/75">{service.intro}</p>

        <dl className="mt-7 grid border-t border-border sm:grid-cols-2 sm:gap-x-7">
          {service.offers.map((o) => (
            <div key={o.title} className="border-b border-border py-3.5">
              <dt className="font-display text-[15.5px] font-bold text-ink">{o.title}</dt>
              <dd className="mt-0.5 text-sm text-muted-foreground">{o.text}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-[14.5px] text-muted-foreground">
          <b className="font-semibold text-ink">Good for:</b> {service.goodFor}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link to="/contact#form" className="btn btn-primary group">
            {service.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {service.secondary && (
            <Link to={service.secondary.to} className="group inline-flex items-center gap-1 font-display text-sm font-bold text-brand-blue">
              {service.secondary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

const Support = () => (
  <section id="support" className="scroll-mt-16 bg-sand py-20 lg:py-28">
    <div className="wrap">
      <div className="relative overflow-hidden rounded-2xl bg-coal text-white" {...reveal()}>
        <img src={images.supportDesk(1600)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" />
        <div className="relative grid gap-8 px-6 py-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14 lg:p-14">
          <div>
            <span className="eyebrow">Support &amp; maintenance</span>
            <h2 className="mt-3.5 text-[28px] font-extrabold md:text-[36px]">We stay after launch.</h2>
            <p className="mt-3.5 text-white/75">
              Every website and system we build can come with ongoing support, so you always have someone to call when
              something needs fixing or changing.
            </p>
            <Link to="/contact#form" className="btn btn-light group mt-7">
              Ask about support <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/[0.12] sm:grid-cols-2">
            {supportItems.map((s) => (
              <li key={s.title} className="bg-coal/80 p-5">
                <h3 className="text-[15.5px] font-bold">{s.title}</h3>
                <p className="mt-1 text-[13.5px] text-white/65">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ProjectSteps = () => (
  <section className="py-20 lg:py-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">How a project runs</span>
        <h2 className="section-title mt-4 max-w-[640px]">Clear steps, and you always know what's next.</h2>
      </div>
      <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
        {projectSteps.map((s, i) => (
          <li
            key={s.title}
            {...reveal(i * 180, "line")}
            className={cn(
              "flex flex-col border-t-2 pt-5",
              i === projectSteps.length - 1 ? "border-amber/20 text-amber" : "border-ink/10 text-ink",
            )}
          >
            <span className="font-display text-xs font-bold tracking-[0.1em] text-muted-foreground">STEP 0{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-[14.5px] text-muted-foreground">{s.text}</p>
            <p className="mt-auto pt-3 text-[13px] text-ink">
              <span className="block rounded-lg bg-sand px-2.5 py-2">
                <b className="font-bold text-amber">You get:</b> {s.get}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Faq = () => (
  <section id="faq" className="scroll-mt-16 bg-sand py-20 lg:py-28">
    <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-[72px]">
      <div {...reveal()}>
        <span className="eyebrow">Questions</span>
        <h2 className="section-title mt-4">Things clients usually ask.</h2>
        <p className="mt-4 text-[16.5px] text-muted-foreground">
          Something else on your mind?{" "}
          <a href="https://wa.me/254726875878" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
            Message us on WhatsApp
          </a>{" "}
          and we'll answer directly.
        </p>
      </div>
      <div {...reveal(120)}>
        <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-[17px] font-bold text-ink hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-amber">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

const Services = () => {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = "Services | ARI-GRAM Technologies";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          image={images.codeScreen}
          crumb="Services"
          eyebrow="Our services"
          title="Software, websites and support under one roof."
          text="From the system that runs your operations to the website your customers see, ARI-GRAM designs it, builds it and stays to support it."
        />
        <JumpNav />
        <div className="wrap">
          {services.map((s, i) => (
            <ServiceBlock key={s.id} service={s} index={i} />
          ))}
        </div>
        <Support />
        <ProjectSteps />
        <Faq />
        <CtaBand
          eyebrow="Get started"
          title="Not sure which service you need?"
          text="Tell us what's going on in your business. We'll recommend what will actually help, even if it's something small."
        />
      </main>
      <Footer />
    </>
  );
};

export default Services;
