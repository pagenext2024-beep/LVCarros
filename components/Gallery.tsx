
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const filteredImages = filter === 'todos' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  const categories = [
    { label: 'TODOS', value: 'todos' },
    { label: 'PERFORMANCE', value: 'esportivo' },
    { label: 'UTILITY', value: 'suv' },
    { label: 'EXECUTIVE', value: 'sedan' },
    { label: 'RESULTS', value: 'antes-depois' },
  ];

  return (
    <section id="galeria" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center space-y-8 mb-20">
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter italic uppercase leading-none">
            GALLERY OF <span className="text-turbo-orange">REFLECTIONS</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-8 py-2.5 rounded-none font-black text-[10px] tracking-[0.2em] transition-all skew-x-[-12deg] border ${filter === cat.value ? 'bg-turbo-orange border-turbo-orange text-white glow-orange' : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/20'}`}
              >
                <span className="inline-block skew-x-[12deg]">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-zinc-900 aspect-[4/5] cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-turbo-orange font-black text-[10px] uppercase tracking-[0.3em] mb-2">{img.category}</p>
                  <h4 className="text-white font-black text-3xl uppercase italic tracking-tighter">{img.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
