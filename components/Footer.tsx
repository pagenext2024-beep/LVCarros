
import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-flash-yellow p-1.5 rounded-lg">
              <Zap className="text-black w-6 h-6 fill-current" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter">
              FLASH<span className="text-flash-yellow italic">LAVACAR</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-zinc-500 uppercase tracking-widest">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-zinc-600 text-xs font-bold uppercase tracking-widest gap-4">
          <p>© 2024 FLASH LAVACAR. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="flex items-center gap-1">
            FEITO COM <Heart className="w-3 h-3 text-red-600 animate-pulse" /> PARA OS APAIXONADOS POR CARROS.
          </p>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-zinc-800 font-bold uppercase tracking-[1em] opacity-30">
          SEU CARRO LIMPO EM TEMPO RECORDE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
