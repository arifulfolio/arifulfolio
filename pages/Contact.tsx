import React from 'react';
import { Section } from '../components/Section';
import { Mail, MapPin, Phone, Send, ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Contact = () => {
   return (
      <div className="pt-20">
         <SEO
            title="Contact Ariful Islam | Valonix Studio"
            description="Get in touch with Ariful Islam for your next design or development project. Contact via email, phone, or Whatsapp."
            keywords="contact ariful, hire graphic designer, freelance web developer, contact valonix studio"
         />

         {/* HEADER */}
         <section className="relative py-20 bg-dark-900 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">Contact Me</span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
                     Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Work</span> Together
                  </h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                     Have a project in mind? I'm always ready to discuss new opportunities. Let's build something amazing.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* INFO CARDS */}
         <Section className="py-10 -mt-10 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { icon: <Phone size={32} />, title: "Phone", info: ["+880 1938434733"] },
                  { icon: <Mail size={32} />, title: "Email", info: ["arifulfolio@gmail.com"] },
                  { icon: <MapPin size={32} />, title: "Location", info: ["Jashore, Khulna, Bangladesh"] }
               ].map((card, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-dark-800 p-8 rounded-[30px] border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 text-center"
                  >
                     <div className="w-20 h-20 mx-auto bg-dark-900 rounded-full border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                        {card.icon}
                     </div>
                     <h3 className="text-2xl font-bold font-display mb-4">{card.title}</h3>
                     <div className="space-y-1">
                        {card.info.map((line, idx) => (
                           <p key={idx} className="text-gray-400 font-medium">{line}</p>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </Section>

         {/* FORM SECTION */}
         <Section className="pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
               <div>
                  <h2 className="text-4xl font-display font-bold mb-6">Get In Touch</h2>
                  <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                     I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.
                  </p>

                  <form className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Name</label>
                           <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary transition-colors text-lg" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email</label>
                           <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary transition-colors text-lg" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                        <input type="text" placeholder="Project Discussion" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary transition-colors text-lg" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Message</label>
                        <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary transition-colors text-lg resize-none"></textarea>
                     </div>

                     <div className="pt-6">
                        <button className="group relative bg-primary text-white px-10 py-4 rounded-full font-bold overflow-hidden flex items-center gap-2 shadow-[0_0_20px_rgba(56,39,200,0.4)]">
                           <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                           <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">Send Message <Send size={18} /></span>
                        </button>
                     </div>
                  </form>
               </div>

               <div className="relative">
                  <div className="bg-dark-800 rounded-[40px] p-8 md:p-12 border border-white/5 h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

                     <h3 className="text-2xl font-bold font-display mb-8">Office Hours</h3>
                     <div className="space-y-6 mb-12">
                        <div className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                              <Clock size={20} />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg mb-1">Sunday - Thursday</h4>
                              <p className="text-gray-400">9:00 AM - 10:00 PM</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                              <Clock size={20} />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg mb-1">Friday - Saturday</h4>
                              <p className="text-gray-400">Closed</p>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                        <h4 className="flex items-center gap-2 font-bold text-white mb-2">
                           <MessageSquare size={18} className="text-primary" /> Chat Support
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">
                           Need immediate assistance? Use our AI chatbot for quick answers about services and pricing.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </Section>

         {/* MAP SECTION */}
         <section className="h-[400px] w-full mt-20 relative grayscale invert-[.9] contrast-[1.2] hover:grayscale-0 hover:invert-0 hover:contrast-100 transition-all duration-700">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7031348229366!2d89.16135364507372!3d23.217487025152685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff198b8e990215%3A0x512ddc59c05cef65!2sChuramonkati%20Bazar!5e0!3m2!1sen!2sbd!4v1765166474501!5m2!1sen!2sbd"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
            ></iframe>




            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
         </section>
      </div>
   );
};

export default Contact;