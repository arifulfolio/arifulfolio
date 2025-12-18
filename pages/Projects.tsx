import React, { useMemo } from "react";
import { Section } from "../components/Section";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Layout,
  Smartphone,
  PenTool,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Project } from "../types";
import { SEO } from "../components/SEO";
// projects
import boldpath from "../components/assets/portfolios/brand identity/boldpath/1.jpg";
import arborsphere from "../components/assets/portfolios/brand identity/arborsphere/1.jpg";
import greenbloom from "../components/assets/portfolios/brand identity/greenbloom/1.jpg";
import momentum from "../components/assets/portfolios/brand identity/momentum/1.jpg";
import nexus from "../components/assets/portfolios/brand identity/nexus/1.jpg";
import ranova from "../components/assets/portfolios/brand identity/ranova/1.jpg";
import cloudman from "../components/assets/portfolios/brand identity/cloudman/1.jpg";
import dynamic from "../components/assets/portfolios/brand identity/dynamic/1.jpg";
import ecogrow from "../components/assets/portfolios/brand identity/ecogrow/1.jpg";
import pplayer from "../components/assets/portfolios/brand identity/pplayer/1.jpg";
import uniflora from "../components/assets/portfolios/brand identity/uniflora/1.jpg";
import player from "../components/assets/portfolios/brand identity/player/1.jpg";
import winnest from "../components/assets/portfolios/brand identity/winnest/1.jpg";
import zxon from "../components/assets/portfolios/brand identity/zxon/1.jpg";
import meloplay from "../components/assets/portfolios/brand identity/meloplay/1.jpg";
import zepeq from "../components/assets/portfolios/brand identity/zepeq/1.jpg";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "All";

  const setActiveFilter = (filter: string) => {
    setSearchParams({ filter });
  };
  const allProjects: Project[] = [
    {
      category: "Brand Identity",
      title: "BoldPath Brand Identity",
      thumbnail: boldpath,
      slug: "boldpath-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "ArborSphere Brand Identity",
      thumbnail: arborsphere,
      slug: "arborsphere-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Greenbloom Brand Identity",
      thumbnail: greenbloom,
      slug: "greenbloom-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Momentum Brand Identity",
      thumbnail: momentum,
      slug: "momentum-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Nexus Brand Identity",
      thumbnail: nexus,
      slug: "nexus-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Ranova Brand Identity",
      thumbnail: ranova,
      slug: "ranova-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "CloudMan Brand Identity",
      thumbnail: cloudman,
      slug: "cloudman-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "D Brand Identity",
      thumbnail: dynamic,
      slug: "dynamic-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Ecogrow Brand Identity",
      thumbnail: ecogrow,
      slug: "ecogrow-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "P Player Brand Identity",
      thumbnail: pplayer,
      slug: "pplayer-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Uniflora Brand Identity",
      thumbnail: uniflora,
      slug: "uniflora-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Player Brand Identity",
      thumbnail: player,
      slug: "player-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Winnest Brand Identity",
      thumbnail: winnest,
      slug: "winnest-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Zxon Brand Identity",
      thumbnail: zxon,
      slug: "zxon-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "MeloPlay Brand Identity",
      thumbnail: meloplay,
      slug: "meloplay-brand-identity",
    },
    {
      category: "Brand Identity",
      title: "Zepeq Brand Identity",
      thumbnail: zepeq,
      slug: "zepeq-brand-identity",
    },
  ];

  const filters: { name: string; icon: React.ReactNode }[] = [
    { name: "All", icon: <Layers size={16} /> },
    { name: "Brand Identity", icon: <PenTool size={16} /> },
    { name: "Image Editing", icon: <Smartphone size={16} /> },
    { name: "Social Media Kit", icon: <PenTool size={16} /> },
    { name: "Web UI", icon: <Layout size={16} /> },
  ];

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === activeFilter),
    [activeFilter, allProjects]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="pt-20 overflow-hidden">
      <SEO
        title="Portfolio | ArifulFolio - Recent Creative Works"
        description="Browse the latest projects by Ariful Islam (ArifulGFX). Showcasing Mobile Apps, E-commerce Websites, Brand Identities, and UI/UX Designs."
        keywords="creative portfolio, ariful portfolio, latest works, branding projects, app design gallery"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-dark-900">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">
              My Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Showcase
              </span>{" "}
              <br />& Latest Works
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore a curated selection of my latest projects. Each piece
              represents a unique challenge solved with creativity and technical
              precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER & GRID SECTION */}
      <Section className="bg-dark-900 pt-0">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`group relative px-6 py-3 rounded-full font-bold text-sm transition-colors duration-300 flex items-center gap-2 focus:outline-none ${
                activeFilter === filter.name
                  ? "text-white"
                  : "bg-dark-800 border border-white/10 text-gray-400 hover:text-white hover:border-primary/50"
              }`}
            >
              {activeFilter === filter.name && (
                <motion.div
                  layoutId="activeFilterBubble"
                  className="absolute inset-0 bg-primary z-0 rounded-full shadow-[0_0_20px_rgba(56,39,200,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {filter.icon} {filter.name}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filtered.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((project) => (
                <motion.div
                  variants={itemVariants}
                  key={project.slug}
                  layout
                  className="group/item relative overflow-hidden rounded-[32px] aspect-[1200/1000] bg-dark-800 border border-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                           hover:scale-[1.03] hover:z-10 hover:shadow-[0_20px_40px_-15px_rgba(56,39,200,0.3)] hover:border-primary/50"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                    loading="lazy"
                  />

                  {/* Floating Card Interaction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-0 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-[120%] group-hover/item:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="bg-[#3827c8] rounded-[24px] p-4 border border-white/10 shadow-2xl relative overflow-hidden">
                      {/* Glow effect inside card */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] rounded-full pointer-events-none"></div>

                      <div className="relative z-10 flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2 block">
                            {project.category}
                          </span>
                          <h3 className="text-sm font-bold text-white mb-0 font-display leading-tight">
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
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </Section>

      {/* CTA SECTION */}
      <Section className="pb-32">
        <div className="bg-dark-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
              Have A Project In Mind?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership
              opportunities. Let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Start a Project <ArrowRight />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;
