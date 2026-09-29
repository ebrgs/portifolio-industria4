import { BarChart3, Code2, Database, Workflow } from "lucide-react";

const focusAreas = [
  { label: "Dados", description: "Organização e análise", icon: Database },
  { label: "Automação", description: "Rotinas mais eficientes", icon: Workflow },
  { label: "BI", description: "Indicadores para decidir", icon: BarChart3 },
  { label: "Software", description: "Ferramentas sob medida", icon: Code2 }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-gray/30 border-y border-brand-cyan/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-3">Quem está por trás das soluções</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-7">Sobre mim</h2>
          <div className="space-y-5 text-brand-light/70 text-lg leading-relaxed">
            <p>Atuo com dados, controles operacionais e automação de processos, combinando experiência em operações com desenvolvimento de software para transformar atividades manuais em soluções mais eficientes.</p>
            <p>Trabalho com Excel, Power BI, Python, SQL e desenvolvimento de ferramentas voltadas à análise de dados, automação e melhoria de processos.</p>
            <p>Atualmente curso Engenharia de Software e tenho especial interesse na aplicação dessas tecnologias em ambientes empresariais e na Indústria 4.0.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/15 to-brand-amber/15 blur-2xl rounded-full" />
          <div className="relative bg-brand-dark border border-brand-cyan/30 rounded-xl p-8 shadow-2xl">
            <h3 className="text-brand-amber font-mono text-sm mb-7 uppercase tracking-widest border-b border-brand-amber/30 pb-3">Áreas de atuação</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.label} className="flex items-start gap-3">
                    <div className="p-2.5 bg-brand-cyan/10 rounded-lg text-brand-cyan"><Icon size={22} aria-hidden="true" /></div>
                    <div><h4 className="font-bold text-brand-light">{area.label}</h4><p className="text-sm text-brand-light/50 mt-1">{area.description}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
