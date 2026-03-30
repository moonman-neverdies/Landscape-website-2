/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Quote,
  MapPin,
  Calendar,
  PenTool,
  Hammer,
  Leaf,
  Menu,
  X,
  ShieldCheck,
  Award,
  BadgeCheck,
  Facebook,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  location: string;
}

interface GalleryItem {
  id: number;
  before: string;
  after: string;
  suburb: string;
  title: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Data ---
const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Michael R.",
    date: "March 12, 2026",
    rating: 5,
    text: "Transformed our dusty backyard into a desert oasis. The travertine work is flawless and the lighting at night is magical. Highly recommend for any Phoenix homeowner.",
    location: "Scottsdale, AZ"
  },
  {
    id: 2,
    name: "Sarah L.",
    date: "February 28, 2026",
    rating: 5,
    text: "Professional from start to finish. They handled the HOA approvals and the design process was so easy. Our new fire pit area is where we spend all our evenings now.",
    location: "Gilbert, AZ"
  },
  {
    id: 3,
    name: "David W.",
    date: "January 15, 2026",
    rating: 5,
    text: "The best hardscape crew in the valley. They were on time, clean, and the quality of the artificial turf and pavers is top-notch. Worth every penny.",
    location: "Paradise Valley, AZ"
  },
  {
    id: 4,
    name: "Jessica T.",
    date: "December 5, 2025",
    rating: 5,
    text: "We wanted a resort-style pool area and they delivered beyond our expectations. The 3D design phase really helped us visualize the final product before breaking ground.",
    location: "Mesa, AZ"
  },
  {
    id: 5,
    name: "Robert M.",
    date: "November 18, 2025",
    rating: 5,
    text: "Excellent communication throughout the entire 6-week project. The masonry team was respectful of our property and kept the site clean every day. 5 stars all the way.",
    location: "Chandler, AZ"
  },
  {
    id: 6,
    name: "Amanda C.",
    date: "October 2, 2025",
    rating: 5,
    text: "We had a terrible experience with a previous contractor, but this team restored our faith. They installed front yard desert landscaping that looks incredible and saves us water.",
    location: "Glendale, AZ"
  }
];

const GALLERY: GalleryItem[] = [
  {
    id: 1,
    before: "",
    after: "https://images.pexels.com/photos/17278251/pexels-photo-17278251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    suburb: "Scottsdale",
    title: "Beautiful Garden Design"
  },
  {
    id: 2,
    before: "",
    after: "https://images.pexels.com/photos/33184897/pexels-photo-33184897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    suburb: "Chandler",
    title: "Koi Pond & Water Feature"
  },
  {
    id: 3,
    before: "",
    after: "https://images.pexels.com/photos/13871294/pexels-photo-13871294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    suburb: "Paradise Valley",
    title: "Pergola & Outdoor Living"
  }
];

