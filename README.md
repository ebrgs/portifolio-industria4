# Portfólio de Automação, Dados e BI

Site de Elias Borges com serviços de automação de processos, dashboards e tratamento de dados. O portfólio apresenta três cases demonstrativos com dados fictícios e preserva Indústria 4.0 como área de aplicação complementar.

## Cases

| Case | Repositório |
| --- | --- |
| Dashboard de Gestão Operacional | [Power BI](https://github.com/ebrgs/dashboard-gestao-operacional-powerbi) |
| Automação de Relatórios | [Python + Excel](https://github.com/ebrgs/automacao-relatorios-python-excel) |
| Automação de Documentos PDF | [Python + PDF](https://github.com/ebrgs/automacao-documentos-pdf) |

Cada case tem uma página com problema, solução, funcionamento, tecnologias, resultados da demonstração e imagens. Os números exibidos pertencem apenas aos exemplos fictícios.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar a versão de produção, execute `npm run lint` e `npm run build`.

O site usa Next.js 16, React 19, Tailwind CSS 4 e Lucide. As imagens dos cases ficam em `public/cases`.
