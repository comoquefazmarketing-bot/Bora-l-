import React from 'react';
import { Target, Users, Calculator, MessageCircle, ArrowLeft, Heart, ShieldCheck, Zap, Star, AlertCircle, CheckCircle2, Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Treinamento() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 mb-8 hover:text-black transition-all font-bold uppercase text-xs tracking-widest">
          <ArrowLeft size={18} /> Voltar para o Painel
        </button>

        <header className="mb-16">
          <span className="bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">Interno: Equipe Como Que Faz</span>
          <h1 className="text-5xl font-black mt-4 mb-4 italic uppercase leading-none">O Mercado está quebrado.<br/><span className="text-[#00BFA6]">Nós somos a cura.</span></h1>
        </header>

        {/* COMPARATIVO: O CAOS VS A SOLUÇÃO */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-red-50 p-8 rounded-[40px] border border-red-100">
            <h3 className="text-red-600 font-black uppercase italic mb-6 flex items-center gap-2">
              <AlertCircle size={20} /> O Caos de Hoje
            </h3>
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li>• O cliente pede indicação em grupos e recebe 20 números aleatórios.</li>
              <li>• Tem que salvar contato por contato e mandar a mesma pergunta 20 vezes.</li>
              <li>• O dono da área responde 50 "curiosos" por dia com as mesmas fotos e textos.</li>
              <li>• No fim, o cliente aluga no escuro e o dono perde o dia no WhatsApp.</li>
            </ul>
          </div>
          <div className="bg-[#E6F9F6] p-8 rounded-[40px] border border-[#00BFA6]">
            <h3 className="text-[#00BFA6] font-black uppercase italic mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} /> A Solução Bora Lá
            </h3>
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li>• Vitrine Única: O cliente vê todas as opções, preços e fotos em um só lugar.</li>
              <li>• Filtro Inteligente: A Karen faz a triagem e entrega o lead pronto pro dono.</li>
              <li>• Confiança: Curadoria Felipe Makarios. Acabou o medo de chácara fantasma.</li>
              <li>• Economia: Calculadora de Churrasco evita que o cliente jogue dinheiro fora.</li>
            </ul>
          </div>
        </div>

        {/* ARGUMENTOS DE VENDA POR SEGMENTO */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-black uppercase italic">Argumentos de Ouro [2026]</h2>
          
          {/* Para Donos */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-[#00BFA6]">
              <Star fill="currentColor" />
              <h4 className="text-xl font-black uppercase italic">Para Donos de Áreas</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              "Você não é atendente, é empresário. Deixe que o Bora Lá atenda os curiosos. Nós te entregamos quem já viu as fotos, já sabe o preço e só quer a chave."
            </p>
            <div className="flex gap-2 text-[10px] font-bold uppercase text-gray-400">
              <span>#FIM_DOS_CURIOSOS</span> <span>#VALORIZAÇÃO_DO_IMÓVEL</span>
            </div>
          </div>

          {/* Para Fornecedores */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <Handshake size={24} />
              <h4 className="text-xl font-black uppercase italic">Para Fornecedores</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              "Anunciar em rede social é pescar no oceano. No Bora Lá, você pesca no aquário. Entregamos o cliente no exato momento em que ele fechou a locação e precisa de você."
            </p>
            <div className="flex gap-2 text-[10px] font-bold uppercase text-gray-400">
              <span>#PONTO_DE_VENDA_ESTRATÉGICO</span> <span>#CLIENTE_COM_CARTÃO_NA_MÃO</span>
            </div>
          </div>
        </div>

        {/* CULTURA DA ECONOMIA */}
        <div className="bg-[#EE0000] p-10 rounded-[50px] text-white">
          <div className="flex items-center gap-4 mb-6">
            <Calculator size={40} />
            <h2 className="text-3xl font-black uppercase italic leading-none">A Calculadora é<br/>nossa Arma Secreta</h2>
          </div>
          <p className="font-bold text-lg mb-6 opacity-90">
            "Sabe por que somos os melhores? Porque nos importamos com o bolso do cliente."
          </p>
          <p className="text-sm leading-relaxed">
            Ensine o colaborador: Se o cliente economiza R$ 200,00 no churrasco usando nossa ferramenta, ele tem R$ 200,00 a mais para investir na locação de uma chácara melhor. Nós criamos riqueza para o ecossistema.
          </p>
        </div>

        <footer className="mt-20 text-center text-gray-400 font-black uppercase italic text-[10px] tracking-widest">
          Propriedade Intelectual Felipe Makarios • Bora Lá v2.0
        </footer>
      </div>
    </div>
  );
}