import { images } from "@/lib/images";

export type ProductStatus = "In development" | "Coming soon";

export type PreviewRow = { label: string; value: string; tone?: "green" | "amber" | "blue" | "plain" };

export type Product = {
  id: string;
  name: string;
  status: ProductStatus;
  short: string;
  audience: string;
  intro: string;
  problem: string;
  features: string[];
  note?: string;
  image: (w?: number) => string;
  imageAlt: string;
  preview: {
    title: string;
    kpis?: { label: string; value: string }[];
    head: [string, string];
    rows: PreviewRow[];
  };
};

/**
 * ARI-GRAM's own products. Update `status` as each one moves on
 * (e.g. to a "Ready to demo" stage) and the labels across the site follow.
 */
export const products: Product[] = [
  {
    id: "constractor",
    name: "CONSTRACTOR",
    status: "In development",
    short: "Construction materials, from order to site.",
    audience: "For contractors and construction companies",
    intro:
      "One place to order, approve, move and track construction materials across every site, from the main store to the last bag of cement.",
    problem: "materials ordered on WhatsApp, approvals lost in chats, and nobody sure what's actually at each site.",
    features: [
      "Purchase orders (LPOs) with director approval",
      "Deliveries between your own sites",
      "Site requests to the main store",
      "Stock movements you can trace",
      "Printable LPOs and waybills",
      "Works on a phone at the site",
    ],
    image: images.roofWorkers,
    imageAlt: "Builders in hard hats working on a roof",
    preview: {
      title: "CONSTRACTOR · Purchase orders",
      head: ["Order", "Status"],
      rows: [
        { label: "LPO-0142 · Cement 42.5N × 200", value: "Approved", tone: "green" },
        { label: "Main store → Site B · Steel bars", value: "In transit", tone: "blue" },
        { label: "Site C request · Ballast 10t", value: "Awaiting director", tone: "amber" },
      ],
    },
  },
  {
    id: "payroll",
    name: "Payroll & HR",
    status: "In development",
    short: "People, attendance and Kenyan payroll.",
    audience: "For Kenyan companies with office and field staff",
    intro:
      "Staff records, rosters, attendance and monthly payroll in one system, with Kenyan statutory deductions worked out for you and a mobile app for staff in the field.",
    problem: "payroll rebuilt in a spreadsheet every month, deductions checked by hand, and attendance collected on paper.",
    features: [
      "Employee records and documents",
      "Rosters and shift planning",
      "Attendance that works offline",
      "PAYE, NSSF, SHIF and Housing Levy",
      "Payslips for every employee",
      "Mobile app for field staff",
    ],
    image: images.officeColleagues,
    imageAlt: "Three colleagues working together at laptops in an office",
    preview: {
      title: "Payroll · November",
      kpis: [
        { label: "Employees", value: "48" },
        { label: "Gross pay", value: "KES 2.9M" },
        { label: "Status", value: "Draft" },
      ],
      head: ["Deduction", "Calculated"],
      rows: [
        { label: "PAYE", value: "✓", tone: "green" },
        { label: "NSSF · SHIF · Housing Levy", value: "✓", tone: "green" },
      ],
    },
  },
  {
    id: "pos",
    name: "Retail POS",
    status: "Coming soon",
    short: "Sales, stock and payments for shops.",
    audience: "For shops, kiosks and growing retailers",
    intro:
      "A point of sale that works on a phone or tablet: sell, take payment, print or send receipts and know your stock, with the owner, manager and cashier each seeing what they should.",
    problem: "stock counted by hand, sales recorded in a book, and no clear picture of what each day really made.",
    features: [
      "Fast sales and receipts",
      "M-Pesa and cash payments",
      "Stock that tracks every movement",
      "Owner, manager and cashier roles",
      "Daily sales reports",
      "More than one shop on one account",
    ],
    note: "Planned for after CONSTRACTOR and Payroll & HR. Join early access to hear first.",
    image: images.shopCounter,
    imageAlt: "A shopkeeper behind the counter of her shop",
    preview: {
      title: "Retail POS · Today",
      kpis: [
        { label: "Sales", value: "KES 48,250" },
        { label: "Receipts", value: "126" },
        { label: "Low stock", value: "7" },
      ],
      head: ["Receipt", "Paid by"],
      rows: [
        { label: "#10482 · KES 1,450", value: "M-Pesa", tone: "green" },
        { label: "#10481 · KES 820", value: "Cash", tone: "plain" },
      ],
    },
  },
];

export const earlyAccessReasons = [
  { title: "Try it first", text: "Get access to each product before it's released, using your own business as the test case." },
  { title: "Your feedback shapes it", text: "Tell us what your team needs. Early partners' requests go straight into what we build next." },
  { title: "A direct line to the builder", text: "Talk to the person writing the software, not a support queue." },
];