const FAQS: FAQItem[] = [
  {
    question: "How much does a typical desert hardscape project cost in Phoenix?",
    answer: "Project costs vary based on materials and scope. A standard travertine patio with some desert plantings typically starts around $15,000, while full resort-style backyard transformations can range from $40,000 to $100,000+."
  },
  {
    question: "Do you handle HOA approvals and city permits?",
    answer: "Yes, we handle the entire administrative process. We provide the detailed renderings and site plans required for HOA submittals and manage all necessary city permits for structural work."
  },
  {
    question: "How long does the construction process take?",
    answer: "Most medium-sized projects are completed within 3-5 weeks once construction begins. Larger transformations involving pools or extensive masonry may take 8-12 weeks."
  },
  {
    question: "What is the best material for Phoenix heat?",
    answer: "Travertine and certain light-colored pavers are excellent because they stay significantly cooler than concrete or dark stone. We also specialize in heat-resistant artificial turf and native desert plants that thrive in 110°+ temperatures."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Absolutely. We provide a 2-year warranty on all workmanship and honor all manufacturer warranties on materials like pavers, turf, and lighting systems."
  },
  {
    question: "Can you help with the design if I'm not sure what I want?",
    answer: "Yes! Our design phase includes a 3D walkthrough of your proposed backyard so you can see exactly how it will look before we move a single rock."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-accent p-2 rounded-lg shrink-0">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight whitespace-nowrap shrink-0 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            PHX <span className="text-brand-primary">HARDSCAPE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Services</a>
          <a href="#gallery" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Gallery</a>
          <a href="#process" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>How It Works</a>
          <a href="#reviews" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Reviews</a>
          <a href="tel:6025550123" className="flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-full font-bold hover:bg-brand-accent/90 transition-all">
            <Phone size={18} />
            (602) 555-0123
          </a>
        </div>

        <button
          type="button"
          className="md:hidden w-12 h-12 flex items-center justify-center text-brand-dark active:bg-white/10 rounded-xl transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className={isScrolled ? 'text-brand-dark' : 'text-white'} size={28} /> : <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-brand-dark border-b border-gray-100">Services</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-brand-dark border-b border-gray-100">Gallery</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-brand-dark border-b border-gray-100">How It Works</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-brand-dark border-b border-gray-100">Reviews</a>
            <a href="tel:6025550123" className="flex items-center justify-center gap-2 bg-brand-accent text-white p-4 mt-2 rounded-xl font-bold active:scale-95 transition-transform">
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FAQ = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        type="button"
        className="w-full flex justify-between items-center text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-brand-dark">{item.question}</span>
        {isOpen ? <ChevronUp className="text-brand-accent shrink-0" aria-hidden="true" /> : <ChevronDown className="text-brand-accent shrink-0" aria-hidden="true" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="py-4 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryCard = ({ item }: { item: GalleryItem }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-brand-forest rounded-[2rem] overflow-hidden shadow-lg border border-white/5"
    >
      <div className="relative aspect-[4/3] w-full block">
        <img 
          src={item.after} 
          alt={`After: ${item.title}`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-1 text-brand-sand mb-1">
          <MapPin size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">{item.suburb}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>
    </motion.div>
  );
};

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const FadeInFromLeft = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const FadeInFromRight = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const FadeInScale = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = () => setReviewIndex((prev) => Math.min(prev + 1, REVIEWS.length - 1));
  const prevReview = () => setReviewIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8143668/pexels-photo-8143668.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920" 
            alt="Gorgeous luxury white home with a beautiful pristine green lawn"
            role="presentation"
            aria-hidden="true"
            className="w-full h-full object-cover animate-[slowZoom_30s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-brand-secondary px-4 py-2 rounded-full mb-6 relative z-20">
              <Star className="w-4 h-4 fill-brand-primary text-brand-primary" />
              <span className="text-sm font-bold tracking-wide uppercase">Serving Phoenix Properties Since 2009</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-6 relative z-20 shadow-black/50 drop-shadow-xl">
              Elevate Every Inch <br className="hidden sm:block" />
              <span className="text-brand-primary">of Your Outdoor Space.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-lg leading-relaxed relative z-20 shadow-black/50 drop-shadow-md font-medium">
              We help Phoenix property owners create outdoor spaces that look great, hold their value, and leave a lasting impression on everyone who walks through.
            </p>

            <div className="flex flex-col flex-wrap sm:flex-row gap-4 relative z-20 w-full">
              <button
                type="button"
                className="w-full sm:w-auto bg-brand-primary text-brand-dark px-6 py-5 sm:px-8 rounded-xl font-black text-base sm:text-lg uppercase tracking-wider hover:bg-brand-primary/90 hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 group"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Get a free landscaping quote"
              >
                Get My Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <a href="tel:6025550123" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-5 sm:px-8 rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Phone className="text-brand-primary shrink-0" />
                (602) 555-0123
              </a>
            </div>

            {/* Trust Numbers Strip */}
            <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-y-8 gap-x-6 justify-between border-t border-white/20 pt-8 relative z-20">
              <div className="flex flex-col gap-1 items-start w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md tracking-tight">15+</div>
                <div className="text-sm font-bold text-gray-300 uppercase tracking-widest drop-shadow-md">Years in PHX</div>
              </div>
              <div className="flex flex-col gap-1 items-start w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md tracking-tight">1,200+</div>
                <div className="text-sm font-bold text-gray-300 uppercase tracking-widest drop-shadow-md">Projects Done</div>
              </div>
              <div className="flex flex-col gap-1 items-start w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md tracking-tight flex items-center gap-3">
                  4.9<span className="text-xl text-brand-primary/80">/5</span>
                  <div className="flex gap-0.5" aria-label="4.9 out of 5 stars" role="img">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-primary text-brand-primary" aria-hidden="true" />)}
                  </div>
                </div>
                <div className="text-sm font-bold text-gray-300 uppercase tracking-widest drop-shadow-md mt-1">Google Reviews</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0 relative z-20"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white text-center mb-2 tracking-tight">Fill out the form below for a quick quote:</h2>
              <p className="text-sm text-gray-300 text-center mb-8 font-medium">*All fields required</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-brand-primary transition-colors duration-300 rounded-none bg-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-brand-primary transition-colors duration-300 rounded-none bg-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    required 
                    className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-brand-primary transition-colors duration-300 rounded-none bg-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Project Address" 
                    required 
                    className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-brand-primary transition-colors duration-300 rounded-none bg-none"
                  />
                </div>

                <div className="relative">
                  <select 
                    required
                    defaultValue="" 
                    className="w-full bg-transparent border-b border-white/40 text-white py-3 focus:outline-none focus:border-brand-primary transition-colors duration-300 appearance-none rounded-none cursor-pointer group"
                  >
                    <option value="" disabled className="text-gray-800">Type of Service Needed</option>
                    <option value="pavers" className="text-gray-800">Pavers & Hardscape</option>
                    <option value="turf" className="text-gray-800">Artificial Turf</option>
                    <option value="pool" className="text-gray-800">Pool Remodel</option>
                    <option value="plants" className="text-gray-800">Desert Plants & Lighting</option>
                    <option value="full" className="text-gray-800">Full Backyard Transformation</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none w-5 h-5 opacity-70" />
                </div>

                <div className="relative">
                  <textarea 
                    placeholder="Message"
                    rows={1} 
                    className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-brand-primary transition-colors duration-300 resize-none rounded-none overflow-hidden"
                  />
                  {/* Decorative corner lines from the design */}
                  <div className="absolute right-0 bottom-3 w-4 h-4 overflow-hidden pointer-events-none opacity-50">
                    <div className="w-full h-0.5 bg-white transform rotate-45 translate-y-2 -translate-x-1"></div>
                    <div className="w-full h-0.5 bg-white transform rotate-45 translate-y-3 -translate-x-0.5"></div>
                    <div className="w-full h-0.5 bg-white transform rotate-45 translate-y-4 translate-x-0"></div>
                  </div>
                </div>

                <div className="pt-6 flex justify-center">
                  <button 
                    type="submit" 
                    className="px-10 py-3 rounded-full border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-brand-dark transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    FREE ESTIMATE
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Trust Badges Section --- */}
      {/* --- Trust Badges + About Us Combined Section --- */}
      <section id="about" className="bg-white relative z-0" aria-label="About Us">

        {/* Trust Badges (bottom-to-top FadeUp) */}
        <div className="border-b border-gray-100 py-10">
          <FadeUp className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <ShieldCheck className="w-10 h-10 text-brand-accent" />
              <div className="leading-tight">
                <div className="font-black text-brand-dark">Google Guaranteed</div>
                <div className="text-xs font-bold uppercase text-gray-500">Verified Professional</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Award className="w-10 h-10 text-brand-accent" />
              <div className="leading-tight">
                <div className="font-black text-brand-dark">ICPI Certified</div>
                <div className="text-xs font-bold uppercase text-gray-500">Master Paver Installers</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <BadgeCheck className="w-10 h-10 text-brand-accent" />
              <div className="leading-tight">
                <div className="font-black text-brand-dark">ROC #345678</div>
                <div className="text-xs font-bold uppercase text-gray-500">Licensed & Bonded</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="bg-brand-dark text-white p-2 rounded font-black text-sm italic">BBB</div>
              <div className="leading-tight">
                <div className="font-black text-brand-dark">A+ Accredited</div>
                <div className="text-xs font-bold uppercase text-gray-500">Business Bureau</div>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        {/* About Us Content (images slide from left, text slides from right) */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Stacked Images (slide from left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              {/* Top image — beautiful lawn */}
              <div className="rounded-[2rem] overflow-hidden shadow-xl w-4/5">
                <img
                  src="https://images.pexels.com/photos/8469933/pexels-photo-8469933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Neatly mowed bright green lawn in front of a modern house"
                  className="w-full h-64 object-cover"
                />
              </div>
              {/* Bottom image — landscaping crew at work */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-4/5 ml-auto -mt-20 relative z-10">
                <img
                  src="https://images.pexels.com/photos/5231049/pexels-photo-5231049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Landscaping workers trimming trees with professional shears"
                  className="w-full h-64 object-cover"
                />
              </div>
              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-brand-accent text-white rounded-3xl px-8 py-6 shadow-2xl text-center z-30 border-[6px] border-white flex flex-col items-center gap-1"
              >
                <div className="text-4xl font-black leading-none tracking-tight">15+</div>
                <div className="text-xs font-black uppercase tracking-widest opacity-90 text-center leading-tight">Years<br/>Experience</div>
              </motion.div>
            </motion.div>

            {/* Right: Text content (slide from right, 0.5s delay after images) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-brand-forest leading-tight mb-6">
                Built on Trust &amp; <span className="text-brand-primary">Craftsmanship</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                With over <strong className="text-brand-dark">15 years of industry experience</strong>, PHX Hardscape is known for delivering professional, high-quality landscaping and hardscape services tailored to every client's needs. Our commitment to excellence is reflected in every outdoor space we transform — combining expert craftsmanship with personalized care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Proudly serving Phoenix and surrounding areas, we stand behind our work with a reputation for reliability and complete customer satisfaction.
              </p>

              <h3 className="text-brand-primary font-black text-lg mb-5 uppercase tracking-wider">Why Choose Us:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                {[
                  "15+ Years of Experience",
                  "Custom Outdoor Solutions",
                  "Professional Service",
                  "Customer-Focused Approach",
                  "Superior Craftsmanship",
                  "Trusted Across Phoenix Area",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-brand-dark font-medium">
                    <ArrowRight size={16} className="text-brand-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-brand-forest text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-primary hover:scale-105 transition-all duration-300 shadow-lg group"
                aria-label="Get a free landscape estimate"
              >
                Get a Free Estimate
                <ArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>
      {/* --- Services Section --- */}
      <section id="services" className="barrel-section-secondary section-padding" aria-label="Our Services">
        <div className="max-w-7xl mx-auto">
          <FadeInScale className="text-center mb-16">
            <span className="inline-block text-brand-primary font-bold tracking-widest uppercase text-sm mb-3">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">From custom hardscape design to full backyard transformations — built to last in the Arizona heat.</p>
          </FadeInScale>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Hammer />, title: "Pavers & Hardscape", desc: "Travertine, concrete, and natural stone installations built to withstand Phoenix summers." },
              { icon: <Leaf />, title: "Desert Plants & Landscaping", desc: "Native plant design that thrives in 110°+ heat and dramatically cuts water usage." },
              { icon: <CheckCircle2 />, title: "Artificial Turf", desc: "Premium heat-resistant turf that stays green and cool year-round — zero maintenance." },
              { icon: <Award />, title: "Outdoor Lighting", desc: "Architectural and landscape lighting that transforms your yard after dark." },
              { icon: <Droplets />, title: "Pool & Water Features", desc: "Pool remodels, koi ponds, and water features that create a true resort experience." },
              { icon: <PenTool />, title: "Custom 3D Design", desc: "Full 3D renderings of your project before a single stone is moved. HOA submittals included." },
            ].map((service, i) => (
              <FadeUp key={i} delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[2rem] bg-brand-sand flex items-center justify-center mb-6 shadow-xl shadow-brand-sand/10 border-4 border-brand-forest">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 40, className: "text-brand-forest" })}
                </div>
                <h3 className="text-xl font-black mb-3 text-brand-dark">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <section id="reviews" className="barrel-section-dark section-padding overflow-hidden" aria-label="Customer Reviews">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeInFromRight className="mb-16 text-center">
            <span className="inline-block text-brand-accent font-bold tracking-widest uppercase text-sm mb-3">★ Trusted by 1,200+ Homeowners</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Your Neighbors Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real reviews from homeowners across the Valley who trusted us with their outdoor transformations.</p>
          </FadeInFromRight>

          <FadeInFromLeft delay={0.2} className="relative max-w-6xl mx-auto">
            {/* Carousel Navigation */}
            <button 
              type="button" 
              onClick={prevReview}
              disabled={reviewIndex === 0}
              className="absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-white text-brand-dark rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all border border-gray-100 hidden sm:block disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button 
              type="button" 
              onClick={nextReview}
              disabled={reviewIndex === REVIEWS.length - 1}
              className="absolute -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-white text-brand-dark rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all border border-gray-100 hidden sm:block disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next review"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden py-8 px-4 -mx-4">
              <motion.div 
                className="flex gap-6 relative"
                animate={{ x: `calc(-${reviewIndex * 100}% - ${reviewIndex * 1.5}rem)` }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {REVIEWS.map((review) => (
                  <div key={review.id} className="min-w-full sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] shrink-0">
                    <div className="bg-white rounded-[1.25rem] p-6 shadow-md border border-gray-100 relative h-full flex flex-col hover:shadow-xl transition-shadow duration-300 text-left">
                      
                      {/* Top Row: Avatar, Date, Google Logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#4285F4]/10 flex items-center justify-center font-bold text-[#4285F4] text-lg">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                            <div className="text-gray-400 text-xs font-medium">{review.date}</div>
                          </div>
                        </div>
                        <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5 object-contain" />
                      </div>
                      
                      {/* Stars & Verified */}
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="flex gap-0.5" aria-hidden="true">
                          {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} className="fill-[#FBBC04] text-[#FBBC04]" />)}
                        </div>
                        <BadgeCheck size={16} className="text-[#1A73E8] fill-white" aria-hidden="true" />
                      </div>

                      {/* Text */}
                      <p className="text-brand-dark font-medium leading-relaxed italic line-clamp-4">
                        "{review.text}"
                      </p>
                      
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Mobile Carousel Indicators & Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6 sm:hidden">
              <button type="button" onClick={prevReview} disabled={reviewIndex === 0} aria-label="Previous review" className="p-2 bg-white/10 rounded-full text-white disabled:opacity-30"><ChevronLeft size={20} /></button>
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button key={i} onClick={() => setReviewIndex(i)} aria-label={`Go to review ${i+1}`} className={`w-2.5 h-2.5 rounded-full transition-all ${i === reviewIndex ? 'bg-brand-accent scale-125' : 'bg-white/30'}`} />
                ))}
              </div>
              <button type="button" onClick={nextReview} disabled={reviewIndex === REVIEWS.length - 1} aria-label="Next review" className="p-2 bg-white/10 rounded-full text-white disabled:opacity-30"><ChevronRight size={20} /></button>
            </div>
          </FadeInFromLeft>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-[2rem] border-4 border-white/20 shadow-xl flex items-center gap-4">
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5" referrerPolicy="no-referrer" />
              <span className="font-bold text-white">4.9 Star Rating on Google</span>
              <div className="flex gap-0.5" aria-label="4.9 out of 5 stars" role="img">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-sand text-brand-sand" aria-hidden="true" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="bg-white text-brand-dark section-padding relative z-0" aria-label="Project Gallery">
        <div className="max-w-7xl mx-auto">
          <FadeInFromLeft className="mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Our Recent Transformations</h2>
              <p className="text-gray-600 font-medium">Browse actual Phoenix yards we've transformed — gardens, water features, and stunning outdoor living spaces.</p>
            </div>
          </FadeInFromLeft>

          <div className="grid md:grid-cols-3 gap-8">
            {GALLERY.map((item, index) => (
              <FadeUp key={item.id} delay={index * 0.15}>
                <GalleryCard item={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- How It Works Section --- */}
      <section id="process" className="barrel-section section-padding" aria-label="How It Works">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInScale className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Dream Yard in 4 Steps</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We've refined our process to remove the stress of home improvement. From first call to final walk-through, we've got you.</p>
          </FadeInScale>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/5 z-0"></div>

            {[
              { icon: <Calendar />, title: "Consultation", desc: "Free on-site visit to measure and discuss your vision and budget." },
              { icon: <PenTool />, title: "Design", desc: "3D renderings and material selection. We handle all HOA submittals." },
              { icon: <Hammer />, title: "Build", desc: "Professional installation by our licensed, in-house valley crews." },
              { icon: <Star />, title: "Enjoy", desc: "Final walkthrough and warranty activation. Time to fire up the grill!" }
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[2rem] bg-brand-sand flex items-center justify-center mb-6 shadow-xl shadow-brand-sand/10 border-4 border-brand-forest">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 40, className: "text-brand-forest" })}
                </div>
                <div className="text-brand-sand font-black text-sm uppercase tracking-widest mb-2">Step 0{i+1}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="bg-white text-brand-dark section-padding relative z-0">
        <div className="max-w-4xl mx-auto">
          <FadeInFromRight className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 font-medium">Everything you need to know about landscaping in the Phoenix valley.</p>
          </FadeInFromRight>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <FAQ item={faq} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section id="cta-section" className="barrel-section section-padding" aria-label="Get a Free Quote">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeInScale>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Own the Best <br />
              Backyard on the Block?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
              Join 1,200+ Phoenix homeowners who transformed their outdoor living space. Schedule your free design consultation today.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <button type="button" className="bg-brand-sand text-brand-forest px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-sand/20 flex items-center gap-4 group" aria-label="Get my free landscaping quote now">
                Get My Free Quote Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-8 text-white font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-sand" />
                  No-Obligation Quote
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-sand" />
                  HOA Approved Designs
                </div>
              </div>
            </div>
          </FadeInScale>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-accent p-2 rounded-lg">
                  <Leaf className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  PHX <span className="text-brand-primary">HARDSCAPE</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                Phoenix's premier desert landscaping and hardscape specialists. We create outdoor spaces that thrive in the Arizona heat and look beautiful year-round.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Facebook size={18} aria-hidden="true" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Instagram size={18} aria-hidden="true" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Watch us on YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Youtube size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-primary">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#gallery" className="hover:text-white transition-colors">Project Gallery</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-primary">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-accent" />
                  (602) 555-0123
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-brand-accent" />
                  Phoenix, AZ 85001
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-brand-accent" />
                  ROC #345678
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
            <p>© 2026 Phoenix Desert Hardscape Specialists. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
