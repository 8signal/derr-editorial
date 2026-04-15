import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "amber@theeditderr.com";
const FROM_EMAIL = "The Edit Derr <hello@theeditderr.com>";

// Lazily instantiate so a missing key at build time doesn't crash the build.
let resendClient: Resend | null = null;
function getResend() {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string[];
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const interest = Array.isArray(body.interest) ? body.interest : [];

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "(not provided)";
  const safeInterest =
    interest.length > 0
      ? interest.map((i) => escapeHtml(i)).join(", ")
      : "(none selected)";

  const notificationHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #3E2723; max-width: 600px;">
      <h2 style="font-weight: 400; border-bottom: 1px solid #E0D6D0; padding-bottom: 12px;">
        New inquiry from theeditderr.com
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; width: 120px; color: #5D4037;"><strong>Name</strong></td><td>${safeName}</td></tr>
        <tr><td style="padding: 8px 0; color: #5D4037;"><strong>Email</strong></td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #5D4037;"><strong>Phone</strong></td><td>${safePhone}</td></tr>
        <tr><td style="padding: 8px 0; color: #5D4037;"><strong>Interested in</strong></td><td>${safeInterest}</td></tr>
      </table>
      <p style="margin-top: 24px; font-size: 13px; color: #8D7A74;">
        Reply directly to this email to respond to ${safeName}.
      </p>
    </div>
  `;

  const autoReplyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #3E2723; max-width: 600px; line-height: 1.6;">
      <p>Hi ${safeName},</p>
      <p>
        Thank you for reaching out. I got your message and I'll be in touch
        personally within one business day to find a time that works.
      </p>
      <p>
        In the meantime, if there's a piece of writing you'd like me to look at,
        feel free to start pulling it together. No pressure.
      </p>
      <p>Talk soon,<br />Amber</p>
      <hr style="border: none; border-top: 1px solid #E0D6D0; margin-top: 32px;" />
      <p style="font-size: 12px; color: #8D7A74;">
        Amber Derr Editorial &middot; theeditderr.com
      </p>
    </div>
  `;

  const resend = getResend();

  try {
    // 1. Send notification to Amber
    const notification = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: notificationHtml,
    });

    if (notification.error) {
      console.error("Resend notification error:", notification.error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    // 2. Send auto-reply to prospect (best-effort; don't fail the whole request if this errors)
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        replyTo: TO_EMAIL,
        subject: "Thanks for reaching out — Amber Derr Editorial",
        html: autoReplyHtml,
      });
    } catch (autoReplyError) {
      console.error("Auto-reply send failed (non-blocking):", autoReplyError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email amber@theeditderr.com directly." },
      { status: 500 }
    );
  }
}
