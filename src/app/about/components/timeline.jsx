import Image from "next/image";
import React from "react";
import { ConfiTimeline } from "../../../context/confiTimeline";
import types from "../../../components/fontLetters";

export function Timeline() {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p
            className={`${types.p} mb-8`}>
            In 2019, the idea of Cyber was born, a company focused on innovation and technological growth. In a constantly evolving world, we identified the need to offer innovative and efficient technological solutions for companies and entrepreneurs seeking to optimize and scale their processes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/about/timeline_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="/image/about/timeline_2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div>
          <p
            className={`${types.p} mb-8`}>
              With a clear vision and a commitment to innovation, Cyber began to expand its services, consolidating its presence in the technology sector. During this period, we optimized our processes, incorporated new technologies and strengthened our team, allowing us to tackle more complex projects and offer more specialized solutions to our clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/about/timeline_3.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="/image/about/timeline_4.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p
            className={`${types.p} mb-8`}>
              Entrando en 2024, Cyber ha evolucionado significativamente, consolidándose como un referente en tecnología e innovación. Este año marcó el inicio de una nueva etapa de crecimiento, con la implementación de soluciones más avanzadas en desarrollo de software, infraestructura y seguridad. Además, ampliamos nuestra cartera de servicios y fortalecimos nuestras alianzas estratégicas para seguir impulsando la transformación digital de nuestros clientes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/about/timeline_5.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="/image/about/timeline_6.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "finally",
      content: (
        <div>
          <p
            className={`${types.p} mb-8`}>
            We now drive innovation with tailor-made technological solutions, ensuring quality, efficiency and a constant commitment to the success of our clients.
          </p>
          <div className="mb-8">
            <div
              className={`${types.p} flex gap-2 items-center`}>
              ✅ Constant Innovation
            </div>
            <div
              className={`${types.p} flex gap-2 items-center`}>
              ✅ Personalized Approach
            </div>
            <div
              className={`${types.p} flex gap-2 items-center`}>
              ✅ Quality and Efficiency
            </div>
            <div
              className={`${types.p} flex gap-2 items-center`}>
              ✅ Specialized Team
            </div>
            <div
              className={`${types.p} flex gap-2 items-center`}>
              ✅ Commitment to the Client
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/about/timeline_7.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="/image/about/timeline_8.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <ConfiTimeline data={data} />
    </div>)
  );
}
