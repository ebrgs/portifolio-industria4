import { ArrowUpRight, BarChart3, DatabaseZap, Workflow, Wrench } from "lucide-react";

const services = [
  {
    title: "Automação de Processos",
    description: "Automação de tarefas repetitivas, relatórios, arquivos e rotinas utilizando Python, Excel e outras ferramentas.",
    icon: Workflow
  },
  {
    title: "Dashboards & BI",
    description: "Painéis de indicadores em Power BI e Excel para acompanhamento operacional e gerencial.",
    icon: BarChart3
  },
  {
    title: "Tratamento & Integração de Dados",
    description: "Consolidação, limpeza, transformação e integração de diferentes fontes de dados.",
    icon: DatabaseZap
  },
  {
    title: "Soluções Personalizadas",
    description: "Ferramentas internas e pequenos sistemas para solucionar necessidades específicas da operação.",
    icon: Wrench
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-gray/30 border-y border-brand-cyan/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-3">O que posso fazer por você</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">Serviços</h2>
          <p className="text-brand-light/65 text-lg">Da organização dos dados à entrega de ferramentas que simplificam a rotina e dão mais clareza às decisões.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="bg-brand-dark border border-brand-cyan/20 p-7 rounded-sm hover:border-brand-cyan/60 hover:shadow-[0_0_28px_rgba(0,246,255,0.1)] transition-all flex flex-col min-h-72">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/20 rounded-md text-brand-cyan"><Icon size={28} aria-hidden="true" /></div>
                  <span className="font-mono text-brand-light/30 text-sm">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-light mb-3">{service.title}</h3>
                <p className="text-brand-light/65 text-sm leading-relaxed flex-grow">{service.description}</p>
                <a href="mailto:e.borges289@gmail.com?subject=Solicitar%20or%C3%A7amento" className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-brand-amber hover:text-brand-cyan transition-colors">Conversar sobre o serviço <ArrowUpRight size={16} aria-hidden="true" /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
