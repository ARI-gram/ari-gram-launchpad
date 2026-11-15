import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { ProjectCard } from "@/components/ProjectCard";
import { useReveal } from "@/hooks/use-reveal";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";
import { featuredProject, projects, workStats, type ProjectType } from "@/content/work";
import { products } from "@/content/solutions";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const WorkHero = () => {
  const stats = [
    { value: workStats.live, label: "Live projects" },
    { value: workStats.stores, label: "Online stores" },
    { value: workStats.apps, label: "Web apps" },
    { value: workStats.industries, label: "Industries" },
  ];
  return (
    <section className="relative overflow-hidden bg-coal text-white">
      <img
        src={images.devPair(1920)}
        srcSet={`${images.devPair(900)} 900w, ${images.devPair(1600)} 1600w`}
        sizes="100vw"
        alt=""
        className="anim-settle absolute inset-0 h-full w-full object-cover"
      />
      <div className="photo-overlay absolute inset-0" />
      <div className="wrap relative pb-20 pt-16 md:pb-24 md:pt-20">
        <nav aria-label="Breadcrumb" className="anim-rise text-[13px] text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white" aria-current="page">
            Our Work
          </span>
        </nav>
        <span className="eyebrow anim-rise mt-6" style={d(100)}>
          Our work
        </span>
        <h1 className="anim-rise mt-5 max-w-[760px] text-[38px] font-extrabold leading-[1.08] md:text-[56px]" style={d(220)}>
          Websites and apps that are live today.
        </h1>
        <p className="anim-rise mt-5 max-w-[600px] text-[17.5px] leading-relaxed text-white/75" style={d(380)}>
          Every project here is running right now. Click through, try them on your phone, and see the kind of work we'd do
          for you.
        </p>
        <dl className="anim-rise mt-9 grid max-w-[640px] grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/[0.14] md:grid-cols-4" style={d(520)}>
          {stats.map((s) => (
            <div key={s.label} className="bg-coal/55 px-4 py-4">
              <dd className="font-display text-[28px] font-extrabold leading-none">{s.value}</dd>
              <dt className="mt-1.5 text-[13px] text-white/70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

const Featured = () => (
  <section className="py-20 lg:py-28">
    <div className="wrap grid items-center gap-9 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <a
        href={featuredProject.live}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl border border-border bg-white shadow-[0_30px_60px_rgba(12,16,24,0.14)]"
        {...reveal(0, "zoom")}
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-sand px-3 py-2.5">
          <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
          <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
          <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
          <span className="ml-2.5 flex-1 truncate rounded-md border border-border bg-white px-2.5 py-0.5 text-xs text-muted-foreground">
            {featuredProject.domain}
          </span>
        </div>
        <img
          src={featuredProject.image}
          alt={`${featuredProject.title} website`}
          className="aspect-[16/11] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </a>
      <div {...reveal(120)}>
        <span className="eyebrow">Featured project</span>
        <h2 className="mt-3 text-[30px] font-extrabold text-ink md:text-[40px]">{featuredProject.title}</h2>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {featuredProject.tags.map((t) => (
            <span key={t} className="rounded-full bg-sand px-3 py-1 text-[12.5px] font-semibold text-ink/75">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink/80">{featuredProject.intro}</p>
        <ul className="mt-5 border-t border-border">
          {featuredProject.built.map((b) => (
            <li key={b} className="flex gap-2.5 border-b border-border py-3 text-[14.5px] text-ink/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" /> {b}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary group">
            Visit the site <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <Link to="/#quote" className="btn border border-border bg-white text-ink hover:border-ink/40">
            Start a project like this
          </Link>
        </div>
      </div>
    </div>
  </section>
);

type Filter = "All" | ProjectType;
const filterOrder: ProjectType[] = ["Online store", "Business website", "Web app"];
const plural: Record<ProjectType, string> = { "Online store": "Online stores", "Business website": "Business websites", "Web app": "Web apps" };

const AllProjects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.type === filter)), [filter]);
  const count = (f: Filter) => (f === "All" ? projects.length : projects.filter((p) => p.type === f).length);

  return (
    <section className="bg-sand py-20 lg:py-24">
      <div className="wrap">
        <div {...reveal()}>
          <span className="eyebrow">All projects</span>
          <h2 className="section-title mt-4 max-w-[640px]">More work across Kenyan businesses.</h2>
        </div>

        <div role="group" aria-label="Filter projects" className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(["All", ...filterOrder] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                filter === f ? "border-ink bg-ink text-white" : "border-border bg-white text-ink/75 hover:border-ink/40 hover:text-ink",
              )}
            >
              {f === "All" ? "All" : plural[f]} <span className="ml-0.5 opacity-60">{count(f)}</span>
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {shown.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              type={p.type}
              industry={p.industry}
              description={p.description}
              image={p.image}
              live={p.live}
              className="card-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const OwnProducts = () => (
  <section className="py-20 lg:py-24">
    <div className="wrap">
      <div className="grid gap-7 rounded-2xl bg-coal px-7 py-9 text-white lg:grid-cols-[1fr_1.4fr] lg:items-center lg:p-12" {...reveal()}>
        <div>
          <span className="eyebrow">Also in progress</span>
          <h2 className="mt-3 text-[26px] font-extrabold md:text-[32px]">Our own products.</h2>
          <p className="mt-2.5 text-white/75">Alongside client work, we're building industry systems. Join early access to try them first.</p>
          <Link to="/solutions" className="btn btn-light group mt-6">
            See our solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-3">
          {products.map((p) => (
            <li key={p.id}>
              <Link
                to={`/solutions#${p.id}`}
                className="block rounded-xl border border-white/[0.14] bg-white/[0.04] p-4 transition-colors hover:border-white/30"
              >
                <b className="block font-display text-base">{p.name}</b>
                <span
                  className={cn(
                    "mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.05em]",
                    p.status === "Coming soon" ? "bg-white/10 text-white/75" : "bg-amber/20 text-[#F2C27A]",
                  )}
                >
                  {p.status}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Work = () => {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = "Our Work | ARI-GRAM Technologies";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <WorkHero />
        <Featured />
        <AllProjects />
        <OwnProducts />
        <CtaBand
          eyebrow="Your project next"
          title="Let's build something you'll be proud to show."
          text="Tell us about your business. We'll show you what we'd build and what it would cost."
        />
      </main>
      <Footer />
    </>
  );
};

export default Work;
