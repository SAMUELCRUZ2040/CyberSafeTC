"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const validators = {
  text: (v) => v.trim().length >= 2 ? null : "Mínimo 2 caracteres",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Correo inválido",
  tel: (v) => /^\+?[\d\s\-()]{7,15}$/.test(v) ? null : "Número inválido",
  textarea: (v) => v.trim().length >= 10 ? null : "Mínimo 10 caracteres",
};

export const Input = ({ type = "text", name, placeholder, inputType }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isFloating = isFocused || value.length > 0;
  const validatorKey = inputType === "textarea" ? "textarea" : type;
  const error = touched && value.length > 0 ? validators[validatorKey]?.(value) : null;
  const isValid = touched && value.length > 0 && !validators[validatorKey]?.(value);

  const sharedEvents = {
    onFocus: () => setIsFocused(true),
    onBlur: () => { setIsFocused(false); setTouched(true); },
    onChange: (e) => setValue(e.target.value),
    value,
  };

  // Color de línea según estado
  const lineColor = error
    ? "rgba(239,68,68,0.8)"   // rojo
    : isValid
    ? "rgba(255,255,255,0.6)" // blanco válido
    : "rgba(255,255,255,0.4)";

  const inputClass =
    "w-full bg-transparent border-0 pt-6 pb-2 text-sm text-white focus:outline-none focus:ring-0 placeholder-transparent";

  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <motion.label
        htmlFor={name}
        className="absolute left-0 top-2 pointer-events-none origin-left font-light"
        animate={
          isFloating
            ? { y: -16, scale: 0.8, color: error ? "rgba(239,68,68,0.9)" : "rgba(255,255,255,0.5)" }
            : { y: 0,   scale: 1,   color: "rgba(255,255,255,0.35)" }
        }
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        style={{ fontSize: "0.875rem" }}
      >
        {placeholder}
      </motion.label>

      {/* Input / Textarea */}
      {inputType === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={4}
          className={`${inputClass} resize-none`}
          {...sharedEvents}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={inputClass}
          {...sharedEvents}
        />
      )}

      {/* Línea base */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/15" />

      {/* Línea animada focus */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ width: "100%", originX: 0, backgroundColor: lineColor }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Error message */}
      <motion.p
        className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: error ? 1 : 0, y: error ? 0 : -4 }}
        transition={{ duration: 0.2 }}
      >
        {error}
      </motion.p>
    </div>
  );
};