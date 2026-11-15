import { useEffect, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { useReveal } from "@/hooks/use-reveal";
import { images } from "@/lib/images";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";
import { contact, nextSteps } from "@/content/contact";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const ContactHero = () => (
  <section className="relative overflow-hidden bg-coal text-white">
    <img
      src={images.ownerPhone(1920)}
      srcSet={`${images.ownerPhone(900)} 900w, ${images.ownerPhone(1920)} 1920w`}
      sizes="100vw"
      alt=""
      className="anim-settle absolute inset-0 h-full w-full object-cover"
    />
    <div className="photo-overlay absolute inset-0" />
    <div className="wrap relative pb-32 pt-16 md:pt-20">
      <nav aria-label="Breadcrumb" className="anim-rise text-[13px] text-white/60">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white" aria-current="page">
          Contact
        </span>
      </nav>
      <span className="eyebrow anim-rise mt-6" style={d(100)}>
        Contact us
      </span>
      <h1 className="anim-rise mt-5 max-w-[760px] text-[38px] font-extrabold leading-[1.08] md:text-[56px]" style={d(220)}>
        Let's talk about your business.
      </h1>
      <p className="anim-rise mt-5 max-w-[600px] text-[17.5px] leading-relaxed text-white/75" style={d(380)}>
        Tell us what you need, or what's slowing you down. You'll hear back from the person who'll actually build it,{" "}
        {contact.replyPromise}.
      </p>
      <div className="anim-rise mt-8 flex flex-wrap gap-3" style={d(520)}>
        <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn bg-[#1DA851] text-white hover:bg-[#178F44]">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
        <a href="#form" className="btn btn-ghost-light">
          Send a message <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

type WayProps = { icon: ReactNode; label: string; value: ReactNode; text: string; action?: { label: string; href: string; external?: boolean }; badge?: string; green?: boolean };

const Way = ({ icon, label, value, text, action, badge, green }: WayProps) => (
  <div className="flex w-full flex-col gap-1.5 rounded-xl border border-border bg-white p-[22px] shadow-[0_14px_34px_rgba(20,24,32,0.08)]">
    <span className={cn("mb-2 grid h-10 w-10 place-items-center rounded-[10px]", green ? "bg-[#E3F5EA] text-[#1DA851]" : "bg-sand text-ink")}>{icon}</span>
    <small className="font-display text-[11.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground">{label}</small>
    {badge && (
      <span className="self-start rounded-full bg-[#E3F5EA] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[#17733F]">{badge}</span>
    )}
    <b className="font-display text-[16.5px] text-ink [overflow-wrap:anywhere]">{value}</b>
    <p className="text-[13.5px] text-muted-foreground">{text}</p>
    {action && (
      <a
        href={action.href}
        {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group mt-auto inline-flex items-center gap-1 pt-2 font-display text-sm font-bold text-brand-blue"
      >
        {action.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    )}
  </div>
);

const WaysToReach = () => (
  <div className="wrap relative z-10 -mt-14">
    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      <div {...reveal(0)} className="flex">
        <Way
          green
          icon={<MessageCircle className="h-5 w-5" />}
          label="WhatsApp"
          badge="Fastest reply"
          value={contact.phoneDisplay}
          text="Messages, photos and voice notes welcome."
          action={{ label: "Open WhatsApp", href: contact.whatsappHref, external: true }}
        />
      </div>
      <div {...reveal(90)} className="flex">
        <Way
          icon={<Phone className="h-5 w-5" />}
          label="Phone"
          value={contact.phoneDisplay}
          text={`${contact.hours[0].days}, ${contact.hours[0].time.replace(" – ", " to ")}.`}
          action={{ label: "Call now", href: contact.phoneHref }}
        />
      </div>
      <div {...reveal(180)} className="flex">
        <Way
          icon={<Mail className="h-5 w-5" />}
          label="Email"
          value={
            <>
              {contact.email.split("@")[0]}
              <wbr />@{contact.email.split("@")[1]}
            </>
          }
          text="For detailed briefs and documents."
          action={{ label: "Send an email", href: `mailto:${contact.email}` }}
        />
      </div>
      <div {...reveal(270)} className="flex">
        <Way icon={<MapPin className="h-5 w-5" />} label="Where we work" value={contact.location} text="Working with clients anywhere, by call, WhatsApp and video." />
      </div>
    </div>
  </div>
);

const FormAndSide = () => (
  <section id="form" className="scroll-mt-4 py-20 lg:py-24">
    <div className="wrap grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
      <div className="rounded-2xl border border-border bg-white px-5 py-7 md:p-10" {...reveal()}>
        <span className="eyebrow">Request a quote</span>
        <h2 className="mt-3 text-[26px] font-extrabold text-ink md:text-[32px]">Tell us about your project.</h2>
        <p className="mt-2 text-muted-foreground">A few details help us give you a useful answer the first time.</p>
        <QuoteForm />
      </div>

      <aside className="grid gap-5 lg:sticky lg:top-24" {...reveal(120)}>
        <div className="rounded-2xl bg-coal p-7 text-white">
          <span className="eyebrow">What happens next</span>
          <h3 className="mt-2.5 text-[22px] font-extrabold">From message to plan in a few days.</h3>
          <ol className="mt-4">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[36px_1fr] gap-2.5 border-t border-white/[0.12] py-3.5">
                <span className="font-display text-sm font-bold text-amber">0{i + 1}</span>
                <div>
                  <h4 className="text-[15.5px] font-bold">{s.title}</h4>
                  <p className="mt-0.5 text-[13.5px] text-white/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-border bg-white px-7 py-6">
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Working hours</h4>
          <dl className="mt-3 grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-[14.5px]">
            {contact.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt className="text-ink/80">{h.days}</dt>
                <dd className="text-right font-semibold text-ink">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[13px] text-muted-foreground">{contact.hoursNote}</p>
        </div>
      </aside>
    </div>
  </section>
);

const WhatsAppStrip = () => (
  <section className="bg-sand py-16">
    <div className="wrap">
      <div
        className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-white p-7 md:flex-row md:items-center md:justify-between md:px-10 md:py-8"
        {...reveal()}
      >
        <div>
          <h3 className="text-[22px] font-extrabold text-ink">Prefer to just send a message?</h3>
          <p className="mt-1 text-muted-foreground">Send us a WhatsApp with a quick description, a screenshot or a voice note.</p>
        </div>
        <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn bg-[#1DA851] text-white hover:bg-[#178F44]">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = "Contact | ARI-GRAM Technologies";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <WaysToReach />
        <FormAndSide />
        <WhatsAppStrip />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
