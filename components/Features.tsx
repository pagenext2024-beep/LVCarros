
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-electric-blue/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 p-6 glass rounded-3xl border-transparent hover:border-flash-yellow/20 transition-all">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5">
                {feature.icon}
              </div>
              <h4 className="font-black text-lg uppercase">{feature.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
