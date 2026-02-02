import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function SearchHero() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 -mt-12">
      <div className="bg-white p-2 md:p-3 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-wrap md:flex-nowrap items-center gap-2">
        <div className="flex-1 flex items-center gap-3 px-6 py-3 border-r border-gray-100 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
          <MapPin className="text-[#00BFA6]" size={18} />
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Onde?</span>
            <input type="text" placeholder="Localização" className="bg-transparent outline-none font-bold text-[#1A1A1A] text-sm placeholder:text-gray-300 w-full" />
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 px-6 py-3 border-r border-gray-100 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
          <Calendar className="text-[#00BFA6]" size={18} />
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Quando?</span>
            <input type="text" placeholder="Check-in / Out" className="bg-transparent outline-none font-bold text-[#1A1A1A] text-sm placeholder:text-gray-300 w-full" />
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 px-6 py-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
          <Users className="text-[#00BFA6]" size={18} />
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Quem?</span>
            <input type="text" placeholder="Pessoas" className="bg-transparent outline-none font-bold text-[#1A1A1A] text-sm placeholder:text-gray-300 w-full" />
          </div>
        </div>
        <button className="bg-[#1A1A1A] hover:bg-[#00BFA6] text-white p-5 rounded-[24px] transition-all duration-300 group">
          <Search size={22} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}