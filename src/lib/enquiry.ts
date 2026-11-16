/**
 * Sends a website enquiry to ARI-GRAM's inbox through EmailJS.
 * The IDs below are EmailJS's public browser keys (safe to ship in front-end code).
 * Used by the quote form on the homepage and the early-access form on Solutions.
 */
// Gmail service connected as ari.gram.technologies@gmail.com (EmailJS dashboard → Email Services).
const EMAILJS_SERVICE_ID = "service_ekk1pyf";
const EMAILJS_TEMPLATE_ID = "template_5k5la8l";
const EMAILJS_PUBLIC_KEY = "7ByFLFdrTxP2BF5wv";
const INBOX = "ari.gram.technologies@gmail.com";

export type Enquiry = {
  name: string;
  /** Reply address; may be empty when the person only left a phone number. */
  email: string;
  /** Shown as the enquiry type in the email, e.g. "Website / Web Platform" or "Early access". */
  type: string;
  message: string;
};

export async function sendEnquiry({ name, email, type, message }: Enquiry): Promise<void> {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        service_type: type,
        message,
        to_email: INBOX,
      },
    }),
  });
  if (!response.ok) {
    throw new Error(`Enquiry failed: ${response.status}`);
  }
}
