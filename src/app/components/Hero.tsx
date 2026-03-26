"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.7) 100%), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000") center/cover no-repeat',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotateGlobe { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      ` }} />
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '3px solid rgba(217,4,41,0.8)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        background: 'radial-gradient(circle at 30% 30%, #3f83f8 0%, #0e2146 65%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'rotateGlobe 16s linear infinite',
        zIndex: 15
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          border: '2px dashed rgba(255,255,255,0.65)',
          background: 'radial-gradient(circle at 35% 35%, #8fc1ff 0%, rgba(255,255,255,0.08) 70%)'
        }} />
      </div>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', zIndex: 10, paddingTop: '100px', paddingBottom: '100px' }}>
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', maxWidth: '650px', paddingRight: '2rem' }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'inline-block', backgroundColor: 'rgba(217, 4, 41, 0.2)', color: '#ff4d6d', padding: '8px 16px', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', border: '1px solid rgba(217, 4, 41, 0.4)' }}
          >
            No.1 Study Abroad Consultant
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}
          >
            Study Abroad Experts <br/>in <span style={{ color: '#d90429' }}>Hyderabad</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '2.5rem', color: '#edf2f4', lineHeight: 1.6 }}
          >
            Start your journey to Australia, UK, USA, Canada & New Zealand with trusted guidance. 95% Visa Success.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}
          >
            <Link href="#contact" className="btn-primary" style={{ padding: '16px 32px', borderRadius: '50px', fontSize: '1.1rem', backgroundColor: '#d90429' }}>
              Book Free Consultation
            </Link>
            <Link href="https://wa.me/919000329999" target="_blank" style={{ padding: '16px 32px', borderRadius: '50px', fontSize: '1.1rem', backgroundColor: '#ffffff', color: '#0d1117', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              WhatsApp Now <span style={{color: '#25D366'}}>🟢</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Lottie */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
        >
          <DotLottieReact
            src="https://lottie.host/3e66839b-eb0c-43e3-a225-4dcafb92e56a/PYjnoInzir.lottie"
            loop
            autoplay
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
