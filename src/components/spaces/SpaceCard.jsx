import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

const spaceTypeLabels = {
  piscina: "Piscina",
  chacara: "Chácara",
  salao_festas: "Salão de Festas",
  quadra_esportes: "Quadra",
  espaco_eventos: "Eventos",
  area_camping: "Camping",
  chale: "Chalé",
  sitio: "Sítio",
  outro: "Outro"
};

export default function SpaceCard({ space, user }) {
  const queryClient = useQueryClient();

  const { data: favorites = [] } = useQuery({
    queryKey: ['favorites', user?.email],
    queryFn: () => user ? base44.entities.Favorite.filter({ user_email: user.email }) : [],
    enabled: !!user,
  });

  const isFavorite = favorites.some(fav => fav.space_id === space.id);

  const toggleFavoriteMutation = useMutation({
    mutationFn: async () => {
      if (isFavorite) {
        const favorite = favorites.find(fav => fav.space_id === space.id);
        await base44.entities.Favorite.delete(favorite.id);
      } else {
        await base44.entities.Favorite.create({
          space_id: space.id,
          user_email: user.email
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!user) {
      base44.auth.redirectToLogin(window.location.pathname);
      return;
    }
    toggleFavoriteMutation.mutate();
  };

  return (
      return (
    <Link to={`/space?id=${space.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white rounded-3xl">
          <div className="relative h-64 overflow-hidden">
            <img
              src={space.main_image || space.images?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"}
              alt={space.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <button
              onClick={handleFavoriteClick}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
            >
              <Heart 
                className={w-5 h-5 transition-colors "}
              />
            </button>
            <div className="absolute top-4 left-4">
              <Badge 
                className="border-none text-white font-medium px-3 py-1 shadow-lg"
                style={{ background: 'rgba(0, 191, 166, 0.9)' }}
              >
                {spaceTypeLabels[space.space_type] || space.space_type}
              </Badge>
            </div>
          </div>
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-xl text-gray-900 line-clamp-1 flex-1">
                {space.title}
              </h3>
              {space.rating && (
                <div className="flex items-center gap-1 ml-2">
                  <Star className="w-4 h-4 fill-[#FFD93D] text-[#FFD93D]" />
                  <span className="font-semibold text-gray-900">{space.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{space.city}, {space.state}</span>
            </div>

            {space.capacity && (
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Users className="w-4 h-4 mr-1" />
                <span>Até {space.capacity} pessoas</span>
              </div>
            )}

            <div className="flex items-baseline justify-between pt-3 border-t border-gray-100">
              <div>
                <span className="text-3xl font-bold" style={{ color: '#00BFA6' }}>
                  R$ {space.price_per_day}
                </span>
                <span className="text-sm text-gray-500 ml-1">/diária</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}


