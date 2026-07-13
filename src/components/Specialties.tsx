"use client";

import { motion } from "framer-motion";
import { BarChart3, Binary, LayoutDashboard, Cpu, Network, PenTool } from "lucide-react";

export default function Specialties() {
  const specialties = [
    {
      title: "Automação e Análise de Dados",
      icon: <Binary className="w-8 h-8 text-brand-cyan" />,
      description: "Desenvolvimento de scripts em Python para integração de sistemas e automação. Estruturação em SQL e modelagem de relatórios interativos no Power BI (KPIs e OEE).",
      delay: 0.2
    },
    {
      title: "Interfaces e Dashboards",
      icon: <LayoutDashboard className="w-8 h-8 text-brand-cyan" />,
      description: "Criação de aplicações web e painéis de controle em tempo real utilizando React, Next.js, Node.js e Prisma, focados no chão de fábrica e relatórios diários.",
      delay: 0.4
    },
    {
      title: "Hardware e Infraestrutura",
      icon: <Cpu className="w-8 h-8 text-brand-cyan" />,
      description: "Afinidade com diagnóstico e manutenção de hardwares, troubleshooting lógico/físico, interpretação de códigos de erro, CLPs, sensores e atuadores.",
      delay: 0.6
    }
  ];

  return (
    <section id="specialties" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-amber/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">
            <span className="text-brand-cyan font-mono mr-2">02.</span> Minhas Especialidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="bg-brand-gray/40 border border-brand-cyan/20 p-8 rounded-sm hover:border-brand-cyan/60 hover:bg-brand-gray/60 transition-all group relative overflow-hidden"
            >
              {/* Efeito Hover Neon */}
              <div className="absolute inset-0 bg-brand-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-brand-dark inline-block border border-brand-cyan/30 rounded-md shadow-[0_0_15px_rgba(0,246,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,246,255,0.4)] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-light mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-brand-light/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
