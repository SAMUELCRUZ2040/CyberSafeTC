'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const DiferentsEffectsAbout = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  // Definición de líneas con colores de sintaxis realistas
  const codeLines = [
    { text: 'import', color: '#c678dd' },
    { text: ' { ', color: '#abb2bf' },
    { text: 'useState', color: '#61afef' },
    { text: ', ', color: '#abb2bf' },
    { text: 'useEffect', color: '#61afef' },
    { text: ' }', color: '#abb2bf' },
    { text: ' from ', color: '#c678dd' },
    { text: "'react'", color: '#98c379' },
    { text: ';', color: '#abb2bf' },
    { text: '\n\n', color: '#abb2bf' },
    { text: 'const', color: '#c678dd' },
    { text: ' buildProject', color: '#61afef' },
    { text: ' = ', color: '#abb2bf' },
    { text: '()', color: '#e5c07b' },
    { text: ' => {', color: '#abb2bf' },
    { text: '\n  ', color: '#abb2bf' },
    { text: 'const', color: '#c678dd' },
    { text: ' [', color: '#abb2bf' },
    { text: 'state', color: '#e06c75' },
    { text: ', ', color: '#abb2bf' },
    { text: 'setState', color: '#e06c75' },
    { text: '] = ', color: '#abb2bf' },
    { text: 'useState', color: '#61afef' },
    { text: '(', color: '#abb2bf' },
    { text: 'null', color: '#d19a66' },
    { text: ');', color: '#abb2bf' },
    { text: '\n\n  ', color: '#abb2bf' },
    { text: 'useEffect', color: '#61afef' },
    { text: '(() => {', color: '#abb2bf' },
    { text: '\n    ', color: '#abb2bf' },
    { text: '// Initialize project', color: '#5c6370' },
    { text: '\n    ', color: '#abb2bf' },
    { text: 'const', color: '#c678dd' },
    { text: ' config', color: '#e06c75' },
    { text: ' = {', color: '#abb2bf' },
    { text: '\n      ', color: '#abb2bf' },
    { text: 'theme', color: '#e06c75' },
    { text: ': ', color: '#abb2bf' },
    { text: "'dark'", color: '#98c379' },
    { text: ',', color: '#abb2bf' },
    { text: '\n      ', color: '#abb2bf' },
    { text: 'animations', color: '#e06c75' },
    { text: ': ', color: '#abb2bf' },
    { text: 'true', color: '#d19a66' },
    { text: ',', color: '#abb2bf' },
    { text: '\n      ', color: '#abb2bf' },
    { text: 'performance', color: '#e06c75' },
    { text: ': ', color: '#abb2bf' },
    { text: "'optimized'", color: '#98c379' },
    { text: '\n    ', color: '#abb2bf' },
    { text: '};', color: '#abb2bf' },
    { text: '\n  ', color: '#abb2bf' },
    { text: '}, []);', color: '#abb2bf' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    let currentText = '';

    const typeInterval = setInterval(() => {
      if (currentIndex < codeLines.length) {
        currentText += codeLines[currentIndex].text;
        setDisplayedCode(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40); // Velocidad optimizada

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full bg-[#000] rounded-xl p-6 relative overflow-hidden border border-white/5"
    >
      {/* Header estilo Editor */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-white/40 text-xs font-mono ml-3">index.jsx</span>
        <div className="ml-auto flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-green-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] text-white/20 uppercase tracking-tighter">Building...</span>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Números de línea */}
        <div className="text-white/10 text-xs font-mono select-none pt-1 border-r border-white/5 pr-4 text-right">
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="leading-relaxed">{i + 1}</div>
          ))}
        </div>

        {/* Área de Código */}
        <div className="font-mono text-sm relative flex-1 overflow-hidden">
          <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {codeLines.map((line, index) => {
              const textSoFar = codeLines.slice(0, index + 1).map(l => l.text).join('');
              const shouldShow = displayedCode.length >= textSoFar.length;
              
              return (
                <motion.span
                  key={index}
                  style={{ color: line.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldShow ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {line.text}
                </motion.span>
              );
            })}
            {/* Cursor */}
            {isVisible && displayedCode.length < codeLines.map(l => l.text).join('').length && (
              <motion.span
                className="inline-block w-1.5 h-4 bg-green-500/80 ml-1 translate-y-0.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </pre>
        </div>
      </div>

      {/* Footer del Editor */}
      <div className="absolute bottom-4 right-6 flex items-center gap-4 text-[10px] text-white/20 font-mono">
        <span>UTF-8</span>
        <span className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-500/50" />
          React 19
        </span>
      </div>

      {/* Resplandor ambiental */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};