/* * @author Felipe Makarios | Lead Architect - BORA LÁ 
 * Contato: felipemakarios@borala.app
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, Zap, ArrowLeft, ShieldCheck, 
  HelpCircle, Star, Scale, Calculator, MessageSquare,
  BarChart3, MousePointerClick, Crown, Target, LayoutDashboard, Rocket,
  Shield, Flame, Utensils, Music, Truck, Users2, Package
} from 'lucide-react';

export default function PartnersPlans() {
  const navigate = useNavigate();

  const handleAsaasCheckout = (plano) => {
    const links = {
      essencial: "https://www.asaas.com/c/hvcfnmujcv6wdvut",
      consumo: "https://www.asaas.com/c/nf4p20073jj6xp0u",
      elite: "https://www.asaas.com/c/gidsj0c98ej2i72f"
    };
    window.open(links[plano], '_blank');
  };

  const handleSupportKaren = () => {
    window.open("https://wa.me/5517992144793?text=Oi%20Karen,%20sou%20parceiro%20do%20Bora%20Lá%20e%20preciso%20de%20ajuda!", '_blank');
  };

  const scrollToPlans = () => {
    const element = document.getElementById('plans-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20 pt-32 px-6 overflow-x-hidden text-left font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* NAVEGAÇÃO */}
        <button onClick={() => navigate('/partners')} className="mb-12 flex items-center gap-3 font-black uppercase italic text-xs tracking-[0.2em] text-slate-400 hover:text-[#00BFA6] transition-all group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> VOLTAR PARA CATEGORIAS
        </button>

        {/* HERO SECTION */}
        <header className="mb-28">
          <div className="inline-flex items-center gap-2 bg-[#00BFA6]/10 text-[#00BFA6] px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-[#00BFA6]/20">
            <BarChart3 size={14} /> DADOS DE MARÇO/2026: GOOGLE ANALYTICS
          </div>
          <h1 className="text-6xl lg:text-[10rem] font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-12 text-black">
            CHEGA DE <br/> DESCULPAS. <br/> <span className="text-[#00BFA6]">VAMOS VENDER.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 bg-[#0F172A] p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFA6]/10 blur-[100px] -z-0"></div>
            <div className="relative z-10 border-l-4 border-[#00BFA6] pl-6">
              <div className="text-[#00BFA6] font-[1000] text-7xl mb-2 leading-none">327+</div>
              <p className="text-slate-400 font-bold uppercase italic text-sm tracking-tight leading-tight">Clientes com intenção real<br/>buscando agora</p>
            </div>
            <div className="relative z-10 border-l-4 border-slate-700 pl-6">
              <div className="text-[#00BFA6] font-[1000] text-7xl mb-2 leading-none">4.4k</div>
              <p className="text-slate-400 font-bold uppercase italic text-sm tracking-tight leading-tight">Interações com parceiros<br/>no último mês</p>
            </div>
            <div className="relative z-10 border-l-4 border-slate-700 pl-6">
              <div className="text-[#00BFA6] font-[1000] text-7xl mb-2 leading-none">1.2k</div>
              <p className="text-slate-400 font-bold uppercase italic text-sm tracking-tight leading-tight">Cálculos realizados na<br/>Calculadora de Churrasco</p>
            </div>
          </div>
        </header>

        {/* DIFERENCIAL */}
        <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#00BFA6] rounded-[70px] p-10 lg:p-24 text-white shadow-2xl relative overflow-hidden">
                <div className="lg:col-span-7 relative z-10 text-left">
                    <h2 className="text-5xl lg:text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.9] mb-10 text-black">
                        POR QUE O <br/>BORA LÁ DÁ RESULTADO?
                    </h2>
                    <p className="text-2xl font-bold text-white uppercase italic tracking-tighter leading-tight mb-12 max-w-2xl">
                        Enquanto os outros apps tentam te vender "curtidas", o Bora Lá foca em <span className="text-black font-black italic underline">leads prontos para fechar</span>.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-black/10 p-8 rounded-[2.5rem] backdrop-blur-sm border border-white/20">
                            <Calculator className="text-black mb-4" size={40} />
                            <h4 className="font-black uppercase italic text-xl text-black mb-2 leading-none">Calculadora de Churrasco</h4>
                            <p className="text-sm font-bold text-white/90 uppercase italic leading-tight">Nossa ferramenta resolve a dor de cabeça do cliente. Ao saber o que precisa, ele busca quem entrega: VOCÊ.</p>
                        </div>
                        <div className="bg-black/10 p-8 rounded-[2.5rem] backdrop-blur-sm border border-white/20">
                            <MousePointerClick className="text-black mb-4" size={40} />
                            <h4 className="font-black uppercase italic text-xl text-black mb-2 leading-none">Clique Direto</h4>
                            <p className="text-sm font-bold text-white/90 uppercase italic leading-tight">Sem "falar com bot". O cliente clica e abre o SEU WhatsApp. A negociação é rápida, direta e sua.</p>
                        </div>
                    </div>

                    <button onClick={scrollToPlans} className="group flex items-center gap-4 px-16 py-8 bg-black text-[#00BFA6] rounded-[2.5rem] font-[1000] uppercase italic tracking-widest hover:scale-105 transition-all shadow-2xl border-b-8 border-[#00BFA6]/20">
                        VER MEU PLANO <Rocket size={24} className="fill-[#00BFA6]" />
                    </button>
                </div>

                <div className="lg:col-span-5 bg-black/10 p-12 rounded-[50px] backdrop-blur-md border border-white/20 flex flex-col justify-center text-left">
                    <h4 className="font-[1000] uppercase italic text-2xl mb-10 tracking-tight text-black">A VITRINE PERFEITA PARA:</h4>
                    <ul className="space-y-6 text-black">
                        {[
                          { text: "Churrasqueiros e Assadores", icon: Flame },
                          { text: "Buffets e Gastronomia", icon: Utensils },
                          { text: "Locação de Mesas e Utensílios", icon: Package },
                          { text: "Tendas e Coberturas", icon: Shield },
                          { text: "Equipes de Apoio (Garçons, Limpeza)", icon: Users2 },
                          { text: "DJs, Bandas e Entretenimento", icon: Music },
                          { text: "Logística e Frete", icon: Truck }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-5 font-black uppercase italic text-sm group">
                            <div className="bg-black rounded-full p-1.5 group-hover:bg-[#00BFA6] transition-colors">
                              <item.icon size={16} className="text-white group-hover:text-black" />
                            </div>
                            {item.text}
                          </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* PLANOS */}
        <section id="plans-section" className="mb-32 pt-20">
            <h2 className="text-center text-5xl lg:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-20 text-black">
                DÊ O PRÓXIMO <br/> <span className="text-[#00BFA6]">PASSO PROFISSIONAL.</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div className="bg-white p-14 rounded-[70px] shadow-xl border border-slate-200 flex flex-col text-left hover:border-[#00BFA6] transition-all">
                    <h3 className="font-[1000] uppercase italic text-4xl mb-1 text-slate-300">ESSENCIAL</h3>
                    <p className="font-black text-[#00BFA6] uppercase italic text-xs mb-10 tracking-widest">Sua base no digital</p>
                    <ul className="space-y-6 mb-12 flex-grow text-slate-500 font-black uppercase italic text-sm">
                        <li className="flex items-center gap-3"><Check size={18} className="text-[#00BFA6]"/> Perfil Individual na Vitrine</li>
                        <li className="flex items-center gap-3"><Check size={18} className="text-[#00BFA6]"/> Link Direto para WhatsApp</li>
                        <li className="flex items-center gap-3"><Check size={18} className="text-[#00BFA6]"/> Galeria de Portfólio</li>
                    </ul>
                    <div className="mb-10 text-5xl font-[1000] text-black">R$ 29,90</div>
                    <button onClick={() => handleAsaasCheckout('essencial')} className="w-full py-7 rounded-[2.5rem] bg-slate-100 font-[1000] uppercase italic hover:bg-black hover:text-white transition-all text-sm tracking-widest text-black">ASSINAR AGORA</button>
                </div>

                <div className="bg-white p-14 rounded-[70px] shadow-2xl border-4 border-[#00BFA6] relative lg:scale-110 z-20 flex flex-col text-left">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#00BFA6] text-white px-10 py-3.5 rounded-full text-xs font-[1000] uppercase tracking-widest shadow-2xl whitespace-nowrap">CAMPEÃO DE ORÇAMENTOS</div>
                    <h3 className="font-[1000] uppercase italic text-4xl mb-1 text-black">CONSUMO PLUS</h3>
                    <p className="font-black text-[#00BFA6] uppercase italic text-xs mb-10 tracking-widest">Para quem quer crescer</p>
                    <ul className="space-y-6 mb-12 flex-grow text-black font-black uppercase italic text-sm">
                        <li className="flex items-center gap-3"><Zap size={20} className="text-[#00BFA6] fill-[#00BFA6]"/> TOPO DA CATEGORIA (DESTAQUE)</li>
                        <li className="flex items-center gap-3"><Check size={18} className="text-[#00BFA6]"/> SELO DE PARCEIRO VERIFICADO</li>
                        <li className="flex items-center gap-3"><Check size={18} className="text-[#00BFA6]"/> ASSISTÊNCIA NA CURADORIA (KAREN)</li>
                        <li className="flex items-center gap-3"><LayoutDashboard size={18} className="text-[#00BFA6]"/> MAIOR EXPOSIÇÃO EM BUSCAS</li>
                    </ul>
                    <div className="mb-10 text-6xl font-[1000] text-black">R$ 59,90</div>
                    <button onClick={() => handleAsaasCheckout('consumo')} className="w-full py-7 rounded-[2.5rem] bg-[#00BFA6] text-white font-[1000] uppercase italic shadow-2xl shadow-[#00BFA6]/40 hover:scale-105 transition-all text-sm tracking-widest">PEGAR MINHA VAGA</button>
                </div>

                <div className="bg-[#0F172A] p-14 rounded-[70px] shadow-xl text-white flex flex-col text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12"><Crown size={150} /></div>
                    <h3 className="font-[1000] uppercase italic text-4xl mb-1 text-[#00BFA6]">ELITE MAX</h3>
                    <p className="font-black text-slate-500 uppercase italic text-xs mb-10 tracking-widest">Nível Patrocinador</p>
                    <ul className="space-y-6 mb-12 flex-grow text-white font-black uppercase italic text-sm">
                        <li className="flex items-center gap-3 text-[#00BFA6]"><Star size={20} className="fill-[#00BFA6]"/> SPONSOR NA CALCULADORA</li>
                        <li className="flex items-center gap-3"><Check size={18} className="text-[#00BFA6]"/> BANNER FULL-WIDTH NA HOME</li>
                        <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#00BFA6]"/> CONSULTORIA COM FELIPE MAKARIOS</li>
                    </ul>
                    <div className="mb-10 text-5xl font-[1000] text-white">R$ 350,00</div>
                    <button onClick={() => handleAsaasCheckout('elite')} className="w-full py-7 rounded-[2.5rem] bg-white text-black font-[1000] uppercase italic hover:bg-[#00BFA6] hover:text-white transition-all text-sm tracking-widest">QUERO SER ELITE</button>
                </div>
            </div>
        </section>

        {/* REGRA DOS 3 */}
        <section className="mb-40 bg-white rounded-[80px] p-12 lg:p-28 shadow-2xl border-2 border-black relative overflow-hidden text-left">
            <div className="absolute top-10 left-10 bg-black text-[#00BFA6] px-12 py-6 rounded-[2.5rem] font-[1000] uppercase italic text-3xl rotate-[-2deg] z-20 shadow-2xl">A REGRA DOS 3</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 pt-28 lg:pt-0 text-black">
                <div>
                    <h2 className="text-5xl lg:text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.9] mb-12">
                      POUCA GENTE <br/><span className="text-[#00BFA6]">MUITA FESTA.</span>
                    </h2>
                    <p className="text-xl font-extrabold text-slate-600 uppercase italic tracking-tighter leading-tight mb-12 leading-relaxed">
                        Ninguém gosta de leilão de preço. No Bora Lá, limitamos a apenas <span className="text-black underline decoration-[#00BFA6] decoration-4">3 parceiros por categoria</span> na sua região. 
                    </p>
                    <div className="space-y-8">
                      <div className="flex gap-6 items-start bg-slate-50 p-10 rounded-[3rem] border-l-[16px] border-[#00BFA6] shadow-sm">
                          <Scale size={42} />
                          <div>
                            <h5 className="font-[1000] uppercase italic mb-2 text-xl">CONCORRÊNCIA ÉTICA</h5>
                            <p className="text-sm font-bold text-slate-500 uppercase leading-relaxed">Você não concorre com 50 amadores. Você divide a atenção com outros 2 profissionais de elite.</p>
                          </div>
                      </div>
                      <div className="flex gap-6 items-start bg-slate-50 p-10 rounded-[3rem] border-l-[16px] border-black shadow-sm">
                          <Target size={42} />
                          <div>
                            <h5 className="font-[1000] uppercase italic mb-2 text-xl">FOCO NO RETORNO</h5>
                            <p className="text-sm font-bold text-slate-500 uppercase leading-relaxed">Menos opções para o cliente significa mais chances de VOCÊ ser o escolhido para o orçamento.</p>
                          </div>
                      </div>
                    </div>
                </div>

                <div className="bg-slate-100 rounded-[60px] p-14 border-2 border-dashed border-slate-300 shadow-inner">
                    <h4 className="font-[1000] uppercase italic text-3xl mb-12">DISPONIBILIDADE:</h4>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl flex justify-between items-center border-2 border-transparent hover:border-[#00BFA6] transition-all shadow-md group">
                                <div>
                                  <span className="font-black italic text-slate-400 uppercase text-xs block mb-1">SUA CIDADE ATUAL</span>
                                  <span className="font-[1000] text-2xl text-slate-800 uppercase italic">VAGA #0{i}</span>
                                </div>
                                <span className="text-xs font-[1000] uppercase tracking-widest text-[#00BFA6] bg-[#00BFA6]/10 px-6 py-3 rounded-2xl border border-[#00BFA6]/20">DISPONÍVEL</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ MATADORA - TEXTO GENÉRICO */}
        <section className="bg-white rounded-[80px] p-12 lg:p-28 shadow-2xl border border-slate-100 mb-20 text-left relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-24">
            <div className="bg-[#00BFA6] p-8 rounded-[3rem] shadow-xl text-black shadow-[#00BFA6]/20">
              <HelpCircle size={64} />
            </div>
            <div>
              <h2 className="text-5xl lg:text-[6.5rem] font-[1000] uppercase italic tracking-tighter leading-none mb-4 text-black">DÚVIDAS <br/> <span className="text-[#00BFA6]">FREQUENTES</span></h2>
              <p className="text-xl font-black uppercase italic text-slate-400 tracking-[0.3em]">RESPOSTAS DIRETAS E SEM ENROLAÇÃO</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            <div className="border-b border-slate-100 pb-10 group">
              <h4 className="font-[1000] uppercase italic text-2xl mb-5 text-black leading-tight flex gap-4 group-hover:text-[#00BFA6] transition-colors">
                <span className="text-[#00BFA6]/30">01.</span> PRECISO PAGAR COMISSÃO POR CADA CONTRATO FECHADO?
              </h4>
              <p className="text-slate-500 font-extrabold text-base leading-relaxed uppercase italic">
                <span className="text-black font-black">NÃO.</span> O Bora Lá é uma ferramenta de marketing por assinatura. Se você fechar um contrato de R$ 300 ou R$ 30.000, o valor é integralmente seu. Não intermediamos seu dinheiro.
              </p>
            </div>
            
            <div className="border-b border-slate-100 pb-10 group">
              <h4 className="font-[1000] uppercase italic text-2xl mb-5 text-black leading-tight flex gap-4 group-hover:text-[#00BFA6] transition-colors">
                <span className="text-[#00BFA6]/30">02.</span> NÃO TENHO EXPERIÊNCIA COM TECNOLOGIA. COMO CRIO MEU PERFIL?
              </h4>
              <p className="text-slate-500 font-extrabold text-base leading-relaxed uppercase italic">
                Fique tranquilo! Ao assinar o plano <span className="text-black italic">Consumo Plus</span>, nossa equipe de suporte (Karen) auxilia em todo o processo. Você envia suas fotos e informações via WhatsApp e nós cuidamos da montagem do seu perfil profissional.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-10 group">
              <h4 className="font-[1000] uppercase italic text-2xl mb-5 text-black leading-tight flex gap-4 group-hover:text-[#00BFA6] transition-colors">
                <span className="text-[#00BFA6]/30">03.</span> COMO O CLIENTE CHEGA ATÉ MIM?
              </h4>
              <p className="text-slate-500 font-extrabold text-base leading-relaxed uppercase italic">
                O cliente utiliza a <span className="text-black italic">Calculadora de Churrasco</span> para planejar o evento. Ao finalizar, o sistema recomenda os parceiros da região. O cliente visualiza seu perfil e entra em contato direto pelo <span className="text-black underline">SEU WHATSAPP</span>.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-10 group">
              <h4 className="font-[1000] uppercase italic text-2xl mb-5 text-black leading-tight flex gap-4 group-hover:text-[#00BFA6] transition-colors">
                <span className="text-[#00BFA6]/30">04.</span> TENHO QUE PAGAR MULTA SE QUISER SAIR?
              </h4>
              <p className="text-slate-500 font-extrabold text-base leading-relaxed uppercase italic">
                Zero multas e zero fidelidade. Não acreditamos em contratos que prendem o parceiro. Se o Bora Lá não fizer sentido para o seu momento, você pode cancelar a assinatura a qualquer momento com um clique.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-10 group">
              <h4 className="font-[1000] uppercase italic text-2xl mb-5 text-black leading-tight flex gap-4 group-hover:text-[#00BFA6] transition-colors">
                <span className="text-[#00BFA6]/30">05.</span> O PAGAMENTO É SEGURO? COMO FUNCIONA O PIX?
              </h4>
              <p className="text-slate-500 font-extrabold text-base leading-relaxed uppercase italic">
                Todo o pagamento é processado via <span className="text-black underline decoration-[#00BFA6] font-black italic">ASAAS</span>, referência nacional em segurança. Você pode optar por Cartão ou Pix, com liberação imediata e comprovante no seu e-mail.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-10 group">
              <h4 className="font-[1000] uppercase italic text-2xl mb-5 text-black leading-tight flex gap-4 group-hover:text-[#00BFA6] transition-colors">
                <span className="text-[#00BFA6]/30">06.</span> POSSO APARECER EM MAIS DE UMA CATEGORIA?
              </h4>
              <p className="text-slate-500 font-extrabold text-base leading-relaxed uppercase italic">
                Sim! Para atuar em múltiplas categorias ou cidades, basta realizar uma nova assinatura para cada vaga. Isso garante que a exclusividade da "Regra dos 3" seja sempre respeitada para todos.
              </p>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="bg-[#0F172A] rounded-[100px] p-16 lg:p-32 text-white text-center shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#00BFA6] to-transparent"></div>
          <h3 className="text-5xl lg:text-[10rem] font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-16">
            SUA VAGA <br/> <span className="text-[#00BFA6]">EXPIRA</span> LOGO.
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative z-10">
            <button onClick={scrollToPlans} className="w-full md:w-auto px-20 py-10 bg-[#00BFA6] text-black rounded-[3rem] font-[1000] uppercase italic text-xl hover:scale-105 transition-all shadow-2xl shadow-[#00BFA6]/30 flex items-center justify-center gap-6">
              ASSINAR AGORA <Zap size={28} className="fill-black" />
            </button>
            <button onClick={handleSupportKaren} className="w-full md:w-auto px-20 py-10 bg-white text-black rounded-[3rem] font-[1000] uppercase italic text-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-6 shadow-2xl">
              <MessageSquare size={28} /> TIRAR DÚVIDAS
            </button>
          </div>
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center gap-10">
            <p className="text-lg font-black italic text-white uppercase tracking-tighter">FELIPE MAKARIOS | BORA LÁ © 2026</p>
            <p className="text-[10px] text-slate-700 italic font-black">CONTATO OFICIAL: FELIPEMAKARIOS@BORALA.APP</p>
          </div>
        </footer>

      </div>
    </div>
  );
}