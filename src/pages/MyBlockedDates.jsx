import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarX, Trash2, Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MyBlockedDates() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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

  const { data: spaces = [] } = useQuery({
    queryKey: ['my-spaces', user?.id],
    queryFn: () => base44.entities.Space.filter({ proprietario: user.id }),
    enabled: !!user,
  });

  const { data: allBookings = [] } = useQuery({
    queryKey: ['all-bookings'],
    queryFn: () => base44.entities.Booking.list('-created_date'),
    enabled: !!user,
  });

  const mySpaceIds = spaces.map(s => s.id);
  const blockedBookings = allBookings.filter(
    booking => booking.is_block && mySpaceIds.includes(booking.space_id)
  );

  const deleteBlockMutation = useMutation({
    mutationFn: (id) => base44.entities.Booking.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-bookings'] });
    },
  });

  const handleDelete = (id) => {
    if (confirm("Deseja liberar estas datas para reserva novamente?")) {
      deleteBlockMutation.mutate(id);
    }
  };

  const getSpaceName = (spaceId) => {
    const space = spaces.find(s => s.id === spaceId);
    return space?.title || "Espaço";
  };

  if (!user) return null;

  return (
    <div className="min-h-screen pb-20" style={{ background: '#FAFAF9' }}>
      <div className="max-w-5xl mx-auto px-6 pt-12">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div 
              className="w-20 h-20 rounded-[32px] flex items-center justify-center shadow-2xl shadow-red-100"
              style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)' }}
            >
              <CalendarX className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Agenda Restrita</h1>
              <p className="text-gray-500 font-medium text-lg mt-1">Datas bloqueadas para manutenção ou uso privado.</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/my-spaces')}
            className="rounded-full font-bold text-gray-400 hover:text-black hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para Meus Espaços
          </Button>
        </motion.div>

        {/* List Section */}
        {blockedBookings.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card className="border-none shadow-xl rounded-[48px] bg-white border border-white">
              <CardContent className="p-20 text-center">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-200">
                  <CalendarIcon size={48} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Tudo disponível!</h3>
                <p className="text-gray-500 text-xl max-w-md mx-auto font-medium">
                  Você não possui bloqueios manuais ativos no momento.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            <AnimatePresence>
              {blockedBookings.map((block) => (
                <motion.div
                  key={block.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-all rounded-[32px] bg-white overflow-hidden group border border-transparent hover:border-red-100">
                    <CardContent className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                            {getSpaceName(block.space_id)}
                          </h3>
                          <Badge className="bg-red-50 text-red-600 border-none font-bold px-3 py-1 rounded-full uppercase text-[10px] tracking-widest">
                            Ocupado
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-gray-500 font-bold mb-4">
                          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl">
                            <CalendarIcon className="w-4 h-4 text-red-400" />
                            <span>
                              {format(new Date(block.check_in), "dd 'de' MMM", { locale: ptBR })}
                              {" — "}
                              {format(new Date(block.check_out), "dd 'de' MMM", { locale: ptBR })}
                            </span>
                          </div>
                        </div>

                        {block.notes && (
                          <p className="text-gray-400 font-medium italic">
                            "{block.notes}"
                          </p>
                        )}
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => handleDelete(block.id)}
                        className="h-14 px-8 rounded-2xl border-2 border-gray-100 text-red-500 font-black hover:bg-red-50 hover:border-red-200 transition-all flex items-center gap-2"
                      >
                        <Trash2 className="w-5 h-5" />
                        Liberar Data
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

