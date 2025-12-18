import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "ArifulFolio | Creative Designer & Developer", 
  description = "Official portfolio of Ariful Islam (ArifulGFX / Valonix Studio). Senior Product Designer & Developer specializing in Brand Identity, Web Design, and Creative Solutions.",
  keywords = "ariful, ariful islam, arifulgfx, arifulcreatorstudio, valonix studio, valonix, arifulfolio, graphic design, web design, ui/ux design"
}) => {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title;
    }
    
    // Helper function to update or create meta tags
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Description
    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, 'property');
      updateMeta('twitter:description', description);
    }

    // Update Keywords
    if (keywords) {
      updateMeta('keywords', keywords);
    }
    
    // Update Social Titles
    if (title) {
       updateMeta('og:title', title, 'property');
       updateMeta('twitter:title', title);
    }

  }, [title, description, keywords]);

  return null;
};