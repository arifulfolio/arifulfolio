import React, { useState } from 'react';
import { Section } from '../components/Section';
import { BlogPost } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowUpRight, ArrowRight, Search, Tag, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended Mock Data
  const blogPosts: BlogPost[] = [
    { 
      id: 1, 
      title: 'The Future of UI Design: Glassmorphism & Neon', 
      date: 'Oct 15, 2023', 
      category: 'Design', 
      image: 'https://picsum.photos/seed/blog1/1200/800', 
      excerpt: 'Exploring the rising trend of glassmorphism combined with neon accents in modern user interface design. Learn how to create depth and atmosphere.', 
      author: 'Ariful Islam',
      readTime: '5 min read',
      tags: ['UI/UX', 'Trends', 'Glassmorphism']
    },
    { 
      id: 2, 
      title: 'React vs. Vue: Which Framework to Choose in 2024?', 
      date: 'Oct 10, 2023', 
      category: 'Development', 
      image: 'https://picsum.photos/seed/blog2/800/600', 
      excerpt: 'A comprehensive comparison of the two most popular JavaScript frameworks. We analyze performance, ecosystem, and learning curve.', 
      author: 'Ariful Islam',
      readTime: '8 min read',
      tags: ['Frontend', 'JavaScript', 'React']
    },
    { 
      id: 3, 
      title: 'Optimizing Website Performance for Core Web Vitals', 
      date: 'Sep 28, 2023', 
      category: 'SEO', 
      image: 'https://picsum.photos/seed/blog3/800/600', 
      excerpt: 'Key strategies to improve your website speed and ranking on search engines by mastering Google\'s Core Web Vitals metrics.', 
      author: 'Ariful Islam',
      readTime: '6 min read',
      tags: ['SEO', 'Performance', 'Web Vitals']
    },
    { 
      id: 4, 
      title: '10 Typography Rules Every Designer Should Know', 
      date: 'Sep 15, 2023', 
      category: 'Design', 
      image: 'https://picsum.photos/seed/blog4/800/600', 
      excerpt: 'Typography is the foundation of web design. Learn how to choose, pair, and scale fonts to create readable and beautiful interfaces.', 
      author: 'Ariful Islam',
      readTime: '4 min read',
      tags: ['Typography', 'Design System', 'Fonts']
    },
    { 
      id: 5, 
      title: 'Mastering CSS Grid: A Practical Guide', 
      date: 'Aug 22, 2023', 
      category: 'Development', 
      image: 'https://picsum.photos/seed/blog5/800/600', 
      excerpt: 'Stop struggling with layout. A deep dive into CSS Grid properties and how it revolutionizes 2-dimensional layout design for the web.', 
      author: 'Ariful Islam',
      readTime: '10 min read',
      tags: ['CSS', 'Grid', 'Layout']
    },
    { 
      id: 6, 
      title: 'The Psychology of Color in Brand Identity', 
      date: 'Aug 05, 2023', 
      category: 'Branding', 
      image: 'https://picsum.photos/seed/blog6/800/600', 
      excerpt: 'How color choices impact brand perception, user behavior, and conversion rates. Understanding color theory in digital marketing.', 
      author: 'Ariful Islam',
      readTime: '7 min read',
      tags: ['Branding', 'Psychology', 'Color Theory']
    },
    { 
        id: 7, 
        title: 'Building Accessible Web Forms', 
        date: 'Jul 12, 2023', 
        category: 'Development', 
        image: 'https://picsum.photos/seed/blog7/800/600', 
        excerpt: 'Accessibility is not optional. Learn how to create inclusive forms that work for everyone, including screen reader users.', 
        author: 'Ariful Islam',
        readTime: '6 min read',
        tags: ['A11y', 'HTML', 'Forms']
      },
  ];

  const categories = ['All', 'Design', 'Development', 'Branding', 'SEO'];

  // Filter Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const standardPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="pt-20 overflow-hidden">
      <SEO 
        title="Blog & Insights | ArifulFolio" 
        description="Read the latest articles on Web Design, Development, SEO, and Brand Strategy by Ariful Islam."
        keywords="design blog, web development tutorials, seo insights, ariful blog"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-dark-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-6 inline-block">Our Blog</span>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
               Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Insights</span> <br />
               & Tech News
             </h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
               Thoughts, tutorials, and insights on design, development, and digital trends. Stay updated with the latest in the creative world.
             </p>

             {/* Search & Filter Bar */}
             <div className="max-w-4xl mx-auto bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-full p-2 flex flex-col md:flex-row items-center gap-2">
                <div className="relative flex-1 w-full">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                      type="text" 
                      placeholder="Search articles..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent border-none text-white pl-12 pr-4 py-3 focus:outline-none placeholder:text-gray-500"
                   />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto p-1 no-scrollbar">
                   {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                           activeCategory === cat 
                           ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                           : 'bg-dark-900/50 text-gray-400 hover:text-white hover:bg-dark-900'
                        }`}
                      >
                         {cat}
                      </button>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && activeCategory === 'All' && !searchQuery && (
        <Section className="pt-0">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-dark-800 rounded-[40px] border border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-500 relative"
           >
              <div className="grid lg:grid-cols-2">
                 <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">Featured</span>
                    </div>
                 </div>
                 <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                       <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span>{featuredPost.date}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <span>{featuredPost.readTime}</span>
                       </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white group-hover:text-primary transition-colors">
                       <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                    </h2>
                    
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                       {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-primary">
                              <User size={18} />
                           </div>
                           <span className="font-bold text-sm">{featuredPost.author}</span>
                        </div>
                        
                        <Link to={`/blog/${featuredPost.id}`} className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all duration-300">
                           <ArrowUpRight size={24} />
                        </Link>
                    </div>
                 </div>
              </div>
           </motion.div>
        </Section>
      )}

      {/* BLOG GRID */}
      <Section className={featuredPost && activeCategory === 'All' && !searchQuery ? 'pt-0' : ''}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
              {(activeCategory === 'All' && !searchQuery ? standardPosts : filteredPosts).map((post, i) => (
                 <motion.div
                    layout
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-dark-800 rounded-[30px] border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,39,200,0.15)]"
                 >
                    <div className="aspect-[4/3] overflow-hidden relative">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-4 left-4 bg-dark-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <Tag size={12} className="text-primary" /> {post.category}
                       </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                       <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-primary"></span>
                          <span>{post.readTime}</span>
                       </div>
                       
                       <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                       </h3>
                       
                       <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                          {post.excerpt}
                       </p>
                       
                       <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                          <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:underline decoration-primary underline-offset-4">
                             Read Article <ArrowRight size={16} />
                          </Link>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </AnimatePresence>
        </div>
        
        {filteredPosts.length === 0 && (
           <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
           </div>
        )}

        {/* Pagination Mockup */}
        {filteredPosts.length > 0 && (
           <div className="flex justify-center mt-20 gap-2">
              <button className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg shadow-primary/20">1</button>
              <button className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 text-gray-400 font-bold flex items-center justify-center hover:bg-primary hover:text-white transition-colors">2</button>
              <button className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 text-gray-400 font-bold flex items-center justify-center hover:bg-primary hover:text-white transition-colors">3</button>
              <button className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 text-gray-400 font-bold flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><ArrowRight size={18}/></button>
           </div>
        )}
      </Section>

      {/* NEWSLETTER CTA */}
      <Section className="pb-32">
        <div className="bg-dark-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-dark-900 rounded-2xl border border-white/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-xl">
                 <Mail size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                 Subscribe to My Newsletter
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                 Get the latest articles, tutorials, and free resources delivered straight to your inbox. No spam, just quality content.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                 <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-dark-900 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                 />
                 <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-xl">
                    Subscribe Now
                 </button>
              </form>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;