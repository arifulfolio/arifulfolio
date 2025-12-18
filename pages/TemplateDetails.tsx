import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { ArrowLeft, CheckCircle, Download, ExternalLink, ShieldCheck, Star, Layers, Zap, PenTool, Layout, FileCode, Monitor, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const TemplateDetails = () => {
  const { id } = useParams();

  // Mock Data (simulating fetch based on ID)
  const template = {
    id: id,
    title: "Modern Portfolio Template",
    category: "Web Development",
    type: "Code",
    price: "$29",
    rating: 4.9,
    reviews: 124,
    version: "2.1.0",
    lastUpdate: "Oct 20, 2023",
    fileSize: "15 MB",
    software: ["React", "Tailwind CSS", "Framer Motion"],
    images: [
      `https://picsum.photos/seed/t${id}1/1200/800`,
      `https://picsum.photos/seed/t${id}2/1200/800`,
      `https://picsum.photos/seed/t${id}3/1200/800`,
    ],
    description: "A premium, dark-themed portfolio template designed for creative professionals. Built with React and Tailwind CSS, it features smooth animations, a responsive layout, and an easy-to-customize codebase.",
    features: [
      "Fully Responsive Design",
      "Dark Mode Optimized",
      "Interactive Animations",
      "Clean & Commented Code",
      "SEO Friendly Structure",
      "Free Updates Forever"
    ]
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/templates" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8">
           <ArrowLeft size={20} /> Back to Templates
        </Link>

        {/* Header Info */}
        <div className="grid lg:grid-cols-12 gap-12">
           {/* Left Column: Images */}
           <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8"
              >
                 <img src={template.images[0]} alt={template.title} className="w-full aspect-video object-cover" />
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                 {template.images.slice(1).map((img, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.1 + (i * 0.1) }}
                       className="rounded-2xl overflow-hidden border border-white/10"
                    >
                       <img src={img} alt="Screenshot" className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                 ))}
              </div>

              {/* Description Content */}
              <div className="mt-12 prose prose-invert prose-lg max-w-none">
                 <h2 className="text-3xl font-display font-bold text-white mb-6">Product Description</h2>
                 <p className="text-gray-300 leading-relaxed mb-8">{template.description}</p>
                 
                 <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                 <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                    {template.features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-3 bg-dark-800 p-4 rounded-xl border border-white/5">
                          <CheckCircle className="text-primary shrink-0" size={20} />
                          <span>{feature}</span>
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Right Column: Sidebar */}
           <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-dark-800 p-8 rounded-[30px] border border-white/10 shadow-xl"
                 >
                    <div className="flex items-start justify-between mb-4">
                       <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                          {template.type}
                       </span>
                       <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                          <Star size={16} fill="currentColor" /> {template.rating} <span className="text-gray-500 font-normal">({template.reviews})</span>
                       </div>
                    </div>

                    <h1 className="text-2xl font-display font-bold mb-6">{template.title}</h1>
                    
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                       <span className="text-gray-400">Price</span>
                       <span className="text-4xl font-bold text-white">{template.price}</span>
                    </div>

                    <div className="space-y-4 mb-8">
                       <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                          Add to Cart <Download size={20} />
                       </button>
                       <button className="w-full bg-dark-900 text-white py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                          Live Preview <ExternalLink size={20} />
                       </button>
                    </div>

                    <div className="space-y-4 text-sm">
                       <div className="flex justify-between items-center text-gray-400">
                          <span className="flex items-center gap-2"><Layers size={16} /> File Size</span>
                          <span className="text-white font-medium">{template.fileSize}</span>
                       </div>
                       <div className="flex justify-between items-center text-gray-400">
                          <span className="flex items-center gap-2"><Zap size={16} /> Version</span>
                          <span className="text-white font-medium">{template.version}</span>
                       </div>
                       <div className="flex justify-between items-center text-gray-400">
                          <span className="flex items-center gap-2"><Info size={16} /> Last Update</span>
                          <span className="text-white font-medium">{template.lastUpdate}</span>
                       </div>
                    </div>
                 </motion.div>

                 <div className="bg-dark-800 p-6 rounded-2xl border border-white/10">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                       <Monitor size={20} className="text-primary" /> Software
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {template.software.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-dark-900 rounded-lg text-sm text-gray-300 border border-white/5">
                             {tech}
                          </span>
                       ))}
                    </div>
                 </div>

                 <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-green-400">
                       <ShieldCheck size={20} /> Secure Payment
                    </h3>
                    <p className="text-sm text-green-200/70">
                       Your payment information is processed securely. We do not store credit card details.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;