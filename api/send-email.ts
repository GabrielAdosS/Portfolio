import { Resend } from 'resend';
import DOMPurify from 'isomorphic-dompurify';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const safeMessage = DOMPurify.sanitize(message, {
      ALLOWED_TAGS: ['a', 'b', 'i', 'em', 'strong', 'p', 'br'],
      ALLOWED_ATTR: ['href', 'target', 'rel']
    });

    const safeName = DOMPurify.sanitize(name, { ALLOWED_TAGS: [] });
    const safeSubject = DOMPurify.sanitize(subject, { ALLOWED_TAGS: [] });

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'gabriel.17.set.2005@gmail.com',
      subject: `💻 Contato Portfólio: ${safeSubject}`,
      html: `
                <h3>Nova mensagem do seu Portfólio!</h3>
                <p><strong>Nome:</strong> ${safeName}</p>
                <p><strong>E-mail de contato:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${safeSubject}</p>
                <p><strong>Mensagem:</strong></p>
                <div style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 8px;">
                    ${safeMessage}
                </div>
            `
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}