"use client"

import data from '@/json/data';
import { WriteFeaturesSectionDemo } from './writeFeaturesSectionDemo';

export function FeaturesSectionDemo({ idPage }) {
  const searchOption = data.services[0].informationService;
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);
  const resultInformation = inyectId;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <section className="bg-black text-white pb-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <WriteFeaturesSectionDemo search={resultInformation?.id} />

        {/* COLUMNA DERECHA: Sticky (Estática al hacer scroll) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          
          {/* Card de Información */}
          <div className="border border-[#a0a0a025] rounded-3xl p-8 bg-black/95">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cover bg-center" style={{ backgroundImage: `url(/favicon.ico)` }} />
              <div>
                <h4 className="font-bold text-lg tracking-tight text-white">Cyber</h4>
                <p className="text-xs text-gray-500 font-mono">cyber.ai</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              
              FLORA is an AI-powered creative platform that unites every major generative model in one seamless interface.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] font-bold uppercase tracking-widest">
              <div className="border border-[#a0a0a025] rounded-xl p-2 bg-black/95 flex items-center gap-2">
                <span className="text-gray-600">👥</span> 11-25
              </div>
              <div className="border border-[#a0a0a025] rounded-xl p-2 bg-black/95 flex items-center gap-2">
                <span className="text-gray-600">📅</span> 2024
              </div>
              <div className="border border-[#a0a0a025] rounded-xl p-2 bg-black/95 flex items-center gap-2 col-span-2">
                <span className="text-gray-600">🚀</span> Seed round • $ 6.5M
              </div>
            </div>
          </div>

          {/* Card de Resultados */}
          <div className="border border-[#a0a0a025] rounded-3xl p-8">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-widest">Results</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex gap-4">
                <span className="text-white font-bold">•</span>
                <p>Migrated the entire site to Framer, allowing teams to collaborate in a single platform.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-white font-bold">•</span>
                <p>Increased homepage conversions by 35 percent compared to the previous baseline.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-white font-bold">•</span>
                <p>Cut campaign launch time by 3x while minimizing engineering involvement.</p>
              </li>
            </ul>
          </div>

        </aside>

      </div>
    </section>
  );
}