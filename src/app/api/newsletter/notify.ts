import type { NextApiRequest, NextApiResponse } from "next";

interface BrevoResponse {
  messageId?: string;
  code?: string;
  message?: string;
  [key: string]: unknown;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Método não permitido");

  const { title, slug, content, image, date, type } = req.body;

  if (!title || !slug || !content || !image || !date || !type) {
    return res
      .status(400)
      .json({ success: false, message: "Dados incompletos" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "iGaming México",
          email: "noreply@igamingmexico.com",
        },
        subject: `Nova ${type === "evento" ? "Evento" : "Notícia"}: ${title}`,
        htmlContent: `
          <h1>${title}</h1>
          <p><strong>Data:</strong> ${date}</p>
          <img src="${image}" alt="${title}" style="max-width: 100%; height: auto;" />
          <div>${content}</div>
          <p><a href="https://www.igamingmexico.com/${type}/${slug}" target="_blank">Ver no site</a></p>
        `,
        listIds: [3],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro da API Brevo:", errorData);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao enviar email via Brevo." });
    }

    const result: BrevoResponse = await response.json();
    return res.status(200).json({ success: true, data: result });
  } catch (error: Error | unknown) {
    console.error("Erro inesperado:", error);
    return res
      .status(500)
      .json({ success: false, message: "Erro inesperado ao enviar email." });
  }
}
