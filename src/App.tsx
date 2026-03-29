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
  Sun,
  Menu,
  X,
  ShieldCheck,
  Award,
  BadgeCheck
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
  }
];

const GALLERY: GalleryItem[] = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1590013330462-094d30606080?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=800",
    suburb: "Scottsdale",
    title: "Modern Desert Travertine"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    suburb: "Chandler",
    title: "Luxury Turf & Fire Pit"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    suburb: "Paradise Valley",
    title: "Resort Style Backyard"
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
          <div className="bg-brand-accent p-2 rounded-lg">
            <Sun className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            PHX <span className="text-brand-primary">HARDSCAPE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#gallery" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Gallery</a>
          <a href="#process" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>How It Works</a>
          <a href="#reviews" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Reviews</a>
          <a href="tel:6025550123" className="flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-full font-bold hover:bg-brand-accent/90 transition-all">
            <Phone size={18} />
            (602) 555-0123
          </a>
        </div>

        <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-brand-dark' : 'text-white'} /> : <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />}
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
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">Gallery</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">How It Works</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">Reviews</a>
            <a href="tel:6025550123" className="flex items-center justify-center gap-2 bg-brand-accent text-white p-4 rounded-xl font-bold">
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
    <div className="border-b border-white/10 py-4">
      <button 
        className="w-full flex justify-between items-center text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-white">{item.question}</span>
        {isOpen ? <ChevronUp className="text-brand-sand shrink-0" /> : <ChevronDown className="text-brand-sand shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="py-4 text-gray-300 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryCard = ({ item }: { item: GalleryItem }) => {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-brand-forest rounded-[2rem] overflow-hidden shadow-lg border border-white/5"
    >
      <div className="relative aspect-[4/3] group cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
        <img 
          src={showAfter ? item.after : item.before} 
          alt={item.title}
          className="w-full h-full object-cover transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-brand-forest/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {showAfter ? 'After' : 'Before'}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 text-brand-dark px-4 py-2 rounded-full font-bold text-sm">Tap to see {showAfter ? 'Before' : 'After'}</span>
        </div>
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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Phoenix Backyard" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-brand-secondary px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-brand-primary text-brand-primary" />
              <span className="text-sm font-bold tracking-wide uppercase">Phoenix's #1 Desert Hardscape Specialists</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Luxury Backyards <br />
              <span className="text-brand-primary">Built for the Desert.</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
              We transform dusty Phoenix yards into resort-style travertine oases. Professional design, HOA management, and 5-star craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-primary text-brand-dark px-8 py-5 rounded-xl font-black text-lg uppercase tracking-wider hover:bg-brand-primary/90 hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 group">
                Get My Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:6025550123" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Phone className="text-brand-primary" />
                (602) 555-0123
              </a>
            </div>

            {/* Trust Numbers Strip */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-black text-white">15+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years in PHX</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">1,200+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">4.9/5</div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-brand-primary text-brand-primary" />)}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Google Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Trust Badges Section --- */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-brand-accent" />
            <div className="leading-tight">
              <div className="font-black text-brand-dark">Google Guaranteed</div>
              <div className="text-xs font-bold uppercase text-gray-500">Verified Professional</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-10 h-10 text-brand-accent" />
            <div className="leading-tight">
              <div className="font-black text-brand-dark">ICPI Certified</div>
              <div className="text-xs font-bold uppercase text-gray-500">Master Paver Installers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-10 h-10 text-brand-accent" />
            <div className="leading-tight">
              <div className="font-black text-brand-dark">ROC #345678</div>
              <div className="text-xs font-bold uppercase text-gray-500">Licensed & Bonded</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark text-white p-2 rounded font-black text-sm italic">BBB</div>
            <div className="leading-tight">
              <div className="font-black text-brand-dark">A+ Accredited</div>
              <div className="text-xs font-bold uppercase text-gray-500">Business Bureau</div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Reviews Section --- */}
      <section id="reviews" className="barrel-section section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Your Neighbors Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Real reviews from homeowners across the Valley who trusted us with their outdoor transformations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <motion.div 
                key={review.id}
                whileHover={{ y: -5 }}
                className="sand-card relative"
              >
                <Quote className="absolute top-6 right-8 text-brand-forest/10 w-12 h-12" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} className="fill-brand-forest text-brand-forest" />)}
                </div>
                <p className="text-brand-forest font-medium italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-forest/10">
                  <div>
                    <div className="font-black text-brand-forest">{review.name}</div>
                    <div className="text-xs text-brand-forest/70 font-bold">{review.location}</div>
                  </div>
                  <div className="text-xs font-black text-brand-forest/40 uppercase">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-sm flex items-center gap-4">
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5" referrerPolicy="no-referrer" />
              <span className="font-bold text-white">4.9 Star Rating on Google</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-sand text-brand-sand" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="barrel-section section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Recent Transformations</h2>
              <p className="text-gray-300">Browse actual Phoenix yards we've transformed. Tap any image to see the "Before" state.</p>
            </div>
            <button className="text-brand-sand font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Projects <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {GALLERY.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* --- How It Works Section --- */}
      <section id="process" className="barrel-section section-padding">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Dream Yard in 4 Steps</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We've refined our process to remove the stress of home improvement. From first call to final walk-through, we've got you.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/5 z-0"></div>

            {[
              { icon: <Calendar />, title: "Consultation", desc: "Free on-site visit to measure and discuss your vision and budget." },
              { icon: <PenTool />, title: "Design", desc: "3D renderings and material selection. We handle all HOA submittals." },
              { icon: <Hammer />, title: "Build", desc: "Professional installation by our licensed, in-house valley crews." },
              { icon: <Star />, title: "Enjoy", desc: "Final walkthrough and warranty activation. Time to fire up the grill!" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[2rem] bg-brand-sand flex items-center justify-center mb-6 shadow-xl shadow-brand-sand/10 border-4 border-brand-forest">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 40, className: "text-brand-forest" })}
                </div>
                <div className="text-brand-sand font-black text-sm uppercase tracking-widest mb-2">Step 0{i+1}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="barrel-section section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Everything you need to know about landscaping in the Phoenix valley.</p>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FAQ key={i} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="barrel-section section-padding">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Own the Best <br />
            Backyard on the Block?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            Join 1,200+ Phoenix homeowners who transformed their outdoor living space. Schedule your free design consultation today.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button className="bg-brand-sand text-brand-forest px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-sand/20 flex items-center gap-4 group">
              Get My Free Quote Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-accent p-2 rounded-lg">
                  <Sun className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  PHX <span className="text-brand-primary">HARDSCAPE</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                Phoenix's premier desert landscaping and hardscape specialists. We create outdoor spaces that thrive in the Arizona heat and look beautiful year-round.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                  <span className="font-bold">fb</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                  <span className="font-bold">ig</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                  <span className="font-bold">yt</span>
                </div>
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
