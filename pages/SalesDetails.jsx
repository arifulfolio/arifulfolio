import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { FileText, Palette } from "lucide-react";

// arborsphere

import arborsphere1 from "../components/assets/portfolios/brand identity/arborsphere/1.jpg";
import arborsphere2 from "../components/assets/portfolios/brand identity/arborsphere/2.jpg";
import arborsphere3 from "../components/assets/portfolios/brand identity/arborsphere/3.jpg";
import arborsphere4 from "../components/assets/portfolios/brand identity/arborsphere/4.jpg";
import arborsphere5 from "../components/assets/portfolios/brand identity/arborsphere/5.jpg";
import arborsphere6 from "../components/assets/portfolios/brand identity/arborsphere/6.jpg";
import arborsphere7 from "../components/assets/portfolios/brand identity/arborsphere/7.jpg";
import arborsphere8 from "../components/assets/portfolios/brand identity/arborsphere/8.jpg";
import arborsphere9 from "../components/assets/portfolios/brand identity/arborsphere/9.jpg";
import arborsphere10 from "../components/assets/portfolios/brand identity/arborsphere/10.jpg";
import arborsphere11 from "../components/assets/portfolios/brand identity/arborsphere/11.jpg";
import arborsphere12 from "../components/assets/portfolios/brand identity/arborsphere/12.jpg";
import arborsphere13 from "../components/assets/portfolios/brand identity/arborsphere/13.jpg";
import arborsphere14 from "../components/assets/portfolios/brand identity/arborsphere/14.jpg";
import arborsphere15 from "../components/assets/portfolios/brand identity/arborsphere/15.jpg";
import arborsphere16 from "../components/assets/portfolios/brand identity/arborsphere/16.jpg";
import arborsphere17 from "../components/assets/portfolios/brand identity/arborsphere/17.jpg";
import arborsphere18 from "../components/assets/portfolios/brand identity/arborsphere/18.jpg";
import arborsphere19 from "../components/assets/portfolios/brand identity/arborsphere/19.jpg";
import arborsphere20 from "../components/assets/portfolios/brand identity/arborsphere/20.jpg";
import arborsphere21 from "../components/assets/portfolios/brand identity/arborsphere/21.jpg";
import arborsphere22 from "../components/assets/portfolios/brand identity/arborsphere/22.jpg";
import arborsphere23 from "../components/assets/portfolios/brand identity/arborsphere/23.jpg";
import arborsphere24 from "../components/assets/portfolios/brand identity/arborsphere/24.jpg";
import arborsphere25 from "../components/assets/portfolios/brand identity/arborsphere/25.jpg";
import arborsphere26 from "../components/assets/portfolios/brand identity/arborsphere/26.jpg";

