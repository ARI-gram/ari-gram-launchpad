import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/content/solutions";

/** Pill showing where an ARI-GRAM product stands ("In development", "Coming soon"). */
export const StatusBadge = ({ status, className }: { status: ProductStatus; className?: string }) => {
  const soon = status === "Coming soon";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-[0.06em]",
        soon ? "border-[#DCE4EF] bg-[#EEF2F7] text-[#3A4A63]" : "border-[#F2D9A8] bg-[#FFF4E0] text-[#8A5A10]",
        className,
      )}
    >
      <span
        className={cn(
          "h-[7px] w-[7px] rounded-full",
          soon ? "bg-[#8C9BB0] shadow-[0_0_0_3px_rgba(140,155,176,0.2)]" : "bg-amber shadow-[0_0_0_3px_rgba(217,149,43,0.2)]",
        )}
      />
      {status}
    </span>
  );
};
