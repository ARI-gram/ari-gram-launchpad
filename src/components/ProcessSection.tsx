import { reveal } from "@/lib/reveal";
const steps = [
  { title: "Understand", text: "We learn how your business runs and what slows it down." },
  { title: "Design", text: "You see the screens and agree on the plan before we build." },
  { title: "Build & launch", text: "We build, test with your team and go live." },
  { title: "Support", text: "Training, fixes and improvements as you grow." },
];

export const ProcessSection = () => (
  <section id="process" className="border-t border-border py-20 lg:py-24">
    <div className="wrap">
      <div {...reveal()}>
        <span className="eyebrow">How we work</span>
        <h2 className="section-title mt-4 max-w-[620px]">From first conversation to everyday use.</h2>
      </div>
      <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((s, i) => (
          <li
            key={s.title}
            {...reveal(i * 180, "line")}
            className={i === steps.length - 1 ? "border-t-2 border-amber/20 pt-5 text-amber" : "border-t-2 border-ink/10 pt-5 text-ink"}
          >
            <span className="font-display text-xs font-bold tracking-[0.1em] text-muted-foreground">STEP 0{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-[14.5px] text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
