import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services#software" },
      { label: "Web Solutions", href: "/services#web" },
      { label: "Business Systems", href: "/services#systems" },
      { label: "Digital Creative", href: "/services#creative" },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-coal pb-8 pt-16 text-[14.5px] text-white/60">
    <div className="wrap">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-[280px]">
            Technology. Innovation. Progress.
            <br />
            Business software and digital solutions.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 font-display text-sm font-bold text-white">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold text-white">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://wa.me/254726875878" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp +254 726 875 878
              </a>
            </li>
            <li>
              <a href="mailto:ari.gram.technologies@gmail.com" className="break-all hover:text-white">
                ari.gram.technologies@gmail.com
              </a>
            </li>
            <li>Kenya</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-6 text-[13px]">
        <span>© {new Date().getFullYear()} ARI-GRAM Technologies. All rights reserved.</span>
        <span>Built in Kenya</span>
      </div>
    </div>
  </footer>
);
