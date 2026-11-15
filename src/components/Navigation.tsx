import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-[0_1px_12px_rgba(20,24,32,0.06)]" : "border-transparent",
      )}
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <a href="#top" aria-label="ARI-GRAM Technologies home">
          <Logo />
        </a>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-7 text-[14.5px] font-medium text-ink/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary hidden lg:inline-flex">
          Get a Quote
        </a>

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
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-3 font-medium text-ink/80 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
