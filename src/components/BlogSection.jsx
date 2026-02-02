/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { BookOpen, MapPin, Sun, Utensils, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    icon: <Utensils size={20} />,
    title: "O Guia da Picanha: Como calcular para 20 pessoas",
    desc: "Não deixe faltar carne nem desperdice dinheiro. Aprenda a métrica dos churrasqueiros profissionais.",
    tag: "Churrasco"
  },
  {
    id: 2,
    icon: <MapPin size={20} />,
    title: "Melhores Chácaras em Novo Horizonte e Região",
    desc: "Fizemos uma curadoria dos melhores espaços para alugar no próximo feriado ou final de semana.",
    tag: "Lazer"
  },
  {
    id: 3,
    icon: <Sun size={20} />,
    title: "Descanso e Férias: Como organizar o lazer em famá­lia",
    desc: "Dicas de planejamento para que suas férias sejam focadas apenas no que importa: relaxar.",
    tag: "Estilo de Vida"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 px-6 bg-[#D1D5DB]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-[#1F2937] p-2 rounded-lg text-[#00BFA6]">
              <BookOpen size={24} />
            </div>
            <h2 className="text-4xl font-black text-[#1F2937] uppercase italic tracking-tighter">
              Universo BORA LÁ
            </h2>
          </div>
          <p className="text-[#4B5563] font-mono text-sm uppercase font-bold tracking-widest">
            Festa Ã¢â‚¬ Lazer Ã¢â‚¬ Descanso Ã¢â‚¬ Férias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-[35px] p-8 border-b-[10px] border-[#1F2937] shadow-xl flex flex-col h-full hover:border-[#00BFA6] transition-colors"
            >
              <div className="text-[#00BFA6] mb-4 bg-[#1F2937] w-fit p-3 rounded-2xl shadow-lg">
                {post.icon}
              </div>
              <span className="text-[10px] font-black text-[#00BFA6] uppercase tracking-tighter mb-2 italic">
                {post.tag}
              </span>
              <h3 className="text-xl font-black text-[#1F2937] leading-tight mb-4 uppercase">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-8">
                {post.desc}
              </p>
              <button className="mt-auto flex items-center gap-2 text-[#1F2937] font-black uppercase text-[10px] tracking-widest group">
                Ler matéria <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-[#00BFA6]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}