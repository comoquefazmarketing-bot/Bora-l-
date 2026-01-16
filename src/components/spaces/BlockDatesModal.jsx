import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Calendar as CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function BlockDatesModal({ space, isOpen, onClose }) {
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  const blockMutation = useMutation({
    mutationFn: async (blockData) => {
      return base44.entities.Booking.create(blockData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      onClose();
      // Reset campos
      setStartDate("");
      setEndDate("");
      setNotes("");
    },
  });

  const handleBlock = () => {
    if (!startDate) {
      alert("Por favor, selecione ao menos a data inicial");
      return;
    }

    const blockData = {
      space_id: space.id,
      check_in: startDate,
      check_out: endDate || startDate,
      guests_count: 0,
      total_price: 0,
      status: "confirmada",
      is_block: true,
      notes: notes || "Bloqueio de data pelo proprietário",
      guest_email: "sistema@borala.com",
      guest_name: "Bloqueio do Proprietário"
    };

    blockMutation.mutate(blockData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-[32px] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
            <CalendarIcon className="text-teal-500" />
            Bloquear Datas
          </DialogTitle>
          <p className="text-sm text-gray-500">Impeça reservas em dias específicos para {space?.title}.</p>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-bold text-xs uppercase tracking-wider text-gray-400">Início</Label>
              <Input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)}
                className="rounded-xl border-gray-100 focus:ring-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-bold text-xs uppercase tracking-wider text-gray-400">Fim (Opcional)</Label>
              <Input 
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)}
                className="rounded-xl border-gray-100 focus:ring-teal-500"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="font-bold text-xs uppercase tracking-wider text-gray-400">Motivo do Bloqueio</Label>
            <Textarea 
              placeholder="Ex: Manutenção da piscina, reserva externa..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="rounded-2xl border-gray-100 focus:ring-teal-500 min-h-[100px]"
            />
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" onClick={onClose} className="rounded-xl font-bold">Cancelar</Button>
          <Button 
            onClick={handleBlock} 
            disabled={blockMutation.isPending}
            className="bg-black text-white hover:bg-teal-600 rounded-xl font-black px-8"
          >
            {blockMutation.isPending ? (
              <Loader2 className="animate-spin mr-2" />
            ) : (
              <CheckCircle2 size={18} className="mr-2" />
            )}
            Confirmar Bloqueio
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

