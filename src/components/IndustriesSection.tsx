const industries = [
  { name: "Construction", text: "Materials, sites and approvals" },
  { name: "Retail", text: "Sales, stock and payments" },
  { name: "Corporate", text: "HR, payroll and administration" },
  { name: "SMEs", text: "Websites and everyday tools" },
  { name: "Professional services", text: "Clients, records and bookings" },
];

export const IndustriesSection = () => (
  <section id="industries" className="bg-sand py-20 lg:py-24">
    <div className="wrap">
      <span className="eyebrow">Industries we serve</span>
      <h2 className="section-title mt-4 max-w-[620px]">Software shaped by the industry it runs in.</h2>

      <ul className="mt-10 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <li key={ind.name} className="border-b border-ink/15 py-6 pr-6 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
            <span className="font-display text-xs font-bold text-amber">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold text-ink">{ind.name}</h3>
            <p className="mt-1 text-[14px] text-muted-foreground">{ind.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
