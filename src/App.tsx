import { useState } from "react";
import { ArrowUpRight, Scale } from "lucide-react";
import { lawFirm } from "./config";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf9f6] text-[#21323a]">
      <header className="site-header">
        <div className="brand" aria-label={lawFirm.name}>
          <span className="brand-mark"><Scale size={19} strokeWidth={1.7} /></span>
          <span>{lawFirm.name}</span>
        </div>
        <a className="header-contact" href="#contato">
          Fale com a equipe <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main>
        <Hero />
        <ProblemSection />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark"><Scale size={18} strokeWidth={1.7} /></span>
            <div>
              <strong>{lawFirm.name}</strong>
              <span>Direito do Trabalho</span>
            </div>
          </div>
          <p>
            {lawFirm.attorneyName} <span aria-hidden="true">·</span> {lawFirm.oab}
          </p>
          <span className="footer-note">Conteúdo informativo. Cada situação deve ser avaliada individualmente.</span>
        </div>
      </footer>

      {privacyOpen && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPrivacyOpen(false);
          }}
        >
          <section
            aria-labelledby="privacy-title"
            aria-modal="true"
            className="privacy-dialog"
            role="dialog"
          >
            <button
              aria-label="Fechar política de privacidade"
              className="dialog-close"
              onClick={() => setPrivacyOpen(false)}
              type="button"
            >
              ×
            </button>
            <p className="eyebrow">Privacidade e proteção de dados</p>
            <h2 id="privacy-title">Como tratamos seus dados</h2>
            <p>
              Os dados informados neste formulário são usados para retornar seu contato e
              compreender, de forma inicial, a situação relatada. O envio pelo WhatsApp
              compartilha a mensagem com o serviço do WhatsApp, sujeito às políticas
              próprias da plataforma.
            </p>
            <p>
              Não informe dados sensíveis ou documentos nesta etapa. Você pode solicitar
              informações sobre o tratamento dos seus dados pelo próprio canal de contato.
              A equipe deve revisar e complementar esta política antes de publicar o site.
            </p>
            <button className="button button-primary" onClick={() => setPrivacyOpen(false)} type="button">
              Entendi
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
