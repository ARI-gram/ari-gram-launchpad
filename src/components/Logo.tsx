import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
  showWordmark?: boolean;
};

/** ARI-GRAM "Geometric A" mark: navy and blue legs joined by an electric-blue connector. */
export const LogoMark = ({ variant = "default", className }: { variant?: "default" | "light"; className?: string }) => {
  const light = variant === "light";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <polygon points="4,58 27,5 37,5 16,58" fill={light ? "#FFFFFF" : "#092B59"} />
      <polygon points="39,9 60,58 48,58 34,21" fill={light ? "#8CC4FF" : "#1256A0"} />
      <rect x="19" y="39" width="22" height="7" rx="3.5" fill="#168BFA" />
      <circle cx="47" cy="42.5" r="4.5" fill="#168BFA" />
    </svg>
  );
};

export const Logo = ({ variant = "default", className, showWordmark = true }: LogoProps) => {
  const light = variant === "light";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="leading-none">
          <span className={cn("block font-display text-[19px] font-extrabold tracking-tight", light ? "text-white" : "text-brand-navy")}>
            ARI-GRAM
          </span>
          <span
            className={cn(
              "mt-1 block font-display text-[8px] font-bold tracking-[0.42em]",
              light ? "text-[#8CC4FF]" : "text-brand-blue",
            )}
          >
            TECHNOLOGIES
          </span>
        </span>
      )}
    </span>
  );
};
