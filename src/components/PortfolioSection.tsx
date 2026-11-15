import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Jowany Electricals",
    category: "Business website",
    description: "Electrical supplies company: products, services and company profile.",
    image: "https://jowany-electricals.co.ke/image/product%2015.jpg",
    live: "https://jowany-electricals.co.ke/",
  },
  {
    title: "Time Vault Kenya",
    category: "Brand website",
    description: "Watch and timepiece showcase built for brand presence and customer trust.",
    image:
      "https://images.unsplash.com/photo-1558505780-e7a9d70b4bab?auto=format&fit=crop&w=800&q=70",
    live: "https://time-vault-kenya.netlify.app/",
  },
  {
    title: "My Meal Time",
    category: "Food ordering",
    description: "Restaurant menu and meal ordering, kept simple and fast.",
    image:
      "https://plus.unsplash.com/premium_photo-1745946640151-7bd1d1f93554?auto=format&fit=crop&w=800&q=70",
    live: "https://my-meal-time.netlify.app/",
  },
  {
    title: "AriGram Connect Shop",
    category: "Online shop",
    description: "Coffee and retail shop with a product catalogue.",
    image:
      "https://images.unsplash.com/photo-1556742526-795a8eac090e?auto=format&fit=crop&w=800&q=70",
    live: "https://arigram-connect-shop.netlify.app/",
  },
];

export const PortfolioSection = () => (
  <section id="work" className="py-20 lg:py-28">
    <div className="wrap">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="eyebrow">Featured projects</span>
          <h2 className="section-title mt-4">Work that is live today.</h2>
        </div>
        <p className="max-w-[380px] text-muted-foreground">A selection of websites we have built for Kenyan businesses.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-[0_14px_34px_rgba(20,24,32,0.10)]"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-sand">
              {/* Fallback shown if the image fails to load */}
              <span className="absolute inset-0 grid place-items-center p-4 text-center font-display text-lg font-extrabold text-ink/40">
                {p.title}
              </span>
              <img
                src={p.image}
                alt={`${p.title} website`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-5">
              <small className="font-display text-[11.5px] font-bold uppercase tracking-[0.1em] text-amber">{p.category}</small>
              <h3 className="text-[17px] font-bold text-ink">{p.title}</h3>
              <p className="text-[14px] text-muted-foreground">{p.description}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand-blue">
                Visit site <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
