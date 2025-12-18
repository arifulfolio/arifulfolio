import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingDetails = () => {
  const { id } = useParams();

  // Mock Data
  const planDetails = {
    1: { name: "Basic Plan", price: "$19.95", features: ["Website Design", "Mobile Apps Design", "Product Design", "Digital Marketing", "Custom Support"] },
    2: { name: "Standard Plan", price: "$39.95", features: ["Website Design", "Mobile Apps Design", "Product Design", "Digital Marketing", "Custom Support", "SEO Optimization", "Source Files"], isPopular: true },
    3: { name: "Premium Plan", price: "$69.95", features: ["Website Design", "Mobile Apps Design", "Product Design", "Digital Marketing", "Custom Support", "SEO Optimization", "Source Files", "24/7 Priority Support", "Unlimited Revisions"] }
  };

  const selectedPlan = planDetails[id as keyof typeof planDetails] || planDetails[2];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/pricing" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group">
           <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <ArrowLeft size={16} />
           </div>
           Back to Pricing
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Plan Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-4 inline-block">Selected Package</span>
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{selectedPlan.name}</h1>
                <div className="flex items-end gap-2 mb-8">
                    <span className="text-6xl font-bold text-white">{selectedPlan.price}</span>
                    <span className="text-gray-400 mb-2 text-xl">/per month</span>
                </div>
                
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                    You've chosen the best plan to elevate your business. Get access to professional design services, unlimited assets, and priority support.
                </p>

                <div className="bg-dark-800/50 p-8 rounded-3xl border border-white/5 mb-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="text-primary" /> What's Included:
                    </h3>
                    <ul className="space-y-4">
                        {selectedPlan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="text-primary shrink-0" size={20} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Checkout / Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
                <div className="bg-dark-800 p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                    
                    <h3 className="text-2xl font-bold font-display mb-6">Get Started</h3>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                              <input type="text" className="w-full bg-dark-900 border-b border-white/20 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                              <input type="text" className="w-full bg-dark-900 border-b border-white/20 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                           <input type="email" className="w-full bg-dark-900 border-b border-white/20 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Project Brief (Optional)</label>
                           <textarea rows={3} className="w-full bg-dark-900 border-b border-white/20 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us a bit about your needs..."></textarea>
                        </div>

                        <button className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all shadow-lg flex items-center justify-center gap-2 mt-4">
                           Proceed to Payment <ArrowRight size={20} />
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-6 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><ShieldCheck size={16} /> Secure SSL</span>
                        <span className="flex items-center gap-1"><Star size={16} /> 30-Day Guarantee</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;