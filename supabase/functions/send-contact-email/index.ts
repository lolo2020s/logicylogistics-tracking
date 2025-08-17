import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, message }: ContactPayload = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send confirmation to user
    const confirmation = await resend.emails.send({
      from: "Logicy Transport <contact@logixy-transport.com>",
      to: [email],
      reply_to: "contact@logixy-transport.com",
      subject: "Votre demande a bien été reçue – LOGICY TRANSPORT",
      html: `
        <div style="background:#f7f7fb;padding:24px;">
          <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #eaeaea;">
            <tr>
              <td style="padding:24px 24px 0;">
                <h1 style="margin:0;font-size:20px;color:#111827;">Merci ${name},</h1>
                <p style="margin:12px 0 0;color:#374151;font-size:14px;line-height:1.6;">
                  Nous avons bien reçu votre demande de contact. Notre équipe vous répondra sous 24 à 48 heures ouvrées.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px;">
                <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:16px;">
                  <p style="margin:0 0 8px;color:#111827;font-weight:600;">Récapitulatif de votre message</p>
                  <p style="margin:0;color:#374151;white-space:pre-wrap;">${message}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 16px;">
                <p style="margin:0;color:#374151;font-size:14px;">Si vous souhaitez nous joindre directement, répondez à cet email ou utilisez les coordonnées ci-dessous :</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 24px;">
                <p style="margin:8px 0 0;color:#111827;font-size:14px;">LOGICY TRANSPORT</p>
                <p style="margin:4px 0 0;color:#374151;font-size:14px;">contact@logixy-transport.com • +31 6 26 01 86 93</p>
                <p style="margin:4px 0 0;color:#6b7280;font-size:12px;">Gesworenhoekseweg 4, 5047 TM Tilburg, Pays-Bas</p>
              </td>
            </tr>
          </table>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin:12px 0 0;">Merci de votre confiance.</p>
        </div>
      `,
    });

    console.log("Confirmation email result:", confirmation);

    // Forward to company
    const adminTo = "contact@logixy-transport.com";
    const notification = await resend.emails.send({
      from: "Logicy Transport <contact@logixy-transport.com>",
      to: [adminTo],
      reply_to: email,
      subject: `Nouveau message de contact: ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("Admin notification result:", notification);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
