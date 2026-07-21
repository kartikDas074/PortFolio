import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Strict Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (Name, Email, Subject, Message) are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = "kartikdas209774@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("⚠️ RESEND_API_KEY is missing in environment variables.");
      return NextResponse.json(
        {
          error:
            "Resend API Key is missing. Please add RESEND_API_KEY to your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send email via Resend SDK
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0f172a; color: #f8fafc; border-radius: 16px; border: 1px solid #1e293b;">
          <h2 style="color: #38bdf8; margin-top: 0; font-size: 20px;">New Portfolio Inquiry</h2>
          <div style="background-color: #1e293b; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
            <p style="margin: 4px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
          <h3 style="color: #cbd5e1; font-size: 14px; margin-bottom: 8px;">Message Content:</h3>
          <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #e2e8f0; background-color: #020617; padding: 16px; border-radius: 8px; border: 1px solid #1e293b;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Sending Error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend API." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully to kartikdas209774@gmail.com!",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while sending message." },
      { status: 500 }
    );
  }
}
