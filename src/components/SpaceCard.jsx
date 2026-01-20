import React from 'react';
import { Star, Users, MapPin, Waves, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SpaceCard({ space }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/space/${space.id}`)}
      className="group cursor-pointer bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#8D7B68]/10"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={space.image || space.imagem || 'https://images.unsplash.com/photo-1519046904884-53103b34b206'} 
          alt={space.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-black text-[#1A1A1A]">4.9</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00BFA6] mb-1">Destaque</p>
        <h3 className="text-xl font-bold text-[#1A1A1A] leading-tight mb-2">
          {space.title || space.nome}
        </h3>

        <div className="flex items-center gap-2 text-[#8D7B68] opacity-70 mb-4">
          <MapPin size={14} />
          <span className="text-xs font-medium">{space.location || space.cidade || 'Novo Horizonte'}</span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#F4F1EA]">
          <div>
            <span className="text-lg font-black text-[#1A1A1A]">R$ {space.price || space.valor}</span>
            <span className="text-[10px] font-bold text-[#8D7B68] uppercase"> /dia</span>
          </div>
          <button className="bg-[#F4F1EA] text-[#8D7B68] px-4 py-2 rounded-xl font-black text-[10px] uppercase group-hover:bg-[#8D7B68] group-hover:text-white transition-all">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}