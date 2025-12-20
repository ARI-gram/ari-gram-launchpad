import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  { value: "website", label: "Website & Apps" },
  { value: "automation", label: "Automation (n8n)" },
  { value: "software-issues", label: "Software Issues" },
  { value: "consultation", label: "General Consultation" },
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-mono text-gold">// Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient-premium">Start?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your project and find the best solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? Need help with software issues? 
                We're here to help. Reach out and let's make it happen.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/254726875878"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-primary transition-colors">WhatsApp</p>
                  <p className="text-sm text-muted-foreground font-mono">0726875878</p>
                </div>
              </a>

              <a
                href="tel:+254726875878"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-primary transition-colors">Phone</p>
                  <p className="text-sm text-muted-foreground font-mono">+254 726 875 878</p>
                </div>
              </a>

              <a
                href="mailto:ari.gram.technologies@gmail.com"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-primary transition-colors">Email</p>
                  <p className="text-sm text-muted-foreground font-mono">ari.gram.technologies@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Kenya, Remote Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Service Type</label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleChange("service", value)}
              >
                <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
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
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="Tell us about your project or issue..."
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="bg-secondary/50 border-border focus:border-primary resize-none"
              />
            </div>

            <Button 
              onClick={handleSubmit}
              variant="gold" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};