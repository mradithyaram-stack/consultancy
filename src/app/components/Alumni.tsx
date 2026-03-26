"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Alumni() {
  return (
    <section id="alumni" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="section-title">
            Our Global <span className="text-gradient">Alumni Network</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of successful students who have transformed their lives by securing placements at top universities worldwide.
          </p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ backgroundColor: '#f8fafc', padding: '3rem 2rem', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '3rem', color: '#d90429', fontWeight: 900, marginBottom: '1rem' }}>10,000+</h3>
            <p style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>Total Alumni</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ backgroundColor: '#f8fafc', padding: '3rem 2rem', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '3rem', color: '#d90429', fontWeight: 900, marginBottom: '1rem' }}>50+</h3>
            <p style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>Countries Present</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ backgroundColor: '#f8fafc', padding: '3rem 2rem', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '3rem', color: '#d90429', fontWeight: 900, marginBottom: '1rem' }}>Top 1%</h3>
            <p style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>Global Universities</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
