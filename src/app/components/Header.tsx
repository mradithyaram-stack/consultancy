"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    { title: 'Computer Science & AI', desc: 'Master the future of tech with advanced algorithms and machine learning.' },
    { title: 'Business & MBA', desc: 'Global leadership programs yielding high ROI and executive networking.' },
    { title: 'Healthcare & Nursing', desc: 'High-demand medical pathways with rapid permanent residency prospects.' },
    { title: 'Engineering', desc: 'Civil, Mechanical, and Robotics programs in state-of-the-art facilities.' }
  ];

  const countries = [
    { name: 'Australia', icon: '🇦🇺' },
    { name: 'United Kingdom', icon: '🇬🇧' },
    { name: 'United States', icon: '🇺🇸' },
    { name: 'Canada', icon: '🇨🇦' },
    { name: 'New Zealand', icon: '🇳🇿' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      style={{
        position: 'sticky', top: 0, zIndex: 999,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 0' : '20px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <Link href="/" style={{ fontSize: '1.6rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.02em', color: '#000' }}>
          🎓 <span style={{ color: '#d90429' }}>SWAN</span> GLOBAL
        </Link>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-only">
          <Link href="#home" style={{ fontWeight: 500, color: '#2b2d42', fontSize: '0.95rem' }}>Home</Link>
          <Link href="#about" style={{ fontWeight: 500, color: '#2b2d42', fontSize: '0.95rem' }}>About</Link>
          
          {/* Courses Dropdown */}
          <div 
            onMouseEnter={() => setHoveredMenu('courses')} 
            onMouseLeave={() => setHoveredMenu(null)}
            style={{ position: 'relative', padding: '10px 0', cursor: 'pointer' }}
          >
            <span style={{ fontWeight: 500, color: hoveredMenu === 'courses' ? '#d90429' : '#2b2d42', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Courses ▾
            </span>
            <AnimatePresence>
              {hoveredMenu === 'courses' && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  style={{ position: 'absolute', top: '100%', left: '-150px', background: '#fff', width: '500px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '3px solid #d90429' }}
                >
                  {courses.map((c, i) => (
                    <div key={i} style={{ padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                      <h4 style={{ color: '#d90429', fontSize: '0.95rem', marginBottom: '5px' }}>{c.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.4 }}>{c.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#services" style={{ fontWeight: 500, color: '#2b2d42', fontSize: '0.95rem' }}>Services</Link>

          {/* Countries Dropdown */}
          <div 
            onMouseEnter={() => setHoveredMenu('countries')} 
            onMouseLeave={() => setHoveredMenu(null)}
            style={{ position: 'relative', padding: '10px 0', cursor: 'pointer' }}
          >
            <span style={{ fontWeight: 500, color: hoveredMenu === 'countries' ? '#d90429' : '#2b2d42', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Countries ▾
            </span>
            <AnimatePresence>
              {hoveredMenu === 'countries' && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  style={{ position: 'absolute', top: '100%', left: '-50px', background: '#fff', width: '220px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '5px', borderTop: '3px solid #d90429' }}
                >
                  {countries.map((c, i) => (
                    <Link key={i} href="#countries" style={{ padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: '#0d1117' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#edf2f4'; e.currentTarget.style.color = '#d90429'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0d1117'; }}>
                      <span style={{ fontSize: '1.2rem' }}>{c.icon}</span> {c.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#testimonials" style={{ fontWeight: 500, color: '#2b2d42', fontSize: '0.95rem' }}>Testimonials</Link>
          <Link href="#contact" style={{ fontWeight: 500, color: '#2b2d42', fontSize: '0.95rem' }}>Contact</Link>
        </nav>
        <Link 
          href="#register" 
          className="btn-primary" 
          style={{ borderRadius: '50px', padding: '12px 28px', backgroundColor: '#d90429', color: '#fff', fontWeight: 700, boxShadow: '0 8px 20px rgba(217, 4, 41, 0.3)' }}
        >
          Book Free Consultation
        </Link>
      </div>
    </motion.header>
  );
}
