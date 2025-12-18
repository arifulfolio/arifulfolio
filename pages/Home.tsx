import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  PenTool,
  Layout as LayoutIcon,
  Download,
  Mail,
  CheckCircle,
  Play,
  ArrowRight,
  User,
  Star,
  Phone,
  Check,
  ExternalLink,
  Sparkles,
  Quote,
  CheckCircle2,
  Calendar,
  Zap,
} from "lucide-react";
import { Section } from "../components/Section";
import { Link } from "react-router-dom";
import { Project, Service, Testimonial, PricingPlan, BlogPost } from "../types";
import { SEO } from "../components/SEO";
import homelogo from "../components/assets/home/logo.png";
import aboutimage from "../components/assets/about/profile.png";

// projects
import boldpath from '../components/assets/portfolios/brand identity/boldpath/1.jpg'
import arborsphere from '../components/assets/portfolios/brand identity/arborsphere/1.jpg'
import greenbloom from '../components/assets/portfolios/brand identity/greenbloom/1.jpg'
import momentum from '../components/assets/portfolios/brand identity/momentum/1.jpg'
import nexus from '../components/assets/portfolios/brand identity/nexus/1.jpg'
import ranova from '../components/assets/portfolios/brand identity/ranova/1.jpg'

const Home = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Brand Identity",
      description:
        "Creating unique brand identities that resonate with your audience.",
      icon: <PenTool size={32} />,
    },
    {
      id: 2,
      title: "Image Editing",
      description:
        "Designing modern, responsive websites tailored to your needs.",
      icon: <LayoutIcon size={32} />,
    },
    {
      id: 3,
      title: "Social Media Kit",
      description:
        "User-centric mobile app designs for iOS and Android platforms.",
      icon: <Smartphone size={32} />,
    },
    {
      id: 4,
      title: "Web UI",
      description: "Robust frontend and backend development solutions.",
      icon: <Monitor size={32} />,
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      category: "Brand Identity",
      title: "BoldPath Brand Identity",
      thumbnail: boldpath,
      slug: "boldpath-brand-identity",
    },
    {
      id: 2,
      category: "Brand Identity",
      title: "ArborSphere Brand Identity",
      thumbnail: arborsphere,
      slug: "arborsphere-brand-identity",
    },
    {
      id: 3,
      category: "Brand Identity",
      title: "Greenbloom Brand Identity",
      thumbnail: greenbloom,
      slug: "greenbloom-brand-identity",
    },
    {
      id: 4,
      category: "Brand Identity",
      title: "Momentum Brand Identity",
      thumbnail: momentum,
      slug: "momentum-brand-identity",
    },
    {
      id: 5,
      category: "Brand Identity",
      title: "Nexus Brand Identity",
      thumbnail: nexus,
      slug: "nexus-brand-identity",
    },
    {
      id: 6,
      category: "Brand Identity",
      title: "Ranova Brand Identity",
      thumbnail: ranova,
      slug: "ranova-brand-identity",
    },
  ];

  const skills = [
   { name: 'Adobe Illustrator', percent: 95, color: '#ED2224' },
   { name: 'Adobe Photoshop', percent: 85, color: '#31A8FF' },
   { name: 'Adobe Indesign', percent: 90, color: '#FF3366' },
   { name: 'Figma', percent: 80, color: '#F24E1E' },
   { name: 'Adobe XD', percent: 88, color: '#ED2224' },
 ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart",
      content:
        "Ariful transformed our digital presence. The attention to detail and creative approach were outstanding.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Product Manager",
      company: "Global Solutions",
      content:
        "Incredible work ethic and top-tier design skills. Delivered the project ahead of schedule and beyond expectations.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director",
      company: "Creative Co",
      content:
        "Working with Ariful was a pleasure. He understood our brand vision perfectly and executed it flawlessly.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Wilson",
      role: "Founder",
      company: "StartupX",
      content:
        "The best frontend developer I've worked with. Clean code, great design sense, and excellent communication.",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 4,
    },
    {
      id: 5,
      name: "Jessica Brown",
      role: "Art Director",
      company: "Design Studio",
      content:
        "A true professional who cares about the user experience. Highly recommended for any web project.",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
    },
    {
      id: 6,
      name: "Robert Taylor",
      role: "CTO",
      company: "TechCorp",
      content:
        "Exceptional quality and speed. The new website has significantly increased our conversion rates.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
    },
    {
      id: 7,
      name: "Anna White",
      role: "CMO",
      company: "Brandify",
      content:
        "Our brand identity has never looked better. The team captured our essence perfectly in the new logo and guidelines.",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      rating: 5,
    },
    {
      id: 8,
      name: "James Martin",
      role: "Developer",
      company: "SoftSys",
      content:
        "Great collaboration. The design files were organized and easy to implement. Saved us hours of development time.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
    },
  ];

  // Split testimonials for the marquee rows
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Image Editing",
      price: "$99",
      period: "/per project",
      description: "Perfect for high-quality photo retouching and manipulation.",
      features: [
        "Up to 20 Images",
        "Color Correction & Grading",
        "Background Removal",
        "High-Resolution Output",
        "2 Revision Rounds",
      ],
      buttonText: "Choose Package",
    },
    {
      id: 2,
      name: "Brand Identity",
      price: "$499",
      period: "/starter package",
      description: "Craft a memorable brand that connects with your audience.",
      features: [
        "Primary & Secondary Logos",
        "Color Palette & Typography",
        "Brand Guidelines PDF",
        "Business Card Design",
        "Full Copyright Ownership",
      ],
      isPopular: true,
      buttonText: "Choose Package",
    },
    {
      id: 3,
      name: "Social Media Kit",
      price: "$249",
      period: "/one-time",
      description: "A complete kit to make your social media profiles shine.",
      features: [
        "Profile & Cover Photos",
        "5 Post Templates",
        "5 Story Templates",
        "Brand Style Guide",
        "Source Files",
      ],
      buttonText: "Choose Package",
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of UI Design: Glassmorphism",
      date: "Oct 15, 2023",
      category: "Design",
      image: "https://picsum.photos/seed/blog1/800/600",
      excerpt:
        "Exploring the rising trend of glassmorphism in modern user interface design and how to implement it effectively.",
      author: "Ariful Islam",
    },
    {
      id: 2,
      title: "React vs. Vue: Which Framework to Choose?",
      date: "Oct 10, 2023",
      category: "Development",
      image: "https://picsum.photos/seed/blog2/800/600",
      excerpt:
        "A comprehensive comparison of the two most popular JavaScript frameworks for frontend development.",
      author: "Ariful Islam",
    },
    {
      id: 3,
      title: "Optimizing Website Performance for SEO",
      date: "Sep 28, 2023",
      category: "SEO",
      image: "https://picsum.photos/seed/blog3/800/600",
      excerpt:
        "Key strategies to improve your website speed and ranking on search engines.",
      author: "Ariful Islam",
    },
  ];

  return (
    <>
      <SEO
        title="ArifulFolio | Ariful Islam - Senior Product Designer & Developer"
        description="Welcome to ArifulFolio, the official portfolio of Ariful Islam (ArifulGFX/Valonix). Expert in Graphic Design, Web Development, and Brand Identity."
        keywords="ariful, ariful islam, arifulgfx, arifulcreatorstudio, valonix studio, valonix, arifulfolio, graphic design, web design, ui/ux design"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* 
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div> */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-gray-300">
                  Brand Identity Designer
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold font-display mb-8 leading-[1.1] md:leading-[0.95] tracking-tight text-white">
                Designing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                  Visual Soul
                </span>{" "}
                <br />
                For Brands.
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                I am <span className="text-white font-bold">Ariful Islam</span>.
                I transform visionary businesses into unforgettable brands
                through strategic identity design, typography, and visual
                storytelling.
              </p>
              <div className="flex flex-wrap gap-5 mb-16">
                <Link
                  to="/projects"
                  className="group relative bg-primary text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden flex items-center gap-2 shadow-[0_0_20px_rgba(56,39,200,0.4)]"
                >
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                  <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
                    View Case Studies <ArrowUpRight size={20} />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 rounded-full font-bold text-lg border border-white/10 overflow-hidden flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white"
                >
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                  <span className="relative z-10 group-hover:text-black transition-colors">
                    Start a Project
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm font-medium text-gray-500 border-t border-white/5 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Logo Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Brand Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Art Direction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex lg:col-span-5 relative justify-center items-center min-h-[300px] z-20"
            >
              {/* Logo Container with higher Z-index */}
              <div className="relative w-full flex justify-center z-30">
                <img
                  src={homelogo}
                  alt="Ariful Valonix Studio Logo"
                  className="w-auto h-auto max-w-full md:max-w-[800px] object-contain drop-shadow-2xl relative z-30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      {/* <Section id="about" className="py-24 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  About Me
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-5xl font-display font-bold leading-[1.1] mb-8 text-white"
              >
                Professional{" "}
                <span className="text-primary">Problem Solutions</span>
                <br /> For Digital Products
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
              >
                I'm a logo and brand identity designer with over 4
                years of experience. I'm all about creating awesome logos and
                brand identities that really stand out. I specialize in making
                clean, stylish designs that fit your business perfectly.
              </motion.p>

              <div className="space-y-4 mb-12">
                {[
                  "Brand Identity",
                  "Image Editing",
                  "Social Media Kit",
                  "Web UI",
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full border border-primary/50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-white text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg group">
                    <Mail
                      size={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                      EMAIL US
                    </p>
                    <a
                      href="mailto:arifulfolio@gmail.com"
                      className="font-bold text-white text-sm hover:text-gray-300 transition-colors"
                    >
                      arifulfolio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg group">
                    <Phone
                      size={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                      MAKE A CALL
                    </p>
                    <a
                      href="tel:+8801938434733"
                      className="font-bold text-white text-sm hover:text-gray-300 transition-colors"
                    >
                      +880 1938434733
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 relative pl-0 lg:pl-10 mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="rounded-[30px] overflow-hidden relative border border-white/10 group">
                  <img
                    src={aboutimage}
                    alt="Ariful Islam Profile"
                    className="w-full aspect-[3.5/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between shadow-2xl">
                      <div>
                        <p className="text-white font-bold text-xl md:text-2xl mb-1">
                          Graphic Designer
                        </p>
                        <p className="text-gray-300 text-xs">
                          Based in Jashore, Khulna, Bangladesh
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors cursor-pointer shrink-0">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section> */}

     {/* SERVICES */}
     <Section id="services" className="bg-dark-900/50">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20 relative"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 blur-[100px] -z-10"></div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">My Services</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Special Services</span> For Your <br />
                <span className="relative inline-block">
                    Business Development
                    <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary" viewBox="0 0 200 9" fill="none"><path d="M2.00025 6.99997C25.7501 9.75001 59.654 3.75001 113.142 2.00002C132.75 1.70002 197.667 3.66669 198 4.00002" stroke="currentColor" strokeWidth="3" /></svg>
                </span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-[20px] p-8 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute -top-4 -right-4 text-[100px] font-display font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-500 leading-none select-none pointer-events-none">
                0{i + 1}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <div className="relative z-10">{service.icon}</div>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-gray-300 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                  Read Detail
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section className="py-24 bg-dark-900 relative overflow-hidden" id="skills">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">My Capabilities</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Technical <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg">
                A comprehensive toolset allowing me to move from initial concept to final production-grade code seamlessly.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 justify-center">
            {skills.map((skill, i) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-dark-800 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 overflow-hidden"
                >
                    {/* Glow Effect */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"
                        style={{ backgroundColor: skill.color }}
                    ></div>

                    <div className="relative w-28 h-28 mb-6">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            {/* Track */}
                            <circle cx="50" cy="50" r="45" stroke="#1f1f3a" strokeWidth="6" fill="none" />
                            {/* Progress */}
                            <motion.circle 
                                cx="50" cy="50" r="45" 
                                stroke={skill.color} 
                                strokeWidth="6" 
                                fill="none" 
                                strokeDasharray="282.7"
                                strokeLinecap="round"
                                initial={{ strokeDashoffset: 282.7 }}
                                whileInView={{ strokeDashoffset: 282.7 - (282.7 * skill.percent) / 100 }}
                                transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                                className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            />
                        </svg>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-white font-display">{skill.percent}%</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors relative z-10">{skill.name}</h3>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* LATEST WORKS */}
      <Section id="projects" className="bg-dark-900 relative">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold leading-none">
              Latest{" "}
              <span className="font-serif italic font-normal text-gray-400">
                Creative
              </span>{" "}
              <br />
              <span className="text-primary">Masterpieces</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/list">
          <AnimatePresence mode="wait">
            {projects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group/item relative overflow-hidden rounded-[32px] aspect-[1200/1000] bg-dark-800 border border-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                                group-hover/list:blur-[2px] group-hover/list:opacity-40 group-hover/list:grayscale
                                hover:!blur-0 hover:!opacity-100 hover:!grayscale-0 hover:scale-[1.03] hover:z-10 hover:shadow-[0_20px_40px_-15px_rgba(56,39,200,0.3)] hover:border-primary/50"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-[120%] group-hover/item:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="bg-[#3827c8] rounded-[24px] p-6 border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-0 font-display leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 hover:bg-dark-900 hover:text-white transition-colors group/btn shadow-lg"
                      >
                        <ArrowUpRight
                          size={22}
                          className="group-hover/btn:rotate-45 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="absolute inset-0 z-10"
                ></Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2 bg-dark-800 border border-white/10 px-8 py-3 rounded-full font-bold overflow-hidden"
          >
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
              View More Projects <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS SECTION - INFINITE MARQUEE */}
      <section
        id="testimonials"
        className="py-24 bg-dark-900 overflow-hidden relative"
      >
        <div className="container mx-auto px-6 mb-16">
          <div className="flex flex-col items-center text-center">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">
              Clients Testimonials
            </span>
            <h2 className="text-3xl md:text-3xl lg:text-6xl font-display font-bold leading-tight">
              I've 1253+ Clients <br />
              <span className="text-primary">Feedback</span>
            </h2>
          </div>
        </div>

        {/* Row 1 - Left */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-8 group">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-marquee group-hover:pause">
            {[...row1, ...row1, ...row1].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="w-[85vw] md:w-[450px] mx-4 flex-shrink-0"
              >
                <div className="bg-dark-800 p-8 rounded-[30px] border border-white/5 relative hover:border-primary/50 transition-all duration-300 h-full group/card bg-gradient-to-br from-dark-800 to-dark-800/50 hover:to-primary/10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(t.rating)].map((_, starI) => (
                        <Star key={starI} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <div className="text-primary/20 group-hover/card:text-primary transition-colors">
                      <Quote size={40} />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover/card:border-primary transition-colors">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-sm text-primary font-medium">
                        {t.role}{" "}
                        <span className="text-gray-500">@ {t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right (Reverse) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-marquee-reverse group-hover:pause">
            {[...row2, ...row2, ...row2].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="w-[85vw] md:w-[450px] mx-4 flex-shrink-0"
              >
                <div className="bg-dark-800 p-8 rounded-[30px] border border-white/5 relative hover:border-primary/50 transition-all duration-300 h-full group/card bg-gradient-to-br from-dark-800 to-dark-800/50 hover:to-primary/10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(t.rating)].map((_, starI) => (
                        <Star key={starI} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <div className="text-primary/20 group-hover/card:text-primary transition-colors">
                      <Quote size={40} />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover/card:border-primary transition-colors">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-sm text-primary font-medium">
                        {t.role}{" "}
                        <span className="text-gray-500">@ {t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      {/* <Section id="blog" className="bg-dark-900/50">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">
              News & Blog
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Latest News & <span className="text-primary">Blog</span>
            </h2>
          </motion.div>
          <Link
            to="/blog"
            className="group flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
          >
            View All Posts{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-dark-800 rounded-[30px] border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-dark-900/80 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Calendar size={14} className="text-primary" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold font-display mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:underline decoration-primary underline-offset-4"
                >
                  Read More <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* PRICING PLANS SECTION */}
      <Section id="pricing" className="bg-dark-900">
        <div className="text-center mb-16">
          <span className="text-gray-500 font-bold uppercase tracking-wider text-xs mb-2 block">
            Pricing Package
          </span>
          <h2 className="text-3xl md:text-3xl lg:text-6xl font-display font-bold">
            Amazing <span className="text-primary">Pricing</span> For your
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col group overflow-hidden ${
                plan.isPopular
                  ? "bg-dark-800/80 border-primary/50 shadow-[0_0_30px_rgba(56,39,200,0.15)] z-10 scale-105"
                  : "bg-dark-800/40 border-white/5 hover:border-white/10 hover:bg-dark-800/60"
              }`}
            >
              {/* Popular Glow Background */}
              {plan.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
              )}

              {plan.isPopular && (
                <div className="absolute top-6 right-6">
                  <div className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">
                    Best Value
                  </div>
                </div>
              )}

              <div className="mb-8 relative z-10">
                <h3
                  className={`text-xl font-bold mb-4 ${
                    plan.isPopular ? "text-white" : "text-gray-300"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl md:text-5xl font-display font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 font-medium mb-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="flex-1 mb-10 relative z-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-medium text-gray-300"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          plan.isPopular
                            ? "bg-primary text-white"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        <Check size={10} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/pricing/${plan.id}`}
                className={`group relative w-full py-4 rounded-full font-bold text-center overflow-hidden flex items-center justify-center gap-2 border ${
                  plan.isPopular
                    ? "bg-primary border-primary text-white"
                    : "bg-transparent border-white/10 text-white hover:border-primary/50"
                }`}
              >
                <div
                  className={`absolute inset-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    plan.isPopular ? "bg-white" : "bg-primary"
                  }`}
                ></div>
                <span
                  className={`relative z-10 transition-colors ${
                    plan.isPopular
                      ? "group-hover:text-black"
                      : "group-hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </span>
                <ArrowRight
                  size={16}
                  className={`relative z-10 transition-colors ${
                    plan.isPopular
                      ? "group-hover:text-black"
                      : "group-hover:text-white"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
