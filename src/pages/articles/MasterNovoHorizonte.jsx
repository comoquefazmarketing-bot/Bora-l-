import React from "react";
import { Helmet } from "react-helmet-async";
import { Trophy, Map, Star, TrendingUp, ArrowRight, Globe, Beer, Users, Sun } from "lucide-react";

export default function MasterNovoHorizonte() {
  return (
    <article className="pt-24 min-h-screen bg-white pb-20 font-sans selection:bg-[#00BFA6] selection:text-white">
      <Helmet><title>Especial NH 2026: A Capital das Áreas de Lazer | BORA LÁ</title></Helmet>
      <div className="max-w-4xl mx-auto px-6 text-[#1F2937]">
        <header className="mb-16 border-b-8 border-[#00BFA6] pb-12">
          <div className="flex items-center gap-2 text-[#00BFA6] font-black uppercase tracking-widest text-xs mb-4">
            <Trophy size={16} /> Conexão Tigre do Vale
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 text-justify">
            Novo Horizonte 2026: <br/>A Capital das Áreas de Lazer.
          </h1>
          <p className="text-xl font-bold text-slate-500 italic border-l-8 border-[#1F2937] pl-6">
            Como o sucesso do Grêmio Novorizontino e o boom das Áreas de Lazer profissionais transformaram a face da nossa cidade.
          </p>
        </header>

        <div className="prose prose-2xl prose-slate max-w-none space-y-12">
          <p className="text-slate-600 leading-relaxed font-medium text-justify font-serif italic text-2xl">
            "Novo Horizonte não é mais apenas uma cidade do interior; é um polo de entretenimento privado que dita tendências para todo o Noroeste Paulista."
          </p>
          
          <section className="bg-slate-900 p-10 rounded-[40px] text-white my-12 shadow-2xl">
            <h2 className="text-3xl font-black uppercase italic mb-6 text-[#00BFA6] flex items-center gap-3">
              <TrendingUp /> O Fenômeno Econômico
            </h2>
            <p className="text-slate-300 leading-relaxed font-medium text-justify">
              O investimento em infraestrutura de lazer profissional cresceu 40% nos últimos dois anos. O que antes eram simples "chácaras de família" hoje são complexos de alto padrão com automação, piscinas de borda infinita e cozinhas gourmet que fariam inveja a restaurantes de SP.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}