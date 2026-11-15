import { ArrowRight, Check } from "lucide-react";
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
      <div className="max-w-[640px]">
        <span className="eyebrow">Our solutions</span>
        <h2 className="section-title mt-4">Systems we have built for specific industries.</h2>
        <p className="mt-4 text-[16.5px] text-muted-foreground">
          Our own products, ready to set up for your company and adjust to how you work.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
        {/* CONSTRACTOR */}
        <article className="relative flex min-h-[460px] flex-col overflow-hidden rounded-xl bg-coal p-7 text-white md:p-9 lg:row-span-2">
          <img
            src={images.construction(1200)}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="photo-overlay-even absolute inset-0" />
          <div className="relative mt-auto flex flex-col gap-4">
            <Tag dark>Construction</Tag>
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
            <a href="#contact" className="btn btn-light mt-2 self-start">
              Request a demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </article>

        {/* Retail POS */}
        <article className="relative flex min-h-[260px] flex-col overflow-hidden rounded-xl bg-coal p-7 text-white">
          <img src={images.market(900)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="photo-overlay-even absolute inset-0" />
          <div className="relative mt-auto flex flex-col gap-3">
            <Tag dark>Retail</Tag>
            <h3 className="text-[22px] font-bold">Retail POS</h3>
            <p className="text-[14.5px] text-white/80">
              Point of sale for Kenyan shops: M-Pesa and cash payments, stock tracking, receipts and daily sales
              reports.
            </p>
            <a href="#contact" className="inline-flex items-center gap-1 font-display text-sm font-bold text-white">
              Request a demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </article>

        {/* Payroll & HR */}
        <article className="flex min-h-[260px] flex-col gap-3 rounded-xl border border-border bg-white p-7">
          <Tag>HR &amp; Payroll</Tag>
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
          <a href="#contact" className="mt-auto inline-flex items-center gap-1 pt-2 font-display text-sm font-bold text-brand-blue">
            Request a demo <ArrowRight className="h-4 w-4" />
          </a>
        </article>
      </div>
    </div>
  </section>
);
