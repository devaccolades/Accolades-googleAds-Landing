import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Debug log
    console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
    console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "✔️ Loaded" : "❌ Missing");
    console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

    let transporter = nodemailer.createTransport({
      service: "gmail",  // <-- use service instead of host/port for Gmail
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
