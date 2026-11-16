import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { images } from "@/lib/images";
import { CountUp } from "./CountUp";
import type { CSSProperties } from "react";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const facts = ["Built in Kenya", "Made for Kenyan businesses", "Support after launch"];

const DashboardPreview = () => (
  <div
    className="overflow-hidden rounded-xl bg-white text-[12px] text-ink shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
    aria-label="Example of an ARI-GRAM point-of-sale dashboard"
    role="img"
  >
    <div className="flex items-center gap-1.5 border-b border-border bg-sand px-3 py-2.5">
      <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
      <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
      <i className="h-2 w-2 rounded-full bg-[#D6D3CB]" />
      <span className="ml-2 text-[11px] text-muted-foreground">Example dashboard · Preview</span>
    </div>
    <div className="grid grid-cols-[112px_1fr]">
      <div className="flex flex-col gap-1 bg-coal px-2.5 py-3.5 text-white/60">
        <b className="mb-2 pl-1.5 font-display text-white">POS</b>
        {["Dashboard", "Sales", "Inventory", "Customers", "Reports"].map((s, i) => (
          <span key={s} className={i === 0 ? "rounded-md bg-white/10 p-1.5 text-white" : "p-1.5"}>
            {s}
          </span>
        ))}
      </div>
      <div className="grid content-start gap-3 p-3.5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "Today's sales", to: 48250, prefix: "KES " },
            { k: "Transactions", to: 126 },
            { k: "Low stock", to: 7, suffix: " items" },
          ].map(({ k, to, prefix, suffix }) => (
            <div key={k} className="rounded-lg border border-border px-2.5 py-2">
              <small className="text-[10.5px] text-muted-foreground">{k}</small>
              <b className="block font-display text-[15px] tabular-nums text-ink">
                <CountUp to={to} prefix={prefix} suffix={suffix} delay={900} />
              </b>
            </div>
          ))}
        </div>
        <div className="flex h-[88px] items-end gap-1.5 rounded-lg border border-border p-2.5">
          {[35, 52, 44, 68, 58, 80, 92].map((h, i) => (
            <i
              key={i}
              className={i === 6 ? "anim-grow flex-1 rounded-t bg-brand-blue" : "anim-grow flex-1 rounded-t bg-[#DCE6F2]"}
              style={{ height: `${h}%`, ...d(900 + i * 90) }}
            />
          ))}
        </div>
        <div className="rounded-lg border border-border">
          {[
            ["#10482 · KES 1,450", "M-Pesa"],
            ["#10481 · KES 820", "Cash"],
            ["#10480 · KES 3,200", "M-Pesa"],
          ].map(([r, p]) => (
            <div key={r} className="flex justify-between border-t border-border px-2.5 py-1.5 first:border-0">
              <span>{r}</span>
              <span
                className={
                  p === "M-Pesa"
                    ? "rounded-full bg-[#E3F5EA] px-2 text-[10px] font-semibold text-[#17733F]"
                    : "rounded-full bg-sand px-2 text-[10px] font-semibold text-ink/70"
                }
              >
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const HeroSection = () => (
  <section id="top" className="relative overflow-hidden bg-coal text-white">
    <img
      src={images.heroTeam(1920)}
      srcSet={`${images.heroTeam(900)} 900w, ${images.heroTeam(1400)} 1400w, ${images.heroTeam(1920)} 1920w`}
      sizes="100vw"
      alt=""
      className="anim-settle absolute inset-0 h-full w-full object-cover"
      {...{ fetchpriority: "high" }}
    />
    <div className="photo-overlay absolute inset-0" />

    <div className="wrap relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
      <div>
        <span className="eyebrow anim-rise" style={d(100)}>Business Technology &amp; Software Solutions</span>
        <h1 className="anim-rise mt-5 text-[38px] font-extrabold leading-[1.08] md:text-[56px]" style={d(220)}>
          Technology that moves businesses forward.
        </h1>
        <p style={d(380)} className="anim-rise mt-5 max-w-[540px] text-[17px] leading-relaxed text-white/75">
          We design, build and support software for how your business actually runs: point of sale, inventory,
          payroll, construction materials, and the websites your customers find you on.
        </p>
        <div className="anim-rise mt-8 flex flex-wrap gap-3" style={d(520)}>
          <a href="#services" className="btn btn-light group">
            Explore our services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link to="/contact" className="btn btn-ghost-light">
            Talk to our team
          </Link>
        </div>
        <ul style={d(660)} className="anim-rise mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          {facts.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-amber" /> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="anim-rise hidden md:block" style={d(500)}>
        <div className="anim-float">
          <DashboardPreview />
        </div>
      </div>
    </div>
  </section>
);
