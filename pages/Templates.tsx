import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Download, FileCode, FileImage, Layout, Search, Filter, Star, CheckCircle, ArrowRight, ShieldCheck, Zap, Layers, Smartphone, Globe, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Template } from '../types';
import { Link } from 'react-router-dom';

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended Mock Data
  const templates: Template[] = [
    { 
        id: 1, 
        title: 'Modern Portfolio Template', 
        type: 'Code', 
        price: 'Free', 
        fileSize: '2.5 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t1/800/600' 
    },
    { 
        id: 2, 
        title: 'E-commerce UI Kit', 
        type: 'Figma', 
        price: '$29', 
        fileSize: '120 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t2/800/600' 
    },
    { 
        id: 3, 
        title: 'Corporate Branding Mockup', 
        type: 'PSD', 
        price: '$19', 
        fileSize: '500 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t3/800/600' 
    },
    { 
        id: 4, 
        title: 'SaaS Admin Dashboard', 
        type: 'Code', 
        price: '$49', 
        fileSize: '15 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t4/800/600' 
    },
    { 
        id: 5, 
        title: 'Mobile App Wireframe Kit', 
        type: 'Figma', 
        price: '$24', 
        fileSize: '45 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t5/800/600' 
    },
    { 
        id: 6, 
        title: 'Instagram Social Pack', 
        type: 'PSD', 
        price: '$15', 
        fileSize: '250 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t6/800/600' 
    },
    { 
        id: 7, 
        title: 'Restaurant Landing Page', 
        type: 'Code', 
        price: '$39', 
        fileSize: '8 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t7/800/600' 
    },
    { 
        id: 8, 
        title: 'Icon Set - 500+ Icons', 
        type: 'AI', 
        price: 'Free', 
        fileSize: '5 MB', 
        downloadLink: '#', 
        image: 'https://picsum.photos/seed/t8/800/600' 
    },
  ];

  const categories = ['All', 'Figma', 'Code', 'PSD', 'AI'];

  const getIcon = (type: string) => {
    switch(type) {
      case 'Code': return <FileCode size={18} />;
      case 'PSD': return <FileImage size={18} />;
      case 'Figma': return <Layout size={18} />;
      case 'AI': return <PenTool size={18} />;
      default: return <FileImage size={18} />;
    }
  };

  const getColor = (type: string) => {
     switch(type) {
        case 'Code': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        case 'PSD': return 'text-blue-600 bg-blue-600/10 border-blue-600/20';
        case 'Figma': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        case 'AI': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
        default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
     }
  };

  const filteredTemplates = templates.filter(t => {
     const matchesCategory = activeCategory === 'All' || t.type === activeCategory || (activeCategory === 'Figma' && t.type === 'Figma') || (activeCategory === 'Code' && t.type === 'Code');
     const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase());
     return matchesCategory && matchesSearch;
  });

  const features = [
     { icon: <Zap size={24} />, title: "Ready to Use", desc: "Well-organized files designed for immediate implementation in your workflow." },
     { icon: <Layers size={24} />, title: "Fully Layered", desc: "Design files are meticulously layered and grouped for easy customization." },
     { icon: <Smartphone size={24} />, title: "Responsive", desc: "Code templates are built mobile-first and fully responsive across devices." },
     { icon: <ShieldCheck size={24} />, title: "Secure Code", desc: "Clean, commented, and secure code following best industry practices." },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-dark-900">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">Design Resources</span>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
               Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Assets</span> <br />
               For Creators
             </h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
               Accelerate your workflow with my high-quality design resources. From UI kits to code snippets, find everything you need to build faster.
             </p>

             {/* Search & Filter Bar */}
             <div className="max-w-4xl mx-auto bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-full p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl">
                <div className="relative flex-1 w-full">
                   <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                      type="text" 
                      placeholder="Search templates (e.g. Portfolio, E-commerce)..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent border-none text-white pl-14 pr-4 py-4 focus:outline-none placeholder:text-gray-500"
                   />
                </div>
                <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto p-2 no-scrollbar">
                   {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                           activeCategory === cat 
                           ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                           : 'bg-dark-900/50 text-gray-400 hover:text-white hover:bg-dark-900'
                        }`}
                      >
                         {cat}
                      </button>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* TEMPLATE GRID */}
      <Section className="bg-dark-900 pt-0">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
               {filteredTemplates.map((t, i) => (
                  <motion.div
                    layout
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-dark-800 rounded-[24px] border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,39,200,0.2)]"
                  >
                     <div className="aspect-[4/3] overflow-hidden relative">
                        <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        
                        <div className="absolute top-4 left-4">
                           <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${getColor(t.type)}`}>
                              {getIcon(t.type)} {t.type}
                           </span>
                        </div>

                        {t.price === 'Free' && (
                           <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                 Free
                              </span>
                           </div>
                        )}
                        
                         <Link to={`/templates/${t.id}`} className="absolute inset-0 z-10"></Link>
                     </div>

                     <div className="p-6">
                        <div className="flex justify-between items-start gap-4 mb-4">
                           <h3 className="text-lg font-bold font-display leading-tight group-hover:text-primary transition-colors">
                              <Link to={`/templates/${t.id}`}>{t.title}</Link>
                           </h3>
                           <span className={`text-lg font-bold ${t.price === 'Free' ? 'text-green-400' : 'text-white'}`}>
                              {t.price}
                           </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-6 pb-6 border-b border-white/5">
                           <span className="flex items-center gap-1">
                              <Download size={14} /> {Math.floor(Math.random() * 1000) + 100}
                           </span>
                           <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                           <span>{t.fileSize}</span>
                        </div>
                        
                        <div className="flex gap-3">
                           <Link 
                             to={`/templates/${t.id}`}
                             className="flex-1 py-3 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all text-sm group/btn"
                           >
                              {t.price === 'Free' ? 'Download' : 'View Details'} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                           <button className="w-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                              <Star size={18} />
                           </button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>

         {filteredTemplates.length === 0 && (
            <div className="text-center py-20 bg-dark-800/50 rounded-3xl border border-white/5">
               <div className="w-16 h-16 bg-dark-900 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                  <Search size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">No resources found</h3>
               <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </div>
         )}
      </Section>

      {/* FEATURES SECTION */}
      <Section className="bg-dark-800/30">
         <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-4 inline-block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Quality You Can <span className="text-primary">Trust</span></h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-900 p-8 rounded-3xl border border-white/5 text-center hover:border-primary/30 transition-all group"
               >
                  <div className="w-14 h-14 mx-auto bg-dark-800 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                     {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
               </motion.div>
            ))}
         </div>
      </Section>

      {/* CTA SECTION */}
      <Section className="pb-32">
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                    Need A Custom Solution?
                 </h2>
                 <p className="text-gray-400 text-lg mb-8 max-w-lg">
                    Can't find what you're looking for? I offer custom design and development services tailored to your specific needs.
                 </p>
                 <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-xl hover:shadow-2xl"
                 >
                    Get a Quote <ArrowRight />
                 </Link>
              </div>
              <div className="relative">
                 <div className="bg-dark-900 rounded-2xl p-6 border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                       <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
                       <div className="space-y-2">
                          <div className="w-32 h-3 bg-gray-700 rounded animate-pulse"></div>
                          <div className="w-20 h-2 bg-gray-800 rounded animate-pulse"></div>
                       </div>
                    </div>
                    <div className="space-y-3">
                       <div className="w-full h-4 bg-gray-800 rounded animate-pulse"></div>
                       <div className="w-3/4 h-4 bg-gray-800 rounded animate-pulse"></div>
                       <div className="w-5/6 h-4 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Templates;