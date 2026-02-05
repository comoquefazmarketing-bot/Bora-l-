/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Sun, Utensils, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  { id: 1, icon: <Utensils size={20} />, title: "O Guia da Picanha: Como calcular para 20 pessoas", slug: "guia-picanha", tag: "Churrasco" },
  { id: 2, icon: <MapPin size={20} />, title: "Melhores Chácaras em Novo Horizonte e Região", slug: "melhores-chacaras", tag: "Lazer" },
  { id: 3, icon: <Sun size={20} />, title: "Descanso e Férias: Como organizar o lazer em família", slug: "descanso-ferias", tag: "Estilo de Vida" }
];

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-[#D1D5DB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-black italic uppercase text-[#1F2937] tracking-tighter mb-2">UNIVERSO <span className="text-[#00BFA6]">BORA LÁ.</span></h2>
          <p className="text-slate-600 font-mono text-sm uppercase font-bold tracking-widest">
            Festa • Lazer • Descanso • Férias
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id} whileHover={{ y: -5 }} onClick={() => navigate(`/blog/${post.slug}`)}
              className="bg-white/80 backdrop-blur-sm rounded-[35px] p-8 border-b-[10px] border-[#1F2937] shadow-xl flex flex-col h-full hover:border-[#00BFA6] transition-colors cursor-pointer"
            >
              <div className="text-[#00BFA6] mb-4 bg-[#1F2937] w-fit p-3 rounded-2xl shadow-lg">{post.icon}</div>
              <span className="text-[10px] font-black text-[#00BFA6] uppercase tracking-tighter mb-2 italic">{post.tag}</span>
              <h3 className="text-xl font-black text-[#1F2937] leading-tight mb-4 uppercase">{post.title}</h3>
              <button className="mt-auto flex items-center gap-2 text-[#1F2937] font-black uppercase italic text-xs border-t border-slate-100 pt-6">
                Ler Matéria <ArrowRight size={14} className="text-[#00BFA6]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}