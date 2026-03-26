"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ProofGallery() {
  return (
    <section id="trust" className="section-padding" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 400px', position: 'relative' }}
          >
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" 
                alt="Students Counseling" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(13,17,23,0.9))', padding: '2rem' }}>
                <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>Guiding futures globally.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 500px' }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              Why Choose <span className="text-gradient">Swan Global?</span>
            </h2>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.15rem', color: '#2b2d42', marginBottom: '2.5rem' }}>
              <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#25D366', fontSize: '1.4rem' }}>✔</span> <strong>1000+ Students Guided</strong>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#25D366', fontSize: '1.4rem' }}>✔</span> <strong>High Visa Success Rate</strong>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#25D366', fontSize: '1.4rem' }}>✔</span> <strong>Expert Counselors</strong>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#25D366', fontSize: '1.4rem' }}>✔</span> <strong>Special Focus on New Zealand & Australia</strong>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#25D366', fontSize: '1.4rem' }}>✔</span> <strong>End-to-End Support</strong>
              </motion.li>
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{ borderLeft: '4px solid #d90429', paddingLeft: '20px', backgroundColor: '#edf2f4', padding: '15px 15px 15px 20px', borderRadius: '0 8px 8px 0' }}
            >
              <h3 style={{ color: '#d90429', fontSize: '1.3rem', fontWeight: 700 }}>
                “Your Trusted Study Abroad Partner in Hyderabad”
              </h3>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
