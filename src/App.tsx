import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Target, 
  Zap, 
  Users, 
  BookOpen, 
  Mic2, 
  ArrowRight, 
  CheckCircle2,
  Layout,
  Figma,
  PenTool,
  Globe,
  Award,
  Lightbulb,
  Sun,
  Moon
} from 'lucide-react';
import { SITE_CONFIG } from './config';

// --- Theme Context ---

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

// --- Components ---

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-black font-bold text-xs italic">MB</div>
          <div className="font-serif italic text-xl font-bold tracking-tight">Mario Bee</div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider opacity-70">
          <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
          <a href="#projects" className="hover:text-brand-yellow transition-colors">Projects</a>
          <a href="#skills" className="hover:text-brand-yellow transition-colors">Skills</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-brand-yellow" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#contact" className="bg-brand-yellow text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-24 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <span className="inline-block px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6 border border-brand-yellow/20">
          Brand Designer & Design-Career Coach
        </span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-balance">
          Hello <span className="text-brand-yellow italic">Partner</span>, I'm {SITE_CONFIG.name}.
        </h1>
        <p className="text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed mb-10">
          Driven by the desire to inspire people through design thinking. I help businesses achieve clarity, growth, and increased profits.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href={SITE_CONFIG.socials.behance} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 group hover:scale-105 transition-transform"
          >
            Explore Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={SITE_CONFIG.socials.spotify} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-current/10 px-8 py-4 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            Listen to Podcast <Mic2 className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-brand-yellow/20 relative z-10">
          <img 
            src={SITE_CONFIG.assets.hero} 
            alt={SITE_CONFIG.name} 
            className="w-full h-full object-cover scale-110 -translate-x-10"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow rounded-full blur-[80px] opacity-20" />
      </motion.div>
    </div>
    {/* Background Glow */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px]" />
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-black/[0.02] dark:bg-black/30">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 flex justify-between items-end">
        <div>
          <p className="text-brand-yellow uppercase tracking-widest text-xs font-bold mb-2">Selected Works</p>
          <h2 className="font-serif text-4xl md:text-6xl">Case Studies</h2>
        </div>
        <div className="hidden md:block opacity-40 text-sm max-w-xs text-right">
          Strategic brand systems and creative solutions that drive results.
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Bonny Island Marathon",
            category: "Brand Identity System",
            desc: "A simple, modern, and distinct mark appropriate for a sporting event niche, communicating community and progress.",
            image: SITE_CONFIG.assets.projects.bonnyIsland,
            color: "bg-blue-500/10",
            textColor: "text-blue-500 dark:text-blue-400",
            link: SITE_CONFIG.links.bonnyIslandMarathon
          },
          {
            title: "Bookie Dashboard",
            category: "Product Design",
            desc: "A comprehensive dashboard design for a reading and library management platform, focusing on user goals and activity.",
            image: SITE_CONFIG.assets.projects.bookie,
            color: "bg-indigo-500/10",
            textColor: "text-indigo-500 dark:text-indigo-400",
            link: "#contact"
          },
          {
            title: "Lessons From My Daughters",
            category: "Product Design (Flash Cards)",
            desc: "Educational flash cards designed to inspire and teach, featuring vibrant illustrations and clear typography.",
            image: SITE_CONFIG.assets.projects.lessons,
            color: "bg-orange-500/10",
            textColor: "text-orange-500 dark:text-orange-400",
            link: SITE_CONFIG.links.lessonsFromMyDaughters
          },
          {
            title: "Lena Vieve Fashion",
            category: "Premium Brand Identity",
            desc: "A luxurious, inspiring, and classy identity for a fashion brand passionate about beautiful fabric piecing.",
            image: SITE_CONFIG.assets.projects.lenaVieve,
            color: "bg-pink-500/10",
            textColor: "text-pink-500 dark:text-pink-400",
            link: SITE_CONFIG.links.lenaVieveInstagram
          }
        ].map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => project.link.startsWith('http') ? window.open(project.link, '_blank') : window.location.hash = project.link}
          >
            <div className={`aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 ${project.color} border border-current/5`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] uppercase tracking-widest font-bold ${project.textColor} mb-2 block`}>{project.category}</span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed max-w-md">{project.desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
        >
          View All Projects & Case Studies <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Hard Skills</h2>
          <p className="opacity-50 leading-relaxed mb-8">
            Technical and measurable skills visible across my portfolio projects.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">Design Production</h4>
              <div className="flex flex-wrap gap-2">
                {["Graphic Design", "Social Media", "Posters", "Advertising", "Book Covers"].map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-black/[0.02] dark:bg-white/5 rounded-full text-xs font-medium border border-current/10">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">Digital Design</h4>
              <div className="flex flex-wrap gap-2">
                {["Dashboard UI", "Web Systems", "Figma", "Prototyping"].map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-black/[0.02] dark:bg-white/5 rounded-full text-xs font-medium border border-current/10">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "Strategic Thinking",
              desc: "Research-driven and strategy-inspired design solutions.",
              icon: Target
            },
            {
              title: "Creative Leadership",
              desc: (
                <>
                  Founder of <a href={SITE_CONFIG.links.mbCreativeStudio} target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:underline">MB Creative Studio</a> and Co-founder of <a href={SITE_CONFIG.links.petelDigital} target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:underline">Petel Digital</a>.
                </>
              ),
              icon: Award
            },
            {
              title: "Mentorship",
              desc: "Coaching aspiring designers and building creative communities.",
              icon: BookOpen
            },
            {
              title: "Collaboration",
              desc: "Working with other creators to deliver impactful client outcomes.",
              icon: Users
            }
          ].map((cat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-black/[0.02] dark:bg-white/5 border border-current/10 hover:bg-black/10 dark:hover:bg-white/[0.08] transition-colors">
              <cat.icon className="w-8 h-8 text-brand-yellow mb-6" />
              <h3 className="font-bold text-xl mb-3">{cat.title}</h3>
              <p className="opacity-50 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const USP = () => (
  <section id="usp" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">The Mario Bee Edge</h2>
        <p className="text-brand-yellow uppercase tracking-widest text-xs font-bold">Unique Selling Propositions</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Design + Coaching Hybrid",
            desc: "I am not just a designer. I combine brand design, strategy, and coaching—a rare positioning that delivers deeper value.",
            icon: Lightbulb
          },
          {
            title: "Creative Capacity Builder",
            desc: "My focus is on building creative capacity for clients, helping businesses understand branding, not just buy design.",
            icon: Users
          },
          {
            title: "Multi-Layer Ecosystem",
            desc: "Operating across studio, podcast, and mentoring positions me as a design leader and service provider.",
            icon: Globe
          }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-black/[0.02] dark:bg-white/5 border border-current/10 relative overflow-hidden group hover:bg-black/10 dark:hover:bg-white/[0.08] transition-colors">
            <div className="relative z-10">
              <item.icon className="w-10 h-10 mb-6 text-brand-yellow group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-60 leading-relaxed">{item.desc}</p>
            </div>
            {/* Abstract background shape */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-yellow/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-24 px-6 border-t border-current/5 bg-black/[0.02] dark:bg-black/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">You're caught up <span className="text-brand-yellow italic">partner!</span></h2>
          <div className="flex items-center gap-6 mb-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-yellow/20">
              <img 
                src={SITE_CONFIG.assets.footer} 
                alt={SITE_CONFIG.name} 
                className="w-full h-full object-cover scale-150"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xl opacity-50 max-w-md">
              Good design is good business. I'll be delighted to help improve your visuals and meet your business goals.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Contact</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-lg font-bold hover:text-brand-yellow transition-colors block">{SITE_CONFIG.email}</a>
              <a href={SITE_CONFIG.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-brand-yellow transition-colors block">WhatsApp Me</a>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Social Links</p>
              <div className="flex flex-col gap-2 font-bold">
                <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">Twitter</a>
                <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">Instagram</a>
                <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass p-10 rounded-[2.5rem]">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
              <input type="text" className="w-full bg-black/[0.02] dark:bg-white/5 border border-current/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
              <input type="email" className="w-full bg-black/[0.02] dark:bg-white/5 border border-current/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Project Details</label>
              <textarea className="w-full bg-black/[0.02] dark:bg-white/5 border border-current/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-colors h-32" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full bg-brand-yellow text-black py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,204,0,0.2)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-current/5 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center text-black font-bold text-[10px] italic">MB</div>
          <div className="font-serif italic text-lg font-bold">Mario Bee</div>
        </div>
        <p className="text-xs opacity-20 font-medium tracking-widest uppercase">© 2026 MB Creative Studio • A Hive of Creativity</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="font-sans antialiased min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <USP />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}


