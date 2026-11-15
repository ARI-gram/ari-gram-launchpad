import { useEffect, useState } from "react";

type CountUpProps = { to: number; prefix?: string; suffix?: string; duration?: number; delay?: number };

/** Counts a number up from zero once, on mount. Shows the final value straight away if motion is reduced. */
export const CountUp = ({ to, prefix = "", suffix = "", duration = 1400, delay = 0 }: CountUpProps) => {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const step = (t: number) => {
        if (!start) start = t;
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    // Safety net: always land on the final number, even if animation frames are paused.
    const done = window.setTimeout(() => setValue(to), delay + duration + 300);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(done);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay, reduce]);

  return (
    <>
      {prefix}
      {value.toLocaleString("en-KE")}
      {suffix}
    </>
  );
};
