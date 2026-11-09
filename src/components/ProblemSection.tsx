import { FileQuestion, Handshake, ReceiptText } from "lucide-react";

const concerns = [
  {
    icon: FileQuestion,
    title: "Não sabe se o acerto está correto?",
    text: "Verbas rescisórias, aviso-prévio e prazos podem gerar dúvidas importantes.",
  },
  {
    icon: ReceiptText,
    title: "Ficou algo pendente?",
    text: "Horas extras, férias ou outros direitos podem não ter sido considerados.",
  },
  {
    icon: Handshake,
    title: "Não sabe por onde começar?",
    text: "Uma conversa inicial ajuda a organizar os fatos e entender quais caminhos avaliar.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-wrap problems-section">
      <div className="section-heading">
        <p className="eyebrow">QUANDO O VÍNCULO TERMINA</p>
        <h2>Uma demissão pode deixar <em>muitas perguntas.</em></h2>
        <p className="section-intro">
          Cada relação de trabalho tem suas particularidades. Se algo não ficou claro,
          buscar informação é um passo importante.
        </p>
      </div>
      <div className="problem-grid">
        {concerns.map(({ icon: Icon, title, text }, index) => (
          <article className="problem-card" key={title}>
            <span className="card-number">0{index + 1}</span>
            <span className="card-icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
