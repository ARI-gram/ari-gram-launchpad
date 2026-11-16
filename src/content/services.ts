import { images } from "@/lib/images";

export type Service = {
  id: string;
  name: string;
  title: string;
  intro: string;
  offers: { title: string; text: string }[];
  goodFor: string;
  image: string;
  imageAlt: string;
  cta: string;
  secondary?: { label: string; to: string };
};

export const services: Service[] = [
  {
    id: "software",
    name: "Software Development",
    title: "Custom software built around how you work.",
    intro:
      "When spreadsheets, paper and off-the-shelf tools stop fitting, we build applications that match your process: the approvals, the reports, the people who need to see what.",
    offers: [
      { title: "Custom business applications", text: "Web apps for internal teams and customers." },
      { title: "Workflow automation", text: "Remove repeated manual steps and paperwork." },
      { title: "API integrations", text: "Connect M-Pesa, SMS, email and your other tools." },
      { title: "Dashboards & reports", text: "The numbers you need, without exporting to Excel." },
    ],
    goodFor: "businesses whose processes have outgrown spreadsheets and generic software.",
    image: images.devPair(1000),
    imageAlt: "Two developers working together at a computer",
    cta: "Ask about software",
  },
  {
    id: "web",
    name: "Web Solutions",
    title: "Websites that bring in customers.",
    intro:
      "Fast, mobile-friendly websites that explain what you do clearly and make it easy for customers to call, message or buy.",
    offers: [
      { title: "Business & corporate websites", text: "A professional home for your brand." },
      { title: "E-commerce", text: "Online shops with product catalogues and orders." },
      { title: "Portals & dashboards", text: "Customer and staff areas behind a login." },
      { title: "Launch essentials", text: "Domain, hosting, Google listing and analytics set up." },
    ],
    goodFor: "businesses that need to be found online and look credible when they are.",
    image: images.laptopWork(1000),
    imageAlt: "Working on a website on a laptop",
    cta: "Ask about a website",
    secondary: { label: "See live websites", to: "/work" },
  },
  {
    id: "systems",
    name: "Business Systems",
    title: "Business systems shaped around your operations.",
    intro:
      "Point of sale, payroll and materials systems designed for how your company runs. We set them up, move your existing records in and train your team.",
    offers: [
      { title: "Point of sale & inventory", text: "Sales, stock, M-Pesa and cash, receipts." },
      { title: "Payroll & HR", text: "PAYE, NSSF, SHIF, Housing Levy and payslips." },
      { title: "Construction materials", text: "LPOs, approvals and site deliveries." },
      { title: "Setup & training", text: "Data migration and hands-on training for staff." },
    ],
    goodFor: "shops, contractors and offices that have outgrown spreadsheets and paper.",
    image: images.market(1000),
    imageAlt: "A busy market with many small shops",
    cta: "Ask about a system",
    secondary: { label: "See our upcoming products", to: "/solutions" },
  },
  {
    id: "creative",
    name: "Digital Creative",
    title: "A brand that looks as good as you work.",
    intro: "Consistent visuals for your business, from the logo on your documents to the posts your customers see every day.",
    offers: [
      { title: "Logo & brand identity", text: "Logo, colours and a simple brand guide." },
      { title: "Posters & flyers", text: "Print and digital promotional material." },
      { title: "Social media creatives", text: "Ready-to-post designs for your channels." },
      { title: "Video editing", text: "Short promotional and product videos." },
    ],
    goodFor: "new businesses and brands that need a consistent, professional look.",
    image: images.designSwatches(1000),
    imageAlt: "Colour swatches and brand design sketches",
    cta: "Ask about design",
  },
];

export const supportItems = [
  { title: "Hosting & backups", text: "Kept online, secure and backed up." },
  { title: "Fixes & updates", text: "Problems sorted quickly, software kept current." },
  { title: "Staff training", text: "New team members shown how it works." },
  { title: "Improvements", text: "New features as your business changes." },
];

export const projectSteps = [
  { title: "Understand", text: "A conversation about your business, what's slowing you down and what you want to achieve.", get: "a clear quote and timeline" },
  { title: "Design", text: "We plan the system or site and show you the screens before any building starts.", get: "designs to approve" },
  { title: "Build & launch", text: "We build in stages, test with your team and go live when you're ready.", get: "a working product and training" },
  { title: "Support", text: "Fixes, updates and improvements as your business grows.", get: "someone to call" },
];

export const faqs = [
  {
    q: "How much does a website or system cost?",
    a: "It depends on what you need. After a short conversation we send a clear, itemised quote, so you know the full cost before any work starts.",
  },
  {
    q: "How long does a project take?",
    a: "A business website usually takes a few weeks; a custom system takes longer depending on its size. Your quote includes a timeline we commit to.",
  },
  {
    q: "Can you work with the system we already have?",
    a: "Often, yes. We can connect to existing tools, move your current records into a new system, or improve what you already use.",
  },
  {
    q: "Do your systems support M-Pesa?",
    a: "Yes. We can build M-Pesa payments into the systems and websites we make for you.",
  },
  {
    q: "Do you work with clients outside Kenya?",
    a: "Yes. We work remotely with clients anywhere, using calls, WhatsApp and shared previews throughout the project.",
  },
  {
    q: "What happens after the project is finished?",
    a: "You can choose ongoing support: hosting, fixes, updates, training and improvements whenever you need them.",
  },
];
