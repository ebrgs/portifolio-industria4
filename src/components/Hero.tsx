"use client";

import { motion } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1a2332_1px,transparent_1px),linear-gradient(to_bottom,#1a2332_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray/50 border border-brand-cyan/30 text-brand-cyan mb-8"
        >
          <Terminal size={16} />
          <span className="text-sm font-mono tracking-widest uppercase">Sistema Online . . .</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-brand-light tracking-tight mb-4"
        >
          ELIAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-amber">BORGES</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-light/70 font-mono mb-8 max-w-3xl mx-auto glitch-effect"
          data-text="Engenharia de Software & Indústria 4.0"
        >
          Engenharia de Software & Indústria 4.0
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-brand-light/50 max-w-2xl mx-auto mb-10"
        >
          Integrando software, dados e processos físicos para elevar a eficiência operacional. Transformando chão de fábrica em inteligência estratégica.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-brand-cyan text-brand-dark font-bold uppercase tracking-wider rounded-sm hover:bg-brand-cyan/90 hover:shadow-[0_0_20px_rgba(0,246,255,0.5)] transition-all flex items-center gap-2">
            Ver Projetos
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-brand-amber text-brand-amber font-bold uppercase tracking-wider rounded-sm hover:bg-brand-amber/10 transition-all flex items-center gap-2">
            Iniciar Conexão
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cyan/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
