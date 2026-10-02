import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, business, email, whatsapp, service, message } = req.body;

    if (!name || !business || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "emessWeb <onboarding@resend.dev>",
      to: ["emess2g@gmail.com"],
      replyTo: email,
      subject: `New Project Request — ${business}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #111;">
          
          <div style="padding: 24px 0; border-bottom: 1px solid #eee;">
            <h1 style="margin: 0; font-size: 28px;">
              New emessWeb Project Request
            </h1>
          </div>

          <div style="padding: 28px 0;">
            
            <h2 style="font-size: 18px; margin-bottom: 20px;">
              Client Information
            </h2>

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Business:</strong><br />
              ${business}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>WhatsApp:</strong><br />
              ${whatsapp || "Not provided"}
            </p>

            <p>
              <strong>Requested Service:</strong><br />
              ${service}
            </p>

            <h2 style="font-size: 18px; margin-top: 32px; margin-bottom: 12px;">
              Project Details
            </h2>

            <div style="
              background: #f7f7f7;
              padding: 20px;
              border-radius: 10px;
              white-space: pre-line;
              line-height: 1.6;
            ">
              ${message}
            </div>

          </div>

          <div style="
            padding: 20px 0;
            border-top: 1px solid #eee;
            color: #777;
            font-size: 13px;
          ">
            Sent from the emessWeb website.
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project request sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
