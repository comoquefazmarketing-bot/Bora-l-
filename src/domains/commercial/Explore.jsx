import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Star, Search, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();

  const spaces = [
    { id: 'top-burguer', title: "Recanto Top Burguer", folder: "area de lazer top burguer", price: 330, cap: 40 },
    { id: 'sao-sebastiao', title: "Chácara São Sebastião", folder: "Chácara São Sebastião", price: 450, cap: 100 },
    { id: 'recanto-sol', title: "Recanto do Sol", folder: "Recanto do Sol", price: 380, cap: 50 },
    { id: 'carlos-zara', title: "Ãrea de Lazer Carlos Zara", folder: "Ãrea de lazer Carlos Zara", price: 300, cap: 35 }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pl-64 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">Encontre o espaço perfeito</h1>
          <p className="text-slate-500 font-bold text-lg">Piscinas, chácaras e áreas perfeitas para curtir.</p>
        </header>

        {/* BARRA DE BUSCA (MAPS) - RESTAURADA */}
        <div className="bg-white p-4 rounded-[32px] shadow-xl border border-slate-100 flex items-center gap-4 mb-16">
          <div className="flex-1 flex items-center gap-3 px-4 border-r">
            <MapPin className="text-[#00BFA6] w-5 h-5" />
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">Localização</p>
              <p className="text-slate-600 font-bold">Novo Horizonte, SP</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 px-4 border-r">
            <Calendar className="text-[#00BFA6] w-5 h-5" />
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">Data</p>
              <p className="text-slate-400 font-bold">Quando?</p>
            </div>
          </div>
          <button className="bg-[#00BFA6] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2">
            <Search className="w-5 h-5" /> BORA LÁ!
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {spaces.map((s) => (
            <Card key={s.id} onClick={() => navigate(`/space-details?id=${s.id}`)} className="cursor-pointer border-none shadow-lg rounded-[40px] overflow-hidden bg-white">
              <div className="aspect-video relative">
                <img src={`/spaces/${s.folder}/foto1.webp`} className="w-full h-full object-cover" alt={s.title} />
                <Badge className="absolute top-6 right-6 bg-white text-black font-black"><Star className="w-4 h-4 mr-1 fill-yellow-500" /> 5.0</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                <div className="flex justify-between items-center">
                   <span className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs"><Users className="w-4 h-4 text-[#00BFA6]" /> {s.cap} pessoas</span>
                   <p className="text-[#00BFA6] font-black text-2xl">R$ {s.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}