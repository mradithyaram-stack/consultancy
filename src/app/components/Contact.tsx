"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      {/* 9. CALL TO ACTION (Lead Section) */}
      <section className="section-padding" style={{ backgroundColor: '#d90429', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Confused about your study abroad plans?
            </h2>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '2.5rem', opacity: 0.9 }}>
              Get FREE expert guidance today!
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="#contact" style={{ backgroundColor: '#0d1117', color: '#ffffff', padding: '15px 30px', borderRadius: '50px', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                Book Free Consultation
              </Link>
              <Link href="tel:+919000329999" style={{ backgroundColor: '#ffffff', color: '#d90429', padding: '15px 30px', borderRadius: '50px', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Call Now (+91-9000329999)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. CONTACT + MAP */}
      <section id="contact" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            
            {/* Left Contact Info */}
            <div style={{ flex: '1 1 400px', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: '#0d1117' }}>Visit Our <span style={{color: '#d90429'}}>Office</span></h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #edf2f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#0d1117' }}>Address:</h4>
                    <p style={{ color: '#555' }}>Hitech City, Hyderabad</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #edf2f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#0d1117' }}>Phone:</h4>
                    <p style={{ color: '#555' }}>+91-9000329999</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #edf2f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🟢</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#0d1117' }}>WhatsApp:</h4>
                    <p style={{ color: '#555' }}>+91-9000329999</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map */}
            <div style={{ flex: '1 1 500px', minHeight: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121813.11181804294!2d78.31012879555613!3d17.45169871589135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a2eb620faf%3A0xcdc1aced2ae50402!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
