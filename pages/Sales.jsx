import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Tag, Eye } from "lucide-react";

import arborsphere from "../components/assets/portfolios/brand identity/arborsphere/1.jpg";

// boldpath Images
import boldpath1 from "../components/assets/portfolios/brand identity/boldpath/1.jpg";

// nexus
import nexus from "../components/assets/portfolios/brand identity/nexus/2.jpg";

import cloudman from "../components/assets/portfolios/brand identity/cloudman/2.jpg";

// ecogrow
import ecogrow from "../components/assets/portfolios/brand identity/ecogrow/2.jpg";

// greenbloom
import greenbloom from "../components/assets/portfolios/brand identity/greenbloom/1.jpg";

// meloplay
import meloplay from "../components/assets/portfolios/brand identity/meloplay/8.jpg";

const Sales = () => {
  // Sample data for logos - replace with your actual database or static data
  const logos = [
    {
      id: 1,
      name: "Arborsphere Logo",
      slug: "arborsphere",
      price: "$150",
      description:
        "A futuristic wolf logo design with neon accents. Includes vector files, brand guidelines, and color palette.",
      image: arborsphere, // Ensure this image shows the logo with guidelines
    },
    {
      id: 2,
      name: "Boldpath Logo",
      slug: "boldpath",
      price: "$200",
      description:
        "Security-focused shield logo. Perfect for cybersecurity firms. Includes full geometry guidelines.",
      image: boldpath1,
    },
    {
      id: 3,
      name: "Nexus",
      slug: "nexus",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      image: nexus,
    },
    {
      id: 4,
      name: "Cloudman",
      slug: "cloudman",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      image: cloudman,
    },
    {
      id: 5,
      name: "Ecogrow",
      slug: "ecogrow",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      image: ecogrow,
    },
    {
      id: 6,
      name: "Greenbloom",
      slug: "greenbloom",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      image: greenbloom,
    },
    {
        id: 7,
        name: "Meloplay",
        slug: "meloplay",
        price: "$120",
        description:
          "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
        image: meloplay,
      },
  ];

  // Replace with your actual WhatsApp number
  const whatsappNumber = "+8801938434733";

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Logo <span className="text-primary">Store</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium, ready-to-use logos designed with precision. Each purchase
            includes full ownership and comprehensive brand guidelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="relative h-64 bg-dark-800 overflow-hidden">
                {/* This image should display the logo along with its construction guidelines */}
                <Link to={`/sales/${logo.slug}`}>
                  <img
                    src={logo.image}
                    alt={`${logo.name} Guidelines Preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Logo+Preview";
                    }} // Fallback
                  />
                </Link>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-primary/30 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Tag size={12} /> For Sale
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <Link to={`/sales/${logo.slug}`}>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-white transition-colors">
                      {logo.name}
                    </h3>
                  </Link>
                  <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                    {logo.price}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {logo.description}
                </p>

                <div className="flex gap-3 mt-auto">
                  <Link
                    to={`/sales/${logo.slug}`}
                    className="flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    <Eye size={20} /> Details
                  </Link>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in purchasing the ${logo.name} logo.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-lg shadow-green-900/20 hover:shadow-green-900/40"
                  >
                    <FaWhatsapp size={20} /> Buy
                  </a>
                </div>

                <p className="text-center text-xs text-gray-600 mt-3">
                  Contact to complete payment
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
