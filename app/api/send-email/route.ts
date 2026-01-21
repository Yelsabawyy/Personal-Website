import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, subject, email, message } = await req.json();

    if (!fullName || !subject || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Send email to YOU (with sender details)
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your email
      subject: `New Message from ${fullName} - ${subject}`,
      text: `
You have received a new message from your website contact form:

Name: ${fullName}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
    });

    // 2️⃣ Send email to SENDER (thank you message)
    await transporter.sendMail({
      from: `"Youssef Elsabawy" <${process.env.EMAIL_USER}>`,
      to: email, // sender email
      subject: "Thanks for contacting me!",
      text: `Hi ${fullName},

Thank you for reaching out. I have received your message regarding "${subject}" and will respond within 24 hours.

Best regards,
Youssef Elsabawy
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
