import { useState } from "react";
import { reveal } from "@/lib/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { images } from "@/lib/images";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  { value: "software", label: "Software Development" },
  { value: "website", label: "Website / Web Platform" },
  { value: "business-system", label: "Business System (POS, Payroll, CONSTRACTOR)" },
  { value: "creative", label: "Branding & Digital Creative" },
  { value: "support", label: "Support & Maintenance" },
  { value: "other", label: "Other" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = "service_s8yjkli";
    const EMAILJS_TEMPLATE_ID = "template_5k5la8l";
    const EMAILJS_PUBLIC_KEY = "7ByFLFdrTxP2BF5wv";

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service_type: serviceTypes.find(s => s.value === formData.service)?.label || formData.service,
        message: formData.message,
        to_email: "ari.gram.technologies@gmail.com",
      };

      // Send email using EmailJS
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent! ✓",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="pb-20 lg:pb-28">
      {/* Call-to-action band */}
      <div className="relative overflow-hidden bg-coal text-white">
        <img src={images.nairobi(1920)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="photo-overlay absolute inset-0" />
        <div className="wrap relative py-20 lg:py-24" {...reveal()}>
          <span className="eyebrow">Let's talk</span>
          <h2 className="mt-4 max-w-[640px] text-[34px] font-extrabold leading-[1.1] md:text-[46px]">
            Let's build something better.
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] text-white/75">
            Tell us what your business needs. We'll reply with honest advice and a clear quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="btn btn-light">Get a Quote</a>
            <a href="https://wa.me/254726875878" target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Contact details + form */}
      <div id="quote" className="wrap mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div {...reveal()}>
          <h3 className="text-2xl font-extrabold text-ink">Request a quote</h3>
          <p className="mt-3 text-muted-foreground">
            Share a few details about your project or the problem you need solved. We usually reply within one working day.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            <li>
              <a href="https://wa.me/254726875878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-4 group">
                <MessageCircle className="h-5 w-5 text-[#1DA851]" />
                <span><b className="block text-sm text-ink">WhatsApp</b><span className="text-sm text-muted-foreground">+254 726 875 878</span></span>
              </a>
            </li>
            <li>
              <a href="tel:+254726875878" className="flex items-center gap-4 py-4">
                <Phone className="h-5 w-5 text-brand-blue" />
                <span><b className="block text-sm text-ink">Phone</b><span className="text-sm text-muted-foreground">+254 726 875 878</span></span>
              </a>
            </li>
            <li>
              <a href="mailto:ari.gram.technologies@gmail.com" className="flex items-center gap-4 py-4">
                <Mail className="h-5 w-5 text-brand-blue" />
                <span><b className="block text-sm text-ink">Email</b><span className="break-all text-sm text-muted-foreground">ari.gram.technologies@gmail.com</span></span>
              </a>
            </li>
            <li className="flex items-center gap-4 py-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span><b className="block text-sm text-ink">Location</b><span className="text-sm text-muted-foreground">Kenya · working with clients worldwide</span></span>
            </li>
          </ul>
        </div>

        <form
          {...reveal(150)}
          className="space-y-5 rounded-xl border border-border bg-sand p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="cf-name" className="text-sm font-medium text-ink">Name</label>
              <Input id="cf-name" placeholder="Your name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cf-email" className="text-sm font-medium text-ink">Email</label>
              <Input id="cf-email" type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="bg-white" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">What do you need?</label>
            <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="cf-message" className="text-sm font-medium text-ink">Message</label>
            <Textarea
              id="cf-message"
              placeholder="Tell us about your business and what you'd like to build or fix..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="resize-none bg-white"
            />
          </div>

          <Button type="submit" size="lg" className="w-full font-display font-bold" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : (<>Send message <Send className="h-4 w-4" /></>)}
          </Button>
        </form>
      </div>
    </section>
  );
};
