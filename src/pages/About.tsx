import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { useReveal } from "@/hooks/use-reveal";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";
import { founder, milestones } from "@/content/about";

const values = [
  { title: "Understand first", text: "We learn your workflow before we suggest anything. No templates forced onto your business." },
  { title: "Honest advice", text: "Clear quotes, realistic timelines, and we'll tell you when you don't need something." },
  { title: "Built to last", text: "Clean, maintainable software that keeps working as your business grows." },
  { title: "Here after launch", text: "Training, support and improvements. We don't disappear after handover." },
];

const ways = [
  {
    tag: "Client projects",
    title: "Custom software & websites",
    text: "We design and build around your exact needs, from a company website to a full internal system.",
    points: ["Discovery and planning with your team", "Design you approve before we build", "Launch, training and ongoing support"],
    image: images.aboutTeam(900),
    link: { to: "/#services", label: "See our services" },
  },
  {
    tag: "Our products",
    title: "Ready business systems",
    text: "Systems we've already built for specific industries, set up and adjusted for your company.",
    points: ["CONSTRACTOR for construction", "Retail POS with M-Pesa", "Payroll & HR with Kenyan statutory deductions"],
    image: images.construction(900),
    link: { to: "/#solutions", label: "Explore our solutions" },
  },
];

const facts = [
  { value: "3", text: "Business systems built: CONSTRACTOR, Retail POS, Payroll & HR" },
  { value: "4", accent: "+", text: "Client websites live today" },
  { value: "5", text: "Industries served, from construction to retail" },
  { value: "1", text: "Team from first idea to everyday support" },
];

const PageHero = () => (
  <section className="relative overflow-hidden bg-coal text-white">
    <img
      src={images.officeLaptops(1920)}
      srcSet={`${images.officeLaptops(900)} 900w, ${images.officeLaptops(1920)} 1920w`}
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
          About us
        </span>
      </nav>
      <span className="eyebrow anim-rise mt-6" style={{ "--d": "100ms" } as React.CSSProperties}>
        About ARI-GRAM
      </span>
      <h1
        className="anim-rise mt-5 max-w-[760px] text-[38px] font-extrabold leading-[1.08] md:text-[56px]"
        style={{ "--d": "220ms" } as React.CSSProperties}
      >
        We build the software Kenyan businesses run on.
      </h1>
      <p
        className="anim-rise mt-5 max-w-[600px] text-[17.5px] leading-relaxed text-white/75"
        style={{ "--d": "380ms" } as React.CSSProperties}
      >
        A technology company focused on one thing: helping businesses operate better, manage their work and grow, with
        software that fits how they actually work.
      </p>
    </div>
  </section>
);

