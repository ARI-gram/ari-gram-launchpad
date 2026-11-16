import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

type PageHeroProps = {
  /** Image URL builder taking a width, e.g. images.codeScreen */
  image: (w?: number) => string;
  crumb: string;
  eyebrow: string;
  title: string;
  text: string;
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Photo-backed header used at the top of inner pages (About, Services, ...). */
export const PageHero = ({ image, crumb, eyebrow, title, text }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-coal text-white">
    <img
      src={image(1920)}
      srcSet={`${image(900)} 900w, ${image(1920)} 1920w`}
      sizes="100vw"
      alt=""
      className="anim-settle absolute inset-0 h-full w-full object-cover"
    />
    <div className="photo-overlay absolute inset-0" />
    <div className="wrap relative pb-20 pt-16 md:pb-24 md:pt-20">
      <nav aria-label="Breadcrumb" className="anim-rise text-[13px] text-white/60">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white" aria-current="page">
          {crumb}
        </span>
      </nav>
      <span className="eyebrow anim-rise mt-6" style={d(100)}>
        {eyebrow}
      </span>
      <h1 className="anim-rise mt-5 max-w-[760px] text-[38px] font-extrabold leading-[1.08] md:text-[56px]" style={d(220)}>
        {title}
      </h1>
      <p className="anim-rise mt-5 max-w-[600px] text-[17.5px] leading-relaxed text-white/75" style={d(380)}>
        {text}
      </p>
    </div>
  </section>
);
