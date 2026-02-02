import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, MessageCircle } from "lucide-react";

export default function BookingForm({ space }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const days = differenceInDays(checkOut, checkIn);
    return days > 0 ? days * space.price_per_day : space.price_per_day;
  };

  const handleWhatsAppRedirect = () => {
    if (!checkIn || !checkOut) {
      alert("Por favor, selecione as datas de entrada e saÃ­da");
      return;
    }

    const total = calculateTotal();
    const message = `Olá Felipe! Gostaria de reservar o ${space.title}.` + 
                    ` Entrada: ${format(checkIn, "dd/MM")}` + 
                    ` SaÃ­da: ${format(checkOut, "dd/MM")}.` + 
                    ` Valor Total: R$ ${total}`;
    
    window.open(`https://wa.me/5517991557002?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="font-bold text-slate-700">Check-in</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start rounded-xl font-bold">
                <CalendarIcon className="mr-2 h-4 w-4 text-[#00BFA6]" />
                {checkIn ? format(checkIn, "dd/MM/yy") : "Entrada"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} locale={ptBR} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="font-bold text-slate-700">Check-out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start rounded-xl font-bold">
                <CalendarIcon className="mr-2 h-4 w-4 text-[#00BFA6]" />
                {checkOut ? format(checkOut, "dd/MM/yy") : "SaÃ­da"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} locale={ptBR} />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Total Estimado</span>
          <span className="text-[#00BFA6] font-black text-2xl">R$ {calculateTotal()}</span>
        </div>
        <p className="text-[10px] text-slate-400 font-medium italic">* Sujeito a confirmação de disponibilidade</p>
      </div>

      <Button 
        onClick={handleWhatsAppRedirect}
        className="w-full h-16 rounded-2xl bg-[#00BFA6] hover:bg-[#009688] text-white font-black text-lg gap-3 shadow-lg shadow-[#00BFA6]/20 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
        Reservar pelo WhatsApp
      </Button>
    </div>
  );
}