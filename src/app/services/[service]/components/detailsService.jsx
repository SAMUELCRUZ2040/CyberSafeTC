"use client"

import data from '@/json/data';
import types from '@/components/fontLetters';

/**
 * SUB-COMPONENTE: ServiceCard
 */
const ServiceCard = ({ item, className = "" }) => {
  if (!item) return null;

  const isVideo = item.media?.endsWith('.webm') || item.media?.endsWith('.mp4');
  const paragraphs = Object.keys(item)
    .filter(key => key.startsWith('paragraph'))
    .map(key => item[key]);

  return (
    <div className={`border-[1px] border-[#a0a0a025] rounded-3xl p-8 relative overflow-hidden flex flex-col group clip-reveal ${className}`}>
      
      {/* Media de fondo */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60">
        {isVideo ? (
          <video className="w-full h-full object-cover opacity-70" autoPlay muted loop playsInline>
            <source src={item.media} type="video/mp4" />
          </video>
        ) : (
          <div className="bg-cover bg-center w-full h-full opacity-70" style={{ backgroundImage: `url(${item.media})` }} />
        )}
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col h-full">
        <p className={`${types.h6} mb-4`}>{item.title}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mt-auto">
          {paragraphs.map((p, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className={`${types.h7} leading-tight pb-1`}>{p[0]}</h2>
              <p className={`${types.pSmall} opacity-70`}>{p[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blur Overlay */}
      <span className="absolute left-0 bottom-0 w-full h-full backdrop-blur-[2px] pointer-events-none z-[1]" 
            style={{ WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)", maskImage: "linear-gradient(to top, black 20%, transparent 100%)" }} />
    </div>
  );
};

/**
 * COMPONENTE PRINCIPAL
 */
export function DetailsService({ idPage }) {
  const searchOption = data.services[0].informationService;
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);
  const resultInformation = inyectId?.DetailsService || [];

  if (resultInformation.length === 0) return <div className="text-white p-10">Cargando datos...</div>;

  return (
    <section className="py-16 bg-black text-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto max-sm:w-full">
        {/* BENTO GRID REFORMADO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* BLOQUE SUPERIOR IZQUIERDA (Google grande + 2 pequeños) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <ServiceCard item={resultInformation[0]} className="h-[300px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard item={resultInformation[1]} className="h-[220px]" />
              <ServiceCard item={resultInformation[2]} className="h-[220px]" />
            </div>
          </div>

          {/* COLUMNA DERECHA SUPERIOR (El carro vertical) */}
          <ServiceCard item={resultInformation[3]} className="h-full min-h-[544px]" />

          {/* FILA INFERIOR COMPLETA */}
          {/* Tarjeta vertical (Chica ejercicio) */}
          <div className="md:col-span-1">
            <ServiceCard item={resultInformation[4]} className="h-full min-h-[544px]" />
          </div>

          {/* Bloque derecho inferior (Jacket + 2 pequeños) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <ServiceCard item={resultInformation[5]} className="h-[300px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard item={resultInformation[6]} className="h-[220px]" />
              <ServiceCard item={resultInformation[7]} className="h-[220px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}