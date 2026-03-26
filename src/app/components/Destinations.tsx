"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const destinationsData = [
  { 
    name: 'Australia', flag: '🇦🇺', 
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800',
    roadmap: [
      { step: '01', title: 'English Proficiency', detail: 'IELTS/PTE (Min 6.5 overall, no band less than 6.0).' },
      { step: '02', title: 'Course Shortlisting', detail: 'Select from top Group of Eight (Go8) universities.' },
      { step: '03', title: 'Admissions & Offer', detail: 'Receive Conditional or Unconditional Offer letters.' },
      { step: '04', title: 'Financial Readiness', detail: 'Prepare exact living costs & tuition proofs.' },
      { step: '05', title: 'GS Evaluation', detail: 'Clear the new Genuine Student (GS) requirement.' },
      { step: '06', title: 'OSHC & CoE', detail: 'Pay Health Cover to receive Confirmation of Enrolment.' },
      { step: '07', title: 'Visa Subclass 500', detail: 'Medicals, biometrics, and student visa lodgement.' },
      { step: '08', title: 'Pre-Departure', detail: 'Accommodation, travel bookings, and final brief.' }
    ],
    career: 'Up to 4-5 years of Post-Study Work Visa. Massive demand in Healthcare, IT, and Engineering.',
    salary: '$75,000+ AUD / year avg starting'
  },
  { 
    name: 'United Kingdom', flag: '🇬🇧', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800',
    roadmap: [
      { step: '01', title: 'Test Prep & Profiling', detail: 'IELTS (Min 6.0-6.5) and deep academic profiling.' },
      { step: '02', title: 'UCAS / Direct Apply', detail: 'Craft robust SOP and apply to Russell Group Univs.' },
      { step: '03', title: 'Interview & Offer', detail: 'Clear university credibility interviews & get Conditional Offer.' },
      { step: '04', title: 'Financial Proofs', detail: 'Show 28-day matured funds for living & tuition fees.' },
      { step: '05', title: 'CAS Issuance', detail: 'Receive Confirmation of Acceptance for Studies (CAS).' },
      { step: '06', title: 'TB Test & IHS Fee', detail: 'Provide negative TB cert & pay Immigration Health Surcharge.' },
      { step: '07', title: 'Tier 4 Visa Filing', detail: 'Submit student visa application and attend biometrics.' },
      { step: '08', title: 'Flight & Landing', detail: 'Pre-departure connect and London arrival support!' }
    ],
    career: '2-Year Graduate Route (PSW) automatically granted. Strong hiring in Finance, Tech, and NHS.',
    salary: '£35,000+ / year avg starting'
  },
  { 
    name: 'United States', flag: '🇺🇸', 
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800',
    roadmap: [
      { step: '01', title: 'Standardized Tests', detail: 'Ace GRE/GMAT alongside TOEFL/IELTS with our prep.' },
      { step: '02', title: 'Strategic Shortlisting', detail: 'Ambitious, Reach, and Safe university selections.' },
      { step: '03', title: 'Essays & Applications', detail: 'Drafting stellar Essays, LORs, and Resume.' },
      { step: '04', title: 'Admit & Financials', detail: 'Secure admits and showcase liquid funds to the university.' },
      { step: '05', title: 'I-20 Form Processing', detail: 'Receive the crucial I-20 document from your university.' },
      { step: '06', title: 'SEVIS & DS-160', detail: 'Pay SEVIS fee and accurately fill the DS-160 form.' },
      { step: '07', title: 'F1 Visa Interview', detail: 'Rigorous mock sessions to crack the US Consulate interview.' },
      { step: '08', title: 'The American Dream', detail: 'Flight bookings and networking prep for your intake.' }
    ],
    career: 'Up to 3-years STEM OPT. Peak global salaries in Tech, AI, Management, and Engineering.',
    salary: '$85,000+ USD / year avg starting'
  },
  { 
    name: 'Canada', flag: '🇨🇦', 
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800',
    roadmap: [
      { step: '01', title: 'Language Proficiency', detail: 'Achieve IELTS (Min 6.5) or PTE Equivalent for SDS.' },
      { step: '02', title: 'Program Selection', detail: 'Match previous education with highly relevant Canadian programs.' },
      { step: '03', title: 'College Application', detail: 'Apply to top public DLIs (Designated Learning Institutions).' },
      { step: '04', title: 'LOA Issuance', detail: 'Receive the official Letter of Acceptance (LOA).' },
      { step: '05', title: 'Financials & GIC', detail: 'Pay 1-year tuition and set up a $20,635 CAD GIC account.' },
      { step: '06', title: 'PAL & Medicals', detail: 'Obtain Provincial Attestation Letter & pass upfront medicals.' },
      { step: '07', title: 'SDS Visa Processing', detail: 'Lodge Study Permit via the fast-track Student Direct Stream.' },
      { step: '08', title: 'Fly to Canada', detail: 'Pre-departure orientation & integration assistance.' }
    ],
    career: 'Up to 3-Year Post-Graduation Work Permit (PGWP). Clear points-based PR pathways.',
    salary: '$65,000+ CAD / year avg starting'
  },
  { 
    name: 'New Zealand', flag: '🇳🇿', 
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800',
    roadmap: [
      { step: '01', title: 'English Requirements', detail: 'Clear PTE or IELTS requirements for desired program.' },
      { step: '02', title: 'University App', detail: 'Apply to prestigious universities or reputed polytechnics.' },
      { step: '03', title: 'Conditional Offer', detail: 'Receive offer and prepare extensive financial documentation.' },
      { step: '04', title: 'Visa Pre-Approval', detail: 'Submit docs for Approval in Principle (AIP) from INZ.' },
      { step: '05', title: 'FTS Setup', detail: 'Set up Fund Transfer Scheme for living expenses (if required).' },
      { step: '06', title: 'Tuition Payment', detail: 'Transfer 1st-year tuition fees to the institution post-AIP.' },
      { step: '07', title: 'Final Visa Stamp', detail: 'Receive final eVisa upon receipt of payment by university.' },
      { step: '08', title: 'Kia Ora NZ!', detail: 'Final prep, cultural brief, and departure details.' }
    ],
    career: 'Up to 3-Year PSW Visa. Safe environment with massive demand in Green List occupations.',
    salary: '$70,000+ NZD / year avg starting'
  }
];

