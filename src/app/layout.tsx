import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-industria4.vercel.app"),
  title: "Elias Borges | Automação, Dados e Business Intelligence",
  description: "Automação de processos, dashboards e soluções de dados com Excel, Power BI, Python e SQL para operações, serviços e Indústria 4.0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-cyan selection:text-brand-dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
