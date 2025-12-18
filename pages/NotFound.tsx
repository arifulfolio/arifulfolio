import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, AlertTriangle, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-5 bg-dark-900">
      {/* Background Effects from Home Section */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Additional Gradient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Gradient overlay on card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-600/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 animate-pulse"></div>
              <AlertTriangle size={32} className="text-primary relative z-10" />
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-white">
              Page Not Found 
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto group relative bg-primary text-white px-8 py-3 rounded-full font-bold overflow-hidden flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,39,200,0.4)] transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
                <Home size={18} /> Go to Home
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Contact Support <ArrowRight size={18} />
            </Link>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;