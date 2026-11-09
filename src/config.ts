export const lawFirm = {
  name: "Sua Advocacia",
  attorneyName: "Nome do(a) Advogado(a)",
  oab: "OAB/UF 00000",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
  webhookUrl: import.meta.env.VITE_LEAD_WEBHOOK_URL ?? "",
} as const;
