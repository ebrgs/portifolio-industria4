"use client";

import { motion } from "framer-motion";
import { Activity, Database, Server } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-gray/30 relative border-y border-brand-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Texto Sobre Mim */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-6 flex items-center gap-3">
              <span className="text-brand-cyan font-mono">01.</span> Sobre Mim
            </h2>
            <div className="space-y-4 text-brand-light/70 text-lg leading-relaxed">
              <p>
                Sou estudante de Engenharia de Software com forte perfil analítico e foco em soluções para a <strong className="text-brand-cyan">Indústria 4.0</strong>. Minha trajetória combina o planejamento e controle de operações com a habilidade técnica de integrar software, dados e processos físicos.
              </p>
              <p>
                Tenho facilidade com lógica de programação, estruturação de bancos de dados e diagnóstico de hardware. Meu objetivo é desenvolver sistemas de automação, painéis de monitoramento e scripts que aumentem a eficiência operacional.
              </p>
              <p>
                Busco sempre reduzir falhas e transformar dados complexos de chão de fábrica em decisões estratégicas, utilizando painéis e integrações de alto nível.
              </p>
            </div>
          </motion.div>

          {/* Elemento Visual / Painel Lateral */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-amber/20 blur-2xl rounded-full"></div>
            <div className="relative bg-brand-dark border border-brand-cyan/30 rounded-xl p-8 shadow-2xl overflow-hidden group">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
              
              <h3 className="text-brand-amber font-mono text-sm mb-6 uppercase tracking-widest border-b border-brand-amber/30 pb-2">
                Status Operacional
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-cyan/10 rounded-lg text-brand-cyan">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-light font-bold">Banco de Dados</h4>
                    <p className="text-sm text-brand-light/50">Estruturação e SQL / Prisma</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-cyan/10 rounded-lg text-brand-cyan">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-light font-bold">Automação Backend</h4>
                    <p className="text-sm text-brand-light/50">Node.js, NestJS, Spring Boot, Python</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-light font-bold">Troubleshooting (OEE)</h4>
                    <p className="text-sm text-brand-light/50">Diagnóstico de Hardwares e Sensores</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
