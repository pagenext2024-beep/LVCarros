
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  stars: number;
  avatar: string;
}

export interface GalleryImage {
  url: string;
  title: string;
  category: 'esportivo' | 'suv' | 'sedan' | 'antes-depois';
}