import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Upload, Loader2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { base44 } from "@/api/base44Client";

const availableAmenities = [
  "Wi-Fi", "Estacionamento", "Churrasqueira", "Piscina", "Ar Condicionado",
  "Cozinha", "Som Ambiente", "TV", "Banheiros", "Área Verde", "Segurança"
];

export default function SpaceForm({ space, onSubmit, onCancel, isProcessing }) {
  const [formData, setFormData] = useState(space || {
    title: "",
    description: "",
    short_description: "",
    city: "",
    state: "",
    price_per_day: "",
    capacity: "",
    space_type: "outro",
    amenities: [],
    images: [],
    main_image: "",
    rules: "",
    available: true,
    contato_whatsapp: "" // Campo essencial para Negociação Direta
  });
  const [uploadingImages, setUploadingImages] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities?.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...(prev.amenities || []), amenity]
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploadingImages(true);
    try {
      const uploadPromises = files.map(file => base44.integrations.Core.UploadFile({ file }));
      const results = await Promise.all(uploadPromises);
      const urls = results.map(r => r.file_url);
      
      setFormData(prev => ({
        ...prev,
        images: [...(prev.images || []), ...urls],
        main_image: prev.main_image || urls[0]
      }));
    } catch (error) {
      console.error("Erro no upload:", error);
    } finally {
      setUploadingImages(false);
    }
  };

  const removeImage = (url) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img !== url),
      main_image: prev.main_image === url ? (prev.images[0] || "") : prev.main_image
    }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Informações Básicas */}
        <div className="space-y-6">
          <div>
            <Label className="font-bold text-gray-700">Título do Anúncio</Label>
            <Input 
              value={formData.title} 
              onChange={(e) => handleInputChange("title", e.target.value)} 
              placeholder="Ex: Chácara Recanto do Sol com Piscina" 
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="font-bold text-gray-700">Preço p/ Dia (R$)</Label>
              <Input 
                type="number"
                value={formData.price_per_day} 
                onChange={(e) => handleInputChange("price_per_day", e.target.value)} 
                className="rounded-xl"
              />
            </div>
            <div>
              <Label className="font-bold text-gray-700">Capacidade Pessoas</Label>
              <Input 
                type="number"
                value={formData.capacity} 
                onChange={(e) => handleInputChange("capacity", e.target.value)} 
                className="rounded-xl"
              />
            </div>
          </div>

          <div>
            <Label className="font-bold text-gray-700">WhatsApp de Contato (Com DDD)</Label>
            <Input 
              value={formData.contato_whatsapp} 
              onChange={(e) => handleInputChange("contato_whatsapp", e.target.value)} 
              placeholder="Ex: 11999999999" 
              className="rounded-xl border-teal-200 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Upload de Imagens Sensoriais */}
        <div className="space-y-4">
          <Label className="font-bold text-gray-700">Galeria de Fotos</Label>
          <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-8 text-center hover:border-teal-400 transition-colors relative">
            <input type="file" multiple onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
            {uploadingImages ? (
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-teal-500" />
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm font-medium">Clique ou arraste suas fotos aqui</p>
                <p className="text-xs text-gray-400">Dica: Fotos bem iluminadas vendem mais.</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-2 mt-4">
            {formData.images?.map((url, idx) => (
              <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden shadow-sm">
                <img src={url} className="w-full h-full object-cover" />
                <button 
                  onClick={() => removeImage(url)}
                  className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comodidades (Amenities) */}
      <div className="space-y-4 pt-6 border-t border-gray-100">
        <Label className="font-bold text-gray-700">O que o espaço oferece?</Label>
        <div className="flex flex-wrap gap-2">
          {availableAmenities.map(amenity => (
            <Badge
              key={amenity}
              onClick={() => handleAmenityToggle(amenity)}
              variant={formData.amenities?.includes(amenity) ? "default" : "outline"}
              className={"cursor-pointer px-4 py-2 rounded-full font-semibold transition-all"}
            >
              {amenity}
            </Badge>
          ))}
        </div>
      </div>

      {/* Ações do Formulário */}
      <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
        <Button type="button" variant="ghost" onClick={onCancel} className="rounded-2xl h-14 px-8 font-bold">Cancelar</Button>
        <Button 
          type="submit" 
          disabled={isProcessing || uploadingImages}
          className="bg-black text-white hover:bg-teal-600 rounded-2xl h-14 px-12 font-black shadow-xl"
        >
          {isProcessing ? <Loader2 className="animate-spin mr-2" /> : <CheckCircle2 className="mr-2" />}
          Salvar Espaço Sensorial
        </Button>
      </div>
    </form>
  );
}

