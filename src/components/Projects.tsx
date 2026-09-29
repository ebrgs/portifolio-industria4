import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cases } from "@/data/cases";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-brand-dark scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-3">Trabalho em prática</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">Projetos em destaque</h2>
          <p className="text-brand-light/65 text-lg">Três soluções demonstrativas com dados fictícios. Abra cada case para conhecer o problema, a implementação e os resultados da demonstração.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((project) => (
            <article key={project.slug} className="group flex flex-col overflow-hidden bg-brand-gray/40 border border-brand-cyan/20 rounded-sm hover:border-brand-cyan/60 transition-all hover:shadow-[0_0_30px_rgba(0,246,255,0.12)]">
              <Link href={`/cases/${project.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-brand-gray" aria-label={`Ver case: ${project.title}`}>
                <Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </Link>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-brand-cyan font-mono text-xs uppercase tracking-widest mb-3">{project.category}</p>
                <h3 className="text-xl font-bold text-brand-light mb-3">{project.title}</h3>
                <p className="text-brand-light/65 leading-relaxed text-sm flex-1">{project.summary}</p>
                <p className="text-brand-light/45 font-mono text-xs mt-5">{project.technologies.slice(0, 3).join(" + ")}</p>
                <Link href={`/cases/${project.slug}`} className="inline-flex items-center gap-2 mt-6 pt-5 border-t border-brand-light/10 text-brand-amber font-semibold hover:text-brand-cyan transition-colors">Ver case <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>

        <a href="https://github.com/ebrgs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-10 text-brand-light/70 hover:text-brand-cyan transition-colors"><ExternalLink size={18} aria-hidden="true" /> Ver outros projetos no GitHub <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
