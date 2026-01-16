import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const statusLabels = {
  pendente: { label: "Pendente", color: "bg-yellow-100 text-yellow-800" },
  confirmada: { label: "Confirmada", color: "bg-teal-100 text-teal-800" },
  cancelada: { label: "Cancelada", color: "bg-red-100 text-red-800" },
  concluida: { label: "Concluída", color: "bg-gray-100 text-gray-800" }
};

export default function MyBookings() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
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

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['my-bookings', user?.email],
    queryFn: () => base44.entities.Booking.filter({ guest_email: user.email }, '-created_date'),
    enabled: !!user,
  });

  const { data: spaces = [] } = useQuery({
    queryKey: ['spaces-for-bookings'],
    queryFn: () => base44.entities.Space.list(),
  });

  if (!user || isLoading) {
    return (
      <div className="p-6 md:p-12 max-w-5xl mx-auto space-y-6">
        <Skeleton className="h-20 w-1/3 rounded-2xl" />
        {Array(3).fill(0).map((_, i) => (
          <Skeleton key={i} className="h-48 w-full rounded-[32px]" />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-12" style={{ background: '#FAFAF9' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl bg-black">
              <Calendar className="w-8 h-8 text-teal-500" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Minhas Reservas</h1>
              <p className="text-gray-500 font-medium">Histórico de momentos inesquecíveis.</p>
            </div>
          </div>
        </motion.div>

        {bookings.length === 0 ? (
          <Card className="border-none shadow-xl rounded-[40px] bg-white overflow-hidden">
            <CardContent className="p-20 text-center">
              <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ainda sem planos?</h3>
              <p className="text-gray-500 mb-8 max-w-xs mx-auto">Explore espaços incríveis e comece a criar memórias hoje mesmo.</p>
              <Button onClick={() => window.location.href = '/'} className="bg-black text-white px-8 h-14 rounded-2xl font-black">
                Explorar Agora
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => {
              const space = spaces.find(s => s.id === booking.space_id);
              const status = statusLabels[booking.status] || statusLabels.pendente;
              
              return (
                <motion.div key={booking.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow rounded-[32px] overflow-hidden bg-white">
                    <CardContent className="p-0 flex flex-col md:flex-row">
                      {space && (
                        <div className="w-full md:w-72 h-48 md:h-auto overflow-hidden">
                          <img 
                            src={space.main_image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"} 
                            className="w-full h-full object-cover"
                            alt={space.title}
                          />
                        </div>
                      )}
                      
                      <div className="flex-1 p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <Badge className={"border-none rounded-full px-3 mb-2 font-bold"}>
                              {status.label}
                            </Badge>
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">{space?.title || "Espaço"}</h3>
                            <p className="text-gray-400 flex items-center gap-1 text-sm"><MapPin size={14}/> {space?.city}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Valor Total</p>
                            <p className="text-xl font-black text-teal-600">R$ {booking.total_price}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase">Período</p>
                            <p className="font-bold text-gray-700 flex items-center gap-2">
                              {format(new Date(booking.check_in), "dd/MM")} <ArrowRight size={14}/> {format(new Date(booking.check_out), "dd/MM")}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase">Hóspedes</p>
                            <p className="font-bold text-gray-700 flex items-center gap-2">
                              <Users size={16}/> {booking.guests_count} pessoas
                            </p>
                          </div>
                          <div className="hidden md:block space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase">Reserva</p>
                            <p className="font-bold text-gray-700 text-sm">#{booking.id.substring(0,8)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

