import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, AlertCircle } from "lucide-react";

export default function SpaceMap({ latitude, longitude, spaceName }) {
  const hasCoordinates = latitude && longitude;

  // URL corrigida para o Google Maps Embed (sem necessidade de API key complexa para visualização simples)
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <Card className="border-none shadow-lg rounded-[32px] overflow-hidden bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-black flex items-center gap-2 text-slate-900">
          <MapPin className="w-5 h-5 text-[#00BFA6]" />
          Localização no Mapa
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {hasCoordinates ? (
          <div className="w-full h-[300px] relative">
            <iframe
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapUrl}
              title={`Mapa de ${spaceName}`}
            />
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-50">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-slate-200" />
            <p className="text-slate-500 font-bold">Localização em breve</p>
            <p className="text-slate-400 text-sm mt-1">Estamos ajustando o GPS deste espaço.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}