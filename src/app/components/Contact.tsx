"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  const [showRegistration, setShowRegistration] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      return hash === '#contact' || hash === '#register';
    }
    return false;
  });

  const openRegistration = () => {
    setShowRegistration(true);
    setTimeout(() => {
      const el = document.getElementById('registrationSection');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  useEffect(() => {
    const listener = () => {
      if (window.location.hash === '#contact' || window.location.hash === '#register') {
        setShowRegistration(true);
      }
    };

    window.addEventListener('hashchange', listener);
    return () => window.removeEventListener('hashchange', listener);
  }, []);

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
              <button onClick={openRegistration} style={{ backgroundColor: '#0d1117', color: '#ffffff', padding: '15px 30px', borderRadius: '50px', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer' }}>
                Book Free Consultation
              </button>
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

          {showRegistration && (
            <div id="registrationSection" style={{ marginTop: '3rem', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#0d1117' }}>Free Consultation Registration</h3>
              <p style={{ marginBottom: '1.5rem', color: '#64748b', lineHeight: 1.6 }}>
                Share your details once and our expert counsellor will contact you for a fast, personalized action plan.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Registration submitted! Our team will contact you'); }} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <input required type="text" placeholder="Full Name" style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1px solid #d1d5db', outline: 'none' }} />
                <input required type="email" placeholder="Email Address" style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1px solid #d1d5db', outline: 'none' }} />
                <input required type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1px solid #d1d5db', outline: 'none' }} />
                <select required style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff' }}>
                  <option value="">Desired Course / Program</option>
                  <option value="bachelors">Bachelors</option>
                  <option value="masters">Masters</option>
                  <option value="mba">MBA</option>
                  <option value="phd">PhD</option>
                  <option value="short-term">Short-term Certificate</option>
                </select>
                <button type="submit" style={{ backgroundColor: '#d90429', color: '#fff', fontWeight: 700, padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>Submit Registration</button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
