import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Fui demitido sem justa causa. Quais verbas posso receber?",
    answer:
      "Em geral, a rescisão pode envolver saldo de salário, aviso-prévio, férias e 13º proporcionais, entre outras parcelas. O que se aplica depende do contrato, do histórico e dos documentos do caso.",
  },
  {
    question: "Qual é o prazo para buscar meus direitos trabalhistas?",
    answer:
      "Existem prazos legais que variam conforme a situação, incluindo limites após o fim do contrato e períodos que podem ser discutidos. Como os prazos dependem dos detalhes do vínculo, procure orientação individual sem demora.",
  },
  {
    question: "Que documentos devo separar para uma avaliação?",
    answer:
      "Se disponíveis, organize carteira de trabalho, contrato, holerites, termo de rescisão, extratos relacionados ao vínculo e mensagens relevantes. Não envie documentos ou dados sensíveis pelo formulário inicial.",
  },
  {
    question: "Preciso entrar com uma ação para entender minha situação?",
    answer:
      "Não necessariamente. Uma análise jurídica pode ajudar a compreender os fatos e as alternativas possíveis. A decisão sobre como prosseguir é tomada após avaliar as circunstâncias do caso.",
  },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="faq-heading">
          <p className="eyebrow">DÚVIDAS FREQUENTES</p>
          <h2>Informação para dar o <em>próximo passo.</em></h2>
          <p>As respostas são gerais e não substituem a análise profissional de cada situação.</p>
          <a className="text-link" href="#contato">Ainda tem dúvidas? Fale conosco</a>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index}`;
            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={question}>
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="faq-trigger"
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{question}</span>
                    <ChevronDown size={19} aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-answer" hidden={!isOpen} id={answerId}>
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
