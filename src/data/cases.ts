export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  problem: string;
  solution: string;
  steps: string[];
  results: string[];
  images: { src: string; alt: string; caption: string; width: number; height: number }[];
  repository: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "dashboard-gestao-operacional",
    title: "Dashboard de Gestão Operacional",
    category: "Business Intelligence",
    summary: "Dashboard para acompanhar metas, produtividade, equipes e indicadores operacionais em um só lugar.",
    technologies: ["Power BI", "Power Query", "CSV", "DAX"],
    problem: "Indicadores espalhados em planilhas dificultam a leitura do desempenho, a comparação entre equipes e o acompanhamento das metas.",
    solution: "Criei um painel em Power BI com modelo de dados, medidas e filtros para reunir as informações operacionais em uma visão clara.",
    steps: [
      "Uma base fictícia reúne registros diários de equipes, serviços e unidades.",
      "O Power Query prepara os dados e o modelo calcula realizado, meta, cumprimento, produtividade e horas extras.",
      "Filtros por período, equipe, serviço e local permitem explorar os indicadores e gráficos."
    ],
    results: [
      "Demonstração com 1.736 registros fictícios, quatro equipes e três unidades.",
      "Cinco indicadores e quatro visualizações em um projeto Power BI editável."
    ],
    images: [
      { src: "/cases/dashboard-powerbi.png", alt: "Captura real do dashboard no Power BI com indicadores e gráficos operacionais", caption: "Captura do relatório aberto no Power BI Desktop", width: 2330, height: 1310 },
      { src: "/cases/capa-dashboard-gestao-operacional.png", alt: "Capa de apresentação do dashboard de gestão operacional", caption: "Capa de apresentação do projeto", width: 1672, height: 941 }
    ],
    repository: "https://github.com/ebrgs/dashboard-gestao-operacional-powerbi"
  },
  {
    slug: "automacao-relatorios",
    title: "Automação de Relatórios",
    category: "Automação de Processos",
    summary: "Consolidação automática de planilhas, validação de inconsistências e geração de relatórios em Excel.",
    technologies: ["Python", "Excel", "openpyxl"],
    problem: "Receber planilhas com formatos diferentes exige trabalho manual para padronizar dados e encontrar erros antes de publicar um relatório.",
    solution: "Desenvolvi uma ferramenta em Python que lê as planilhas, normaliza os campos, valida os registros e gera arquivos prontos para análise.",
    steps: [
      "A interface recebe a pasta com os relatórios Excel de cada equipe.",
      "O processamento padroniza colunas, datas e números, e separa linhas inválidas ou duplicadas.",
      "São gerados um consolidado, uma lista de inconsistências e um resumo com indicadores."
    ],
    results: [
      "Na demonstração fictícia, quatro arquivos e 72 linhas são analisados.",
      "O processamento entrega 67 registros válidos e identifica cinco inconsistências para correção."
    ],
    images: [
      { src: "/cases/capa-automacao-relatorios.png", alt: "Ilustração do fluxo de planilhas para relatórios automatizados", caption: "Ilustração do fluxo de consolidação", width: 1672, height: 941 }
    ],
    repository: "https://github.com/ebrgs/automacao-relatorios-python-excel"
  },
  {
    slug: "automacao-documentos-pdf",
    title: "Automação de Documentos PDF",
    category: "Organização de Dados",
    summary: "Identificação, classificação, renomeação e inventário automático de documentos PDF.",
    technologies: ["Python", "PDF", "Excel", "PyMuPDF"],
    problem: "Arquivos PDF recebidos de várias fontes precisam ser identificados, organizados e registrados para facilitar a consulta.",
    solution: "Criei uma ferramenta que extrai texto dos PDFs, identifica o tipo de documento, organiza cópias em pastas e monta um inventário em Excel.",
    steps: [
      "A ferramenta lê os PDFs da pasta selecionada e extrai o texto disponível.",
      "Notas fiscais, contratos, recibos e ordens de serviço são identificados e copiados com nomes padronizados.",
      "O inventário registra os dados extraídos e marca documentos que exigem revisão manual."
    ],
    results: [
      "Demonstração com 14 PDFs fictícios e 12 documentos classificados pelo tipo.",
      "Três pendências são sinalizadas para revisão; PDFs sem texto selecionável precisam de conferência manual."
    ],
    images: [
      { src: "/cases/capa-organizacao-documentos-pdf.png", alt: "Ilustração de documentos PDF classificados em pastas e inventário Excel", caption: "Ilustração do fluxo de organização documental", width: 1672, height: 941 }
    ],
    repository: "https://github.com/ebrgs/automacao-documentos-pdf"
  }
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
