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
      {/* Container da Imagem */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={space.image} 
          alt={space.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-black text-[#1A1A1A]">{space.rating || '4.9'}</span>
        </div>
        
        {/* Badges de Atributos Rápidos */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {space.hasPool && (
            <div className="bg-[#00BFA6]/90 backdrop-blur-md p-2 rounded-xl text-white">
              <Waves size={16} />
            </div>
          )}
          {space.hasGrill && (
            <div className="bg-[#FF4500]/90 backdrop-blur-md p-2 rounded-xl text-white">
              <Flame size={16} />
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo Informativo */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00BFA6] mb-1">{space.category || 'Refúgio Exclusivo'}</p>
            <h3 className="text-xl font-bold text-[#1A1A1A] leading-tight group-hover:text-[#8D7B68] transition-colors">
              {space.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#8D7B68] opacity-70 mb-4">
          <MapPin size={14} />
          <span className="text-xs font-medium">{space.location}</span>
        </div>

        {/* Info Prévia (O que você pediu: o que tem na área) */}
        <div className="flex items-center gap-4 py-4 border-t border-b border-[#F4F1EA] mb-4">
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-[#8D7B68]" />
            <span className="text-[11px] font-bold text-[#1A1A1A]">{space.capacity} Pessoas</span>
          </div>
          <div className="w-1 h-1 bg-[#8D7B68]/30 rounded-full"></div>
          <span className="text-[11px] font-bold text-[#1A1A1A]">{space.bedrooms || '3'} Quartos</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-black text-[#1A1A1A]">R$ {space.price}</span>
            <span className="text-[10px] font-bold text-[#8D7B68] uppercase tracking-widest"> /dia</span>
          </div>
          <button className="bg-[#F4F1EA] text-[#8D7B68] px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest group-hover:bg-[#8D7B68] group-hover:text-white transition-all">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}