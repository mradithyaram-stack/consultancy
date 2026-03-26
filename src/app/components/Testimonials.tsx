"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const successStories = [
  { name: 'Rajesh', country: 'Australia', quote: 'From initial profile review to visa success, the team was beside me every step.', image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=800' },
  { name: 'Priya', country: 'USA', quote: 'I secured my dream university and scholarship through their strategic guidance.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800' },
  { name: 'Aman', country: 'New Zealand', quote: 'The process was seamless and transparent—an experience I highly recommend.', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800' },
  { name: 'Neha', country: 'UK', quote: 'Professional support, timely updates, and 100% result focus made the difference.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
  { name: 'Karthik', country: 'Canada', quote: 'I got into top universities and landed a placement offer before graduating.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' }
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="alumni" className="section-padding" style={{ backgroundColor: '#111', overflow: 'hidden', padding: '80px 0', borderTop: '1px solid #222' }}>
      <div className="container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Our <span style={{ color: '#d90429' }}>Success Stories</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', fontWeight: 600 }}>What Our Students Say</p>
        </motion.div>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          
          {/* Left Navigation Arrow */}
          <button 
            onClick={scrollLeft}
            aria-label="Previous"
            style={{ 
              position: 'absolute', left: '-20px', zIndex: 10, width: '40px', height: '40px', 
              borderRadius: '50%', backgroundColor: '#d90429', color: '#fff', border: 'none', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)', fontSize: '1rem' 
            }}
          >
            &#10094;
          </button>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            style={{
              display: 'flex',
              gap: '2rem',
              padding: '1rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              width: '100%',
              scrollBehavior: 'smooth'
            }}
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  flex: '0 0 calc(33.333% - 1.33rem)',
                  minWidth: '280px',
                  height: '320px',
                  scrollSnapAlign: 'center',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#000',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                <img 
                  src={story.image} 
                  alt={`${story.name} in ${story.country}`} 
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800';
                  }}
                  style={{ width: '100%', height: 'calc(100% - 70px)', objectFit: 'cover' }} 
                />
                <div style={{ padding: '16px', backgroundColor: '#111', minHeight: '70px' }}>
                  <p style={{ margin: 0, color: '#f8fafc', fontSize: '0.95rem', lineHeight: 1.4 }}>
                    “{story.quote}”
                  </p>
                </div>
                
                {/* Name & Country Banner at bottom */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  height: '50px',
                  backgroundColor: '#1a1a1a', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                    {story.name}, {story.country}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={scrollRight}
            aria-label="Next"
            style={{ 
              position: 'absolute', right: '-20px', zIndex: 10, width: '40px', height: '40px', 
              borderRadius: '50%', backgroundColor: '#d90429', color: '#fff', border: 'none', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)', fontSize: '1rem' 
            }}
          >
            &#10095;
          </button>
        </div>
        
        {/* Hide Scrollbar for Chrome/Safari inside the functional component via inline style */}
        <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      </div>
    </section>
  );
}
