import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogDetails = () => {
  const { id } = useParams();

  // Mock Data (In a real app, fetch based on ID)
  const post = {
    id: id,
    title: "The Future of UI Design: Glassmorphism and Beyond",
    date: "Oct 15, 2023",
    category: "Design",
    author: "Roy C. Jones",
    authorRole: "Senior Product Designer",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    readTime: "5 min read",
    image: `https://picsum.photos/seed/blog${id}/1200/600`,
    tags: ["UI Design", "Trends", "CSS", "Web Design"],
    content: `
      <p class="lead text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">Glassmorphism is a trend that has been gaining popularity in user interface design. It is characterized by a translucent, frosted-glass effect, often used on cards and other UI elements.</p>
      
      <p class="mb-8">The style is achieved by using a background blur on an element with a semi-transparent background color. This creates a sense of depth and hierarchy, as the blurred background suggests that the element is floating above the content behind it.</p>
      
      <h3 class="text-3xl font-display font-bold text-white mt-12 mb-6">Why is it popular?</h3>
      <p class="mb-8">Glassmorphism offers a modern and sleek look that can make an interface feel more lightweight and airy. It also allows for more creativity with background colors and gradients, as they can shine through the frosted glass elements.</p>
      
      <ul class="list-none mb-10 space-y-4 text-gray-300 bg-dark-800/50 p-8 rounded-2xl border border-white/5">
         <li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">✓</span> <div><strong>Visual Hierarchy:</strong> It helps establish depth.</div></li>
         <li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">✓</span> <div><strong>Aesthetics:</strong> Looks modern and premium.</div></li>
         <li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">✓</span> <div><strong>Focus:</strong> Draws attention to specific elements.</div></li>
      </ul>

      <h3 class="text-3xl font-display font-bold text-white mt-12 mb-6">How to implement it?</h3>
      <p class="mb-8">In CSS, you can achieve this effect using the <code>backdrop-filter</code> property. For example:</p>
      
      <div class="bg-[#1e1e2e] p-6 rounded-xl border border-white/10 font-mono text-sm mb-10 overflow-x-auto shadow-2xl relative">
        <div class="absolute top-4 right-4 flex gap-2">
           <div class="w-3 h-3 rounded-full bg-red-500"></div>
           <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
           <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre><code class="text-blue-400">.glass-card {</code><br/><code class="text-purple-400 ml-4">background: rgba(255, 255, 255, 0.1);</code><br/><code class="text-purple-400 ml-4">backdrop-filter: blur(10px);</code><br/><code class="text-purple-400 ml-4">border: 1px solid rgba(255, 255, 255, 0.2);</code><br/><code class="text-blue-400">}</code></pre>
      </div>

      <p>As we move forward, we can expect to see this trend evolving and merging with other styles like Neumorphism and Material Design to create even more immersive experiences.</p>
    `
  };

  const relatedPosts = [
     { id: 2, title: "React vs. Vue: The Ultimate Comparison", date: "Oct 10, 2023", image: "https://picsum.photos/seed/blog2/800/600" },
     { id: 3, title: "10 Typography Rules for Web Design", date: "Sep 15, 2023", image: "https://picsum.photos/seed/blog4/800/600" }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-10 group">
           <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <ArrowLeft size={16} />
           </div>
           Back to Blog
        </Link>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
              <div className="flex items-center justify-center gap-4 mb-8">
                 <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold uppercase tracking-wider">
                    {post.category}
                 </span>
                 <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Clock size={16} /> {post.readTime}
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                 {post.title}
              </h1>

              <div className="flex items-center justify-center gap-8 text-gray-400 text-sm border-t border-b border-white/5 py-6 max-w-2xl mx-auto">
                 <div className="flex items-center gap-3">
                    <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    <div className="text-left">
                       <p className="text-white font-bold leading-none">{post.author}</p>
                       <p className="text-xs mt-1">{post.authorRole}</p>
                    </div>
                 </div>
                 <div className="h-8 w-[1px] bg-white/10"></div>
                 <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{post.date}</span>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto rounded-[40px] overflow-hidden aspect-[21/9] border border-white/10 mb-20 shadow-2xl relative group"
        >
           <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
           {/* Sidebar (Share) */}
           <div className="lg:col-span-2 hidden lg:block">
              <div className="sticky top-32 flex flex-col gap-4 items-center">
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 vertical-lr transform -rotate-180">Share Article</p>
                 <a href="#" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"><Facebook size={20} /></a>
                 <a href="#" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"><Twitter size={20} /></a>
                 <a href="#" className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"><Linkedin size={20} /></a>
                 <div className="h-20 w-[1px] bg-white/10 mt-4"></div>
              </div>
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8">
              <div 
                 className="prose prose-invert prose-lg max-w-none text-gray-300 mb-16 prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:text-white prose-blockquote:border-primary prose-blockquote:bg-dark-800/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-img:rounded-3xl"
                 dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-16">
                 {post.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-dark-800 rounded-full text-sm font-bold text-gray-400 border border-white/5 hover:border-primary/50 hover:text-white transition-colors cursor-pointer">
                       #{tag}
                    </span>
                 ))}
              </div>

              {/* Author Box */}
              <div className="bg-dark-800 rounded-[30px] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                 <img src={post.authorAvatar} alt={post.author} className="w-24 h-24 rounded-full object-cover border-4 border-dark-900 shadow-xl" />
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{post.author}</h3>
                    <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">{post.authorRole}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                       Senior designer with a passion for creating beautiful and functional digital experiences. Always exploring new trends and technologies.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                       <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                       <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
                       <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={18} /></a>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-6xl mx-auto mt-24 pt-16 border-t border-white/5">
           <h2 className="text-3xl font-display font-bold mb-10">You Might Also Like</h2>
           <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(rp => (
                 <Link key={rp.id} to={`/blog/${rp.id}`} className="group bg-dark-800 rounded-[24px] overflow-hidden border border-white/5 hover:border-primary/50 transition-all">
                    <div className="aspect-[2/1] overflow-hidden">
                       <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-8">
                       <p className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2">
                          <Calendar size={12} className="text-primary" /> {rp.date}
                       </p>
                       <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{rp.title}</h3>
                    </div>
                 </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;