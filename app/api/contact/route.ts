import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  countryCode: string;
  address: string;
  courses: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const {
      name,
      email,
      contact,
      countryCode,
      address,
      courses,
      message,
    }: ContactFormData = await req.json();

    // ✅ Validate required fields
    if (!name || !email || !contact || !address || !courses || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // ✅ Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>🚀 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${countryCode} ${contact}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Interested Course:</strong> ${courses}</p>
        <p><strong>Message Details:</strong> ${message}</p>
      `,
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mail sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Mail Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Unknown error",
        message: "Failed to send email.",
      }),
      { status: 500 }
    );
  }
}
