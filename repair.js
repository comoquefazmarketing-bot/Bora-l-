const fs = require('fs');
const path = require('path');

// Conteúdo robusto para o BlogClusterBanner.jsx
const blogContent = `/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const clusterArticles = [
  { title: "O Guia da Picanha: Como calcular para 20 pessoas", slug: "guia-picanha", tag: "Churrasco", color: "border-[#00BFA6]" },
  { title: "Melhores Chácaras em Novo Horizonte e Região", slug: "melhores-chacaras", tag: "Lazer", color: "border-[#00BFA6]" },
  { title: "Descanso e Férias: Como organizar o lazer em família", slug: "descanso-ferias", tag: "Estilo de Vida", color: "border-[#00BFA6]" },
  { title: "Calculadora de Churrasco: O Guia Definitivo", slug: "calculadora-churrasco", tag: "Tech", color: "border-[#00BFA6]" }
];

export default function BlogClusterBanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const filtered = clusterArticles.filter(art => !location.pathname.includes(art.slug)).slice(0, 3);

  return (
    <section className="bg-slate-50 py-20 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="text-[#00BFA6]" size={28} />
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#1F2937]">
            Universo <span className="text-[#00BFA6]">Bora Lá.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((art, i) => (
            <div key={i} onClick={() => { navigate(\`/blog/\${art.slug}\`); window.scrollTo(0,0); }}
              className={\`bg-white p-8 rounded-[45px] border-b-[12px] \${art.color} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group\`}>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic">{art.tag}</span>
              <h4 className="text-2xl font-black text-[#1F2937] uppercase italic leading-tight group-hover:text-[#00BFA6] transition-colors">{art.title}</h4>
              <div className="mt-8 flex justify-end">
                <div className="bg-slate-100 p-3 rounded-full group-hover:bg-[#00BFA6] group-hover:text-white transition-colors"><ArrowRight size={20} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

// Função para limpar caracteres corrompidos conhecidos
function cleanEncoding(content) {
    return content
        .replace(/BORA LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â/g, 'BORA LÁ')
        .replace(/LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â/g, 'LÁ')
        .replace(/LÃƒÂ /g, 'LÁ')
        .replace(/CONTEÃƒÅ¡DO/g, 'CONTEÚDO')
        .replace(/PÃƒÂ¡ginas/g, 'Páginas');
}

const filesToFix = [
    { path: 'src/components/BlogClusterBanner.jsx', content: blogContent },
    { path: 'src/components/Header.jsx', isCleanOnly: true },
    { path: 'src/components/Sidebar.jsx', isCleanOnly: true },
    { path: 'src/App.jsx', isCleanOnly: true }
];

filesToFix.forEach(file => {
    const fullPath = path.join(__dirname, file.path);
    if (fs.existsSync(fullPath)) {
        let content = file.isCleanOnly ? fs.readFileSync(fullPath, 'utf8') : file.content;
        content = cleanEncoding(content);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(\`✅ Arquivo processado: \${file.path}\`);
    }
});