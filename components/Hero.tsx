
import React from 'react';
import { MessageCircle, Calendar, ArrowRight, Zap, Sparkles, Gauge } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-turbo-orange/10 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-1/2 bg-blue-600/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 animate-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-white/5 px-5 py-2.5 rounded-none skew-x-[-12deg]">
            <Gauge className="w-4 h-4 text-turbo-orange" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-300">Nível Automotivo Profissional</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase italic">
              DRIVEN BY <br/>
              <span className="text-turbo-orange block drop-shadow-[0_0_15px_rgba(255,94,0,0.5)]">PRECISION.</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-lg leading-tight font-medium">
            Não é apenas uma lavagem. É o cuidado que seu veiculo merece. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button className="flex items-center justify-center gap-3 bg-turbo-orange text-white px-10 py-5 rounded-none font-black text-xl hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 skew-x-[-12deg] glow-orange group">
              AGENDAR AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 glass text-white px-10 py-5 rounded-none font-black text-xl hover:bg-white/10 transition-all border border-white/10 skew-x-[-12deg]">
              <MessageCircle className="w-5 h-5 text-turbo-orange" />
              WHATSAPP
            </button>
          </div>

          <div className="flex items-center gap-10 pt-10">
             <div className="space-y-1">
               <p className="text-4xl font-black italic tracking-tighter">40min</p>
               <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Tempo Médio</p>
             </div>
             <div className="w-px h-12 bg-zinc-800"></div>
             <div className="space-y-1">
               <p className="text-4xl font-black italic tracking-tighter">100%</p>
               <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Bio-Degradável</p>
             </div>
          </div>
        </div>

        <div className="relative animate-in zoom-in duration-1000 delay-300 group">
          <div className="absolute -inset-4 bg-turbo-orange/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://i.ibb.co/Q3fvxFfC/Chat-GPT-Image-12-de-jan-de-2026-19-56-05.png" 
              alt="Performance Detail" 
              className="w-full object-cover aspect-[4/5] scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Floating Data Tags */}
          <div className="absolute top-10 -left-10 glass px-6 py-4 rounded-none skew-x-[-12deg] border-l-4 border-l-turbo-orange animate-speed">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-turbo-orange">Status</span>
              <span className="text-xl font-black italic">ULTRA REFLEXO</span>
            </div>
          </div>

          <div className="absolute bottom-20 -right-5 glass px-6 py-4 rounded-none skew-x-[-12deg] border-r-4 border-r-blue-500">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase text-blue-500">Protection</span>
              <span className="text-xl font-black italic">REVESTIMENTO CERÂMICO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
