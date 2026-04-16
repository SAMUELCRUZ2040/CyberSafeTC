import data from '@/json/data';
import types from '@/components/fontLetters';
import { CarouselGeneral } from './components/carouselGeneral';
import OurWork from './components/ourWork';
import { DetailsService } from './components/detailsService';
import { FeaturesSectionDemo } from './components/featuresSectionDemo';

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
    <main className="flex justify-center items-center relative flex-col">
      <div className="container px-4 pt-20 mt-10 md:pt-28 md:mt-14 flex justify-center flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col gap-10 md:gap-14">
          
          {/* Primera Sección: Título y Descripción 1 */}
          <div className="flex flex-col items-center md:items-end text-center md:text-end">
            <h1 className={`${types.h3} flex flex-col`}>
              <span>{service.title}</span>
              <span className="font-semibold">{service.addTitle}</span>
            </h1>
            <p className={`
              ${types.p} 
              max-w-2xl my-6 md:my-8 
              px-4 md:px-0 md:pr-6 
              border-none md:border-r-2 md:border-white/20
           `}>
              {service.description}
            </p>
          </div>

          {/* Segunda Sección: Título 2 y Descripción 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <h1 className={`${types.h3} flex flex-col`}>
              <span>{service.title2}</span>
              <span className="font-semibold">{service.addTitle2}</span>
            </h1>
            <p className={`
              ${types.p} 
              max-w-2xl my-6 md:my-8 
              px-4 md:px-0 md:pl-6 
              border-none md:border-l-2 md:border-white/20
            `}>
              {/* Aquí corregí para que use description2 si existe en tu JSON */}
              {service.description2 || service.description}
            </p>
          </div>

        </div>
      </div>

      {/* Componentes hijos pasando el ID correcto */}
      <DetailsService idPage={currentServiceId} />
      <OurWork idPage={currentServiceId} />
      <FeaturesSectionDemo idPage={currentServiceId} />
      
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