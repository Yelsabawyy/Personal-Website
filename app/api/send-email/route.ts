import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Youssef Elsabawy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Test Authentication-App : Your OTP",
      text: `Your OTP is: `,
      html: `<p>Hello,</p><p>Your OTP is: <b></b></p>`,
    });

    return NextResponse.json({ message: "OTP sent to email"}, { status: 200 });
  } catch (error) {
    console.error("Forget OTP error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