// boldpath Images
import boldpath1 from "../components/assets/portfolios/brand identity/boldpath/1.jpg";
import boldpath2 from "../components/assets/portfolios/brand identity/boldpath/2.jpg";
import boldpath3 from "../components/assets/portfolios/brand identity/boldpath/3.jpg";
import boldpath4 from "../components/assets/portfolios/brand identity/boldpath/4.jpg";
import boldpath5 from "../components/assets/portfolios/brand identity/boldpath/5.jpg";
import boldpath6 from "../components/assets/portfolios/brand identity/boldpath/6.jpg";
import boldpath7 from "../components/assets/portfolios/brand identity/boldpath/7.jpg";
import boldpath8 from "../components/assets/portfolios/brand identity/boldpath/8.jpg";
import boldpath9 from "../components/assets/portfolios/brand identity/boldpath/9.jpg";
import boldpath10 from "../components/assets/portfolios/brand identity/boldpath/10.jpg";
import boldpath11 from "../components/assets/portfolios/brand identity/boldpath/11.jpg";
import boldpath12 from "../components/assets/portfolios/brand identity/boldpath/12.jpg";
import boldpath13 from "../components/assets/portfolios/brand identity/boldpath/13.jpg";
import boldpath14 from "../components/assets/portfolios/brand identity/boldpath/14.jpg";
import boldpath15 from "../components/assets/portfolios/brand identity/boldpath/15.jpg";
import boldpath16 from "../components/assets/portfolios/brand identity/boldpath/16.jpg";
import boldpath17 from "../components/assets/portfolios/brand identity/boldpath/17.jpg";
import boldpath18 from "../components/assets/portfolios/brand identity/boldpath/18.jpg";
import boldpath19 from "../components/assets/portfolios/brand identity/boldpath/19.jpg";
import boldpath20 from "../components/assets/portfolios/brand identity/boldpath/20.jpg";
import boldpath21 from "../components/assets/portfolios/brand identity/boldpath/21.jpg";
import boldpath22 from "../components/assets/portfolios/brand identity/boldpath/22.jpg";
import boldpath23 from "../components/assets/portfolios/brand identity/boldpath/23.jpg";
import boldpath24 from "../components/assets/portfolios/brand identity/boldpath/24.jpg";
import boldpath25 from "../components/assets/portfolios/brand identity/boldpath/25.jpg";
import boldpath26 from "../components/assets/portfolios/brand identity/boldpath/26.jpg";
import boldpath27 from "../components/assets/portfolios/brand identity/boldpath/27.jpg";
import boldpath28 from "../components/assets/portfolios/brand identity/boldpath/28.jpg";
import boldpath29 from "../components/assets/portfolios/brand identity/boldpath/29.jpg";
import boldpath30 from "../components/assets/portfolios/brand identity/boldpath/30.jpg";
import boldpath31 from "../components/assets/portfolios/brand identity/boldpath/31.jpg";
import boldpath32 from "../components/assets/portfolios/brand identity/boldpath/32.jpg";
import boldpath33 from "../components/assets/portfolios/brand identity/boldpath/33.jpg";
import boldpath34 from "../components/assets/portfolios/brand identity/boldpath/34.jpg";
import boldpath35 from "../components/assets/portfolios/brand identity/boldpath/35.jpg";
import boldpath36 from "../components/assets/portfolios/brand identity/boldpath/36.jpg";
import boldpath37 from "../components/assets/portfolios/brand identity/boldpath/37.jpg";
import boldpath38 from "../components/assets/portfolios/brand identity/boldpath/38.jpg";
import boldpath39 from "../components/assets/portfolios/brand identity/boldpath/39.jpg";
import boldpath40 from "../components/assets/portfolios/brand identity/boldpath/40.jpg";
import boldpath41 from "../components/assets/portfolios/brand identity/boldpath/41.jpg";
import boldpath42 from "../components/assets/portfolios/brand identity/boldpath/42.jpg";
import boldpath43 from "../components/assets/portfolios/brand identity/boldpath/43.jpg";
import boldpath44 from "../components/assets/portfolios/brand identity/boldpath/44.jpg";
import boldpath45 from "../components/assets/portfolios/brand identity/boldpath/45.jpg";
import boldpath46 from "../components/assets/portfolios/brand identity/boldpath/46.jpg";
import boldpath47 from "../components/assets/portfolios/brand identity/boldpath/47.jpg";

// nexus
import nexus1 from "../components/assets/portfolios/brand identity/nexus/1.jpg";
import nexus2 from "../components/assets/portfolios/brand identity/nexus/2.jpg";
import nexus3 from "../components/assets/portfolios/brand identity/nexus/3.jpg";
import nexus4 from "../components/assets/portfolios/brand identity/nexus/4.jpg";
import nexus5 from "../components/assets/portfolios/brand identity/nexus/5.jpg";
import nexus6 from "../components/assets/portfolios/brand identity/nexus/6.jpg";
import nexus7 from "../components/assets/portfolios/brand identity/nexus/7.jpg";
import nexus8 from "../components/assets/portfolios/brand identity/nexus/8.jpg";
import nexus9 from "../components/assets/portfolios/brand identity/nexus/9.jpg";
import nexus10 from "../components/assets/portfolios/brand identity/nexus/10.jpg";
import nexus11 from "../components/assets/portfolios/brand identity/nexus/11.jpg";
import nexus12 from "../components/assets/portfolios/brand identity/nexus/12.jpg";
import nexus13 from "../components/assets/portfolios/brand identity/nexus/13.jpg";
import nexus14 from "../components/assets/portfolios/brand identity/nexus/14.jpg";
import nexus15 from "../components/assets/portfolios/brand identity/nexus/15.jpg";
import nexus16 from "../components/assets/portfolios/brand identity/nexus/16.jpg";
import nexus17 from "../components/assets/portfolios/brand identity/nexus/17.jpg";
import nexus18 from "../components/assets/portfolios/brand identity/nexus/18.jpg";
import nexus19 from "../components/assets/portfolios/brand identity/nexus/19.jpg";
import nexus20 from "../components/assets/portfolios/brand identity/nexus/20.jpg";
import nexus21 from "../components/assets/portfolios/brand identity/nexus/21.jpg";
import nexus22 from "../components/assets/portfolios/brand identity/nexus/22.jpg";
import nexus23 from "../components/assets/portfolios/brand identity/nexus/23.jpg";
import nexus24 from "../components/assets/portfolios/brand identity/nexus/24.jpg";
import nexus25 from "../components/assets/portfolios/brand identity/nexus/25.jpg";
import nexus26 from "../components/assets/portfolios/brand identity/nexus/26.jpg";

