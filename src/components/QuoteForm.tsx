import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendEnquiry } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

const needs = ["Website", "Custom software", "Business system", "Branding & design", "Support", "Not sure yet"];
const timings = ["As soon as possible", "In the next 1 to 3 months", "Just exploring for now"];

const empty = { name: "", business: "", email: "", phone: "", need: "", timing: timings[0], message: "" };

/** The main "Get a Quote" form, shown on /contact. Sends through the shared EmailJS helper. */
export const QuoteForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const set = (field: keyof typeof empty) => (value: string) => setForm((f) => ({ ...f, [field]: value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "A few details missing",
        description: "Please add your name, email and a short message.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      await sendEnquiry({
        name: form.name,
        email: form.email,
        type: form.need || "Not specified",
        message: [
          `Business: ${form.business || "-"}`,
          `Phone / WhatsApp: ${form.phone || "-"}`,
          `Needs: ${form.need || "-"}`,
          `Start: ${form.timing}`,
          "",
          form.message,
        ].join("\n"),
      });
      toast({ title: "Message sent ✓", description: "Thanks. We'll get back to you, usually within one working day." });
      setForm(empty);
    } catch (error) {
      console.error("Quote form error:", error);
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
    <form onSubmit={submit} className="mt-6 grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="q-name" className="text-sm font-medium text-ink">
            Your name
          </label>
          <Input id="q-name" placeholder="Full name" autoComplete="name" value={form.name} onChange={(e) => set("name")(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="q-business" className="text-sm font-medium text-ink">
            Business name <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input id="q-business" placeholder="Company or shop" autoComplete="organization" value={form.business} onChange={(e) => set("business")(e.target.value)} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="q-email" className="text-sm font-medium text-ink">
            Email
          </label>
          <Input id="q-email" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={(e) => set("email")(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="q-phone" className="text-sm font-medium text-ink">
            Phone or WhatsApp <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input id="q-phone" type="tel" placeholder="07xx xxx xxx" autoComplete="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {needs.map((n) => {
            const on = form.need === n;
            return (
              <button
                key={n}
                type="button"
                aria-pressed={on}
                onClick={() => set("need")(on ? "" : n)}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-sm transition-colors",
                  on ? "border-ink bg-ink text-white" : "border-input bg-white text-ink hover:border-ink/40",
                )}
              >
                {n}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label id="q-timing-label" className="text-sm font-medium text-ink">
          When would you like to start?
        </label>
        <Select value={form.timing} onValueChange={set("timing")}>
          <SelectTrigger aria-labelledby="q-timing-label">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {timings.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="q-message" className="text-sm font-medium text-ink">
          Tell us more
        </label>
        <Textarea
          id="q-message"
          rows={5}
          className="resize-none"
          placeholder="What does your business do, and what would you like to build or fix?"
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="justify-self-start font-display font-bold" disabled={sending}>
        {sending ? "Sending..." : (<>Send message <Send className="h-4 w-4" /></>)}
      </Button>
      <p className="text-[12.5px] text-muted-foreground">We'll only use your details to reply to you.</p>
    </form>
  );
};
