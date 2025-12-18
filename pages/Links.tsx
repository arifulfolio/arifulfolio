import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Globe, Mail, Instagram, Facebook, ArrowRight, ExternalLink, Copy, Check, Target } from 'lucide-react';
import { LinkItem } from '../types';
import { Link } from 'react-router-dom';
import aboutimage from '../components/assets/about/profile.png';
import logo from '../components/assets/favicon/logo2.png';
import {
   FaFacebookF,
   FaLinkedinIn,
   FaInstagram,
   FaBehance,
   FaDribbble,
   FaPinterest,
   FaGithub,
 } from "react-icons/fa";

const Links = () => {
  const [copied, setCopied] = useState(false);

  const links: LinkItem[] = [
   {
     id: 1,
     label: "Official Website",
     url: "https://arifulfolio.vercel.app/",
     icon: <Globe size={20} />,
   },
   {
     id: 2,
     label: "View Portfolio",
     url: "/projects",
     icon: <ExternalLink size={20} />,
   },
   {
     id: 3,
     label: "Download Resume",
     url: "/Ariful-Islam-Resume.pdf",
     icon: <ExternalLink size={20} />,
   },
   {
     id: 4,
     label: "Behance Profile",
     url: "https://behance.net/arifulfolio",
     icon: <FaBehance size={20} />,
   },
   {
     id: 5,
     label: "LinkedIn",
     url: "https://linkedin.com/arifulfolio",
     icon: <FaLinkedinIn size={20} />,
   },
   {
     id: 6,
     label: "Facebook Page",
     url: "https://facebook.com/arifulfolio",
     icon: <FaFacebookF size={20} />,
   },
   {
     id: 7,
     label: "Dribbble Shots",
     url: "https://dribbble.com/arifulfolio",
     icon: <FaDribbble size={20} />,
   },
   // Using Instagram icon as placeholder for Dribbble
 ];

  const socialIcons = [
    { icon: <FaFacebookF size={20} />, url: 'https://web.facebook.com/arifulislamofficialprofile/' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/arifulfolio/' },
    { icon: <Mail size={20} />, url: 'mailto:arifulfolio@gmail.com' },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative bg-dark-900 flex flex-col items-center justify-center pt-36 pb-20 overflow-hidden">
       {/* Background Effects */}
       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

       <div className="relative z-10 w-full max-w-md px-6">
          {/* Profile Header */}
          <div className="text-center mb-10">
             <div className="relative inline-block mb-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-blue-500"
                >
                   <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-900 bg-dark-800">
                      <img src={aboutimage} alt="Profile" className="w-full h-full object-cover" />
                   </div>
                </motion.div>
                <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-900 flex items-center justify-center" title="Available for work">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
             </div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-3xl font-display font-bold text-white mb-2 flex items-center justify-center gap-2"
             >
                Roy C. Jones <span className="text-blue-400 text-sm bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20 align-middle">PRO</span>
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="text-gray-400 text-sm mb-6"
             >
                Senior Product Designer & Developer <br/> Creating digital experiences that matter.
             </motion.p>

             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex justify-center gap-4"
             >
                {socialIcons.map((item, i) => (
                   <a 
                     key={i} 
                     href={item.url} 
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-primary transition-all hover:scale-110"
                   >
                      {item.icon}
                   </a>
                ))}
             </motion.div>
          </div>

          {/* Links Stack */}
          <div className="space-y-4">
             {links.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                   {link.url.startsWith('/') ? (
                      <Link
                        to={link.url}
                        className="group relative flex items-center justify-between w-full p-4 bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/50 transition-all overflow-hidden"
                      >
                         <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                         <div className="relative z-10 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors">
                               {link.icon}
                            </div>
                            <span className="font-bold text-white group-hover:text-white transition-colors">{link.label}</span>
                         </div>
                         <div className="relative z-10 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                            <ArrowRight size={20} />
                         </div>
                      </Link>
                   ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between w-full p-4 bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/50 transition-all overflow-hidden"
                      >
                         <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                         <div className="relative z-10 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors">
                               {link.icon}
                            </div>
                            <span className="font-bold text-white group-hover:text-white transition-colors">{link.label}</span>
                         </div>
                         <div className="relative z-10 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                            <ArrowRight size={20} />
                         </div>
                      </a>
                   )}
                </motion.div>
             ))}
          </div>

          {/* Footer Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center"
          >
             <button 
               onClick={copyToClipboard}
               className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${copied ? 'text-green-500' : 'text-gray-500 hover:text-white'}`}
             >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Link Copied!" : "Copy Link"}
             </button>
             <div className="mt-8 pt-8 border-t border-white/5">
                <Link to="/" className="text-2xl font-display font-bold flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                   <span className="text-primary"><img src={logo} alt="" /></span> ArifulFolio
                </Link>
             </div>
          </motion.div>
       </div>
    </div>
  );
};

export default Links;