// cloudman
import cloudman1 from "../components/assets/portfolios/brand identity/cloudman/1.jpg";
import cloudman2 from "../components/assets/portfolios/brand identity/cloudman/2.jpg";
import cloudman3 from "../components/assets/portfolios/brand identity/cloudman/3.jpg";
import cloudman4 from "../components/assets/portfolios/brand identity/cloudman/4.jpg";
import cloudman5 from "../components/assets/portfolios/brand identity/cloudman/5.jpg";
import cloudman6 from "../components/assets/portfolios/brand identity/cloudman/6.jpg";
import cloudman7 from "../components/assets/portfolios/brand identity/cloudman/7.jpg";
import cloudman8 from "../components/assets/portfolios/brand identity/cloudman/8.jpg";
import cloudman9 from "../components/assets/portfolios/brand identity/cloudman/9.jpg";
import cloudman10 from "../components/assets/portfolios/brand identity/cloudman/10.jpg";
import cloudman11 from "../components/assets/portfolios/brand identity/cloudman/11.jpg";

// ecogrow
import ecogrow1 from "../components/assets/portfolios/brand identity/ecogrow/1.jpg";
import ecogrow2 from "../components/assets/portfolios/brand identity/ecogrow/2.jpg";
import ecogrow3 from "../components/assets/portfolios/brand identity/ecogrow/3.jpg";
import ecogrow4 from "../components/assets/portfolios/brand identity/ecogrow/4.jpg";
import ecogrow5 from "../components/assets/portfolios/brand identity/ecogrow/5.jpg";
import ecogrow6 from "../components/assets/portfolios/brand identity/ecogrow/6.jpg";
import ecogrow7 from "../components/assets/portfolios/brand identity/ecogrow/7.jpg";
import ecogrow8 from "../components/assets/portfolios/brand identity/ecogrow/8.jpg";
import ecogrow9 from "../components/assets/portfolios/brand identity/ecogrow/9.jpg";
import ecogrow10 from "../components/assets/portfolios/brand identity/ecogrow/10.jpg";
import ecogrow11 from "../components/assets/portfolios/brand identity/ecogrow/11.jpg";
import ecogrow12 from "../components/assets/portfolios/brand identity/ecogrow/12.jpg";
import ecogrow13 from "../components/assets/portfolios/brand identity/ecogrow/13.jpg";
import ecogrow14 from "../components/assets/portfolios/brand identity/ecogrow/14.jpg";
import ecogrow15 from "../components/assets/portfolios/brand identity/ecogrow/15.jpg";
import ecogrow16 from "../components/assets/portfolios/brand identity/ecogrow/16.jpg";

