"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', icon: '🎯', title: 'Initial Consultation', desc: 'Deep-dive session to understand your academic background, career ambitions, and budget constraint.' },
  { num: '02', icon: '📝', title: 'Test Preparation', desc: 'Expert coaching and mock tests for IELTS, TOEFL, GRE, GMAT, or PTE to secure target high-percentile scores.' },
  { num: '03', icon: '🏛️', title: 'University Shortlisting', desc: 'Data-driven selection of Ivy League and top-tier global universities matching your unique profile.' },
  { num: '04', icon: '✍️', title: 'SOP & Resume Crafting', desc: 'Brainstorming and editing compelling Statements of Purpose, essays, and standout polished resumes.' },
  { num: '05', icon: '📬', title: 'Application Submission', desc: 'Flawless error-free application processing, ensuring all institutional deadlines and complex requirements are met.' },
  { num: '06', icon: '💬', title: 'Interview Preparation', desc: 'Rigorous mock interviews and communication coaching specifically tailored for university admission committees.' },
  { num: '07', icon: '💳', title: 'Financial & Loan Aid', desc: 'Guidance on securing academic scholarships, education loans, and managing massive fund proofs.' },
  { num: '08', icon: '🛂', title: 'Visa Processing', desc: 'Comprehensive visa documentation, compelling cover letters, and intensive mock visa interview sessions.' },
  { num: '09', icon: '✈️', title: 'Pre-Departure Brief', desc: 'Essential extensive checklist covering accommodation, forex cards, packing guides, and cultural adaptation.' },
  { num: '10', icon: '🎓', title: 'Post-Arrival Support', desc: 'On-ground continuous assistance with university registration, bank account setup, and vital local networking.' }
];

export default function Process() {
  return (
    <section id="roadmap" className="section-padding" style={{ backgroundColor: '#05070a', position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      {/* Background Stylings */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(217,4,41,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(43,45,66,0.3) 0%, transparent 70%)', filter: 'blur(70px)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.h4 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ color: '#d90429', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '1.2rem' }}
          >
            The Ultimate Master Plan
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}
          >
            A <span className="text-gradient" style={{ background: 'linear-gradient(90deg, #ff4b4b, #d90429)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Grand Roadmap</span> To Your Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ color: '#94a3b8', fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}
          >
            From the very first consultation to stepping onto your global dream campus, we hold your hand through a massive, beautifully structured, step-by-step blueprint of absolute success.
          </motion.p>
        </div>
        
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Vertical Timeline connecting line */}
          <div style={{ position: 'absolute', top: '0', bottom: '0', left: '50%', width: '4px', background: 'linear-gradient(to bottom, transparent, rgba(217,4,41,0.5), rgba(43,45,66,0.8), transparent)', transform: 'translateX(-50%)', zIndex: 1, borderRadius: '2px' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative', zIndex: 2 }}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -70 : 70, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  style={{
                    display: 'flex',
                    flexDirection: isLeft ? 'row' : 'row-reverse',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    position: 'relative'
                  }}
                >
                  <div style={{ flex: 1, display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start', padding: isLeft ? '0 3rem 0 0' : '0 0 0 3rem' }}>
                    <div 
                      style={{ 
                        backgroundColor: '#0d1117', 
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '2.5rem 3rem', 
                        borderRadius: '24px', 
                        boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                        maxWidth: '550px',
                        width: '100%',
                        position: 'relative',
                        transform: 'translateZ(0)',
                        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.4s ease, box-shadow 0.4s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                        e.currentTarget.style.borderColor = 'rgba(217, 4, 41, 0.6)';
                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(217, 4, 41, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.4)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 5px 15px rgba(217,4,41,0.4))' }}>{step.icon}</span>
                        <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                          {step.title}
                        </h3>
                      </div>
                      <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.15rem', margin: 0 }}>
                        {step.desc}
                      </p>
                      
                      <div className="step-glow" style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(217,4,41,0.08) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: -1 }}></div>
                    </div>
                  </div>

                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    backgroundColor: '#05070a', 
                    border: '5px solid #d90429', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '1.8rem',
                    zIndex: 10,
                    boxShadow: '0 0 30px rgba(217,4,41,0.6)',
                    flexShrink: 0,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}>
                    {step.num}
                  </div>

                  <div style={{ flex: 1, padding: isLeft ? '0 0 0 3rem' : '0 3rem 0 0' }}></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '7rem' }}
        >
          <a href="#contact" style={{ display: 'inline-block', padding: '22px 50px', background: 'linear-gradient(45deg, #d90429, #ef233c, #d90429)', backgroundSize: '200% auto', color: '#fff', borderRadius: '50px', fontWeight: 900, fontSize: '1.3rem', textDecoration: 'none', boxShadow: '0 20px 40px rgba(217,4,41,0.4)', transition: 'all 0.4s ease' }}
             onMouseEnter={(e) => { 
               e.currentTarget.style.transform = 'scale(1.08)'; 
               e.currentTarget.style.backgroundPosition = 'right center';
             }}
             onMouseLeave={(e) => { 
               e.currentTarget.style.transform = 'scale(1)'; 
               e.currentTarget.style.backgroundPosition = 'left center';
             }}>
            Begin Your Monumental Journey Now ➔
          </a>
        </motion.div>
      </div>
    </section>
  );
}

