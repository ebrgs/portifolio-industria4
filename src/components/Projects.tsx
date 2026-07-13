"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, GitMerge, FileCode2 } from "lucide-react";
import { useEffect, useState } from "react";

// Lista dos repositórios que atualizamos
const SELECTED_REPOS = [
  "webAppAgendamentos",
  "dashboard-relatorios",
  "agendamentos-api",
  "gerenciador-tarefas-api-springboot-",
  "app-agenda",
  "back-app-agenda",
  "kenzie_commerce",
  "clinica-app",
  "chatinho-app",
  "fotos_api",
  "simulador-oee-python-powerbi"
];

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os repositórios públicos
    // Para os repositórios privados (clinica-app, etc), eles não aparecerão na chamada sem autenticação.
    // Nesses casos, vamos garantir que eles existam estaticamente se a API não retornar.
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/ebrgs/repos?per_page=100");
        if (res.ok) {
          const data: Repo[] = await res.json();
          // Filtra apenas os que definimos como melhores
          const filtered = data.filter(repo => SELECTED_REPOS.includes(repo.name));
          
          // Adiciona manualmente os repositórios privados caso não voltem na API pública
          const missingRepos = SELECTED_REPOS.filter(
            name => !filtered.find(r => r.name === name)
          );

          const manualRepos = missingRepos.map((name, i) => ({
            id: 99990 + i,
            name: name,
            description: "Acesso restrito/Privado ou em outro escopo. Projeto atualizado com documentação estruturada.",
            html_url: `https://github.com/ebrgs/${name}`,
            language: "Code",
            updated_at: new Date().toISOString()
          }));

          setRepos([...filtered, ...manualRepos]);
        }
      } catch (error) {
        console.error("Erro ao buscar repositórios", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24 bg-brand-gray/30 border-t border-brand-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4 flex items-center gap-3">
            <span className="text-brand-cyan font-mono">03.</span> Integrações GitHub
          </h2>
          <p className="text-brand-light/60 max-w-2xl text-lg">
            Sistemas, APIs e Aplicações desenvolvidas focando em monitoramento, rotinas de dados e ecossistemas web avançados. Documentação recém atualizada em todos os projetos.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                key={repo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group block h-full bg-brand-dark border border-brand-cyan/20 hover:border-brand-cyan p-6 rounded-sm transition-all hover:shadow-[0_0_30px_rgba(0,246,255,0.15)] relative overflow-hidden cursor-pointer flex flex-col"
              >
                {/* Linha de Loading visual (falsa) no topo */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-amber group-hover:w-full transition-all duration-700"></div>

                <div className="flex justify-between items-start mb-4">
                  <FolderGit2 className="w-10 h-10 text-brand-cyan" />
                  <ExternalLink className="w-5 h-5 text-brand-light/30 group-hover:text-brand-cyan transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-brand-light mb-2 group-hover:text-brand-cyan transition-colors truncate">
                  {repo.name}
                </h3>
                
                <p className="text-brand-light/50 text-sm mb-6 flex-grow line-clamp-3">
                  {repo.description || "Projeto de software focado em rotinas de operação e sistemas web."}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-brand-light/40 border-t border-brand-light/10 pt-4 mt-auto">
                  <span className="flex items-center gap-1">
                    <FileCode2 className="w-4 h-4" />
                    {repo.language || "TypeScript"}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitMerge className="w-4 h-4 text-brand-amber/70" />
                    v1.0.0
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