export default function Destinations() {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  // Stop background scrolling when modal is open
  React.useEffect(() => {
    if (selectedCountry) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedCountry]);

  return (
    <>
      <section id="countries" className="section-padding" style={{ backgroundColor: '#edf2f4' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h4 style={{ color: '#d90429', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Global Opportunities</h4>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Choose Your <span className="text-gradient">Dream Destination</span>
            </h2>
            <p style={{ color: '#555', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Select any country below to view specific roadmaps, post-study work rights, and fast-track registration details!</p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {destinationsData.map((dest, index) => (
              <motion.div
                onClick={() => setSelectedCountry(dest)}
                key={dest.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, border: '3px solid #d90429', boxShadow: '0 20px 40px rgba(217,4,41,0.2)' }}
                style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', cursor: 'pointer', border: '3px solid transparent', transition: 'all 0.3s ease' }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}></div>
                  <div style={{ position: 'absolute', bottom: '15px', right: '15px', color: '#fff', fontSize: '0.8rem', fontWeight: 600, border: '1px solid #fff', padding: '4px 10px', borderRadius: '20px', backdropFilter: 'blur(5px)' }}>Click to Analyze</div>
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0d1117' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{dest.flag}</span> {dest.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE COUNTRY MODAL */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={(e) => { if(e.target === e.currentTarget) setSelectedCountry(null); }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 50, opacity: 0 }}
              style={{ backgroundColor: '#fff', borderRadius: '24px', width: '100%', maxWidth: '1300px', maxHeight: '95vh', overflowY: 'auto', position: 'relative', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
            >
              {/* Close Button */}
              <button onClick={() => setSelectedCountry(null)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', width: '40px', height: '40px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10 }}>×</button>

              {/* Modal Hero */}
              <div style={{ height: '250px', position: 'relative' }}>
                <img src={selectedCountry.image} alt={selectedCountry.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                  <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0 }}>{selectedCountry.flag}</h1>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '10px 0 0 0' }}>Study in {selectedCountry.name}</h2>
                </div>
              </div>

              {/* Modal Content Split */}
              <div style={{ padding: '3rem 2rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                
                {/* Left Side: Deep Matter */}
                <div style={{ flex: '1 1 650px' }}>
                  
                  {/* Career Aspects */}
                  <div style={{ marginBottom: '3rem', backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '16px', borderLeft: '5px solid #d90429' }}>
                    <h3 style={{ color: '#0d1117', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>💼 Career Aspects & Visas</h3>
                    <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1rem', fontSize: '1.1rem' }}>{selectedCountry.career}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25D366', fontWeight: 700, fontSize: '1.15rem' }}>
                      💸 Avg. Starting Salary: {selectedCountry.salary}
                    </div>
                  </div>

                  {/* Special Roadmap */}
                  <div>
                    <h3 style={{ color: '#0d1117', fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '2px solid #edf2f4', paddingBottom: '1rem' }}>
                      📍 The {selectedCountry.name} Master Roadmap
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                      {selectedCountry.roadmap.map((step: any, i: number) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                          style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '15px', 
                            backgroundColor: '#fff', 
                            padding: '20px', 
                            borderRadius: '16px', 
                            border: '1px solid #edf2f4',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '4rem', fontWeight: 900, color: 'rgba(217, 4, 41, 0.05)', zIndex: 0 }}>
                            {step.step}
                          </div>
                          <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: '#d90429', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', flexShrink: 0, zIndex: 1, boxShadow: '0 5px 15px rgba(217,4,41,0.3)' }}>
                            {step.step}
                          </div>
                          <div style={{ zIndex: 1 }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0d1117', marginBottom: '5px' }}>{step.title}</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>{step.detail}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Registration Details */}
                <div style={{ flex: '1 1 300px' }}>
                  <div style={{ backgroundColor: '#0d1117', padding: '2.5rem', borderRadius: '24px', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Fast-Track Registration</h3>
                    <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '2rem' }}>Fill this application to get priority {selectedCountry.name} admission consulting directly from our experts!</p>
                    
                    <form onSubmit={(e) => { e.preventDefault(); alert(`Application submitted for ${selectedCountry.name}!`); setSelectedCountry(null); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#1f242e', color: '#fff', outline: 'none' }} />
                      <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#1f242e', color: '#fff', outline: 'none' }} />
                      <input type="tel" placeholder="Phone Number" required style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#1f242e', color: '#fff', outline: 'none' }} />
                      <select required style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#1f242e', color: '#fff', outline: 'none', appearance: 'none' }}>
                        <option value="">Desired Course</option>
                        <option value="bachelors">Bachelors Degree</option>
                        <option value="masters">Masters Degree</option>
                        <option value="mba">MBA Program</option>
                        <option value="phd">PhD / Research</option>
                      </select>
                      <button type="submit" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#d90429', color: '#fff', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', marginTop: '10px', boxShadow: '0 10px 20px rgba(217,4,41,0.2)' }}>Submit Application</button>
                    </form>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
