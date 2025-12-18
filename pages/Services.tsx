import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { PenTool, Layout, Smartphone, Monitor, Globe, Search, ArrowRight, CheckCircle, Zap, Layers, Users, Rocket, Sparkles, MessageSquare, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Services = () => {
   const services = [
      { 
        id: 1,
        icon: <PenTool size={32} />, 
        title: 'Brand Identity', 
        desc: 'We craft unique and memorable brand identities that help your business stand out in a crowded market. From logos to comprehensive brand guidelines.',
        features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Theory']
      },
      { 
        id: 2,
        icon: <Layout size={32} />, 
        title: 'Image Editing',
        desc: 'Professional image editing and retouching services to enhance your photos. From basic adjustments to complex manipulations for web and print.',
        features: ['Photo Retouching', 'Background Removal', 'Color Correction', 'Image Manipulation']
      },
      { 
        id: 3,
        icon: <Smartphone size={32} />, 
        title: 'Social Media Kit',
        desc: 'Consistent and engaging social media visuals. We design profile pictures, cover photos, and post templates tailored for your brand.',
        features: ['Profile & Cover Photos', 'Post Templates', 'Story Graphics', 'Platform Optimization']
      },
      { 
        id: 4,
        icon: <Monitor size={32} />, 
        title: 'Web UI Design',
        desc: 'Creating intuitive and visually appealing user interfaces for websites that provide an excellent user experience and drive engagement.',
        features: ['Website & Landing Pages', 'Responsive Design', 'Interactive Prototypes', 'Component Libraries']
      },
    ];

  const process = [
    { 
      step: "01", 
      title: "Discovery", 
      desc: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation.",
      icon: <MessageSquare size={24} />
    },
    { 
      step: "02", 
      title: "Strategy", 
      desc: "We develop a comprehensive roadmap and strategy to ensure the project aligns with your vision and market needs.",
      icon: <Target size={24} />
    },
    { 
      step: "03", 
      title: "Design & Dev", 
      desc: "Our creative team brings ideas to life with stunning designs, followed by robust development using modern tech.",
      icon: <Layers size={24} />
    },
    { 
      step: "04", 
      title: "Launch", 
      desc: "After rigorous testing and quality assurance, we launch your project and provide ongoing support for growth.",
      icon: <Rocket size={24} />
    }
  ];

  const faqs = [
    { q: "How long does a typical project take?", a: "Timeline varies by complexity. A branding project might take 2-4 weeks, while a full website could take 4-8 weeks." },
    { q: "Do you offer post-launch support?", a: "Yes, we offer various maintenance packages to keep your digital products secure and up-to-date." },
    { q: "What is your pricing structure?", a: "We offer both project-based and hourly pricing. Check our Pricing page for standard packages." },
    { q: "Do you provide source files?", a: "Absolutely. Upon full payment, you own 100% of the intellectual property and source files." },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      <SEO 
        title="Services | ArifulFolio - Brand Identity, Web & App Development" 
        description="Professional services by Valonix Studio including Brand Identity, UI/UX Design, App Development, Web Development, and Digital Marketing."
        keywords="brand identity services, web development company bangladesh, ui/ux design services, seo optimization, ariful services"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">What I Do</span>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
               Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Services</span> <br />
               For Your Business
             </h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
               I provide comprehensive digital solutions to help your business grow. From initial concept to final deployment, I am with you every step of the way.
             </p>
             <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,39,200,0.4)]"
              >
                 Start a Conversation <ArrowRight size={20} />
              </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <Section className="bg-dark-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-800 rounded-[32px] p-8 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                  {s.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm h-[80px]">
                  {s.desc}
                </p>

                <div className="space-y-3 mb-8">
                   {s.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                         {feature}
                      </div>
                   ))}
                </div>

                <Link 
                   to={`/services/${s.id}`} 
                   className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider"
                >
                   Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS SECTION */}
      <Section className="bg-dark-900 relative">
         <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-4 inline-block">Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">My Working <span className="text-primary">Process</span></h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            {process.map((step, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group text-center"
               >
                  <div className="w-24 h-24 mx-auto bg-dark-800 rounded-full border border-white/10 flex items-center justify-center relative z-10 mb-8 group-hover:border-primary transition-colors shadow-2xl">
                     <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                     </div>
                     <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-4 border-dark-900">
                        {step.step}
                     </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">{step.desc}</p>
               </motion.div>
            ))}
         </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-dark-800/30">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">FAQ</span>
               <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Have Questions? <br/> <span className="text-gray-500">Look Here.</span></h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Here are some common questions I get asked. If you don't see your question here, feel free to contact me directly.
               </p>
               <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2">
                  Ask a Question <MessageSquare size={18} />
               </Link>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
               {faqs.map((faq, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                  >
                     <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                        <span className="text-primary mt-1"><Sparkles size={18} /></span>
                        {faq.q}
                     </h3>
                     <p className="text-gray-400 leading-relaxed pl-8">
                        {faq.a}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </Section>

      {/* CTA SECTION */}
      <Section className="pb-32">
         <div className="bg-gradient-to-r from-primary to-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white">
                  Ready To Elevate Your Digital Presence?
               </h2>
               <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                  Let's collaborate to build something extraordinary. Whether you need a brand overhaul or a new digital product, I'm here to help.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link 
                     to="/contact" 
                     className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                  >
                     Get Started Now <Rocket size={20} />
                  </Link>
                  <Link 
                     to="/projects" 
                     className="px-10 py-4 rounded-full font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                     View Portfolio <ArrowRight size={20} />
                  </Link>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
};

export default Services;