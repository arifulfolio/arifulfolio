import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, title, subtitle }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-16">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-medium tracking-wide uppercase text-sm mb-2 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-display leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};