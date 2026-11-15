import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  /** Where "Get a Quote" goes: the form on /contact by default. */
  quoteHref?: string;
};

export const CtaBand = ({
  eyebrow = "Let's talk",
  title = "Let's build something better.",
  text = "Tell us what your business needs. We'll reply with honest advice and a clear quote.",
  quoteHref = "/contact#form",
}: CtaBandProps) => (
  <div className="relative overflow-hidden bg-coal text-white">
    <img src={images.nairobi(1920)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    <div className="photo-overlay absolute inset-0" />
    <div className="wrap relative py-20 lg:py-24" {...reveal()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 max-w-[640px] text-[34px] font-extrabold leading-[1.1] md:text-[46px]">{title}</h2>
      <p className="mt-4 max-w-[520px] text-[17px] text-white/75">{text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to={quoteHref} className="btn btn-light">
          Get a Quote
        </Link>
        <a href="https://wa.me/254726875878" target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    </div>
  </div>
);
