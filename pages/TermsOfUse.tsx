import React from "react";
import { Section } from "../components/Section";
import { motion } from "framer-motion";
import { Scale, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative py-20 bg-dark-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Terms of <span className="text-primary">Use</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: December 12, 2025
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="lead text-xl text-white mb-12">
              Welcome to ArifulFolio! These terms and conditions outline the
              rules and regulations for the use of ArifulFolio's Website,
              located at arifulfolio.vercel.app
            </p>

            <div className="bg-dark-800 p-8 rounded-3xl border border-white/5 mb-12">
              <div className="flex items-start gap-4">
                <Scale className="text-primary shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Acceptance of Terms
                  </h3>
                  <p className="text-sm text-gray-400">
                    By accessing this website we assume you accept these terms
                    and conditions. Do not continue to use ArifulFolio if you do
                    not agree to take all of the terms and conditions stated on
                    this page.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">
              1. License
            </h2>
            <p>
              Unless otherwise stated, ArifulFolio and/or its licensors own the
              intellectual property rights for all material on ArifulFolio. All
              intellectual property rights are reserved. You may access this
              from ArifulFolio for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>
            <p className="font-bold text-white mt-4">You must not:</p>
            <ul className="space-y-3 list-none pl-0 mt-4 mb-8">
              {[
                "Republish material from ArifulFolio",
                "Sell, rent or sub-license material from ArifulFolio",
                "Reproduce, duplicate or copy material from ArifulFolio",
                "Redistribute content from ArifulFolio",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <AlertTriangle className="text-red-500 shrink-0" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">
              2. User Comments
            </h2>
            <p>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              ArifulFolio does not filter, edit, publish or review Comments
              prior to their presence on the website. Comments do not reflect
              the views and opinions of ArifulFolio, its agents and/or
              affiliates.
            </p>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">
              3. Content Liability
            </h2>
            <p>
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>

            <h2 className="text-3xl font-display font-bold text-white mb-6 mt-12">
              4. Disclaimer
            </h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>
                Limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                Limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                Limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                Exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>

            <div className="bg-dark-800 p-8 rounded-3xl border border-white/5 mt-16 text-center">
              <HelpCircle className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                If you have any questions about our Terms of Use, please contact
                us for further clarification.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TermsOfUse;
