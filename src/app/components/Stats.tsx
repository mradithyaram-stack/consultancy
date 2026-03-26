"use client";
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Students', suffix: '+', target: 1000, icon: '🎯' },
  { label: 'Countries', suffix: '+', target: 5, icon: '🌍' },
  { label: 'Visa Success', suffix: '%', target: 95, icon: '📈' },
  { label: 'Years Experience', suffix: '+', target: 10, icon: '🏆' }
];

export default function Stats() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" style={{ backgroundColor: '#0d1117', color: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '2rem', flex: '1 1 200px' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: '#d90429', lineHeight: 1, marginBottom: '0.5rem' }}>
                <Counter target={stat.target} inView={isInView} />
                {stat.suffix}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.9 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, inView }: { target: number, inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, inView]);

  return <span>{count}</span>;
}
