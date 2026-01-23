import React from 'react';
import { Star, MapPin, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SpaceCard({ space }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/space/${space.id}`)} className="group cursor-pointer bg-white rounded-[45px] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 border border-[#8D7B68]/10">
      <div className="relative h-80 overflow-hidden">
        <img src={space.images[0]} alt={space.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
          <Star size={14} className="fill-[#00BFA6] text-[#00BFA6]" />
          <span className="text-[12px] font-black text-slate-900">4.9</span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 mb-3">
           <span className="bg-[#00BFA6]/10 text-[#00BFA6] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Disponível Agora</span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 leading-none uppercase italic tracking-tighter mb-4 group-hover:text-[#00BFA6] transition-colors">{space.title}</h3>
        <div className="flex items-center gap-2 text-[#8D7B68] mb-8">
          <MapPin size={16} />
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">{space.location}</span>
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-[#8D7B68]/5">
          <div>
            <p className="text-[10px] font-black text-[#8D7B68] uppercase opacity-50 mb-1">A partir de</p>
            <p className="text-2xl font-black text-slate-900 italic">R$ {space.pricing.oneDay}<small className="text-xs ml-1 opacity-40">/DIA</small></p>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl group-hover:bg-[#00BFA6] transition-all shadow-lg">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}