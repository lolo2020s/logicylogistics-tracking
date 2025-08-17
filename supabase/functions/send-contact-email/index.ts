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
      from: "Logicy Transport <onboarding@resend.dev>",
      to: [email],
      subject: "Nous avons bien reçu votre message",
      html: `
        <h1>Merci ${name} !</h1>
        <p>Nous avons bien reçu votre message et vous répondrons rapidement.</p>
        <hr />
        <p><strong>Votre message :</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("Confirmation email result:", confirmation);

    // Forward to company
    const adminTo = "contact@logixy-transport.com";
    const notification = await resend.emails.send({
      from: "Logicy Transport <onboarding@resend.dev>",
      to: [adminTo],
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
