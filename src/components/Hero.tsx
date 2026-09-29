import { ArrowDown, ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2332_1px,transparent_1px),linear-gradient(to_bottom,#1a2332_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_45%,#000_50%,transparent_100%)] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,650px)] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray/60 border border-brand-cyan/30 text-brand-cyan mb-8">
          <Terminal size={16} aria-hidden="true" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase">Elias Borges • Automação & Dados</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-brand-light max-w-5xl mx-auto">
          Automação de Processos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-amber">Dados e Business Intelligence</span>
        </h1>

        <p className="text-lg md:text-xl text-brand-light/70 max-w-3xl mx-auto mt-8 leading-relaxed">
          Transformo planilhas, relatórios e processos manuais em automações, dashboards e soluções de dados que economizam tempo e ajudam na tomada de decisão.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-brand-dark font-bold uppercase tracking-wider rounded-sm hover:bg-brand-cyan/90 hover:shadow-[0_0_20px_rgba(0,246,255,0.35)] transition-all inline-flex justify-center items-center gap-2">
            Ver projetos <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href="mailto:e.borges289@gmail.com?subject=Solicitar%20or%C3%A7amento" className="w-full sm:w-auto px-8 py-4 border border-brand-amber text-brand-amber font-bold uppercase tracking-wider rounded-sm hover:bg-brand-amber/10 transition-all inline-flex justify-center items-center gap-2">
            Solicitar orçamento <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="mt-10 text-sm font-mono tracking-wide text-brand-light/50">Excel <span className="text-brand-cyan">•</span> Power BI <span className="text-brand-cyan">•</span> Python <span className="text-brand-cyan">•</span> SQL <span className="text-brand-cyan">•</span> Automação</p>
        <p className="mt-4 text-sm text-brand-light/45">Soluções para operações, serviços e Indústria 4.0</p>
      </div>
    </section>
  );
}
