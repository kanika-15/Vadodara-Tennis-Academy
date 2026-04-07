import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Trophy, Users, Star, Award, ShieldCheck, Target, Calendar, Play, Activity, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

const SectionHeading = ({ title, subtitle, align = 'center' }: { title: string, subtitle?: string, align?: 'left' | 'center' }) => (
  <div className={cn("mb-12 md:mb-16", align === 'center' ? "text-center" : "text-left")}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-clay-orange font-semibold tracking-wider uppercase text-sm mb-3 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-heading font-bold text-academy-black"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Sections ---

const slides = [
  {
    title: "Unleash Your True Potential",
    subtitle: "Premier Tennis Academy in Vadodara",
    image: "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?q=80&w=2000&auto=format&fit=crop",
    cta: "Start Your Journey"
  },
  {
    title: "Master Every Shot",
    subtitle: "Expert Coaching for All Levels",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2000&auto=format&fit=crop",
    cta: "Explore Our Programs"
  },
  {
    title: "Compete & Conquer",
    subtitle: "Tournament-Ready Training",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2000&auto=format&fit=crop",
    cta: "View Pro Squad"
  }
];

const TennisBall = () => (
  <motion.div
    animate={{ 
      y: [0, -40, 0],
      rotate: [0, 360]
    }}
    transition={{ 
      y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 6, repeat: Infinity, ease: "linear" }
    }}
    className="absolute z-30 w-16 h-16 rounded-full bg-[#E1FF00] shadow-[0_0_40px_rgba(225,255,0,0.5)] opacity-90 hidden lg:block"
    style={{
      backgroundImage: 'radial-gradient(circle at 30% 30%, #f4ff7a, #E1FF00)',
      boxShadow: 'inset -4px -4px 10px rgba(0,0,0,0.2), 0 0 30px rgba(225,255,0,0.6)'
    }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
      <path d="M 20 50 A 30 30 0 0 0 50 20" fill="none" stroke="black" strokeWidth="6" />
      <path d="M 80 50 A 30 30 0 0 1 50 80" fill="none" stroke="black" strokeWidth="6" />
    </svg>
  </motion.div>
);

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden bg-academy-black pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Tennis" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-academy-black via-academy-black/60 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <TennisBall />

      <div className="container mx-auto px-4 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="text-clay-orange font-medium tracking-wider uppercase text-sm mb-6 block">
              {slides[currentSlide].subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-white leading-[1.05] mb-8 tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-academy-black font-bold rounded-full transition-all hover:scale-105">
              {slides[currentSlide].cta}
              <ArrowUpRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function QuickIntro() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "2000+", label: "Players Trained" },
    { value: "50+", label: "Tournament Wins" }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-academy-black mb-6 leading-tight">
              Building Champions On and Off the Court
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Vadodara Tennis Academy, we believe in a holistic approach to tennis training. Our methodology combines rigorous physical conditioning, technical refinement, and mental toughness.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you're picking up a racket for the first time or preparing for national tournaments, our state-of-the-art facilities and expert coaches provide the perfect ecosystem for your growth.
            </p>
            <Link to="/about" className="text-court-green font-semibold flex items-center gap-2 hover:text-clay-orange transition-colors">
              Read our story <ChevronRight size={16} />
            </Link>
          </motion.div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-center",
                  index === 2 ? "sm:col-span-2 sm:flex-row sm:items-center sm:justify-start sm:gap-6" : ""
                )}
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-clay-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      title: "Beginner Clinics",
      desc: "Learn the fundamentals, proper grip, and basic strokes in a fun environment.",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop",
      color: "bg-blue-500"
    },
    {
      title: "Intermediate",
      desc: "Refine your technique, develop match strategy, and improve consistency.",
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=800&auto=format&fit=crop",
      color: "bg-court-green"
    },
    {
      title: "Advanced / Pro",
      desc: "High-intensity drills, tournament preparation, and advanced tactical play.",
      image: "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?q=80&w=800&auto=format&fit=crop",
      color: "bg-clay-orange"
    },
    {
      title: "Kids (U10)",
      desc: "Specialized equipment and courts to make learning tennis easy and enjoyable.",
      image: "https://images.unsplash.com/photo-1628333334355-11367f80333d?q=80&w=800&auto=format&fit=crop",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-24 bg-academy-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Training Programs" subtitle="Find Your Level" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={cn("absolute top-4 right-4 w-3 h-3 rounded-full z-20 shadow-sm", prog.color)} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-3">{prog.title}</h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">{prog.desc}</p>
                <Link to="/programs" className="inline-flex items-center text-sm font-semibold text-court-green group-hover:text-clay-orange transition-colors">
                  Explore Program <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: Award, title: "Certified Coaches", desc: "ITF and AITA certified professionals with years of playing and coaching experience." },
    { icon: Target, title: "Pro-Level Courts", desc: "6 synthetic hard courts and 2 clay courts maintained to international standards." },
    { icon: ShieldCheck, title: "Structured Training", desc: "Periodized training plans focusing on technical, tactical, physical, and mental aspects." },
    { icon: Trophy, title: "Tournament Exposure", desc: "Regular in-house tournaments and guided travel for state and national ranking events." }
  ];

  return (
    <section className="py-24 bg-academy-black text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-court-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-clay-orange/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <span className="text-clay-orange font-semibold tracking-wider uppercase text-sm mb-3 block">The Advantage</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Why Train With Us?</h2>
              <p className="text-gray-400 text-lg mb-8">
                We provide an environment that breeds excellence. Everything from our court surfaces to our fitness protocols is designed for peak performance.
              </p>
              <Link to="/facilities" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10">
                Tour Facilities
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-court-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-clay-orange/20">
                  <feature.icon size={28} className="text-court-green group-hover:text-clay-orange transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const achievements = [
    { year: "2025", title: "State Champions", category: "U-16 Boys", image: "https://images.unsplash.com/photo-1574270981930-101150242588?q=80&w=800&auto=format&fit=crop" },
    { year: "2024", title: "National Finalist", category: "U-18 Girls", image: "https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=800&auto=format&fit=crop" },
    { year: "2024", title: "Best Academy Award", category: "Gujarat Tennis Assoc.", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop" },
    { year: "2023", title: "ITF Junior Winner", category: "J30 Singles", image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Hall of Fame" subtitle="Recent Achievements" align="left" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-academy-black/90 via-academy-black/20 to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <div className="text-clay-orange font-bold text-sm tracking-wider uppercase mb-2">{item.year}</div>
                  <h3 className="text-2xl font-heading font-bold text-white leading-tight mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-sm font-medium">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Desai",
      role: "Parent of U-12 Player",
      text: "The transformation in my son's game over the last year has been incredible. The coaches here don't just teach tennis; they build character and discipline.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      role: "Adult Beginner",
      text: "I started playing at 30, and the beginner clinics made it so approachable. The community is welcoming, and the facilities are top-notch.",
      rating: 5
    },
    {
      name: "Karan Shah",
      role: "State Level Player",
      text: "The high-performance squad training here is unmatched in Vadodara. The fitness protocols and tactical sessions have given me a real edge in tournaments.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="What Players Say" subtitle="Testimonials" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-clay-orange text-clay-orange" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-clay-orange/10 flex items-center justify-center font-heading font-bold text-clay-orange text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-academy-black">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-court-green z-0" />
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Ready to Step on the Court?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join Vadodara's premier tennis academy today. First trial session is on us.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              to="/contact" 
              className="relative inline-flex items-center justify-center px-10 py-5 bg-clay-orange text-white text-lg font-bold rounded-full overflow-hidden group shadow-xl shadow-clay-orange/30"
            >
              {/* Pulse effect */}
              <span className="absolute inset-0 w-full h-full rounded-full animate-ping opacity-20 bg-white"></span>
              <span className="relative flex items-center gap-2">
                Book Your Trial Session Today
                <Calendar size={20} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <QuickIntro />
      <ProgramsSection />
      <WhyChooseUs />
      <Achievements />
      <Testimonials />
      <CTASection />
    </div>
  );
}
