import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SpaceCard from "../components/spaces/SpaceCard";
import EnhancedSearch from "../components/home/EnhancedSearch";
import QuickFilters from "../components/home/QuickFilters";
import { Skeleton } from "@/components/ui/skeleton";
import LiaFloatingButton from "../components/home/LiaFloatingButton";

export default function Home() {
  const [user, setUser] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    city: "",
    checkIn: null,
    checkOut: null,
    guests: 0
  });
  const [quickFilter, setQuickFilter] = useState(null);

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

  const { data: spaces, isLoading } = useQuery({
    queryKey: ['spaces'],
    queryFn: () => base44.entities.Space.filter({ available: true }, '-created_date'),
    initialData: [],
  });

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  const filteredSpaces = spaces.filter(space => {
    const cityMatch = !searchFilters.city || 
      space.city?.toLowerCase().includes(searchFilters.city.toLowerCase());
    
    const guestsMatch = !searchFilters.guests || 
      (space.capacity && space.capacity >= searchFilters.guests);

    const quickFilterMatch = !quickFilter || space.space_type === quickFilter;

    return cityMatch && guestsMatch && quickFilterMatch;
  });

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #F5E9DA 0%, #FFFFFF 50%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Hero Section - Identidade Bora Lá */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg" style={{ background: 'rgba(0, 191, 166, 0.1)', color: '#00BFA6', border: '2px solid rgba(0, 191, 166, 0.2)' }}>
            <Sparkles className="w-4 h-4" />
            Pronto pra curtir o fim de semana?
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter">
            Encontre o espaço perfeito<br />para seu momento de lazer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Piscinas, salões, chácaras e áreas perfeitas para curtir com quem você ama.
          </p>
        </motion.div>

        {/* Busca Avançada */}
        <div className="mb-12">
          <EnhancedSearch onSearch={handleSearch} />
        </div>

        {/* Filtros Rápidos Sensoriais */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">O que você procura?</h2>
          <QuickFilters 
            selectedFilter={quickFilter} 
            onFilterChange={setQuickFilter}
          />
        </div>

        {/* Grid de Resultados */}
        <div className="min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tighter">
                {isLoading ? "Buscando experiências..." : " espaços para você"}
              </h2>
              <p className="text-gray-500 font-medium">Sua próxima memória começa aqui.</p>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-72 w-full rounded-[40px]" />
                  <Skeleton className="h-6 w-3/4 rounded-full" />
                  <Skeleton className="h-4 w-1/2 rounded-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredSpaces.map((space) => (
                  <motion.div
                    key={space.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SpaceCard space={space} user={user} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {!isLoading && filteredSpaces.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-24 bg-white/50 rounded-[48px] border-2 border-dashed border-gray-200"
            >
              <p className="text-gray-500 text-2xl font-bold mb-2">
                Nenhum espaço encontrado
              </p>
              <p className="text-gray-400 font-medium">
                Tente mudar os filtros ou falar com a Lia para sugestões!
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lia - Assistente IA do Felipe */}
      <LiaFloatingButton />
    </div>
  );
}

