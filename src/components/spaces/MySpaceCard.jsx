import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MapPin, Users, Edit, Trash2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const spaceTypeLabels = {
  piscina: "Piscina",
  chacara: "Chácara",
  salao_festas: "Salão de Festas",
  quadra_esportes: "Quadra Esportiva",
  espaco_eventos: "Espaço para Eventos",
  area_camping: "Área de Camping",
  outro: "Outro"
};

export default function MySpaceCard({ space, onEdit, onDelete, onBlockDates }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[32px]">
        <div className="relative h-48 overflow-hidden">
          <img
            src={space.main_image || space.images?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"}
            alt={space.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className={"text-white border-none px-3 py-1 rounded-full shadow-lg"}>
              {space.available ? 'Ativo' : 'Pausado'}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="mb-3">
            <Badge variant="outline" className="mb-2 text-teal-600 border-teal-100">
              {spaceTypeLabels[space.space_type] || space.space_type}
            </Badge>
            <h3 className="font-bold text-lg text-gray-900 line-clamp-1 tracking-tight">
              {space.title}
            </h3>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span>{space.city}, {space.state}</span>
            </div>
            {space.capacity && (
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2 text-gray-400" />
                <span>Até {space.capacity} pessoas</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-50">
            <div>
              <span className="text-xl font-black text-gray-900">
                R$ {space.price_per_day}
              </span>
              <span className="text-xs text-gray-400 ml-1 font-bold">/DIA</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="rounded-xl border-gray-100 font-bold hover:bg-teal-50 hover:text-teal-600 transition-all"
              onClick={() => onEdit(space)}
            >
              <Edit className="w-4 h-4 mr-2" />
              Editar
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-gray-100 font-bold hover:bg-blue-50 hover:text-blue-600 transition-all"
              onClick={() => onBlockDates(space)}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Datas
            </Button>
          </div>
          
          <Button
            variant="ghost"
            className="w-full text-red-400 hover:text-red-600 hover:bg-red-50 mt-3 rounded-xl font-bold transition-all"
            onClick={() => onDelete(space.id)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Remover do Bora Lá
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

