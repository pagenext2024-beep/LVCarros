
import React from 'react';
import { 
  Zap, 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  Wrench, 
  Wind,
  Clock,
  ThumbsUp,
  Leaf,
  DollarSign
} from 'lucide-react';
import { Service, Testimonial, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: 'simple',
    title: 'Lavagem Stealth',
    description: 'Limpeza externa ultra-rápida com acabamento hidrofóbico básico.',
    icon: <Droplets className="w-8 h-8" />,
    price: 'A partir de R$ 60'
  },
  {
    id: 'complete',
    title: 'Full Detail Performance',
    description: 'Tratamento completo com descontaminação de pintura e revitalização plástica.',
    icon: <Sparkles className="w-8 h-8" />,
    price: 'A partir de R$ 110'
  },
  {
    id: 'polishing',
    title: 'Correção de Pintura',
    description: 'Nível show-car. Remoção técnica de defeitos para o brilho absoluto.',
    icon: <Zap className="w-8 h-8" />,
    price: 'Avaliação técnica'
  },
  {
    id: 'interior',
    title: 'Deep Interior Clean',
    description: 'Higienização a vapor e proteção de couro com nanotecnologia.',
    icon: <ShieldCheck className="w-8 h-8" />,
    price: 'A partir de R$ 280'
  },
  {
    id: 'waxing',
    title: 'Proteção Graphene',
    description: 'A última palavra em proteção contra riscos e intempéries.',
    icon: <Wind className="w-8 h-8" />,
    price: 'A partir de R$ 180'
  },
  {
    id: 'engine',
    title: 'Engine Bay Detail',
    description: 'Limpeza minuciosa com isolamento elétrico e proteção térmica.',
    icon: <Wrench className="w-8 h-8" />,
    price: 'A partir de R$ 100'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Oliveira',
    role: 'BMW M3 Enthusiast',
    content: 'A atenção aos detalhes aqui é cirúrgica. Meu carro saiu com um brilho que nunca vi em outro lugar.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Fernanda Lima',
    role: 'Colecionadora',
    content: 'Serviço de altíssimo padrão. O tratamento Graphene realmente faz a diferença na manutenção.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: '3',
    name: 'Ricardo Souza',
    role: 'Piloto de TrackDay',
    content: 'Rápido, eficiente e técnico. Entendem de carros de performance como ninguém.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/user3/100/100'
  }
];

export const GALLERY: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80', title: 'Porsche GT3 Detail', category: 'esportivo' },
  { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80', title: 'Defender Protection', category: 'suv' },
  { url: 'https://i.ibb.co/Q3fvxFfC/Chat-GPT-Image-12-de-jan-de-2026-19-56-05.png', title: 'Luxury Series', category: 'sedan' },
  { url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80', title: 'Deep Reflection', category: 'antes-depois' },
  { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80', title: 'C8 Corvette Shine', category: 'esportivo' },
  { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', title: 'Off-Road Recovery', category: 'antes-depois' },
];

export const FEATURES = [
  { icon: <Clock className="w-6 h-6 text-turbo-orange" />, title: 'Cronometragem', desc: 'Processos otimizados para tempo recorde.' },
  { icon: <ThumbsUp className="w-6 h-6 text-turbo-orange" />, title: 'Detailing', desc: 'Microscopia em cada milímetro do seu veículo.' },
  { icon: <ShieldCheck className="w-6 h-6 text-turbo-orange" />, title: 'Certificado', desc: 'Garantia de serviço em cada aplicação.' },
  { icon: <Leaf className="w-6 h-6 text-turbo-orange" />, title: 'Eco-Performance', desc: 'Tecnologia que poupa o meio ambiente.' },
  { icon: <DollarSign className="w-6 h-6 text-turbo-orange" />, title: 'Premium Value', desc: 'Excelência que valoriza seu patrimônio.' },
];
