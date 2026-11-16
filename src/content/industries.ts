import { images } from "@/lib/images";

export type ProofStatus = "Live" | "In development" | "Coming soon";

export type Proof = { label: string; status?: ProofStatus; href?: string };

export type IndustryAction = { label: string; to: string };

export type Industry = {
  id: string;
  name: string;
  short: string;
  title: string;
  intro: string;
  challenges: string[];
  help: string[];
  /** Only real, verifiable work goes here. */
  proof: Proof[];
  primary: IndustryAction;
  secondary?: IndustryAction;
  image: (w?: number) => string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    id: "construction",
    name: "Construction",
    short: "Materials, sites, approvals",
    title: "Know where every material is, on every site.",
    intro:
      "Construction runs on materials moving between suppliers, the main store and sites, with approvals at every step. When that lives in WhatsApp chats and paper books, money leaks.",
    challenges: ["Orders and approvals lost in chats", "No clear stock picture per site", "Paper LPOs and waybills"],
    help: ["Purchase orders with approvals", "Site-to-site delivery tracking", "Printable LPOs and waybills", "Phone-friendly for site staff"],
    proof: [
      { label: "Irrismart Suppliers", status: "Live", href: "https://irrismart.netlify.app/" },
      { label: "Ferrumix Builder Hub", status: "Live", href: "https://ferrumix.netlify.app/" },
      { label: "CONSTRACTOR", status: "In development", href: "/solutions#constractor" },
    ],
    primary: { label: "Join early access", to: "/solutions#early-access" },
    secondary: { label: "Ask about a custom system", to: "/contact#form" },
    image: images.cranesSite,
    imageAlt: "Cranes over a building site in Nairobi",
  },
  {
    id: "retail",
    name: "Retail & online shops",
    short: "Sales, stock, selling online",
    title: "Sell more, in the shop and online.",
    intro:
      "Shops need to be found online, take M-Pesa without fuss and know what's on the shelf. We build the online store your customers see and the tools behind the counter.",
    challenges: ["Customers can't find you online", "Stock counted by hand", "Sales recorded in a book"],
    help: ["Online shops with product catalogues", "M-Pesa payments built in", "Stock and sales tracking", "Point of sale (coming soon)"],
    proof: [
      { label: "Time Vault Kenya", status: "Live", href: "https://time-vault-kenya.netlify.app/" },
      { label: "Duka Kenya", status: "Live", href: "https://arigram-connect-shop.netlify.app/" },
      { label: "Kalwa Technologies", status: "Live", href: "https://kalwa-technologies.netlify.app/" },
      { label: "Retail POS", status: "Coming soon", href: "/solutions#pos" },
    ],
    primary: { label: "Ask about your shop", to: "/contact#form" },
    image: images.shopkeeper,
    imageAlt: "A shopkeeper standing in his shop",
  },
  {
    id: "food",
    name: "Food & hospitality",
    short: "Menus, orders, kitchens",
    title: "Take orders without the chaos.",
    intro:
      "Restaurants and food kiosks need ordering that's quick on a phone, a menu that's easy to update, and owners who can see what's selling.",
    challenges: ["Orders taken by phone and lost", "Menus that are hard to update", "No view of what sells best"],
    help: ["Online menus and ordering", "Phone sign-in for customers", "Separate admin and owner views", "M-Pesa payments"],
    proof: [{ label: "Kiosk Kitchen", status: "Live", href: "https://my-meal-time.netlify.app/" }],
    primary: { label: "Ask about ordering", to: "/contact#form" },
    image: images.grillCook,
    imageAlt: "A cook preparing food on a grill",
  },
  {
    id: "corporate",
    name: "Corporate & HR",
    short: "People, payroll, admin",
    title: "Payroll and people records you can trust.",
    intro:
      "Every month, Kenyan employers work out PAYE, NSSF, SHIF and Housing Levy, track attendance and produce payslips. It shouldn't take a week of spreadsheets.",
    challenges: ["Payroll rebuilt in Excel monthly", "Deductions checked by hand", "Attendance on paper"],
    help: ["Statutory deductions worked out", "Payslips for every employee", "Attendance, even offline", "Company websites and portals"],
    proof: [{ label: "Payroll & HR", status: "In development", href: "/solutions#payroll" }],
    primary: { label: "Join early access", to: "/solutions#early-access" },
    secondary: { label: "Ask about a company website", to: "/contact#form" },
    image: images.colleaguesMeeting,
    imageAlt: "A group of colleagues in a meeting",
  },
  {
    id: "sme",
    name: "Small businesses",
    short: "Websites and everyday tools",
    title: "Look professional, work smarter.",
    intro:
      "For tailors, salons, consultants and every small business in between: a website that makes you look established and simple tools that save hours every week.",
    challenges: ["No website, or an outdated one", "Customers ask the same questions", "Records spread across notebooks"],
    help: ["Business websites that convert", "Logo and brand identity", "Simple booking and record tools", "Google listing set up"],
    proof: [{ label: "JohnLito Salon", status: "Live", href: "https://johnlito-saloon.netlify.app/" }],
    primary: { label: "Ask about a website", to: "/contact#form" },
    secondary: { label: "See our services", to: "/services" },
    image: images.tailorPhone,
    imageAlt: "A tailor checking his phone at his sewing machine",
  },
];
