
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-zinc-900/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase">QUEM USA, <span className="text-flash-yellow italic">CONFIA</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o combustível que nos faz buscar a perfeição em cada detalhe da lavagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 glass rounded-3xl border-white/5 relative group hover:border-flash-yellow/30 transition-all">
              <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-flash-yellow text-flash-yellow" />
                ))}
              </div>
              <p className="text-lg italic text-zinc-300 leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-flash-yellow" />
                <div>
                  <h4 className="font-black text-lg uppercase tracking-tight">{t.name}</h4>
                  <p className="text-zinc-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
