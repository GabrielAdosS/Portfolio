import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Na Vercel, o método vem em req.method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  try {
    console.log("Entrou na API da Vercel");

    // CRUCIAL: Na Vercel, o body JÁ VEM PARSEADO automaticamente!
    // Não use await req.json() ou req.text(), isso trava a execução.
    const { name, email, subject, message } = req.body;

    console.log("Dados recebidos no back:", { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes." });
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

    return res.status(200).json({ success: true, data });

  } catch (error: any) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: error.message });
  }
}