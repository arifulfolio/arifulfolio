import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col group overflow-hidden ${
        plan.isPopular
          ? 'bg-dark-800/80 border-primary/50 shadow-[0_0_30px_rgba(56,39,200,0.15)] z-10 scale-105'
          : 'bg-dark-800/40 border-white/5 hover:border-white/10 hover:bg-dark-800/60'
      }`}
    >
      {plan.isPopular && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-6 right-6">
            <div className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">
              Best Value
            </div>
          </div>
        </>
      )}

      <div className="mb-8 relative z-10">
        <h3 className={`text-xl font-bold mb-4 ${plan.isPopular ? 'text-white' : 'text-gray-300'}`}>{plan.name}</h3>
        <div className="flex items-end gap-1 mb-6">
          <span className="text-4xl md:text-5xl font-display font-bold text-white">{plan.price}</span>
          <span className="text-gray-500 font-medium mb-1">{plan.period}</span>
        </div>
        <p className="text-sm text-gray-400">{plan.description}</p>
      </div>

      <div className="flex-1 mb-10 relative z-10">
        <ul className="space-y-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-300">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                <Check size={10} strokeWidth={3} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Link to={`/pricing/${plan.id}`} className={`group relative w-full py-4 rounded-full font-bold text-center overflow-hidden flex items-center justify-center gap-2 border ${plan.isPopular ? 'bg-primary border-primary text-white' : 'bg-transparent border-white/10 text-white hover:border-primary/50'}`}>
        <div className={`absolute inset-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${plan.isPopular ? 'bg-white' : 'bg-primary'}`}></div>
        <span className={`relative z-10 transition-colors ${plan.isPopular ? 'group-hover:text-black' : 'group-hover:text-white'}`}>{plan.buttonText}</span>
        <ArrowRight size={16} className={`relative z-10 transition-colors ${plan.isPopular ? 'group-hover:text-black' : 'group-hover:text-white'}`} />
      </Link>
    </motion.div>
  );
};