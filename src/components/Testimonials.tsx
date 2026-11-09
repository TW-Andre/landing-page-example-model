import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "[Insira um relato real autorizado sobre clareza no atendimento.]",
    name: "Depoimento autorizado",
    context: "Atendimento trabalhista",
  },
  {
    quote: "[Insira um relato real autorizado sobre orientação e acolhimento.]",
    name: "Depoimento autorizado",
    context: "Orientação inicial",
  },
  {
    quote: "[Insira um relato real autorizado sobre a experiência de atendimento.]",
    name: "Depoimento autorizado",
    context: "Atendimento trabalhista",
  },
];

export default function Testimonials() {
  return (
    <section className="section-wrap testimonials-section">
      <div className="testimonial-heading">
        <div>
          <p className="eyebrow">RELAÇÃO DE CONFIANÇA</p>
          <h2>Um atendimento que começa por <em>escutar.</em></h2>
        </div>
        <p className="testimonial-disclaimer">Substitua os textos de exemplo por relatos verdadeiros, autorizados e sem referências a resultados. Experiências individuais não garantem resultados semelhantes.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <figure className="testimonial-card" key={item.quote}>
            <div className="testimonial-top">
              <Quote size={22} aria-hidden="true" />
              <span>RELATO</span>
            </div>
            <blockquote>“{item.quote}”</blockquote>
            <figcaption><strong>{item.name}</strong><span>{item.context}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
