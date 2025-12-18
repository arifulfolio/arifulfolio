import React from 'react';
import { Section } from '../components/Section';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    { id: 1, name: "Sarah Johnson", role: "CEO", company: "TechStart", content: "Noxfolio transformed our digital presence. The attention to detail and creative approach were outstanding.", avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5 },
    { id: 2, name: "David Chen", role: "Product Manager", company: "Global Solutions", content: "Incredible work ethic and top-tier design skills. Delivered the project ahead of schedule and beyond expectations.", avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5 },
    { id: 3, name: "Emily Davis", role: "Marketing Director", company: "Creative Co", content: "Working with Roy was a pleasure. He understood our brand vision perfectly and executed it flawlessly.", avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5 },
    { id: 4, name: "Michael Wilson", role: "Founder", company: "StartupX", content: "The best frontend developer I've worked with. Clean code, great design sense, and excellent communication.", avatar: "https://randomuser.me/api/portraits/men/86.jpg", rating: 4 },
    { id: 5, name: "Jessica Brown", role: "Art Director", company: "Design Studio", content: "A true professional who cares about the user experience. Highly recommended for any web project.", avatar: "https://randomuser.me/api/portraits/women/12.jpg", rating: 5 },
    { id: 6, name: "Robert Taylor", role: "CTO", company: "TechCorp", content: "Exceptional quality and speed. The new website has significantly increased our conversion rates.", avatar: "https://randomuser.me/api/portraits/men/45.jpg", rating: 5 },
    { id: 7, name: "Anna White", role: "CMO", company: "Brandify", content: "Our brand identity has never looked better. The team captured our essence perfectly in the new logo and guidelines.", avatar: "https://randomuser.me/api/portraits/women/90.jpg", rating: 5 },
    { id: 8, name: "James Martin", role: "Developer", company: "SoftSys", content: "Great collaboration. The design files were organized and easy to implement. Saved us hours of development time.", avatar: "https://randomuser.me/api/portraits/men/22.jpg", rating: 4 },
  ];

  return (
    <div className="pt-20">
      <Section title="Clients <span class='text-primary'>Testimonials</span>" subtitle="What They Say">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                 key={t.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-dark-800 p-8 rounded-[30px] border border-white/5 relative hover:border-primary/50 transition-all duration-300 flex flex-col h-full group bg-gradient-to-br from-dark-800 to-dark-800/50 hover:to-primary/10"
              >
                 <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-yellow-500">
                       {[...Array(t.rating)].map((_, starI) => (
                          <Star key={starI} size={16} fill="currentColor" />
                       ))}
                    </div>
                    <div className="text-primary/20 group-hover:text-primary transition-colors">
                       <Quote size={40} />
                    </div>
                 </div>
                 
                 <div className="relative z-10 flex-1 flex flex-col">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 italic flex-1">"{t.content}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto mb-6">
                       <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-lg">{t.name}</h4>
                          <p className="text-sm text-primary font-medium">{t.role} <span className="text-gray-500">@ {t.company}</span></p>
                       </div>
                    </div>

                    <Link to={`/testimonials/${t.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors pt-6 border-t border-white/5">
                        Read Full Story <ArrowRight size={16} />
                    </Link>
                 </div>
              </motion.div>
            ))}
         </div>
      </Section>
    </div>
  );
};

export default Testimonials;