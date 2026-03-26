"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Scholarships() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0d1117', color: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ flex: '1 1 500px' }}
          >
            <h4 style={{ color: '#d90429', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Fund Your Dream
            </h4>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Secure Up To <span style={{ color: '#d90429' }}>100% Scholarships</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Studying abroad doesn't have to break the bank. Our dedicated financial aid counselors work tirelessly to match your academic profile with exclusive university grants, government bursaries, and merit-based tuition waivers to drastically reduce your financial burden.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: '#1f242e', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #d90429' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>Merit Scholarships</h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Up to $20,000 for outstanding grades.</p>
              </div>
              <div style={{ backgroundColor: '#1f242e', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #25D366' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>Vice-Chancellor Award</h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>50% to 100% full tuition waivers.</p>
              </div>
              <div style={{ backgroundColor: '#1f242e', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>Graduate Assistantships</h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Paid research roles and stipends.</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary" style={{ padding: '15px 35px', borderRadius: '50px', fontSize: '1.1rem' }}>
              Check Your Eligibility Now
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '500px', borderRadius: '50%', overflow: 'hidden', border: '8px solid #1f242e', boxShadow: '0 0 50px rgba(217, 4, 41, 0.2)' }}>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" 
                alt="Excited Graduate" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
