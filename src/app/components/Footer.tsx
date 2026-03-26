"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d1117', color: '#ffffff', padding: '5rem 0 2rem 0', borderTop: '4px solid #d90429' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          
          {/* Column 1: About Swan */}
          <div>
            <h4 style={{ color: '#d90429', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>SWAN GLOBAL</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.7 }}>
              No.1 Consultant for Australia, New Zealand, USA, UK, and Canada in Hyderabad. Your gateway to top global universities and trusted permanent residency pathways.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="#home" style={{ color: '#a1a1aa', transition: '0.2s' }}>Home</Link></li>
              <li><Link href="#services" style={{ color: '#a1a1aa', transition: '0.2s' }}>Services</Link></li>
              <li><Link href="#countries" style={{ color: '#a1a1aa', transition: '0.2s' }}>Countries</Link></li>
              <li><Link href="#contact" style={{ color: '#a1a1aa', transition: '0.2s' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Countries */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Countries</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#a1a1aa' }}>
              <li>Australia</li>
              <li>UK</li>
              <li>USA</li>
              <li>Canada</li>
              <li>New Zealand</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#a1a1aa', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span>📞</span> Phone: +91-9000329999
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span>📍</span> Location: Hitech City, Hyderabad
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span>📧</span> Email: info@swanglobal.com
              </li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#71717a', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Swan Global Study Abroad Advisory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
