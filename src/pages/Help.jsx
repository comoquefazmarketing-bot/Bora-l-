import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { HelpCircle, MessageCircle, Send, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";

const faqs = [
  {
    question: "O que é o BoraLá?",
    answer: "BoraLá é uma plataforma que conecta pessoas que querem alugar espaços de lazer (piscinas, chácaras, salões) com anfitriões que têm esses espaços disponíveis. É o seu portal para momentos inesquecíveis!"
  },
  {
    question: "Como faço para reservar um espaço?",
    answer: "Busque o espaço ideal, selecione as datas e clique em 'Reservar'. Você será direcionado para alinhar os detalhes finais via WhatsApp ou sistema, garantindo segurança e agilidade."
  },
  {
    question: "Como anunciar meu espaço?",
    answer: "Acesse 'Meus Espaços' no menu, clique em 'Adicionar Espaço' e preencha os detalhes. Em poucos minutos seu anúncio estará no ar para milhares de usuários."
  },
  {
    question: "É seguro alugar pelo app?",
    answer: "Sim! Verificamos os perfis e oferecemos um sistema de avaliações transparente para que você escolha sempre a melhor experiência baseada na opinião de outros usuários."
  }
];

export default function Help() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const whatsappUrl = base44.agents.getWhatsAppConnectURL('lia');

  return (
    <div className="min-h-screen pb-20" style={{ background: '#FAFAF9' }}>
      <div className="max-w-4xl mx-auto px-6 pt-16">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-black rounded-[32px] flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <HelpCircle className="w-10 h-10 text-teal-500" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">Central de Ajuda</h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Dúvidas, sugestões ou apenas um 'oi'? Estamos aqui para tornar sua jornada incrível.
          </p>
        </motion.div>

        {/* FAQ Sensorial */}
        <div className="grid gap-4 mb-16">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            <Sparkles className="text-teal-500" size={24} /> Perguntas Frequentes
          </h2>
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all rounded-3xl overflow-hidden group">
                <CardHeader className="cursor-pointer p-6">
                  <CardTitle className="text-lg font-bold flex justify-between items-center group-hover:text-teal-600 transition-colors">
                    {faq.question}
                    <ChevronRight size={20} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Lia Card */}
        <motion.div whileHover={{ scale: 1.01 }} className="mb-16">
          <Card className="border-none shadow-2xl rounded-[40px] bg-white overflow-hidden relative border-2 border-teal-50">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MessageCircle size={120} />
            </div>
            <CardContent className="p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-[32px] flex items-center justify-center shadow-xl flex-shrink-0">
                <MessageCircle size={48} className="text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black text-gray-900 mb-2">Fale com a Lia</h3>
                <p className="text-gray-500 font-medium mb-6">Nossa concierge inteligente atende você 24h por dia via WhatsApp.</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 h-14 rounded-2xl font-black text-lg shadow-lg shadow-green-100">
                    Iniciar Conversa
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Suporte Direct Form */}
        <Card className="border-none shadow-xl rounded-[40px] bg-white overflow-hidden">
          <CardHeader className="bg-gray-50/50 p-10 text-center border-b border-gray-100">
            <CardTitle className="text-3xl font-black tracking-tighter">Ainda precisa de ajuda?</CardTitle>
            <p className="text-gray-500 font-medium">Envie uma mensagem direta para nosso time de suporte.</p>
          </CardHeader>
          <CardContent className="p-10">
            <AnimatePresence>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                  <div className="w-20 h-20 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-500 font-medium">Fique de olho no seu e-mail, responderemos rapidinho.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="font-bold text-gray-700 ml-1">Nome</Label>
                      <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="h-14 rounded-2xl bg-gray-50 border-none" placeholder="Felipe Makarios" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-gray-700 ml-1">E-mail</Label>
                      <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="h-14 rounded-2xl bg-gray-50 border-none" placeholder="felipe@exemplo.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-gray-700 ml-1">Como podemos ajudar?</Label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="h-[148px] rounded-2xl bg-gray-50 border-none resize-none" placeholder="Descreva sua dúvida ou problema..." required />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button type="submit" className="w-full h-16 bg-black text-white hover:bg-teal-600 rounded-2xl font-black text-lg transition-colors shadow-xl">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

