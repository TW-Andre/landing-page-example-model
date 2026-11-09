import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole, MessageCircle } from "lucide-react";
import { lawFirm } from "../config";

type ContactFormProps = {
  onOpenPrivacy: () => void;
};

type Lead = {
  name: string;
  phone: string;
  message: string;
};

async function submitLead(lead: Lead): Promise<void> {
  if (!lawFirm.webhookUrl) {
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    return;
  }

  const response = await fetch(lawFirm.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, source: "landing-page", submittedAt: new Date().toISOString() }),
  });

  if (!response.ok) {
    throw new Error(`O webhook respondeu com status ${response.status}.`);
  }

}

function createWhatsAppUrl(lead: Lead): string {
  const phone = lawFirm.whatsappNumber.replace(/\D/g, "");
  const message = [
    `Olá, meu nome é ${lead.name}.`,
    `Meu WhatsApp para retorno: ${lead.phone}.`,
    `Gostaria de conversar sobre: ${lead.message}`,
  ].join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function ContactForm({ onOpenPrivacy }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const lead: Lead = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!lawFirm.whatsappNumber.replace(/\D/g, "")) {
      setErrorMessage("O canal de WhatsApp ainda não está configurado. Tente novamente mais tarde.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead(lead);
      window.location.assign(createWhatsAppUrl(lead));
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? `Não foi possível registrar seu contato. ${error.message}`
          : "Não foi possível registrar seu contato. Tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-section" id="contato">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">CONVERSE COM A NOSSA EQUIPE</p>
          <h2>Conte o que aconteceu. Vamos <em>ouvir você.</em></h2>
          <p>
            Preencha os campos para iniciar uma conversa. As informações serão usadas
            para que a equipe entre em contato e compreenda seu relato inicial.
          </p>
          <div className="contact-promise">
            <span><MessageCircle size={19} /></span>
            <p><strong>Atendimento pelo WhatsApp</strong><br />A conversa continua em um canal direto e familiar.</p>
          </div>
          <div className="contact-security"><LockKeyhole size={15} /> Seus dados são tratados com cuidado e confidencialidade.</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>01 <i /> 03</span>
            <h3>Inicie seu contato</h3>
            <p>Os campos com * são obrigatórios.</p>
          </div>
          <label htmlFor="contact-name">Seu nome *</label>
          <input autoComplete="name" id="contact-name" maxLength={100} name="name" placeholder="Como podemos chamar você?" required />

          <label htmlFor="contact-phone">WhatsApp com DDD *</label>
          <input
            autoComplete="tel"
            id="contact-phone"
            maxLength={20}
            name="phone"
            placeholder="(11) 99999-9999"
            required
            type="tel"
          />

          <label htmlFor="contact-message">Conte brevemente o que aconteceu *</label>
          <textarea
            id="contact-message"
            maxLength={1000}
            name="message"
            placeholder="Não inclua documentos, senhas ou informações sensíveis."
            required
            rows={4}
          />
          <div className="character-note">Até 1.000 caracteres</div>

          <label className="consent-label">
            <input name="consent" required type="checkbox" />
            <span>
              Concordo com a coleta dos meus dados para contato e aceito a{" "}
              <button className="privacy-link" onClick={onOpenPrivacy} type="button">
                Política de Privacidade
              </button>.
            </span>
          </label>

          {!lawFirm.webhookUrl && (
            <p className="demo-notice">
              Modo de demonstração: este formulário não registra dados em um CRM. Ao continuar,
              a mensagem será aberta no WhatsApp.
            </p>
          )}

          {errorMessage && (
            <p className="form-feedback" role="status">{errorMessage}</p>
          )}

          <button className="button button-primary form-submit" disabled={isSubmitting} id="btn-whatsapp-form" type="submit">
            {isSubmitting ? "Preparando contato..." : "Continuar pelo WhatsApp"}
            {isSubmitting ? <span className="button-spinner" aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
          </button>
          <p className="form-footnote"><CheckCircle2 size={14} /> Você revisa a mensagem antes de enviá-la pelo WhatsApp.</p>
        </form>
      </div>
    </section>
  );
}
