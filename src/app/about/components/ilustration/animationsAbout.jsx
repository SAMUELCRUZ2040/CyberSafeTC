'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useEffect, useState, useRef } from 'react';

export const AnimationsAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const data = [
    { x: 0, y: 20 }, { x: 10, y: 25 }, { x: 20, y: 22 },
    { x: 30, y: 35 }, { x: 40, y: 45 }, { x: 50, y: 50 },
    { x: 60, y: 42 }, { x: 70, y: 38 }, { x: 80, y: 35 },
    { x: 90, y: 50 }, { x: 100, y: 70 }, { x: 110, y: 85 },
    { x: 120, y: 95 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full  relative overflow-hidden border border-white/5"
      style={{
        minHeight: '300px',
        backgroundColor: '#000', // Negro puro
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Resplandor de fondo dinámico */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {isVisible && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 10, bottom: 20, left: 10 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#059669" stopOpacity={0.5} />
                <stop offset="50%" stopColor="#22c55e" stopOpacity={1} />
                <stop offset="100%" stopColor="#4ade80" stopOpacity={1} />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <XAxis dataKey="x" hide />
            <YAxis hide domain={[0, 100]} />

            <Line
              type="monotone"
              dataKey="y"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={false}
              filter="url(#glow)"
              animationDuration={2500}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      {/* Tags decorativos estilo código */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      
      <div className="absolute bottom-4 right-6 font-mono text-[10px] text-green-500/30 uppercase tracking-widest">
        Live_Performance // Stable
      </div>
    </motion.div>
  );
};