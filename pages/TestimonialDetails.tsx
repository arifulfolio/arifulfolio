import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Quote, Star, ArrowLeft, ArrowRight, Building, User } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialDetails = () => {
  const { id } = useParams();

  // Mock data (simulated fetch)
  const testimonial = {
    id: id,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    location: "San Francisco, USA",
    project: "Mobile App Redesign",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fullQuote: "Working with Roy was an absolute game-changer for our business. We were struggling with an outdated mobile app that was losing users daily. Roy stepped in, conducted a thorough audit, and proposed a complete redesign that was not only visually stunning but also incredibly intuitive.",
    impact: "Since the launch of the new design, our user retention has increased by 40% and our app store rating went from 3.2 to 4.8 stars. The investment paid for itself within the first month.",
    tags: ["UI/UX Design", "Mobile App", "Consulting"]
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/testimonials" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12 group">
           <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <ArrowLeft size={16} />
           </div>
           Back to Testimonials
        </Link>

        <div className="max-w-4xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-dark-800 rounded-[40px] p-8 md:p-16 border border-white/5 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute top-10 right-10 text-primary/10">
                    <Quote size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-dark-900 shadow-2xl">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{testimonial.name}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-gray-400 mb-4">
                                <span className="flex items-center gap-1"><User size={16} className="text-primary"/> {testimonial.role}</span>
                                <span className="flex items-center gap-1"><Building size={16} className="text-primary"/> {testimonial.company}</span>
                            </div>
                            <div className="flex gap-1 text-yellow-500 justify-center md:justify-start">
                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none mb-12">
                        <h3 className="text-xl font-bold text-white mb-4">The Challenge & Solution</h3>
                        <p className="text-gray-300 italic leading-relaxed text-xl mb-8">
                            "{testimonial.fullQuote}"
                        </p>
                        
                        <div className="bg-primary/10 p-8 rounded-2xl border-l-4 border-primary my-8">
                            <h4 className="font-bold text-primary mb-2">Key Impact</h4>
                            <p className="text-white m-0">{testimonial.impact}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 border-t border-white/5 pt-8">
                        {testimonial.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full bg-dark-900 border border-white/10 text-sm font-bold text-gray-400">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-6">Ready to create your own success story?</h3>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-xl">
                    Let's Work Together <ArrowRight />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;