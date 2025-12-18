import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Dribbble, Facebook, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chatbot } from './Chatbot';
import favicon from '../components/assets/favicon/logo2.png'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Pricing", path: "/pricing" },
    // { name: 'Testimonials', path: '/testimonials' },
    // { name: 'Blog', path: '/blog' },
    // { name: 'Templates', path: '/templates' },
    { name: "Links", path: "/links" },
  ];


  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-0'
        }`}
      >
        <div className={`
          flex justify-between items-center px-6 transition-all duration-300
          ${scrolled 
            ? 'w-[95%] md:w-[90%] lg:w-[1200px] bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-full py-3 shadow-2xl shadow-black/50' 
            : 'w-full py-6 bg-transparent'
          }
        `}>
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-display font-bold flex items-center gap-2 group"
          >
            <span
              className={`bg-primary text-white rounded-full flex items-center justify-center group-hover:rotate-360 transition-all duration-500 ${
                scrolled ? "w-8 h-8 text-xl" : "w-10 h-10 text-2xl"
              }`}
            >
              <img src={favicon} alt="" />
            </span>
            <span
              className={`transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              ArifulFolio
            </span>
          </Link>

          {/* Desktop Menu - Animated Sliding Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5 backdrop-blur-sm relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`
                flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap
                ${
                  scrolled
                    ? "bg-white text-black hover:bg-primary hover:text-white"
                    : "bg-primary text-white hover:bg-white hover:text-black"
                }
              `}
              >
                Let's Talk <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                scrolled ? 'bg-white/10 hover:bg-primary hover:text-white' : 'text-white hover:text-primary'
              }`} 
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-dark-900 flex flex-col"
          >
            {/* Background Pattern for Mobile Menu */}
            <div className="absolute inset-0 bg-pattern-dots bg-[size:30px_30px] opacity-[0.05] pointer-events-none"></div>
            
            <div className="relative z-10 flex justify-between items-center p-6 border-b border-white/10 shrink-0">
               <Link to="/" className="text-2xl font-display font-bold flex items-center gap-2">
                <span className="text-primary text-3xl">
                  <img src={favicon} alt="" />
                  </span> ArifulFolio
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center gap-6 p-6 overflow-y-auto pt-10 pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="shrink-0"
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl md:text-5xl font-display font-bold transition-colors ${
                      location.pathname === link.path ? 'text-primary' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="mt-4 flex flex-col items-center gap-6 shrink-0"
              >
                 <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                    Let's Talk <ArrowUpRight size={24} />
                 </Link>
                 
                 <div className="flex gap-6 mt-4">
                    <a href="https://twitter.com" className="text-gray-400 hover:text-primary"><Twitter size={24} /></a>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-primary"><Linkedin size={24} /></a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-primary"><Instagram size={24} /></a>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
           <Link to="/" className="text-2xl font-display font-bold flex items-center gap-2 mb-6">
            <span className="text-primary text-3xl">*</span> ArifulFolio
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ariful Islam - Professional creative designer, creating distinct digital experiences.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Link</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/links" className="hover:text-white transition-colors">Links</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Address</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-primary"/> Jashore, Khulna, Bangladesh</li>
            <li><a href="mailto:arifulfolio@gmail.com" className="hover:text-white flex items-center gap-2"><Mail size={16} className="text-primary"/> arifulfolio@gmail.com</a></li>
            <li><a href="tel:+8801938434733" className="hover:text-white flex items-center gap-2"><Phone size={16} className="text-primary"/> +880 1938434733</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Follow Me</h4>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://facebook.com/arifulfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/arifulfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.x.com/arifulfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com/arifulfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://behance.net/arifulfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaBehance size={18} />
            </a>
            <a
              href="https://dribbble.com/arifulfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaDribbble size={18} />
            </a>
            <a
              href="https://pinterest.com/arifulfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaPinterest size={18} />
            </a>
            <a
              href="https://github.com/arifulfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left gap-4">
        <p>&copy; 2024 ArifulFolio. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Pattern Grid - Fixed to stay in place during scroll */}
        <div className="absolute inset-0 bg-pattern-dots bg-[size:30px_30px] opacity-[0.07]"></div>
        
        {/* Blurry Gradient Orbs - Animated */}
        <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.2, 0.3, 0.2]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>
        
        <motion.div 
           animate={{ 
             scale: [1, 1.1, 1],
             opacity: [0.1, 0.2, 0.1]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {children}
      </main>

      {/* <Chatbot /> */}
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
};