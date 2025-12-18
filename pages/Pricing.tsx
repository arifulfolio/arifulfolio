import React from 'react';
import { Section } from '../components/Section';
import { HelpCircle } from 'lucide-react';
import { pricingPlans, faqs } from '../pages/pricingData';
import { PricingCard } from '../components/PricingCard';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Pricing = () => {
  return (
    <div className="pt-20 overflow-hidden">
      <SEO
        title="Pricing Plans | ArifulFolio"
        description="Choose from our flexible and transparent pricing plans. Find the perfect fit for your project, from basic designs to full-service enterprise solutions."
        keywords="pricing plans, web design cost, app design price, branding packages, ariful islam pricing"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-dark-900">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">
              Our Pricing
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Flexible & Transparent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan that fits your needs. No hidden fees, just straightforward value for your investment, designed to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-dark-900 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           {pricingPlans.map((plan, index) => (
             <PricingCard key={plan.id} plan={plan} index={index} />
           ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
           <h3 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq) => (
                 <div key={faq.id} className="bg-dark-800 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                    <h4 className="flex items-start gap-3 font-bold text-lg mb-3">
                       <HelpCircle size={20} className="text-primary mt-1 shrink-0" />
                       {faq.q}
                    </h4>
                    <p className="text-gray-400 text-sm ml-8">{faq.a}</p>
                 </div>
              ))}
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;