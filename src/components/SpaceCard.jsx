import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SpaceCard({ space }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/space/${space.id}`)} className="group cursor-pointer bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-[#F0EFEA]">
      <div className="relative h-80 overflow-hidden bg-[#F4F1EA]">
        <img src={space.image} alt={space.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
             onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519046904884-53103b34b206'; }} />
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={14} className="fill-[#00BFA6] text-[#00BFA6]" />
          <span className="text-[10px] font-black italic">4.9</span>
        </div>
      </div>
      <div className="p-10">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00BFA6] mb-3">ExperiÃªncia Selecionada</p>
        <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-4">{space.title}</h3>
        <div className="flex items-center gap-2 text-[#B2B0AB]">
          <MapPin size={14} className="text-[#00BFA6]" />
          <span className="text-[11px] font-bold uppercase tracking-widest">{space.location}</span>
        </div>
        <div className="mt-8 pt-8 border-t border-[#F0EFEA] flex justify-between items-center">
            <span className="text-2xl font-black">R$ {space.price} <small className="text-[10px] opacity-30 italic">/dia</small></span>
            <button className="bg-[#00BFA6] text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest">Detalhes</button>
        </div>
      </div>
    </div>
  );
}