// greenbloom
import greenbloom1 from "../components/assets/portfolios/brand identity/greenbloom/1.jpg";
import greenbloom2 from "../components/assets/portfolios/brand identity/greenbloom/2.jpg";
import greenbloom3 from "../components/assets/portfolios/brand identity/greenbloom/3.jpg";
import greenbloom4 from "../components/assets/portfolios/brand identity/greenbloom/4.jpg";
import greenbloom5 from "../components/assets/portfolios/brand identity/greenbloom/5.jpg";
import greenbloom6 from "../components/assets/portfolios/brand identity/greenbloom/6.jpg";
import greenbloom7 from "../components/assets/portfolios/brand identity/greenbloom/7.jpg";
import greenbloom8 from "../components/assets/portfolios/brand identity/greenbloom/8.jpg";
import greenbloom9 from "../components/assets/portfolios/brand identity/greenbloom/9.jpg";
import greenbloom10 from "../components/assets/portfolios/brand identity/greenbloom/10.jpg";
import greenbloom11 from "../components/assets/portfolios/brand identity/greenbloom/11.jpg";
import greenbloom12 from "../components/assets/portfolios/brand identity/greenbloom/12.jpg";
import greenbloom13 from "../components/assets/portfolios/brand identity/greenbloom/13.jpg";
import greenbloom14 from "../components/assets/portfolios/brand identity/greenbloom/14.jpg";
import greenbloom15 from "../components/assets/portfolios/brand identity/greenbloom/15.jpg";
import greenbloom16 from "../components/assets/portfolios/brand identity/greenbloom/16.jpg";
import greenbloom17 from "../components/assets/portfolios/brand identity/greenbloom/17.jpg";
import greenbloom18 from "../components/assets/portfolios/brand identity/greenbloom/18.jpg";
import greenbloom19 from "../components/assets/portfolios/brand identity/greenbloom/19.jpg";
import greenbloom20 from "../components/assets/portfolios/brand identity/greenbloom/20.jpg";
import greenbloom21 from "../components/assets/portfolios/brand identity/greenbloom/21.jpg";
import greenbloom22 from "../components/assets/portfolios/brand identity/greenbloom/22.jpg";
import greenbloom23 from "../components/assets/portfolios/brand identity/greenbloom/23.jpg";
import greenbloom24 from "../components/assets/portfolios/brand identity/greenbloom/24.jpg";
import greenbloom25 from "../components/assets/portfolios/brand identity/greenbloom/25.jpg";
import greenbloom26 from "../components/assets/portfolios/brand identity/greenbloom/26.jpg";

// meloplay
import meloplay1 from "../components/assets/portfolios/brand identity/meloplay/1.jpg";
import meloplay2 from "../components/assets/portfolios/brand identity/meloplay/2.jpg";
import meloplay3 from "../components/assets/portfolios/brand identity/meloplay/3.jpg";
import meloplay4 from "../components/assets/portfolios/brand identity/meloplay/4.jpg";
import meloplay5 from "../components/assets/portfolios/brand identity/meloplay/5.jpg";
import meloplay6 from "../components/assets/portfolios/brand identity/meloplay/6.jpg";
import meloplay7 from "../components/assets/portfolios/brand identity/meloplay/7.jpg";
import meloplay8 from "../components/assets/portfolios/brand identity/meloplay/8.jpg";
import meloplay9 from "../components/assets/portfolios/brand identity/meloplay/9.jpg";
import meloplay10 from "../components/assets/portfolios/brand identity/meloplay/10.jpg";
import meloplay11 from "../components/assets/portfolios/brand identity/meloplay/11.jpg";
import meloplay12 from "../components/assets/portfolios/brand identity/meloplay/12.jpg";
import meloplay13 from "../components/assets/portfolios/brand identity/meloplay/13.jpg";
import meloplay14 from "../components/assets/portfolios/brand identity/meloplay/14.jpg";

