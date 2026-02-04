export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "E-mail obrigatório" });
  }

  try {
    // 1️⃣ Criar ou atualizar contato
    const contactResponse = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contacts`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: {
            email,
            firstName: nome,
          },
        }),
      }
    );

    const contactData = await contactResponse.json();
    const contactId = contactData.contact.id;

    // 2️⃣ Aplicar TAG ebook-gratis
    await fetch(
      `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contactTags`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactTag: {
            contact: contactId,
            tag: process.env.ACTIVE_CAMPAIGN_EBOOK_TAG_ID,
          },
        }),
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao enviar para o ActiveCampaign" });
  }
}
