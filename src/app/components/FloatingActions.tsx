"use client";
import React from 'react';

export default function FloatingActions() {
  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1000 }}>
      {/* Floating Call */}
      <a href="tel:+919000329999" style={{
        width: '55px', height: '55px', borderRadius: '50%', backgroundColor: '#d90429', 
        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        boxShadow: '0 4px 15px rgba(217, 4, 41, 0.4)', fontSize: '1.5rem', transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        📞
      </a>
      
      {/* Floating WhatsApp */}
      <a href="https://wa.me/919000329999" target="_blank" rel="noopener noreferrer" style={{
        width: '55px', height: '55px', borderRadius: '50%', backgroundColor: '#25D366', 
        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)', fontSize: '1.5rem', transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        💬
      </a>
    </div>
  );
}
