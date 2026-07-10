import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        error: "Método não permitido."
      }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          error: "Campos obrigatórios ausentes."
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "gabriel.17.set.2005@gmail.com",
      subject: `💼 Contato Portfólio: ${subject}`,
      html: `
                <h3>Nova mensagem do seu Portfólio!</h3>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail de contato:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p style="white-space: pre-wrap; background:#f4f4f5; padding:15px; border-radius:8px;">
                    ${message}
                </p>
            `
    });

    return new Response(
      JSON.stringify({
        success: true,
        data
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}