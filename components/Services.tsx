
import React from 'react';
import { Zap } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-24 gap-10">
          <div className="space-y-6">
            <div className="h-1 w-20 bg-turbo-orange"></div>
            <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase italic leading-none">
              NOSSOS <span className="text-turbo-orange">SERVIÇOS</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-md text-lg font-medium leading-snug">
            Trabalhamos com os mesmos padrões de estética das melhores preparadoras mundiais. Excelência técnica sem concessões.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative p-12 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-turbo-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="text-turbo-orange opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display font-black text-3xl italic uppercase group-hover:text-turbo-orange transition-colors tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                  <span className="text-white font-black text-xl italic">{service.price}</span>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-turbo-orange group-hover:border-turbo-orange transition-all">
                    <Zap className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;