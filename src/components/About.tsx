import { ArrowRight, BadgeCheck } from "lucide-react";
import { lawFirm } from "../config";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-visual" aria-hidden="true">
          <div className="about-portrait">
            <div className="portrait-arch" />
            <div className="portrait-initials">MA</div>
            <div className="portrait-label"><BadgeCheck size={15} /> ADVOCACIA RESPONSÁVEL</div>
          </div>
          <span className="about-deco about-deco-one" />
          <span className="about-deco about-deco-two" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">ATUAÇÃO TÉCNICA, ATENDIMENTO HUMANO</p>
          <h2>Você merece ser ouvido com <em>atenção.</em></h2>
          <p>
            {lawFirm.attorneyName} atua em Direito do Trabalho com foco em orientar
            trabalhadores de forma cuidadosa e transparente. Cada caso é analisado a
            partir de seus próprios documentos, prazos e circunstâncias.
          </p>
          <p>
            A primeira conversa é um espaço para organizar suas dúvidas e entender quais
            informações podem ser relevantes para uma avaliação jurídica.
          </p>
          <a className="text-link" href="#contato">Converse com a equipe <ArrowRight size={17} /></a>
          <div className="about-credentials">
            <span>{lawFirm.oab}</span>
            <span>Atuação em Direito do Trabalho</span>
          </div>
        </div>
      </div>
    </section>
  );
}
