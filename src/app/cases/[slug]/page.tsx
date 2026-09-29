import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cases, getCase } from "@/data/cases";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCase(slug);
  if (!project) return { title: "Case não encontrado" };
  return {
    title: `${project.title} | Elias Borges`,
    description: project.summary,
    openGraph: { images: [project.thumbnail?.src ?? project.images[0].src] }
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = getCase(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <header className="relative overflow-hidden py-20 border-b border-brand-cyan/15 bg-brand-gray/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2332_1px,transparent_1px),linear-gradient(to_bottom,#1a2332_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-amber transition-colors text-sm mb-10"><ArrowLeft size={17} aria-hidden="true" /> Voltar aos projetos</Link>
            <p className="text-brand-amber font-mono text-sm uppercase tracking-widest mb-4">Case demonstrativo • {project.category}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light tracking-tight max-w-4xl">{project.title}</h1>
            <p className="text-lg md:text-xl text-brand-light/70 max-w-3xl mt-6 leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap gap-3 mt-8">{project.technologies.map((technology) => <span key={technology} className="px-3 py-1.5 border border-brand-cyan/30 bg-brand-dark/70 text-brand-cyan font-mono text-sm rounded-sm">{technology}</span>)}</div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <section className="bg-brand-gray/40 border border-brand-cyan/15 p-8 rounded-sm"><p className="font-mono text-brand-cyan text-sm mb-3">01 / PROBLEMA</p><h2 className="text-2xl font-bold text-brand-light mb-4">O desafio</h2><p className="text-brand-light/70 leading-relaxed">{project.problem}</p></section>
            <section className="bg-brand-gray/40 border border-brand-cyan/15 p-8 rounded-sm"><p className="font-mono text-brand-cyan text-sm mb-3">02 / SOLUÇÃO</p><h2 className="text-2xl font-bold text-brand-light mb-4">A solução</h2><p className="text-brand-light/70 leading-relaxed">{project.solution}</p></section>
          </div>

          <section className="mb-20 max-w-4xl"><p className="font-mono text-brand-cyan text-sm mb-3">03 / PROCESSO</p><h2 className="text-3xl font-bold text-brand-light mb-8">Como funciona</h2><ol className="space-y-5">{project.steps.map((step, index) => <li key={step} className="flex gap-5 items-start"><span className="shrink-0 w-9 h-9 flex items-center justify-center border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan font-mono text-sm">{String(index + 1).padStart(2, "0")}</span><p className="text-brand-light/70 leading-relaxed pt-1">{step}</p></li>)}</ol></section>

          <section className="mb-20"><p className="font-mono text-brand-cyan text-sm mb-3">04 / FERRAMENTAS</p><h2 className="text-3xl font-bold text-brand-light mb-6">Tecnologias</h2><div className="flex flex-wrap gap-3">{project.technologies.map((technology) => <span key={technology} className="px-4 py-2 bg-brand-gray border border-brand-cyan/20 text-brand-light rounded-sm">{technology}</span>)}</div></section>

          <section className="mb-20 bg-brand-cyan/5 border border-brand-cyan/25 p-8 md:p-10 rounded-sm"><p className="font-mono text-brand-cyan text-sm mb-3">05 / ENTREGA</p><h2 className="text-3xl font-bold text-brand-light mb-7">Resultado da demonstração</h2><ul className="grid md:grid-cols-2 gap-6">{project.results.map((result) => <li key={result} className="flex gap-3 items-start text-brand-light/75 leading-relaxed"><CheckCircle2 className="text-brand-cyan shrink-0 mt-1" size={20} aria-hidden="true" />{result}</li>)}</ul><p className="text-brand-light/45 text-sm mt-7">Este é um projeto de portfólio com dados fictícios; os números descrevem a demonstração, não um resultado de cliente.</p></section>

          <section className="mb-16"><p className="font-mono text-brand-cyan text-sm mb-3">06 / VISUAL</p><h2 className="text-3xl font-bold text-brand-light mb-8">Imagens do projeto</h2><div className="grid gap-8">{project.images.map((item) => <figure key={item.src} className="overflow-hidden bg-brand-gray/40 border border-brand-cyan/20 rounded-sm"><a href={item.src} target="_blank" rel="noreferrer" aria-label={`Abrir imagem completa: ${item.caption}`} className="block">{item.preview === "left-square" ? <div className="relative aspect-square max-w-[920px] mx-auto"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 920px) 100vw, 920px" className="object-cover object-left" /></div> : <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 1280px) 100vw, 1200px" className="w-full h-auto" />}</a><figcaption className="px-5 py-4 text-brand-light/50 text-sm">{item.caption} · <a href={item.src} target="_blank" rel="noreferrer" className="text-brand-cyan hover:text-brand-amber transition-colors">Abrir imagem completa</a></figcaption></figure>)}</div></section>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-brand-light/10">
            <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 px-6 py-4 bg-brand-cyan text-brand-dark font-bold rounded-sm hover:bg-brand-cyan/90 transition-colors"><ExternalLink size={19} aria-hidden="true" /> Ver código e documentação <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="mailto:e.borges289@gmail.com?subject=Projeto%20de%20automa%C3%A7%C3%A3o%20e%20dados" className="inline-flex justify-center items-center gap-2 px-6 py-4 border border-brand-amber text-brand-amber font-bold rounded-sm hover:bg-brand-amber/10 transition-colors">Solicitar solução semelhante <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
