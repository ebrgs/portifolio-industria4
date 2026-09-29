"use client";

import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Serviços", href: "/#services" },
  { name: "Como funciona", href: "/#process" },
  { name: "Projetos", href: "/#projects" },
  { name: "Sobre", href: "/#about" },
  { name: "Contato", href: "/#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-brand-dark/90 backdrop-blur-md border-b border-brand-cyan/20" aria-label="Navegação principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/#top" className="flex items-center gap-2" onClick={() => setIsOpen(false)} aria-label="Elias Borges, ir para o início"><Cpu className="text-brand-cyan h-8 w-8" aria-hidden="true" /><span className="text-xl font-bold tracking-widest text-brand-light">EBRGS<span className="text-brand-cyan">.SYS</span></span></Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => <Link key={link.name} href={link.href} className="text-brand-light/80 hover:text-brand-cyan transition-colors text-sm font-medium uppercase tracking-wider">{link.name}</Link>)}
        </div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-brand-cyan hover:text-white focus-visible:outline-2 focus-visible:outline-brand-cyan" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} aria-controls="mobile-menu">
          {isOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>
      {isOpen && <div id="mobile-menu" className="md:hidden bg-brand-dark border-t border-brand-cyan/20 px-4 py-3">{links.map((link) => <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-brand-light hover:text-brand-cyan">{link.name}</Link>)}</div>}
    </nav>
  );
}
