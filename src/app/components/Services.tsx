"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Career Counseling', icon: '🎓', desc: 'Expert guidance to choose the right path.' },
  { title: 'University Selection', icon: '🏫', desc: 'Smart shortlisting of global universities.' },
  { title: 'SOP & LOR Support', icon: '📝', desc: 'Crafting compelling applications.' },
  { title: 'Education Loan Assistance', icon: '💰', desc: 'Hassle-free financial support.' },
  { title: 'Visa Processing', icon: '📄', desc: 'End-to-end trusted visa guidance.' },
  { title: 'Pre-Departure Support', icon: '✈️', desc: 'Seamless transition to your destination.' }
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Complete <span className="text-gradient">Study Abroad</span> Solutions
        </motion.h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
              }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #edf2f4',
                padding: '2.5rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0d1117' }}>
                {service.title}
              </h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
