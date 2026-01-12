
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-flash-yellow font-black uppercase tracking-widest text-sm">Fale Conosco</span>
              <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase">PRONTO PARA O <span className="text-flash-yellow italic">BRILHO?</span></h2>
              <p className="text-zinc-500 text-xl max-w-lg">
                Agende agora mesmo seu horário ou tire suas dúvidas com nossos especialistas em estética automotiva.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-flash-yellow p-3 rounded-xl text-black">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm text-zinc-400">Telefone</h4>
                    <p className="text-lg font-bold">(11) 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-electric-blue p-3 rounded-xl text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm text-zinc-400">Localização</h4>
                    <p className="text-lg font-bold">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-3 rounded-xl text-flash-yellow">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm text-zinc-400">Horários</h4>
                    <p className="text-lg font-bold">Seg - Sáb: 08h às 19h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-xl text-white">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm text-zinc-400">WhatsApp</h4>
                    <p className="text-lg font-bold">Online Agora</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all flex items-center justify-center gap-3 active:scale-95">
                <MessageSquare className="w-7 h-7" />
                CONVERSAR NO WHATSAPP
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-zinc-500 font-bold text-sm uppercase">Siga-nos:</span>
              <a href="#" className="p-3 bg-zinc-900 rounded-xl hover:bg-flash-yellow hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-xl hover:bg-flash-yellow hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-flash-yellow to-electric-blue rounded-[40px] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative h-full min-h-[450px] bg-zinc-900 rounded-[32px] overflow-hidden border border-white/10">
              {/* Google Maps Embed Placeholder (iframe) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197365634045!2d-46.65431622376918!3d-23.561349661186717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da117c45%3A0x6a05364e7dfc02f0!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
