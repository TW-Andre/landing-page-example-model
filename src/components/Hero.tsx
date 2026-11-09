import { ArrowDown, ArrowRight, Check, ShieldCheck } from "lucide-react";

const assurances = ["Atendimento com escuta e respeito", "Orientação clara sobre os próximos passos"];

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> DIREITO DO TRABALHO</div>
        <h1>Foi demitido e tem dúvidas sobre seus <em>direitos?</em></h1>
        <p className="hero-description">
          Entender o que aconteceu é o primeiro passo. Conte sua situação para receber
          orientação jurídica com clareza, atenção e respeito.
        </p>
        <a className="button button-primary hero-cta" href="#contato" id="btn-whatsapp-hero">
          Verificar meu caso <ArrowRight size={18} aria-hidden="true" />
        </a>
        <ul className="assurance-list">
          {assurances.map((item) => (
            <li key={item}><Check size={15} aria-hidden="true" /> {item}</li>
          ))}
        </ul>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-ring art-ring-outer" />
        <div className="art-ring art-ring-inner" />
        <div className="art-sun" />
        <div className="art-panel">
          <div className="art-panel-top"><span /><span /><span /></div>
          <div className="art-document">
            <div className="art-document-icon"><ShieldCheck size={26} strokeWidth={1.5} /></div>
            <span className="art-line art-line-long" />
            <span className="art-line art-line-medium" />
            <span className="art-line art-line-short" />
            <div className="art-stamp">ORIENTAÇÃO<br />JURÍDICA</div>
          </div>
        </div>
        <div className="art-caption"><span className="caption-dot" /> Informação para decidir com segurança</div>
        <div className="hero-scroll"><ArrowDown size={16} /> CONHEÇA SEUS DIREITOS</div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  );
}
