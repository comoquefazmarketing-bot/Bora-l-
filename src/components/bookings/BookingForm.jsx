import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";

export default function BookingForm({ space, onSubmit, onCancel, isProcessing }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guestsCount, setGuestsCount] = useState(1);
  const [notes, setNotes] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const days = differenceInDays(checkOut, checkIn);
    return days > 0 ? days * space.price_per_day : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert("Por favor, selecione as datas de entrada e saída");
      return;
    }
    
    onSubmit({
      check_in: format(checkIn, "yyyy-MM-dd"),
      check_out: format(checkOut, "yyyy-MM-dd"),
      guests_count: parseInt(guestsCount),
      total_price: calculateTotal(),
      notes,
      status: "pendente"
    });
  };

  const days = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Check-in */}
        <div className="space-y-2">
          <Label className="font-bold text-gray-700">Entrada</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left h-12 rounded-xl border-gray-100">
                <CalendarIcon className="mr-2 h-4 w-4 text-teal-500" />
                {checkIn ? format(checkIn, "dd/MM/yyyy", { locale: ptBR }) : <span className="text-gray-400">Quando você vai?</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-3xl overflow-hidden shadow-2xl">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(date) => date < new Date()}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <Label className="font-bold text-gray-700">Saída</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left h-12 rounded-xl border-gray-100">
                <CalendarIcon className="mr-2 h-4 w-4 text-teal-500" />
                {checkOut ? format(checkOut, "dd/MM/yyyy", { locale: ptBR }) : <span className="text-gray-400">Até quando?</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-3xl overflow-hidden shadow-2xl">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) => !checkIn || date <= checkIn}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests" className="font-bold text-gray-700">Número de Convidados</Label>
        <Input
          id="guests"
          type="number"
          min="1"
          max={space.capacity || 100}
          value={guestsCount}
          onChange={(e) => setGuestsCount(e.target.value)}
          className="h-12 rounded-xl border-gray-100"
        />
        {space.capacity && (
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Lotação Máxima: {space.capacity} pessoas</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes" className="font-bold text-gray-700">Observações</Label>
        <Textarea
          id="notes"
          placeholder="Ex: Vou levar um pet pequeno, tudo bem?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="rounded-xl border-gray-100"
        />
      </div>

      {days > 0 && (
        <div className="bg-teal-50/50 p-6 rounded-3xl space-y-3 border border-teal-100 animate-in fade-in zoom-in-95">
          <div className="flex justify-between text-sm font-medium text-gray-600">
            <span>R$ {space.price_per_day} x {days} dias</span>
            <span>R$ {calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-black text-xl pt-3 border-t border-teal-100 text-gray-900">
            <span>Total</span>
            <span className="text-teal-600">R$ {calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          className="flex-1 h-14 rounded-2xl font-bold"
        >
          Voltar
        </Button>
        <Button
          type="submit"
          disabled={isProcessing || !checkIn || !checkOut}
          className="flex-1 bg-black hover:bg-teal-600 h-14 rounded-2xl font-black text-lg transition-all shadow-xl"
        >
          {isProcessing ? <Loader2 className="animate-spin" /> : "Solicitar Reserva"}
        </Button>
      </div>
    </form>
  );
}

