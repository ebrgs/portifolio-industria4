import { Terminal, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark py-12 border-t border-brand-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <Terminal className="text-brand-cyan w-6 h-6" />
            <span className="text-lg font-bold tracking-widest text-brand-light">EBRGS<span className="text-brand-amber">.SYS</span></span>
          </div>

          {/* Links Sociais / Contato */}
          <div className="flex items-center gap-5 border-t md:border-t-0 md:border-l border-brand-cyan/20 pt-4 md:pt-0 md:pl-6">
            <a 
              href="https://linkedin.com/in/SEU_LINKEDIN" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-brand-light/5 text-brand-light/70 hover:text-brand-cyan hover:bg-brand-cyan/10 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)] transition-all flex items-center justify-center" 
              title="LinkedIn"
            >
              {/* SVG do LinkedIn Nativo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="https://wa.me/SEU_NUMERO" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-brand-light/5 text-brand-light/70 hover:text-brand-amber hover:bg-brand-amber/10 hover:shadow-[0_0_15px_rgba(255,159,28,0.3)] transition-all flex items-center justify-center" 
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="mailto:SEU_EMAIL@gmail.com" 
              className="p-2 rounded-full bg-brand-light/5 text-brand-light/70 hover:text-brand-cyan hover:bg-brand-cyan/10 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)] transition-all flex items-center justify-center" 
              title="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-brand-light/50 text-sm">
            Construído para conectar dados operacionais à alta performance de software.
          </p>
          <p className="text-brand-light/30 text-xs mt-2">
            &copy; {new Date().getFullYear()} Elias Borges. Todos os sistemas operacionais.
          </p>
        </div>

      </div>
    </footer>
  );
}
