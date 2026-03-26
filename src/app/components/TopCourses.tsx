"use client";
import React from 'react';
import { motion } from 'framer-motion';

const topCourses = [
  {
    icon: '💻',
    title: 'Data Science & Artificial Intelligence',
    matter: 'AI and Data Science are the fastest-growing global sectors. Universities in the USA and UK offer cutting-edge labs, STEM-designated OPT extensions (up to 3 years in the US), and starting salaries averaging $90,000+. We help you secure admits into the absolute best tech programs.'
  },
  {
    icon: '📊',
    title: 'Global MBA & Business Analytics',
    matter: 'Future-proof your career with a highly reputed MBA. Gain executive networking opportunities, C-suite mentorship, and massive ROI. We target globally accredited business schools in Canada, Australia, and the UK that offer post-study work visas.'
  },
  {
    icon: '🏥',
    title: 'Healthcare, Public Health & Nursing',
    matter: 'Critical global staff shortages mean Healthcare and Nursing professionals are in unprecedented demand. Enjoy fast-track permanent residency (PR) pathways in Australia, New Zealand, and Canada, alongside phenomenal job security.'
  },
  {
    icon: '⚙️',
    title: 'Core & Advanced Engineering',
    matter: 'From Civil and Mechanical to Aerospace and Robotics. Study in world-class facilities with massive industry tie-ups ensuring paid internships (Co-ops) during your studies and seamless post-study corporate placements.'
  },
  {
    icon: '🔐',
    title: 'Cybersecurity & Cloud Security',
    matter: 'The cybersecurity workforce gap is growing. Our pathway focuses on CISSP, CISM, and SANS-aligned programs in the US, Canada, and UK where starting pay often exceeds $100,000.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: '🌱',
    title: 'Sustainable Energy & Environmental Tech',
    matter: 'Renewable energy, climate science, and sustainable engineering are top growth areas. Gain access to global research centers with project-led training and strong placement ties.',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80'
  }
];

export default function TopCourses() {
  const openContact = () => {
    window.location.hash = '#contact';
    setTimeout(() => {
      const el = document.getElementById('registrationSection');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="courses" className="section-padding" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h4 style={{ color: '#d90429', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Future-Proof Careers
          </h4>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Top Courses in <span className="text-gradient">High Demand</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#555', fontSize: '1.1rem', lineHeight: 1.7 }}>
            We do more than just admissions. We strategically align your profile with globally in-demand sectors to ensure you achieve the highest Return on Investment and the best permanent residency outcomes.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {topCourses.map((course, index) => (
            <motion.div
              key={index}
              onClick={openContact}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)', borderColor: '#d90429' }}
              style={{
                backgroundColor: '#f9fafb',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid #edf2f4',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {course.image ? (
                <div style={{ width: '100%', height: '180px', overflow: 'hidden', borderRadius: '16px', marginBottom: '1rem' }}>
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', background: '#fff', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                  {course.icon}
                </div>
              )}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1117', marginBottom: '1rem', lineHeight: 1.3 }}>
                {course.title}
              </h3>
              <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {course.matter}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
