import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendEnquiry } from "@/lib/enquiry";
import { cn } from "@/lib/utils";
import { products } from "@/content/solutions";

const empty = { name: "", business: "", phone: "", email: "", note: "" };

export const EarlyAccessForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(empty);
  const [interests, setInterests] = useState<string[]>([]);
  const [sending, setSending] = useState(false);

  const set = (field: keyof typeof empty) => (value: string) => setForm((f) => ({ ...f, [field]: value }));
  const toggle = (name: string) =>
    setInterests((list) => (list.includes(name) ? list.filter((n) => n !== name) : [...list, name]));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      toast({
        title: "A few details missing",
        description: "Please add your name and a phone number or email so we can reach you.",
        variant: "destructive",
      });
      return;
    }
    if (interests.length === 0) {
      toast({ title: "Pick a product", description: "Choose at least one product you'd like to try.", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      await sendEnquiry({
        name: form.name,
        email: form.email,
        type: `Early access: ${interests.join(", ")}`,
        message: [
          `Business: ${form.business || "-"}`,
          `Phone / WhatsApp: ${form.phone || "-"}`,
          `Email: ${form.email || "-"}`,
          `Interested in: ${interests.join(", ")}`,
          "",
          form.note || "(no note)",
        ].join("\n"),
      });
      toast({ title: "You're on the list ✓", description: "We'll get in touch when there's something ready to try." });
      setForm(empty);
      setInterests([]);
    } catch (error) {
      console.error("Early access error:", error);
      toast({
        title: "That didn't send",
        description: "Please try again, or message us on WhatsApp on +254 726 875 878.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-4 p-6 md:p-11" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="ea-name" className="text-sm font-medium text-ink">
            Your name
          </label>
          <Input id="ea-name" placeholder="Full name" autoComplete="name" value={form.name} onChange={(e) => set("name")(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ea-business" className="text-sm font-medium text-ink">
            Business name
          </label>
          <Input id="ea-business" placeholder="Company or shop" autoComplete="organization" value={form.business} onChange={(e) => set("business")(e.target.value)} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="ea-phone" className="text-sm font-medium text-ink">
            Phone or WhatsApp
          </label>
          <Input id="ea-phone" type="tel" placeholder="07xx xxx xxx" autoComplete="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ea-email" className="text-sm font-medium text-ink">
            Email
          </label>
          <Input id="ea-email" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={(e) => set("email")(e.target.value)} />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="mb-1.5 text-sm font-medium text-ink">Interested in</legend>
        <div className="flex flex-wrap gap-2">
          {products.map((p) => {
            const on = interests.includes(p.name);
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(p.name)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors",
                  on ? "border-ink bg-ink text-white" : "border-input bg-white text-ink hover:border-ink/40",
                )}
              >
                <span className={cn("grid h-3.5 w-3.5 place-items-center rounded-[4px] border-[1.5px]", on ? "border-white" : "border-ink/50")}>
                  {on && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                </span>
                {p.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label htmlFor="ea-note" className="text-sm font-medium text-ink">
          Anything we should know? <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="ea-note"
          rows={4}
          className="resize-none"
          placeholder="E.g. number of sites, staff or shops, and what's hardest today"
          value={form.note}
          onChange={(e) => set("note")(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="justify-self-start font-display font-bold" disabled={sending}>
        {sending ? "Sending..." : "Join early access →"}
      </Button>
      <p className="text-[12.5px] text-muted-foreground">We'll only use your details to contact you about ARI-GRAM products.</p>
    </form>
  );
};
