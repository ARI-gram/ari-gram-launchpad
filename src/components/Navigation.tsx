import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

/** Links to full pages use a path; links to homepage sections use "/#id" until those pages exist. */
const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/#industries", label: "Industries" },
  { to: "/#work", label: "Our Work" },
  { to: "/#contact", label: "Contact" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (to: string) => !to.includes("#") && pathname === to;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-[0_1px_12px_rgba(20,24,32,0.06)]" : "border-transparent",
      )}
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link to="/" aria-label="ARI-GRAM Technologies home">
          <Logo />
        </Link>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-7 text-[14.5px] font-medium text-ink/70">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  aria-current={isActive(l.to) ? "page" : undefined}
                  className={cn(
                    "nav-link transition-colors hover:text-ink",
                    isActive(l.to) && "font-semibold text-ink after:scale-x-100",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/#contact" className="btn btn-primary hidden lg:inline-flex">
          Get a Quote
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="wrap flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.to) ? "page" : undefined}
                  className={cn(
                    "block border-b border-border/70 py-3 font-medium text-ink/80",
                    isActive(l.to) && "font-semibold text-ink",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link to="/#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
