import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative py-20 bg-dark-900 overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">Legal</span>
               <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                  Privacy <span className="text-primary">Policy</span>
               </h1>
               <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Last updated: October 25, 2023
               </p>
            </motion.div>
         </div>
      </section>

      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="lead text-xl text-white mb-12">
              At Arifulfolio, accessible from arifulfolio.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ArifulFolio and how we use it.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
               <div className="bg-dark-800 p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                  <Shield className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
                  <p className="text-sm text-gray-400">We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
               </div>
               <div className="bg-dark-800 p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                  <Lock className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Secure Connection</h3>
                  <p className="text-sm text-gray-400">We use SSL technology to ensure that your data is encrypted and transmitted securely across the web.</p>
               </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="space-y-2 mb-8 list-none pl-0">
               {[
                 "Provide, operate, and maintain our website",
                 "Improve, personalize, and expand our website",
                 "Understand and analyze how you use our website",
                 "Develop new products, services, features, and functionality",
                 "Communicate with you, either directly or through one of our partners",
                 "Send you emails",
                 "Find and prevent fraud"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                 </li>
               ))}
            </ul>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">Log Files</h2>
            <p>
              ArifulFolio follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">Third Party Privacy Policies</h2>
            <p>
              ArifulFolio's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">GDPR Data Protection Rights</h2>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
               <li>The right to access – You have the right to request copies of your personal data.</li>
               <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
               <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
               <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data.</li>
            </ul>

            <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 mt-12">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail className="text-primary" /> Contact Us
               </h3>
               <p className="text-gray-300 mb-6">
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
               </p>
               <Link to="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                  Contact Support
               </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;