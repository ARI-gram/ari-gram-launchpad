import { ArrowUpRight } from "lucide-react";
import { reveal } from "@/lib/reveal";

/**
 * Live client websites. Screenshots live in /public/work (1200x825).
 * Jowany Electricals is held back: its domain (jowany-electricals.co.ke) no longer resolves.
 * Add it back here once it has a working address.
 */
const projects = [
  {
    title: "Time Vault Kenya",
    category: "Online store",
    description: "Watch store for Kenyan buyers, with collections, product pages and Nairobi delivery.",
    image: "/work/time-vault-kenya.jpg",
    live: "https://time-vault-kenya.netlify.app/",
  },
  {
    title: "Kiosk Kitchen",
    category: "Food ordering app",
    description: "Meal ordering with customer, admin and owner accounts, built for quick phone sign-in.",
    image: "/work/kiosk-kitchen.jpg",
    live: "https://my-meal-time.netlify.app/",
  },
  {
    title: "Duka Kenya",
    category: "Online shop",
    description: "Shop for Kenyan crafts, jewellery and coffee, with a story-led storefront.",
    image: "/work/connect-shop.jpg",
    live: "https://arigram-connect-shop.netlify.app/",
  },
];

export const PortfolioSection = () => (
  <section id="work" className="py-20 lg:py-28">
    <div className="wrap">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div {...reveal()}>
          <span className="eyebrow">Featured projects</span>
          <h2 className="section-title mt-4">Work that is live today.</h2>
        </div>
        <p className="max-w-[380px] text-muted-foreground">A selection of websites we have built for Kenyan businesses.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.title}
            {...reveal(i * 100)}
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
                className="relative h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-5">
              <small className="font-display text-[11.5px] font-bold uppercase tracking-[0.1em] text-amber">{p.category}</small>
              <h3 className="text-[17px] font-bold text-ink">{p.title}</h3>
              <p className="text-[14px] text-muted-foreground">{p.description}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand-blue">
                Visit site <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
