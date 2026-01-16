import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Users, Star, ChevronLeft, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/bookings/BookingForm";
import ImageGallery from "../components/spaces/ImageGallery";
import ReviewsSection from "../components/spaces/ReviewsSection";
import SpaceMap from "../components/spaces/SpaceMap";

const spaceTypeLabels = {
  piscina: "Piscina",
  chacara: "Chácara",
  salao_festas: "Salão de Festas",
  quadra_esportes: "Quadra Esportiva",
  espaco_eventos: "Espaço para Eventos",
  area_camping: "Área de Camping",
  outro: "Outro"
};

export default function SpaceDetails() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const urlParams = new URLSearchParams(window.location.search);
  const spaceId = urlParams.get('id');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        console.log("User not authenticated");
      }
    };
    loadUser();
  }, []);

  const { data: space, isLoading } = useQuery({
    queryKey: ['space', spaceId],
    queryFn: async () => {
      const spaces = await base44.entities.Space.filter({ id: spaceId });
      return spaces[0];
    },
    enabled: !!spaceId,
  });

  const handleBookingSubmit = async (bookingData) => {
    if (!user) {
      base44.auth.redirectToLogin(window.location.pathname + window.location.search);
      return;
    }
    
    // Lógica de envio via WhatsApp (Conforme sua estratégia Felipe)
    const telefone = space?.contato_whatsapp || "5511999999999";
    const saudacao = "Olá! Vi seu espaço (" + space.title + ") no app Bora Lá e gostaria de reservar para o dia " + bookingData.check_in + ". Pode me ajudar?";
    window.open("https://wa.me/?text=", "_blank");
  };

  if (isLoading || !space) {
    return (
      <div className="p-6 md:p-12 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-[500px] bg-gray-200 rounded-[40px]"></div>
          <div className="h-10 bg-gray-200 rounded-full w-1/3"></div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 h-64 bg-gray-100 rounded-[32px]"></div>
            <div className="h-64 bg-gray-100 rounded-[32px]"></div>
          </div>
        </div>
      </div>
    );
  }

  const images = space.images?.length > 0 ? space.images : [space.main_image];

  return (
    <div className="min-h-screen pb-20 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 rounded-full hover:bg-white"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Voltar para busca
        </Button>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ImageGallery images={images} />

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Coluna da Esquerda: Conteúdo */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-teal-500 text-white border-none px-4 py-1 rounded-full">
                    {spaceTypeLabels[space.space_type] || space.space_type}
                  </Badge>
                  <div className="flex items-center gap-1 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {space.rating?.toFixed(1) || "New"}
                  </div>
                </div>
                
                <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4 leading-none">
                  {space.title}
                </h1>
                
                <div className="flex items-center gap-4 text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><MapPin size={18}/> {space.city}, {space.state}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Users size={18}/> Até {space.capacity} pessoas</span>
                </div>
              </section>

              <hr className="border-gray-200" />

              <section className="space-y-4">
                <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
                  <Sparkles className="text-teal-500" /> Sobre o espaço
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {space.description || "Este espaço oferece uma experiência única para você e seus convidados. Entre em contato para mais detalhes."}
                </p>
              </section>

              <SpaceMap latitude={space.latitude} longitude={space.longitude} spaceName={space.title} />

              <ReviewsSection spaceId={space.id} />
            </div>

            {/* Coluna da Direita: Card de Reserva (Sticky) */}
            <aside className="relative">
              <div className="sticky top-24">
                <BookingForm 
                  space={space} 
                  onSubmit={handleBookingSubmit}
                  onCancel={() => navigate('/')}
                />
                
                <button 
                  onClick={() => navigate('/chat')}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-4 text-sm font-bold text-gray-400 hover:text-teal-600 transition-colors"
                >
                  <MessageCircle size={18} />
                  Dúvidas? Pergunte para a Lia
                </button>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

