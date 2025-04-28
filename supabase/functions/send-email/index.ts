import { createClient } from "npm:@supabase/supabase-js@2.39.0";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const TO_EMAIL = "EricW@sserman.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the contact form submission first
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, subject, message }]);

    if (dbError) {
      console.error("Failed to store contact submission:", dbError);
      throw new Error("Failed to store contact submission");
    }

    // Send email using Supabase's email service
    const { error: emailError } = await supabase.auth.admin.inviteUserByEmail(TO_EMAIL, {
      data: {
        name,
        subject,
        message,
      },
    });

    if (emailError) {
      console.error("Failed to send email:", emailError);
      throw new Error("Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
