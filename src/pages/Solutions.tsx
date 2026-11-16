import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { StatusBadge } from "@/components/StatusBadge";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { useReveal } from "@/hooks/use-reveal";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";
import { earlyAccessReasons, products, type PreviewRow, type Product } from "@/content/solutions";

const toneClass: Record<NonNullable<PreviewRow["tone"]>, string> = {
  green: "bg-[#E3F5EA] text-[#17733F]",
  amber: "bg-[#FFF4E0] text-[#8A5A10]",
  blue: "bg-[#E8F0FA] text-brand-blue",
  plain: "bg-sand text-ink/70",
};

/** Small illustrative screen laid over each product photo. Clearly marked as a preview. */
const ProductPreview = ({ preview, flip }: { preview: Product["preview"]; flip: boolean }) => (
  <div
    role="img"
    aria-label={`Preview of ${preview.title}`}
    className={cn(
      "absolute bottom-0 w-[min(82%,380px)] overflow-hidden rounded-xl bg-white text-[12.5px] text-ink shadow-[0_24px_50px_rgba(12,16,24,0.22)]",
      flip ? "left-4" : "right-4",
    )}
  >
    <div className="flex items-center gap-1.5 border-b border-border bg-sand px-3 py-2">
      <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
      <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
      <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
      <span className="ml-1.5 flex-1 truncate text-[11px] text-muted-foreground">{preview.title}</span>
      <em className="rounded-full bg-[#FFF4E0] px-2 py-0.5 text-[10px] font-bold not-italic tracking-[0.08em] text-[#8A5A10]">PREVIEW</em>
    </div>
    {preview.kpis && (
      <div className="grid grid-cols-3 gap-2 p-3">
        {preview.kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-border px-2 py-1.5">
            <small className="block text-[10px] text-muted-foreground">{k.label}</small>
            <b className="font-display text-[14px]">{k.value}</b>
          </div>
        ))}
      </div>
    )}
    <div className={cn(preview.kpis && "border-t border-border")}>
      <div className="flex justify-between px-3 py-2 text-[10.5px] uppercase tracking-[0.06em] text-muted-foreground">
        <span>{preview.head[0]}</span>
        <span>{preview.head[1]}</span>
      </div>
      {preview.rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between gap-2.5 border-t border-border px-3 py-2">
          <span className="truncate">{r.label}</span>
          <span className={cn("whitespace-nowrap rounded-full px-2 py-px text-[10.5px] font-semibold", toneClass[r.tone ?? "plain"])}>
            {r.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Overview = () => (
  <section className="pb-6 pt-20 lg:pt-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">Three products in progress</span>
        <h2 className="section-title mt-4 max-w-[680px]">Each one starts from a real problem we've seen in Kenyan businesses.</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {products.map((p, i) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            {...reveal(i * 110)}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-[0_14px_34px_rgba(20,24,32,0.10)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image(700)}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <StatusBadge status={p.status} className="absolute left-3.5 top-3.5" />
            </div>
            <div className="flex flex-1 flex-col gap-1 px-5 pb-5 pt-4">
              <h3 className="text-[21px] font-extrabold text-ink">{p.name}</h3>
              <p className="text-[14.5px] text-muted-foreground">{p.short}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-2.5 font-display text-sm font-bold text-brand-blue">
                See details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const ProductSection = ({ product, index }: { product: Product; index: number }) => {
  const flip = index % 2 === 1;
  return (
    <section
      id={product.id}
      className="grid scroll-mt-4 items-center gap-10 border-b border-border py-16 last:border-b-0 lg:grid-cols-[1.05fr_1fr] lg:gap-[72px] lg:py-[104px]"
    >
      <div className={cn("relative pb-14", flip && "lg:order-2")} {...reveal(0)}>
        <img
          src={product.image(1100)}
          srcSet={`${product.image(700)} 700w, ${product.image(1100)} 1100w`}
          sizes="(min-width: 1024px) 560px, 100vw"
          alt={product.imageAlt}
          loading="lazy"
          className="aspect-[5/4] w-full rounded-2xl object-cover"
        />
        <ProductPreview preview={product.preview} flip={flip} />
      </div>

      <div {...reveal(120)}>
        <StatusBadge status={product.status} />
        <h2 className="mt-3.5 text-[30px] font-extrabold text-ink md:text-[40px]">{product.name}</h2>
        <p className="mt-2 font-display text-sm font-bold text-amber">{product.audience}</p>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink/80">{product.intro}</p>
        <p className="mt-5 rounded-lg border-l-[3px] border-ink bg-sand px-4 py-3.5 text-[14.5px] text-ink/80">
          <b className="font-display text-ink">The problem:</b> {product.problem}
        </p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 sm:gap-x-6">
          {product.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-[14.5px] text-ink/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" /> {f}
            </li>
          ))}
        </ul>
        {product.note && (
          <p className="mt-4 rounded-md border border-[#F2D9A8] bg-[#FFF6E6] px-3 py-2 text-[13px] text-[#8A5A10]">{product.note}</p>
        )}
        <a href="#early-access" className="btn btn-primary group mt-7">
          Join early access <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

const WhyEarly = () => (
  <section className="bg-sand py-20 lg:py-28">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">Why join early</span>
        <h2 className="section-title mt-4 max-w-[640px]">Help shape software you'll actually use.</h2>
      </div>
      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {earlyAccessReasons.map((r, i) => (
          <li key={r.title} className="bg-white p-7" {...reveal(i * 110)}>
            <span className="font-display text-[13px] font-extrabold text-amber">0{i + 1}</span>
            <h3 className="mt-2.5 text-lg font-bold text-ink">{r.title}</h3>
            <p className="mt-1.5 text-[14.5px] text-muted-foreground">{r.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const EarlyAccess = () => (
  <section id="early-access" className="scroll-mt-4 py-20 lg:py-28">
    <div className="wrap">
      <div className="grid overflow-hidden rounded-2xl border border-border bg-white lg:grid-cols-[1fr_1.15fr]" {...reveal()}>
        <div className="flex flex-col bg-coal text-white">
          <img src={images.stallPhone(1000)} alt="" loading="lazy" className="h-60 w-full object-cover lg:h-auto lg:min-h-[260px] lg:flex-1" />
          <div className="p-7 md:px-9 md:pb-9 md:pt-8">
            <span className="eyebrow">Early access</span>
            <h2 className="mt-3 text-[28px] font-extrabold md:text-[34px]">Be first to try our products.</h2>
            <p className="mt-3 text-white/80">
              Leave your details and the products you're interested in. We'll contact you when there's something ready to
              try. No commitment.
            </p>
          </div>
        </div>
        <EarlyAccessForm />
      </div>

      <div className="mt-14 flex flex-col items-start gap-5 border-t border-border pt-10 md:flex-row md:items-center md:justify-between" {...reveal()}>
        <div>
          <h3 className="text-[22px] font-bold text-ink">Need a system now?</h3>
          <p className="mt-1 text-muted-foreground">We can build one around your business today as a custom project.</p>
        </div>
        <Link to="/services#systems" className="btn btn-primary group">
          See our services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

const Solutions = () => {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = "Solutions | ARI-GRAM Technologies";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          image={images.officeMeeting}
          crumb="Solutions"
          eyebrow="Our solutions"
          title="Software built for how Kenyan industries actually work."
          text="Alongside client projects, ARI-GRAM is building its own products for construction, payroll and retail. They're in development now, and early partners get to try them first and shape what they become."
        />
        <Overview />
        <div className="wrap">
          {products.map((p, i) => (
            <ProductSection key={p.id} product={p} index={i} />
          ))}
        </div>
        <WhyEarly />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
};

export default Solutions;
