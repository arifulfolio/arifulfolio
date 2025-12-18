import React from "react";
import { Section } from "../components/Section";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Experience } from "../types";
import { SEO } from "../components/SEO";
import about from "../components/assets/about/profile.png";
import resume from "../components/resume/resume.pdf";

const About = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Graphic Designer",
      company: "IT Sheba",
      period: "Sep 2025 - Nov 2025",
      description:
        "Leading the design system team and overseeing product consistency across multiple platforms. Mentoring junior designers and conducting UX research.",
    },
    {
      id: 2,
      role: "Graphic Designer Intern",
      company: "Learning & Earning Development Project",
      period: "2021 - 2022",
      description:
        "Designed user-centric interfaces for web applications. Collaborated with developers to ensure pixel-perfect implementation and improved user retention by 40%.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "BSC In CSE",
      school: "Northern University of Business and Technology | Khulna",
      period: "2024 - Present",
      description:
        "Specialized in digital media and interaction design. Graduated with honors.",
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      school: "BCMC College of Engineering & Technology",
      period: "2019 - 2024",
      description:
        "Focus on frontend development and human-computer interaction.",
    },
  ];

  const awards = [
    {
      id: 1,
      title: "Site of the Day",
      org: "Awwwards",
      year: "2023",
      icon: <Trophy />,
    },
    {
      id: 2,
      title: "Best UI Design",
      org: "CSS Design Awards",
      year: "2022",
      icon: <Star />,
    },
    {
      id: 3,
      title: "Designer of the Year",
      org: "Behance",
      year: "2021",
      icon: <Award />,
    },
    {
      id: 4,
      title: "FWA of the Month",
      org: "FWA",
      year: "2020",
      icon: <Trophy />,
    },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      <SEO
        title="About Ariful Islam | Valonix Studio"
        description="Learn about Ariful Islam (ArifulGFX), a Senior Product Designer & Developer with 13+ years of experience in branding, UI/UX, and web development."
        keywords="about ariful islam, valonix studio team, graphic designer bio, bangladesh web developer"
      />

      {/* HERO / BIO SECTION */}
      <Section className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={about}
                alt="Ariful Islam"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-2xl max-w-[160px] md:max-w-[200px]">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  4+
                </div>
                <div className="text-xs md:text-sm text-gray-300">
                  Years of Experience in Design Industry
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-[40px] -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-8 inline-block">
              About Me
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-display font-bold leading-[1.1] mb-8">
              I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Ariful Islam
              </span>
            </h1>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">
              Brand Identity Designer & UI Designer
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I transform complex problems into beautiful, intuitive, and
              effective digital products. With over a decade of experience in
              the creative industry, I have had the privilege of working with
              global brands and innovative startups to redefine their digital
              presence.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              My approach blends technical expertise with artistic vision,
              ensuring that every project is not only functional but also
              visually compelling and emotionally engaging.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Email
                  </p>
                  <p className="text-white font-medium">
                    arifulfolio@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Experience
                  </p>
                  <p className="text-white font-medium">4+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Location
                  </p>
                  <p className="text-white font-medium">
                    Jashore, Khulna, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Phone
                  </p>
                  <p className="text-white font-medium">+880 1938434733</p>
                </div>
              </div>
            </div>

            <a
              href={resume}
              download="Ariful_Islam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
                Download Resume <Download size={20} />
              </span>
            </a>
          </motion.div>
        </div>
      </Section>

      {/* RESUME / TIMELINE SECTION */}
      <Section className="bg-dark-800/30">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Experience</h2>
            </div>

            <div className="space-y-8 border-l-2 border-white/10 ml-6 pl-10 relative">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-dark-900 border-2 border-primary group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-bold text-gray-400">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Education</h2>
            </div>

            <div className="space-y-8 border-l-2 border-white/10 ml-6 pl-10 relative">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-dark-900 border-2 border-primary group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-bold text-gray-400">
                          {edu.school}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AWARDS SECTION */}
      {/* <Section>
         <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-4 inline-block">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Awards & <span className="text-primary">Achievements</span></h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
               <motion.div
                 key={award.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-dark-800 p-8 rounded-2xl border border-white/5 text-center hover:border-primary/50 transition-all group hover:-translate-y-2"
               >
                  <div className="w-16 h-16 rounded-full bg-dark-900 border border-white/10 mx-auto flex items-center justify-center text-gray-400 mb-6 group-hover:text-primary group-hover:border-primary group-hover:scale-110 transition-all">
                     <div className="transform scale-125">{award.icon}</div>
                  </div>
                  <div className="text-4xl font-display font-bold text-white/10 absolute top-4 right-4">{award.year}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{award.title}</h3>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">{award.org}</p>
               </motion.div>
            ))}
         </div>
      </Section> */}

      {/* CTA SECTION */}
      <Section className="pb-32">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white">
              Let's Work Together On Your Next Project
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              I'm currently available for freelance projects. Have a great idea?
              Let's discuss it and bring it to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Contact Me <ArrowRight />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
