import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  client?: string;
  date?: string;
  views: number;
  challenge?: string;
  solution?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
  features?: string[];
  images?: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt?: string;
  content?: string;
  author?: string;
  authorImage?: string;
  tags?: string[];
  readTime?: string;
}

export interface Template {
  id: number;
  title: string;
  type: 'PSD' | 'AI' | 'Code' | 'Figma';
  price: string;
  image: string;
  downloadLink: string;
  fileSize: string;
}

export interface LinkItem {
  id: number;
  label: string;
  url: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}