const SalesDetails = () => {
  const { slug } = useParams();

  // Sample data (duplicated from Sales.jsx for this example)
  const logos = [
    {
      id: 1,
      name: "Arborsphere",
      slug: "arborsphere",
      price: "$150",
      description:
        "A futuristic wolf logo design with neon accents. Includes vector files, brand guidelines, and color palette.",
      longDescription:
        "This Neon Wolf logo is designed for modern, tech-forward brands. The sharp angles and neon color scheme convey energy, precision, and innovation. Perfect for gaming clans, tech startups, or security firms.",
      image: arborsphere1,
      files: ["AI", "EPS", "PDF", "PNG", "SVG"],
      brandImages: [
        arborsphere2,
        arborsphere3,
        arborsphere4,
        arborsphere5,
        arborsphere6,
        arborsphere7,
        arborsphere8,
        arborsphere9,
        arborsphere10,
        arborsphere11,
        arborsphere12,
        arborsphere13,
        arborsphere14,
        arborsphere15,
        arborsphere16,
        arborsphere17,
        arborsphere18,
        arborsphere19,
        arborsphere20,
        arborsphere21,
        arborsphere22,
        arborsphere23,
        arborsphere24,
        arborsphere25,
        arborsphere26,
      ],
    },
    {
      id: 2,
      name: "Boldpath Logo",
      slug: "boldpath",
      price: "$200",
      description:
        "Security-focused shield logo. Perfect for cybersecurity firms. Includes full geometry guidelines.",
      longDescription:
        "Cyber Shield represents ultimate protection and digital fortitude. Built on a strict geometric grid, this logo scales perfectly from favicon to billboard. The blue and silver palette builds trust and authority.",
      image: boldpath1,
      files: ["AI", "PSD", "EPS", "PNG"],
      brandImages: [
        boldpath2,
        boldpath3,
        boldpath4,
        boldpath5,
        boldpath6,
        boldpath7,
        boldpath8,
        boldpath9,
        boldpath10,
        boldpath11,
        boldpath12,
        boldpath13,
        boldpath14,
        boldpath15,
        boldpath16,
        boldpath17,
        boldpath18,
        boldpath19,
        boldpath20,
        boldpath21,
        boldpath22,
        boldpath23,
        boldpath24,
        boldpath25,
        boldpath26,
        boldpath27,
        boldpath28,
        boldpath29,
        boldpath30,
        boldpath31,
        boldpath32,
        boldpath33,
        boldpath34,
        boldpath35,
        boldpath36,
        boldpath37,
        boldpath38,
        boldpath39,
        boldpath40,
        boldpath41,
        boldpath42,
        boldpath43,
        boldpath44,
        boldpath45,
        boldpath46,
        boldpath47,
      ],
    },
    {
      id: 3,
      name: "Nexus",
      slug: "nexus",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      longDescription:
        "Tech Orbit is a minimalist masterpiece symbolizing global connectivity and data flow. Its clean lines ensure legibility at any size, making it ideal for app icons and software products.",
      image: nexus1,
      files: ["AI", "EPS", "SVG", "PNG"],
      brandImages: [
        nexus1,
        nexus2,
        nexus3,
        nexus4,
        nexus5,
        nexus6,
        nexus7,
        nexus8,
        nexus9,
        nexus10,
        nexus11,
        nexus12,
        nexus13,
        nexus14,
        nexus15,
        nexus16,
        nexus17,
        nexus18,
        nexus19,
        nexus20,
        nexus21,
        nexus22,
        nexus23,
        nexus24,
        nexus25,
        nexus26,
      ],
    },
    {
      id: 4,
      name: "Cloudman",
      slug: "cloudman",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      longDescription:
        "Tech Orbit is a minimalist masterpiece symbolizing global connectivity and data flow. Its clean lines ensure legibility at any size, making it ideal for app icons and software products.",
      image: cloudman1,
      files: ["AI", "EPS", "SVG", "PNG"],
      brandImages: [
        cloudman1,
        cloudman2,
        cloudman3,
        cloudman4,
        cloudman5,
        cloudman6,
        cloudman7,
        cloudman8,
        cloudman9,
        cloudman10,
        cloudman11,
      ],
    },
    {
      id: 5,
      name: "Ecogrow",
      slug: "ecogrow",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      longDescription:
        "Tech Orbit is a minimalist masterpiece symbolizing global connectivity and data flow. Its clean lines ensure legibility at any size, making it ideal for app icons and software products.",
      image: ecogrow2,
      files: ["AI", "EPS", "SVG", "PNG"],
      brandImages: [
        ecogrow1,
        ecogrow2,
        ecogrow3,
        ecogrow4,
        ecogrow5,
        ecogrow6,
        ecogrow7,
        ecogrow8,
        ecogrow9,
        ecogrow10,
        ecogrow11,
        ecogrow12,
        ecogrow13,
        ecogrow14,
        ecogrow15,
        ecogrow16,
      ],
    },
    {
      id: 6,
      name: "Greenbloom",
      slug: "greenbloom",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      longDescription:
        "Tech Orbit is a minimalist masterpiece symbolizing global connectivity and data flow. Its clean lines ensure legibility at any size, making it ideal for app icons and software products.",
      image: greenbloom1,
      files: ["AI", "EPS", "SVG", "PNG"],
      brandImages: [
        greenbloom1,
        greenbloom2,
        greenbloom3,
        greenbloom4,
        greenbloom5,
        greenbloom6,
        greenbloom7,
        greenbloom8,
        greenbloom9,
        greenbloom10,
        greenbloom11,
        greenbloom12,
        greenbloom13,
        greenbloom14,
        greenbloom15,
        greenbloom16,
        greenbloom17,
        greenbloom18,
        greenbloom19,
        greenbloom20,
        greenbloom21,
        greenbloom22,
        greenbloom23,
        greenbloom24,
        greenbloom25,
        greenbloom26,
      ],
    },
    {
      id: 7,
      name: "Meloplay",
      slug: "meloplay",
      price: "$120",
      description:
        "Minimalist tech logo representing connectivity. Comes with typography usage guide.",
      longDescription:
        "Tech Orbit is a minimalist masterpiece symbolizing global connectivity and data flow. Its clean lines ensure legibility at any size, making it ideal for app icons and software products.",
      image: meloplay1,
      files: ["AI", "EPS", "SVG", "PNG"],
      brandImages: [
        meloplay1,
        meloplay2,
        meloplay3,
        meloplay4,
        meloplay5,
        meloplay6,
        meloplay7,
        meloplay8,
        meloplay9,
        meloplay10,
        meloplay11,
        meloplay12,
        meloplay13,
        meloplay14,
      ],
    },
  ];

  const logo = logos.find((l) => l.slug === slug);
  const whatsappNumber = "+8801938434733"; // Replace with actual number

  if (!logo) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Logo Not Found</h2>
        <Link to="/sales" className="text-primary hover:underline">
          Back to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <Link
          to="/sales"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-[60px] rounded-full opacity-40 pointer-events-none" />

            {/* Main Image Container */}
            <div className="relative rounded-3xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm shadow-2xl shadow-black/50">
              <div className="rounded-2xl overflow-hidden relative bg-dark-900">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-auto block transform transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/1200x1000?text=Logo+Guidelines+Preview";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                {logo.name}
              </h1>
              <span className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl">
                {logo.price}
              </span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {logo.longDescription || logo.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-dark-800 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-gray-400">
                <FileText size={16} /> Files:{" "}
                {logo.files ? logo.files.join(", ") : "AI, EPS, PNG"}
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in purchasing the ${logo.name} logo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-lg shadow-green-900/20 hover:shadow-green-900/40 transform hover:-translate-y-1 text-lg mb-6"
            >
              <FaWhatsapp size={24} /> Buy Now via WhatsApp
            </a>

            {/* Custom Brand Identity Note */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
                <Palette className="text-primary shrink-0 mt-1" size={20} />
                <p className="text-gray-300 text-sm italic">
                  "If you want to create a custom brand identity for this logo,
                  please contact us on WhatsApp."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Identity Showcase Section */}
        {logo.brandImages && (
          <div className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-10 text-center"
            >
              Brand Identity <span className="text-primary">Showcase</span>
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-8"
            >
              {logo.brandImages.map((img, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="rounded-2xl overflow-hidden border border-white/5 bg-dark-800 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500 group"
                >
                  <img
                    src={img}
                    alt={`${logo.name} Brand Identity ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/1200x1000?text=${
                        logo.name
                      }+Brand+Identity+${index + 1}`;
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-10 flex flex-col items-center justify-center text-center"
        >
          <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">
            Thank You <span className="text-gray-600">For Watching</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            If you are interested in purchasing this brand identity or need a
            custom design, feel free to contact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SalesDetails;
