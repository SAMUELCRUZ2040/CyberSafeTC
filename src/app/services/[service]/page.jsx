

import data from '@/json/data';
import types from '@/components/fontLetters';
import { CarouselGeneral } from './components/carouselGeneral';
import OurWork from './components/ourWork';
import { DetailsService } from './components/detailsService';
import { FeaturesSectionDemo } from './components/featuresSectionDemo';
import { Writer } from './components/writer';


// 1. Definimos la función como async para manejar params
export default async function Template({ params }) {
  
  // 2. Esperamos a que los params se resuelvan (Requerido en versiones nuevas)
  const resolvedParams = await params;
  const currentServiceId = resolvedParams.service;

  // 3. Función de búsqueda mejorada para evitar fallos de tipos
  const findService = (id) => {
    const servicesList = data.services[0].informationService;
    // Comparamos convirtiendo ambos a String para evitar fallos entre "1" y 1
    return servicesList.find(item => String(item.id) === String(id));
  };

  const service = findService(currentServiceId);

  // 4. Pantalla de seguridad por si el servicio no existe en el JSON
  if (!service) {
    return (
      <main className="flex h-screen items-center justify-center">
        <h1 className={types.h3}>Servicio no encontrado</h1>
      </main>
    );
  }

  return (
<main className="flex justify-center items-center relative flex-col ">

    <Writer idPage={currentServiceId} />
    
    {/* Componentes hijos (ID preservado) */}
    <div className="w-full">
        <DetailsService idPage={currentServiceId} />
        <OurWork idPage={currentServiceId} />
        <FeaturesSectionDemo idPage={currentServiceId} />
    </div>
      
      <div className="w-full flex flex-col items-center pt-20 pb-28">
        <div className="w-full max-w-7xl px-6 mb-10">
          <span className={`${types.h5} opacity-50`}>
            ¿Quieres ver más de nuestros servicios?
          </span>
        </div>
        
        {/* Contenedor con ancho máximo para que no se salga en Desktop */}
        <div className="w-full max-w-7xl px-6 overflow-hidden">
          <CarouselGeneral services={data.services[0].informationService} />
        </div>
      </div>
    </main>
  );
}