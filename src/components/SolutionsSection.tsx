import { ArrowRight, Check } from "lucide-react";
import { reveal } from "@/lib/reveal";
import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const Tag = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <span
    className={
      dark
        ? "self-start rounded-full border border-white/25 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-white/85"
        : "self-start rounded-full border border-border px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ink/70"
    }
  >
    {children}
  </span>
);

export const SolutionsSection = () => (
  <section id="solutions" className="py-20 lg:py-28">
    <div className="wrap">
      <div className="max-w-[640px]" {...reveal()}>
        <span className="eyebrow">Our solutions</span>
        <h2 className="section-title mt-4">Products we are building for specific industries.</h2>
        <p className="mt-4 text-[16.5px] text-muted-foreground">
          Our own systems for construction, retail and payroll are in development. Join early access to try them first and help shape them.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
        {/* CONSTRACTOR */}
        <article className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-xl bg-coal p-7 text-white md:p-9 lg:row-span-2" {...reveal(0)}>
          <img
            src={images.construction(1200)}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          <div className="photo-overlay-even absolute inset-0" />
          <div className="relative mt-auto flex flex-col gap-4">
            <Tag dark>Construction · In development</Tag>
            <h3 className="text-[30px] font-extrabold">CONSTRACTOR</h3>
            <p className="max-w-[520px] text-white/80">
              Construction materials management: purchase orders, deliveries between sites, store requests and
              approvals, all in one place and usable on a phone at the site.
            </p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-white/85 sm:grid-cols-2">
              {["LPOs & approvals", "Site-to-site deliveries", "Store requests", "Printable documents"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/solutions#constractor" className="btn btn-light mt-2 self-start">
              See details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>

        {/* Retail POS */}
        <article className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-xl bg-coal p-7 text-white" {...reveal(140)}>
          <img src={images.market(900)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
          <div className="photo-overlay-even absolute inset-0" />
          <div className="relative mt-auto flex flex-col gap-3">
            <Tag dark>Retail · Coming soon</Tag>
            <h3 className="text-[22px] font-bold">Retail POS</h3>
            <p className="text-[14.5px] text-white/80">
              Point of sale for Kenyan shops: M-Pesa and cash payments, stock tracking, receipts and daily sales
              reports.
            </p>
            <Link to="/solutions#pos" className="inline-flex items-center gap-1 font-display text-sm font-bold text-white">
              See details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>

        {/* Payroll & HR */}
        <article className="group flex min-h-[260px] flex-col gap-3 rounded-xl border border-border bg-white p-7 transition-shadow hover:shadow-[0_14px_34px_rgba(20,24,32,0.08)]" {...reveal(280)}>
          <Tag>HR &amp; Payroll · In development</Tag>
          <h3 className="mt-1 text-[22px] font-bold text-ink">Payroll &amp; HR</h3>
          <p className="text-[14.5px] text-muted-foreground">
            Staff records and monthly payroll with PAYE, NSSF, SHIF and Housing Levy worked out for you, plus
            payslips.
          </p>
          <div className="mt-2 grid grid-cols-4 gap-2 text-center text-[12px]">
            {["PAYE", "NSSF", "SHIF", "Housing Levy"].map((d) => (
              <span key={d} className="rounded-md bg-sand px-1 py-2 font-semibold text-ink/75">
                {d}
              </span>
            ))}
          </div>
          <Link to="/solutions#payroll" className="mt-auto inline-flex items-center gap-1 pt-2 font-display text-sm font-bold text-brand-blue">
            See details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </article>
      </div>
    </div>
  </section>
);
