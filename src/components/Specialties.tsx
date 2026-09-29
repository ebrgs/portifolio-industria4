import { Activity, Cpu, RadioTower } from "lucide-react";

export default function Specialties() {
  return (
    <section id="industry" className="py-24 bg-brand-dark scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-3">Uma aplicação importante</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-6">Conhecimentos complementares em Indústria 4.0</h2>
          <p className="text-brand-light/70 text-lg leading-relaxed">Minha experiência com operações também se conecta a ambientes industriais: indicadores de desempenho, monitoramento, integração entre dados e processos físicos e diagnóstico técnico. Essas competências ampliam as possibilidades de automação para indústria, logística e outros setores.</p>
        </div>
        <div className="grid gap-4">
          {[
            { title: "Indicadores operacionais", detail: "Produtividade, metas e OEE", icon: Activity },
            { title: "Integração de processos", detail: "Dados, sistemas e rotina de operação", icon: RadioTower },
            { title: "Hardware e infraestrutura", detail: "Sensores, atuadores e diagnóstico", icon: Cpu }
          ].map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="flex items-center gap-4 bg-brand-gray/40 border border-brand-cyan/15 rounded-sm p-5"><Icon className="text-brand-cyan shrink-0" size={25} aria-hidden="true" /><div><h3 className="font-bold text-brand-light">{item.title}</h3><p className="text-brand-light/50 text-sm mt-1">{item.detail}</p></div></div>;
          })}
        </div>
      </div>
    </section>
  );
}
