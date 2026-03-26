"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewZealandUSP() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            backgroundColor: '#ffffff', 
            padding: '4rem 3rem', 
            borderRadius: '24px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid #edf2f4'
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🇳🇿</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0d1117', letterSpacing: '-0.02em' }}
          >
            Best <span style={{ color: '#d90429' }}>New Zealand</span> Consultant in Hyderabad
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}
          >
            We have successfully guided hundreds of students to New Zealand with high visa success rate and trusted end-to-end support.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="#contact" 
              className="btn-primary" 
              style={{ padding: '15px 35px', borderRadius: '50px', fontSize: '1.1rem', backgroundColor: '#d90429', boxShadow: '0 10px 25px rgba(217,4,41,0.3)' }}
            >
              Explore New Zealand 
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
