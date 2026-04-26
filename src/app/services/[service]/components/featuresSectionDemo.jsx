"use client"

import data from '@/json/data';
import { WriteFeaturesSectionDemo } from './writeFeaturesSectionDemo';
import { Shield, Activity, Cpu } from "lucide-react";

export function FeaturesSectionDemo({ idPage }) {
  const searchOption = data.services[0].informationService;
  const resultInformation = searchOption.find((item) => item.id === idPage);

  return (
    <section className="relative bg-black text-white pb-24 px-6 md:px-12 font-sans overflow-visible">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Main scrollable content */}
        <div className="lg:col-span-8">
          <WriteFeaturesSectionDemo search={resultInformation?.id} />
        </div>

        {/* RIGHT COLUMN: Sticky Container */}
        <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 h-fit self-start">
          
          <div className="space-y-6">
            {/* Cyber Core Info Card */}
            <div className="border border-[#a0a0a025] rounded-[0.5rem] p-8 bg-[#05050510] relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] -z-10" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(/favicon.ico)` }} />
                <div>
                  <h4 className="font-bold text-lg tracking-tight text-white uppercase italic">
                    Cyber<span className="text-gray-500">_</span>Core
                  </h4>
                  <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Live_System</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-8 leading-relaxed italic">
                "Full synchronization with next-generation network protocols for a seamless digital experience."
              </p>

              {/* Specs with Icons */}
              <div className="space-y-5">
                {[
                  { Icon: Shield, label: "Security", val: "Quantum_Encrypted" },
                  { Icon: Activity, label: "Performance", val: "Zero_Latency" },
                  { Icon: Cpu, label: "Infrastructure", val: "Edge_Computing" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <item.Icon size={18} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs font-bold text-white uppercase">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* HUD Corners */}
              <div className="absolute top-0 right-0 p-4">
                <div className="w-3 h-3 border-t border-r border-white/20 rounded-tr" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-3 h-3 border-b border-l border-white/20 rounded-bl" />
              </div>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Operational</span>
              </div>
              <span className="text-[9px] font-mono text-white/20 uppercase">ID: 00-456-X</span>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}