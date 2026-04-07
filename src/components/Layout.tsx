import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Schedule & Pricing', path: '/schedule' },
  { name: 'Contact', path: '/contact' },
];

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-clay-orange text-white text-xs md:text-sm py-2 px-4 text-center font-medium">
        🎾 Upcoming: Gujarat State Ranking Tournament (U-14 & U-16) - Registrations open till 15th May. <Link to="/contact" className="underline hover:text-academy-black transition-colors ml-2">Register Now</Link>
      </div>

      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:flex bg-academy-black text-white/80 py-2 px-6 text-sm justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2"><MapPin size={14} className="text-clay-orange" /> Vadodara, Gujarat</span>
          <span className="flex items-center gap-2"><Phone size={14} className="text-clay-orange" /> +91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-2"><Mail size={14} className="text-clay-orange" /> info@vadodaratennis.com</span>
          <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
            <a href="#" className="hover:text-clay-orange transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-clay-orange transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-clay-orange transition-colors"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
            : "bg-white py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-court-green flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-clay-orange transition-colors">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-academy-black uppercase tracking-wide">Vadodara</span>
              <span className="font-heading font-semibold text-sm leading-none text-court-green uppercase tracking-widest">Tennis Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all relative group",
                  location.pathname === link.path 
                    ? "text-court-green" 
                    : "text-gray-600 hover:text-academy-black"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-court-green rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-clay-orange rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link 
              to="/contact" 
              className="bg-court-green hover:bg-academy-black text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Trial
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-academy-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    location.pathname === link.path 
                      ? "bg-court-green/10 text-court-green" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-court-green text-white px-4 py-3 rounded-lg font-medium text-center mt-4"
              >
                Book Trial Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-academy-black/80 backdrop-blur-md border-t border-white/10 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-court-green flex items-center justify-center text-white font-heading font-bold text-xl">
                  V
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl leading-none text-white uppercase tracking-wide">Vadodara</span>
                  <span className="font-heading font-semibold text-sm leading-none text-court-green uppercase tracking-widest">Tennis Academy</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Elevating tennis in Gujarat. Professional coaching, world-class facilities, and a passion for the game.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay-orange transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay-orange transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay-orange transition-colors"><Twitter size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.slice(0, 5).map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-clay-orange transition-colors text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-court-green"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><Link to="/programs" className="text-gray-400 hover:text-clay-orange transition-colors text-sm">Beginner Clinics</Link></li>
                <li><Link to="/programs" className="text-gray-400 hover:text-clay-orange transition-colors text-sm">Intermediate Training</Link></li>
                <li><Link to="/programs" className="text-gray-400 hover:text-clay-orange transition-colors text-sm">Advanced / Pro Squad</Link></li>
                <li><Link to="/programs" className="text-gray-400 hover:text-clay-orange transition-colors text-sm">Kids Under 10 (U10)</Link></li>
                <li><Link to="/programs" className="text-gray-400 hover:text-clay-orange transition-colors text-sm">Private Coaching</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="text-gray-400 text-sm">
                  <div className="w-full h-32 rounded-lg overflow-hidden mb-2 shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.631853466106!2d73.17646697523908!3d22.30197797969399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8677e5e1e47%3A0x6d9e0f6c2f5d9d7!2sAlkapuri%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712485600000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Academy Location"
                    ></iframe>
                  </div>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-court-green shrink-0" />
                    123 Sports Complex Road, Alkapuri, Vadodara
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone size={18} className="text-court-green shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail size={18} className="text-court-green shrink-0" />
                  <span>info@vadodaratennis.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Vadodara Tennis Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
