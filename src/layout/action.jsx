import { Tooltip } from "@/layout/components/tooltip";
import Link from "next/link";

export default function Action() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-10 ty-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left — text content */}
          <div className="flex flex-col gap-8 max-md:items-center max-md:text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/50 tracking-widest uppercase font-medium">
                disponible ahora
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white max-md:text-center">
              Host your websites{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                with zero friction
              </span>{" "}
              today.
            </h3>

            {/* Description */}
            <p className="text-white/40 text-base leading-relaxed max-w-sm max-md:text-center">
              Experience lightning-fast hosting with unparalleled reliability. Our cutting-edge infrastructure ensures your website stays online 24/7, with 99.9% uptime guaranteed.
            </p>

            {/* Social proof */}
            <div className="flex flex-col items-start gap-2 max-md:items-center">
              <Tooltip />
              <p className="text-white/30 text-sm">
                Trusted by <span className="text-white/60 font-semibold">27,000+</span> developers
              </p>
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="flex items-center justify-end max-md:justify-center">
            <div className="relative group">
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 md:p-10 flex flex-col gap-6 max-w-xs w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-white/30 uppercase tracking-widest">
                    ready to launch?
                  </span>
                  <p className="text-white text-xl font-bold leading-snug">
                    Tu sitio online en menos de 5 minutos.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Features list */}
                <ul className="flex flex-col gap-3">
                  {["99.9% uptime SLA", "Deploy en 1 click", "Soporte 24/7"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group/btn flex items-center justify-center gap-2 bg-white text-black font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>let's meet</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}