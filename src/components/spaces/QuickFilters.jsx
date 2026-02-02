import React from "react";
import { Waves, Flame, TreePine, Building2 } from "lucide-react";

const filters = [
  { icon: Waves, label: "Piscina", value: "piscina" },
  { icon: TreePine, label: "Chácara", value: "chacara" },
  { icon: Building2, label: "Salão", value: "salao_festas" }
];

export default function QuickFilters({ selectedFilter, onFilterChange }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(selectedFilter === f.value ? null : f.value)}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${
            selectedFilter === f.value ? "bg-[#00BFA6] text-white shadow-lg shadow-[#00BFA6]/30" : "bg-white text-slate-500 border border-slate-100 hover:border-[#00BFA6]"
          }`}
        >
          <f.icon className="w-5 h-5" /> {f.label}
        </button>
      ))}
    </div>
  );
}