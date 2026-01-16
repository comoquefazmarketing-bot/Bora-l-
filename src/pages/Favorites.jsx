import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Heart, Sparkles, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpaceCard from "../components/spaces/SpaceCard";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        base44.auth.redirectToLogin();
      }
    };
    loadUser();
  }, []);

  const { data: favorites = [], isLoading: loadingFavs } = useQuery({
    queryKey: ['favorites', user?.email],
    queryFn: () => base44.entities.Favorite.filter({ user_email: user.email }),
    enabled: !!user,
  });

  const { data: spaces = [], isLoading: loadingSpaces } = useQuery({
    queryKey: ['spaces'],
    queryFn: () => base44.entities.Space.list(),
  });

  const favoriteSpaces = spaces.filter(space => 
    favorites.some(fav => fav.space_id === space.id)
  );

  if (!user) return null;

  return (
    <div className="min-h-screen pb-20" style={{ background: 'linear-gradient(to bottom, #FFF5F5 0%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Header Sensorial */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div 
              className="w-20 h-20 rounded-[32px] flex items-center justify-center shadow-2xl shadow-red-200"
              style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)' }}
            >
              <Heart className="w-10 h-10 text-white fill-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Meus Favoritos</h1>
              <p className="text-gray-500 font-medium text-lg mt-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Lugares que tocam o coração
              </p>
            </div>
          </div>

          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="rounded-full font-bold text-gray-400 hover:text-red-500 hover:bg-red-50"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para busca
          </Button>
        </motion.div>

        {/* Grid ou Empty State */}
        {(loadingFavs || loadingSpaces) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-[400px] bg-gray-100 animate-pulse rounded-[40px]" />
            ))}
          </div>
        ) : favoriteSpaces.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="border-none shadow-2xl rounded-[48px] bg-white/80 backdrop-blur-sm overflow-hidden border border-white">
              <CardContent className="p-24 text-center">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-10 h-10 text-red-200" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                  Sua lista está vazia
                </h3>
                <p className="text-gray-500 text-xl max-w-md mx-auto mb-10 font-medium">
                  Ainda não encontrou o espaço perfeito? Explore as opções e salve os que mais gostar.
                </p>
                <Button
                  onClick={() => navigate('/')}
                  className="h-16 px-10 rounded-3xl bg-black text-white hover:bg-red-600 transition-all font-black text-lg shadow-xl"
                >
                  Descobrir Espaços
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {favoriteSpaces.map((space) => (
                <motion.div
                  key={space.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <SpaceCard space={space} user={user} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

