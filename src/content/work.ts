/**
 * Live projects shown on /work and the homepage.
 * Screenshots live in /public/work (1200x825, taken from the live sites).
 * Not listed on purpose: m-pesasims (owner's request) and Jowany Electricals (domain no longer resolves).
 */
export type ProjectType = "Online store" | "Business website" | "Web app";

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  industry: string;
  description: string;
  image: string;
  live: string;
  /** Shown on the homepage "Featured projects" strip. */
  onHomepage?: boolean;
};

export const featuredProject = {
  title: "Irrismart Suppliers",
  tags: ["Business website & catalogue", "Building & agriculture supplies"],
  intro:
    "One supplier for homes, farms, businesses and contractors across Kenya. The site brings four departments (irrigation, plumbing, electricals and building supplies) into one catalogue customers can browse from their phone.",
  built: [
    "Product catalogue across four departments",
    "Quote list customers build and send by WhatsApp",
    "Fast, mobile-first design for buyers on the go",
    "Clear calls to call, WhatsApp or request a quote",
  ],
  image: "/work/irrismart.jpg",
  live: "https://irrismart.netlify.app/",
  domain: "irrismart.netlify.app",
};

export const projects: Project[] = [
  {
    id: "ferrumix",
    title: "Ferrumix Builder Hub",
    type: "Online store",
    industry: "Construction",
    description: "Hardware and building-materials shop in Nairobi CBD, with categories for every kind of build.",
    image: "/work/ferrumix.jpg",
    live: "https://ferrumix.netlify.app/",
    onHomepage: true,
  },
  {
    id: "kalwa",
    title: "Kalwa Technologies",
    type: "Online store",
    industry: "Retail",
    description: "Electronics store for laptops, phones and accessories, with product search and M-Pesa checkout.",
    image: "/work/kalwa.jpg",
    live: "https://kalwa-technologies.netlify.app/",
    onHomepage: true,
  },
  {
    id: "time-vault",
    title: "Time Vault Kenya",
    type: "Online store",
    industry: "Retail",
    description: "Watch store for Kenyan buyers, with collections, product pages and Nairobi delivery.",
    image: "/work/time-vault-kenya.jpg",
    live: "https://time-vault-kenya.netlify.app/",
  },
  {
    id: "duka",
    title: "Duka Kenya",
    type: "Online store",
    industry: "Retail",
    description: "Shop for Kenyan crafts, jewellery and coffee, with a story-led storefront.",
    image: "/work/connect-shop.jpg",
    live: "https://arigram-connect-shop.netlify.app/",
  },
  {
    id: "johnlito",
    title: "JohnLito Salon",
    type: "Business website",
    industry: "Beauty",
    description: "Hair and beauty parlour in Nairobi: services, gallery and one-tap call and directions.",
    image: "/work/johnlito-salon.jpg",
    live: "https://johnlito-saloon.netlify.app/",
  },
  {
    id: "aquatrack",
    title: "AquaTrack",
    type: "Web app",
    industry: "Water distribution",
    description: "Platform for water distributors to manage deliveries, track orders and run daily operations.",
    image: "/work/aquatrack.jpg",
    live: "https://aqua-tracker-hub.netlify.app/",
  },
  {
    id: "kiosk-kitchen",
    title: "Kiosk Kitchen",
    type: "Web app",
    industry: "Food",
    description: "Meal ordering with customer, admin and owner accounts, built for quick phone sign-in.",
    image: "/work/kiosk-kitchen.jpg",
    live: "https://my-meal-time.netlify.app/",
  },
];

/** Totals used in headings, so numbers stay correct as projects are added. */
export const workStats = (() => {
  const all = [featuredProject.title, ...projects.map((p) => p.title)];
  const industries = new Set(["Construction", ...projects.map((p) => p.industry)]);
  return {
    live: all.length,
    stores: projects.filter((p) => p.type === "Online store").length,
    apps: projects.filter((p) => p.type === "Web app").length,
    industries: industries.size,
  };
})();
