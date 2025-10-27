import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  courses: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const {
      name,
      email,
      countryCode,
      contact,
      courses,
      message,
    }: ContactFormData = await req.json();

    // ✅ Validate required fields
    if (!name || !email || !countryCode || !contact || !courses || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
      });
    }

    // ✅ Validate contact (10 digits)
    if (!/^\d{10}$/.test(contact)) {
      return new Response(
        JSON.stringify({ error: "Contact number must be 10 digits" }),
        { status: 400 }
      );
    }

    const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS, CONTACT_EMAIL_TO } = process.env;

    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS || !CONTACT_EMAIL_TO) {
      return new Response(
        JSON.stringify({ error: "Server email configuration missing" }),
        { status: 500 }
      );
    }

    // ✅ Configure transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: EMAIL_USER,
      to: CONTACT_EMAIL_TO,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>🚀 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country Code:</strong> ${countryCode}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Interested Course:</strong> ${courses}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Mail sent successfully!" }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Mail Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || "Unknown error",
        message: "Failed to send email.",
      }),
      { status: 500 }
    );
  }
}
