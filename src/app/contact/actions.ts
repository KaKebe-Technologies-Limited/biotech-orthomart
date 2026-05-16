"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM =
  process.env.RESEND_FROM ??
  "Biotech Orthomart <onboarding@resend.dev>";
const TO = 
  process.env.RESEND_TO ?? 
  "info@biotechorthomart.com";

export type ContactState = { ok: boolean; message: string } | null;

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const organisation = (formData.get("organisation") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Name, email and message are required." };
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Contact: ${subject || "(no subject)"}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;color:#1a1f2e">
        <div style="background:#0a3d7a;padding:24px 32px;border-radius:12px 12px 0 0">
          <p style="color:#c9a84c;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 4px">New enquiry</p>
          <h1 style="color:#ffffff;font-size:22px;margin:0">Contact Form Submission</h1>
        </div>
        <div style="padding:32px;background:#f4f6fb;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px">Name</td><td style="padding:8px 0;font-weight:600;font-size:14px">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Organisation</td><td style="padding:8px 0;font-size:14px">${organisation || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#0a3d7a">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Phone</td><td style="padding:8px 0;font-size:14px">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Subject</td><td style="padding:8px 0;font-size:14px">${subject || "—"}</td></tr>
          </table>
          <div style="margin-top:20px;padding:20px;background:#ffffff;border-radius:8px;border:1px solid #e8eef8">
            <p style="color:#6b7280;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#6b7280">
            Reply directly to this email to respond to ${name} at ${email}.
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[contact form] Resend error:", error);
    return {
      ok: false,
      message:
        "Something went wrong on our end. Please email us directly at info@biotechorthomart.com or reach us on WhatsApp.",
    };
  }

  return {
    ok: true,
    message: "Message sent — we'll get back to you within one business day.",
  };
}
