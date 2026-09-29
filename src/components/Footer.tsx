import { ArrowUpRight, ExternalLink, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-gray/30 py-16 border-t border-brand-cyan/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12 border-b border-brand-light/10">
          <div className="max-w-2xl">
            <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-3">Vamos conversar</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">Qual processo você quer simplificar?</h2>
            <p className="text-brand-light/65 text-lg">Conte sobre sua rotina, seus dados ou o relatório que precisa melhorar. Podemos começar por e-mail.</p>
          </div>
          <a href="mailto:e.borges289@gmail.com?subject=Solicitar%20or%C3%A7amento" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-cyan text-brand-dark font-bold rounded-sm hover:bg-brand-cyan/90 transition-colors shrink-0">Solicitar orçamento <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-9">
          <div><div className="flex items-center gap-2 text-brand-light font-bold tracking-widest"><Terminal className="text-brand-cyan" size={22} aria-hidden="true" /> EBRGS<span className="text-brand-amber">.SYS</span></div><p className="text-brand-light/40 text-sm mt-2">© {new Date().getFullYear()} Elias Borges.</p></div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 text-sm">
            <a href="mailto:e.borges289@gmail.com" className="inline-flex items-center gap-2 text-brand-light/70 hover:text-brand-cyan transition-colors"><Mail size={17} aria-hidden="true" /> e.borges289@gmail.com</a>
            <a href="https://www.linkedin.com/in/eliasborgess/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-light/70 hover:text-brand-cyan transition-colors"><ExternalLink size={17} aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/ebrgs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-light/70 hover:text-brand-cyan transition-colors"><ExternalLink size={17} aria-hidden="true" /> GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
