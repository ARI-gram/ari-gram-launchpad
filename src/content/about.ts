/**
 * About page content that only the business owner can supply.
 * The founder section stays hidden until `name` is filled in.
 */
export const founder = {
  name: "", // e.g. "Jane Doe"
  role: "Founder & Lead Developer",
  photo: "", // e.g. "/team/founder.jpg" placed in /public/team/
  bio: [
    // Two or three sentences in your own words: background, why you started ARI-GRAM,
    // and what you care about when you build for a client.
  ] as string[],
};

/** Story milestones. Replace the labels with real years when available (e.g. "2023"). */
export const milestones = [
  {
    label: "Start",
    title: "Websites for local businesses",
    text: "Business sites, online shops and brand work for Kenyan SMEs.",
  },
  {
    label: "Next",
    title: "Custom business software",
    text: "Systems built around how a client's team works: approvals, stock, reports.",
  },
  {
    label: "Now",
    title: "Our own products",
    text: "CONSTRACTOR, Payroll & HR and a retail POS, in development for specific industries.",
  },
];
