import { resend } from "./lib/resend";

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
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "gabriel.17.set.2005@gmail.com",
            subject: "📄 Novo download do currículo - Portfólio",
            html: `
                <h3>Seu currículo foi baixado!</h3>

                <p>Alguém realizou o download do seu currículo através do portfólio.</p>

                <p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", {
                    dateStyle: "full",
                    timeStyle: "medium"
                })}</p>
            `
        });

        return new Response(
            JSON.stringify({
                success: true
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