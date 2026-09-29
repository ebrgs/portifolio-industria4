const steps = [
  {
    number: "01",
    title: "Entendo o processo",
    description: "Você mostra como a atividade é realizada hoje.",
  },
  {
    number: "02",
    title: "Proponho a solução",
    description: "Definimos escopo, prazo e entregáveis.",
  },
  {
    number: "03",
    title: "Desenvolvo e valido",
    description: "A solução é construída e apresentada para testes.",
  },
  {
    number: "04",
    title: "Entrego e acompanho",
    description: "Entrega final, orientação de uso e suporte acordado.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-16 border-b border-brand-cyan/10 bg-brand-dark py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-brand-cyan">
            Do primeiro contato à entrega
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Como funciona</h2>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-brand-cyan/15 bg-brand-gray/40 p-6"
            >
              <span className="mb-8 block font-mono text-3xl font-bold text-brand-amber">
                {step.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="leading-relaxed text-brand-light/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