const Story = () => (
  <section className="py-20 lg:py-28">
    <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-[72px]">
      <div {...reveal()}>
        <span className="eyebrow">Our story</span>
        <h2 className="section-title mt-4">From websites to the systems behind the business.</h2>
        <p className="mt-5 text-[16.5px] leading-relaxed text-ink/75">
          ARI-GRAM started by building websites for local businesses. Working closely with those owners, we kept seeing
          the same thing: the real problems weren't on the website. They were in the stock book, the payroll
          spreadsheet, the purchase orders waiting for a signature.
        </p>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink/75">
          So we started building the systems for that too. Today ARI-GRAM designs and supports business software (point
          of sale, payroll and HR, construction materials management) alongside the websites and brand work our clients
          still rely on us for.
        </p>

        <ol className="mt-10 border-t border-border">
          {milestones.map((m, i) => (
            <li key={m.title} className="grid grid-cols-[80px_1fr] gap-4 border-b border-border py-5" {...reveal(150 + i * 120)}>
              <span className="font-display text-sm font-bold text-amber">{m.label}</span>
              <div>
                <h3 className="text-[16.5px] font-bold text-ink">{m.title}</h3>
                <p className="mt-1 text-[14.5px] text-muted-foreground">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative">
        <img
          {...reveal(0, "zoom")}
          src={images.storyTeam(1000)}
          srcSet={`${images.storyTeam(600)} 600w, ${images.storyTeam(1000)} 1000w`}
          sizes="(min-width: 1024px) 520px, 100vw"
          alt="Colleagues discussing work together around a laptop"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl object-cover lg:aspect-[5/6]"
        />
        <figure
          {...reveal(450)}
          className="absolute -bottom-7 left-5 right-5 rounded-lg border-l-[3px] border-amber bg-white px-6 py-5 shadow-[0_14px_34px_rgba(20,24,32,0.12)] sm:right-auto sm:max-w-[380px]"
        >
          <blockquote className="font-display text-base font-bold leading-snug text-ink">
            “Understand the business first. Then build the software.”
          </blockquote>
          <figcaption className="mt-2 text-[13px] text-muted-foreground">The principle behind every ARI-GRAM project</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const MissionVision = () => (
  <section className="bg-sand py-20 lg:py-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">Why we exist</span>
        <h2 className="section-title mt-4 max-w-[640px]">Practical technology for businesses that are growing.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <article className="relative overflow-hidden rounded-xl bg-coal p-8 text-white md:p-9" {...reveal(0)}>
          <img src={images.nairobi(1000)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="relative">
            <small className="font-display text-xs font-bold uppercase tracking-[0.14em] text-amber">Our mission</small>
            <h3 className="mt-3 text-2xl font-extrabold leading-snug">
              To help businesses operate better, manage their work and grow through software that fits them.
            </h3>
            <p className="mt-4 text-white/75">
              We do it by learning how a business runs before we build, and staying with our clients after launch.
            </p>
          </div>
        </article>
        <article className="rounded-xl border border-border bg-white p-8 md:p-9" {...reveal(140)}>
          <small className="font-display text-xs font-bold uppercase tracking-[0.14em] text-amber">Our vision</small>
          <h3 className="mt-3 text-2xl font-extrabold leading-snug text-ink">A Kenya where every growing business runs on systems it can trust.</h3>
          <p className="mt-4 text-muted-foreground">
            Where a shop, a contractor or an office of twenty people has the same quality of tools as a large company, at a
            cost that makes sense.
          </p>
        </article>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="py-20 lg:py-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">What we stand for</span>
        <h2 className="section-title mt-4 max-w-[640px]">How we work with every client.</h2>
      </div>
      <ol className="mt-12 grid border-t-2 border-ink md:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <li
            key={v.title}
            {...reveal(i * 110)}
            className="border-b border-border py-7 pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
          >
            <span className="font-display text-[34px] font-extrabold leading-none text-ink/[0.12]">0{i + 1}</span>
            <h3 className="mt-3.5 text-lg font-bold text-ink">{v.title}</h3>
            <p className="mt-1.5 text-[14.5px] text-muted-foreground">{v.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const TwoWays = () => (
  <section className="bg-sand py-20 lg:py-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">How we can help</span>
        <h2 className="section-title mt-4 max-w-[640px]">Two ways to work with ARI-GRAM.</h2>
        <p className="mt-4 max-w-[600px] text-[16.5px] text-muted-foreground">
          Start with one of our ready systems, or have us build something new around your business.
        </p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {ways.map((w, i) => (
          <article key={w.title} {...reveal(i * 140)} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white">
            <div className="relative h-[190px] overflow-hidden">
              <img src={w.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-[0.08em] text-ink">
                {w.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-7">
              <h3 className="text-[22px] font-bold text-ink">{w.title}</h3>
              <p className="text-muted-foreground">{w.text}</p>
              <ul className="mt-1 space-y-2 text-[14.5px] text-ink/85">
                {w.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" /> {p}
                  </li>
                ))}
              </ul>
              <Link to={w.link.to} className="mt-auto inline-flex items-center gap-1 pt-3 font-display text-sm font-bold text-brand-blue">
                {w.link.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const BuiltSoFar = () => (
  <section className="py-20 lg:py-28">
    <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-[72px]">
      <div {...reveal()}>
        <span className="eyebrow">Built so far</span>
        <h2 className="section-title mt-4">Real work, not promises.</h2>
        <p className="mt-4 text-[16.5px] text-muted-foreground">
          We'd rather show you what we've built than talk about how big we are. Every number here is something you can
          see.
        </p>
        <Link to="/#work" className="btn btn-primary group mt-7">
          View our work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <dl className="grid grid-cols-2 border-l border-t border-border">
        {facts.map((f, i) => (
          <div key={f.text} {...reveal(i * 100)} className="border-b border-r border-border bg-white px-5 py-6 md:px-6">
            <dt className="sr-only">{f.text}</dt>
            <dd className="font-display text-[40px] font-extrabold leading-none tracking-tight text-ink">
              {f.value}
              {f.accent && <span className="text-amber">{f.accent}</span>}
            </dd>
            <dd className="mt-2.5 text-sm text-muted-foreground" aria-hidden="true">
              {f.text}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const Founder = () => {
  if (!founder.name) return null;
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="wrap">
        <div {...reveal()}>
          <span className="eyebrow">The people behind it</span>
          <h2 className="section-title mb-10 mt-4 max-w-[640px]">Led by a builder, not a salesperson.</h2>
        </div>
        <div {...reveal(120)} className="grid items-center gap-8 rounded-2xl border border-border bg-white p-6 md:grid-cols-[260px_1fr] md:gap-10 md:p-8">
          {founder.photo && (
            <img src={founder.photo} alt={founder.name} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover" />
          )}
          <div>
            <h3 className="text-[26px] font-extrabold text-ink">{founder.name}</h3>
            <p className="mt-1.5 font-display text-sm font-bold text-amber">{founder.role}</p>
            {founder.bio.map((b) => (
              <p key={b} className="mt-4 text-ink/80">
                {b}
              </p>
            ))}
            <p className="mt-4 text-ink/80">
              Every project is led directly by the founder, so you speak to the person who designs and builds your system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = "About Us | ARI-GRAM Technologies";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <PageHero />
        <Story />
        <MissionVision />
        <Values />
        <TwoWays />
        <BuiltSoFar />
        <Founder />
        <CtaBand
          eyebrow="Work with us"
          title="Let's talk about how your business runs."
          text="Tell us what's slowing you down. We'll come back with honest advice and a clear plan."
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
