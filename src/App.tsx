import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
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
  Quote,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { SITE_CONFIG } from './config';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full p-3 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center overflow-hidden p-1.5">
            <img 
              src={SITE_CONFIG.assets.logo} 
              alt={SITE_CONFIG.name} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider opacity-70">
          <a href="#hero" className="hover:text-brand-yellow transition-colors">Home</a>
          <a href="#projects" className="hover:text-brand-yellow transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-brand-yellow transition-colors">Testimonials</a>
          <a href="#skills" className="hover:text-brand-yellow transition-colors">Skills</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a href="#contact" className="hidden sm:block bg-brand-yellow text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-6 flex flex-col gap-6 md:hidden"
            >
              <a href="#hero" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Home</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Projects</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Testimonials</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Skills</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-center">Hire Me</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    "good design is critical-thinking made visual.",
    "the tool is only an extension of the mind.",
    "design is intelligence having fun."
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Frame - Moved to top on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative block order-first lg:order-last"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Radiating Waves */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.95, opacity: 0.5 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut"
                }}
                className="absolute inset-0 border border-brand-yellow/20 rounded-[2.5rem]"
              />
            ))}
          </div>

          <motion.div 
            className="aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-brand-yellow/30 relative z-10 group cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.img 
              src={SITE_CONFIG.assets.hero} 
              alt={SITE_CONFIG.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Mobile/Tablet Hero Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:hidden bg-gradient-to-t from-black/90 via-black/20 to-transparent">
              <span className="inline-block w-fit px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-4 border border-brand-yellow/20">
                {SITE_CONFIG.title}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl leading-[0.9] mb-4 text-balance text-white">
                Hello <span className="text-brand-yellow italic">Partner</span>, I'm {SITE_CONFIG.name}.
              </h1>
            </div>

            {/* Desktop Glassmorphism Overlay */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:flex hidden items-center justify-center p-12 text-center"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              <div className="glass p-8 rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden">
                <Quote className="w-8 h-8 text-brand-yellow mb-4 mx-auto opacity-50" />
                <p className="text-xl md:text-2xl font-serif italic text-white leading-tight">
                  "{quotes[quoteIndex]}"
                </p>
                {/* Subtle reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none lg:block hidden group-hover:opacity-0 transition-opacity duration-500" />
          </motion.div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow rounded-full blur-[80px] opacity-20" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl order-last lg:order-first"
        >
          <span className="hidden lg:inline-block px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6 border border-brand-yellow/20">
            {SITE_CONFIG.title}
          </span>
          <h1 className="hidden lg:block font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-balance">
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
              className="border border-current/10 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              Listen to Podcast <Mic2 className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px]" />
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-zinc-900/40 transition-colors duration-500">
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
            textColor: "text-blue-400",
            link: SITE_CONFIG.links.bonnyIslandMarathon
          },
          {
            title: "World-class AI Product",
            category: "Product Design",
            desc: "A comprehensive dashboard design for a reading and library management platform, focusing on user goals and activity.",
            image: SITE_CONFIG.assets.projects.bookie,
            color: "bg-indigo-500/10",
            textColor: "text-indigo-400",
            link: SITE_CONFIG.links.nobleAi
          },
          {
            title: "Lessons From My Daughters",
            category: "Product Design (Flash Cards)",
            desc: "Educational flash cards designed to inspire and teach, featuring vibrant illustrations and clear typography.",
            image: SITE_CONFIG.assets.projects.lessons,
            color: "bg-orange-500/10",
            textColor: "text-orange-400",
            link: SITE_CONFIG.links.lessonsFromMyDaughters
          },
          {
            title: "Lena Vieve Fashion",
            category: "Premium Brand Identity",
            desc: "A luxurious, inspiring, and classy identity for a fashion brand passionate about beautiful fabric piecing.",
            image: SITE_CONFIG.assets.projects.lenaVieve,
            color: "bg-pink-500/10",
            textColor: "text-pink-400",
            link: SITE_CONFIG.links.lenaVieveInstagram
          }
        ].map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => project.link.startsWith('http') ? window.open(project.link, '_blank') : window.location.hash = project.link}
          >
            <div className={`aspect-[16/10] rounded-3xl overflow-hidden mb-6 ${project.color} border border-current/5`}>
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
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Skill Stack</h2>
          <p className="opacity-50 leading-relaxed mb-8">
            Technical and measurable skills visible across my portfolio projects.
          </p>
          <div className="space-y-4">
            <div className="group cursor-default border-b border-current/5 pb-4 last:border-0">
              <h4 className="text-brand-yellow text-xs font-bold uppercase tracking-widest flex items-center justify-between transition-colors group-hover:text-brand-yellow/80">
                Brand & Design Skills
                <ChevronDown className="w-3 h-3 opacity-30 group-hover:rotate-180 transition-transform" />
              </h4>
              <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[
                    "Brand Identity Design", 
                    "Logo Design", 
                    "Visual Identity Systems", 
                    "Brand Guidelines / Style Guides", 
                    "Brand Asset Development"
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-current/10">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="group cursor-default border-b border-current/5 pb-4 last:border-0">
              <h4 className="text-brand-yellow text-xs font-bold uppercase tracking-widest flex items-center justify-between transition-colors group-hover:text-brand-yellow/80">
                Design Production
                <ChevronDown className="w-3 h-3 opacity-30 group-hover:rotate-180 transition-transform" />
              </h4>
              <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[
                    "Graphic Design", 
                    "Social Media Design", 
                    "Poster Design", 
                    "Advertising Design", 
                    "Book Cover Design", 
                    "Product Design (flashcards, digital products)"
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-current/10">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="group cursor-default border-b border-current/5 pb-4 last:border-0">
              <h4 className="text-brand-yellow text-xs font-bold uppercase tracking-widest flex items-center justify-between transition-colors group-hover:text-brand-yellow/80">
                Digital Design
                <ChevronDown className="w-3 h-3 opacity-30 group-hover:rotate-180 transition-transform" />
              </h4>
              <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[
                    "Dashboard UI design", 
                    "Web design systems", 
                    "Figma prototyping"
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-current/10">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="group cursor-default border-b border-current/5 pb-4 last:border-0">
              <h4 className="text-brand-yellow text-xs font-bold uppercase tracking-widest flex items-center justify-between transition-colors group-hover:text-brand-yellow/80">
                Marketing Design
                <ChevronDown className="w-3 h-3 opacity-30 group-hover:rotate-180 transition-transform" />
              </h4>
              <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[
                    "Social media campaigns", 
                    "Visual storytelling for marketing", 
                    "Ad creative direction"
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-current/10">{s}</span>
                  ))}
                </div>
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
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-current/10 hover:bg-white/[0.08] transition-colors">
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
        <h2 className="font-serif text-4xl md:text-5xl mb-4">The <span className="italic text-brand-yellow">Bee</span> Edge</h2>
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
          <div key={i} className="p-10 rounded-3xl bg-white/5 border border-current/10 relative overflow-hidden group hover:bg-white/[0.08] transition-colors">
            <div className="relative z-10">
              <item.icon className="w-10 h-10 mb-6 text-brand-yellow group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-60 leading-relaxed">{item.desc}</p>
            </div>
            {/* Abstract background shape */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const baseTestimonials = [
    {
      name: "Wereloo Kingston",
      role: "Climate & Environmental Policy Advocate",
      date: "May 10, 2025",
      content: "I rarely write recommendations, but for Mario, it would be an injustice not to. He is one of the most creative, intelligent, and dependable people I’ve worked with. From concept to execution, he brings ideas, strategy, and clarity. He’s a rare mix of skill, heart, and imagination.",
      connection: "Worked with Mario on the same team"
    },
    {
      name: "Tawanda Bwerudza",
      role: "Author & Engineer @Kuona Engineering",
      date: "April 30, 2025",
      content: "Mario was responsible for developing the brand identity of a product that was just coming out of the concept phase. Mario's way of working is highly collaborative, and his communication throughout projects is clear and concise. He is a creative in the true sense of the word.",
      connection: "Mario’s client"
    },
    {
      name: "Roseline Chidinma Nwachukwu",
      role: "Technical Buyer - Project Control Specialist",
      date: "April 21, 2025",
      content: "I have had the pleasure of working with Mario on my branding project (PEMA). Mario possesses a unique ability to process complex brand identities into organized, visually amazing designs. His attention to details, creative vision, and passion for design make him an invaluable asset.",
      connection: "Mario’s client"
    },
    {
      name: "Ime Uboh",
      role: "UI/UX Designer | UX Researcher",
      date: "October 1, 2023",
      content: "I've known Mario for more than 2 years, and he's really passionate about his work. When we collaborate, it's always amazing because he gives it his all.",
      connection: "Worked with Mario on the same team"
    },
    {
      name: "Chukwunomso Chukwudubem",
      role: "Design Consultant | Products | Web3",
      date: "October 3, 2022",
      content: "Excellent at identity design. He leverages on storytelling to communicate ethos and practices of brands- through compelling visuals.",
      connection: "Worked with Mario but they were at different companies"
    },
    {
      name: "Nwamaka Akah",
      role: "Product design | Design systems",
      date: "October 3, 2022",
      content: "Mario is an awesome team player, with great leadership skills. While working with him, it was hard to miss how much thought he gives to his creative work and it reflects in the quality of his work.",
      connection: "Worked with Mario on the same team"
    }
  ];

  // Triple the items for infinite scroll
  const displayTestimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
      setIsReady(true);
      // Initial active index calculation
      updateActiveIndex();
    }
  }, []);

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    
    // Calculate the center of the viewport relative to the scroll content
    const centerPoint = scrollLeft + containerWidth / 2;
    
    // Find which card is closest to the centerPoint
    const cards = container.children;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(centerPoint - cardCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    
    setActiveIndex(closestIndex % baseTestimonials.length);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = singleSetWidth;
    } else if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = singleSetWidth;
    }
    
    updateActiveIndex();
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.5 
        : scrollLeft + clientWidth * 0.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-zinc-900/40 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16">
        <div className="text-center">
          <p className="text-brand-yellow uppercase tracking-widest text-xs font-bold mb-2">words on marbles</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-4">Recommendations</h2>
          <p className="opacity-50 max-w-2xl mx-auto">What partners and clients say about working with me.</p>
        </div>
      </div>
      
      <div className={`relative group/carousel transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/80 border border-current/5 shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 hidden md:flex items-center justify-center"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/80 border border-current/5 shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 hidden md:flex items-center justify-center"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-[10vw] md:px-[20vw] lg:px-[30vw] pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayTestimonials.map((t, i) => {
            const isActive = (i % baseTestimonials.length) === activeIndex;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.4, 
                  scale: isActive ? 1 : 0.9 
                }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] snap-center"
              >
                <div className={`p-6 md:p-12 rounded-3xl bg-white/5 border flex flex-col h-full transition-all duration-500 relative overflow-hidden ${
                  isActive ? 'border-brand-yellow/40 shadow-2xl shadow-brand-yellow/5' : 'border-current/5'
                }`}>
                  <Quote className={`w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-8 transition-all duration-500 ${
                    isActive ? 'text-brand-yellow' : 'text-brand-yellow/20'
                  }`} />
                  <p className={`text-base md:text-xl leading-relaxed text-white/90 mb-3 md:mb-10 flex-grow italic transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40'
                  }`}>
                    "{t.content}"
                  </p>
                  <div className="pt-3 md:pt-8 border-t border-current/5">
                    <h4 className="font-bold text-base md:text-xl mb-1">{t.name}</h4>
                    <p className="text-[10px] md:text-xs text-brand-yellow uppercase tracking-wider font-bold mb-1 md:mb-2">{t.connection}</p>
                    <p className="text-xs md:text-sm opacity-50 leading-tight">{t.role}</p>
                    <p className="text-[8px] md:text-[10px] opacity-30 mt-3 md:mt-4">{t.date}</p>
                  </div>
                  
                  {/* Decorative background element */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl transition-colors duration-500 ${
                    isActive ? 'bg-brand-yellow/15' : 'bg-brand-yellow/5'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Scroll Indicator / Hint */}
        <div className="flex justify-center gap-2 mt-4">
          {baseTestimonials.map((_, dot) => (
            <div 
              key={dot} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                dot === activeIndex ? 'bg-brand-yellow w-4' : 'bg-current/10'
              }`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="py-24 px-6 border-t border-current/5 bg-black/50 transition-colors duration-500">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">You're caught up <span className="text-brand-yellow italic">partner!</span></h2>
          <div className="flex items-center gap-6 mb-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-yellow/20">
              <img 
                src={SITE_CONFIG.assets.footer} 
                alt={SITE_CONFIG.name} 
                className="w-full h-full object-cover"
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
        
        <div className="glass p-6 sm:p-10 rounded-3xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-current/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-current/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Project Details</label>
              <textarea className="w-full bg-white/5 border border-current/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-yellow/50 transition-colors h-32" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full bg-brand-yellow text-black py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,204,0,0.2)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-current/5 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center overflow-hidden p-1">
            <img 
              src={SITE_CONFIG.assets.logo} 
              alt={SITE_CONFIG.name} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-serif text-lg font-bold tracking-tight">Mario Bee</span>
        </div>
        <p className="text-xs opacity-20 font-medium tracking-widest uppercase">© 2026 MB Creative • A Hive of Creativity</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="font-sans antialiased min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Testimonials />
        <Skills />
        <USP />
      </main>
      <Footer />
    </div>
  );
}


