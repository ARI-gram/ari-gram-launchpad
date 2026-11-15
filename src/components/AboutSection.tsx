import { images } from "@/lib/images";

const points = [
  {
    title: "Built around real operations",
    text: "We study the workflow before writing code, so the system fits the business, not the other way round.",
  },
  {
    title: "Made for the Kenyan market",
    text: "M-Pesa payments, KRA requirements, PAYE, NSSF and SHIF built in where they apply.",
  },
  {
    title: "We stay after launch",
    text: "Training, maintenance and improvements once your team is using the system day to day.",
  },
];

export const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
      <div className="relative">
        <img
          src={images.aboutTeam(1000)}
          srcSet={`${images.aboutTeam(600)} 600w, ${images.aboutTeam(1000)} 1000w`}
          sizes="(min-width: 1024px) 560px, 100vw"
          alt="A small team reviewing work together on a laptop"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl object-cover lg:aspect-[4/5]"
        />
        <div className="absolute -bottom-5 left-5 right-5 rounded-lg bg-white px-5 py-4 shadow-[0_12px_30px_rgba(20,24,32,0.12)] sm:right-auto">
          <p className="font-display text-sm font-bold text-ink">Software · Web · Systems · Support</p>
          <p className="text-[13px] text-muted-foreground">One team from first idea to everyday use</p>
        </div>
      </div>

      <div className="pt-6 lg:pt-0">
        <span className="eyebrow">Who we are</span>
        <h2 className="section-title mt-4">A software company that learns how your business works first.</h2>
        <p className="mt-5 text-[16.5px] leading-relaxed text-ink/75">
          ARI-GRAM Technologies builds business software and digital platforms for companies in Kenya and beyond.
          We start with the way your team already works (the stock sheets, the payroll spreadsheet, the order book)
          and turn it into a system that is faster and easier to trust.
        </p>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink/75">
          Websites, branding and support are part of what we do, but our focus is the software that runs the business
          behind them.
        </p>

        <ol className="mt-8 divide-y divide-border border-y border-border">
          {points.map((p, i) => (
            <li key={p.title} className="grid grid-cols-[44px_1fr] gap-3 py-5">
              <span className="font-display text-sm font-bold text-amber">0{i + 1}</span>
              <div>
                <h3 className="text-[17px] font-bold text-ink">{p.title}</h3>
                <p className="mt-1 text-[14.5px] text-muted-foreground">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
