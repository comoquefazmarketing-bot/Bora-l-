import React from "react";
import { Search, MapPin } from "lucide-react";

export default function EnhancedSearch({ onSearch }) {
  return (
    <div className="bg-white p-4 rounded-[32px] shadow-2xl border border-slate-100 flex items-center gap-4">
      <div className="flex-1 flex items-center gap-3 px-6 border-r">
        <MapPin className="text-[#00BFA6] w-6 h-6" />
        <input 
          type="text" 
          placeholder="Qual cidade?" 
          className="bg-transparent border-none outline-none font-bold text-slate-600 w-full"
          onChange={(e) => onSearch({ city: e.target.value })}
        />
      </div>
      <button className="bg-[#00BFA6] text-white px-10 py-5 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-transform">
        <Search className="w-5 h-5" /> Bora Lá!
      </button>
    </div>
  );
}