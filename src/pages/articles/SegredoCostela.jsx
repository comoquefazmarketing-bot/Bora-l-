import React from "react";
import { Helmet } from "react-helmet-async";
import { Flame, Utensils, Timer, Award, Skull, Star } from "lucide-react";

export default function SegredoCostela() {
  return (
    <article className="pt-24 min-h-screen bg-slate-50 pb-20 font-sans">
      <Helmet><title>O Segredo da Costela Perfeita | BORA LÁ</title></Helmet>
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center">
          <span className="bg-[#EE0000] text-white px-4 py-1 font-black uppercase italic text-sm tracking-widest">Gastronomia de Elite</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mt-6 mb-8 text-[#1F2937]">
            Slow Food <br/><span className="text-[#EE0000]">&</span> Fogo de Chão.
          </h1>
        </header>

        <div className="bg-white p-12 rounded-[50px] shadow-xl border border-slate-100">
          <h2 className="text-3xl font-black uppercase italic mb-8 border-b-4 border-[#EE0000] inline-block">O Ritual da Brasa</h2>
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-justify">
            <p>O segredo da costela que solta do osso não está no tempero, mas na <strong>paciência</strong>. Em Novo Horizonte, os mestres assadores utilizam lenha de laranjeira para conferir um aroma cítrico e defumação leve.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
              <div className="text-center p-6 bg-slate-50 rounded-3xl">
                <Timer className="mx-auto mb-2 text-[#EE0000]" />
                <span className="block font-black uppercase italic text-xs">Tempo</span>
                <span className="text-xl font-bold">06 a 08 Horas</span>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-3xl">
                <Flame className="mx-auto mb-2 text-[#EE0000]" />
                <span className="block font-black uppercase italic text-xs">Fogo</span>
                <span className="text-xl font-bold">Indireto</span>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-3xl">
                <Skull className="mx-auto mb-2 text-[#EE0000]" />
                <span className="block font-black uppercase italic text-xs">Resultado</span>
                <span className="text-xl font-bold">Desmanchando</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}