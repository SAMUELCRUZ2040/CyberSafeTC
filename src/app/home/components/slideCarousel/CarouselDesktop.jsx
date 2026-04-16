import React from 'react';
import Image from 'next/image';


export const CarouselDesktop= ({
  containerRef,
  slides,
  currentCount
}) => {
  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden text-black font-[Sora,sans-serif]">
      {slides.map((slide, index) => (
        <section key={slide.heading} className="slide">
          <div className="slide__outer">
            <div className="slide__inner">
              <div className="slide__content" style={{ backgroundColor: slide.bgColor }}>
                <div className="slide__container">
                  <h2 className="slide__heading">{slide.heading}</h2>
                  <figure className="slide__img-cont  rounded-3xl shadow-2xl">
                    <Image 
                      className="slide__img" 
                      src={slide.image} 
                      alt={`Imagen de la diapositiva ${index + 1}`} 
                      width={1000} 
                      height={1000}
                    />
                        <span className="absolute left-0 bottom-0 w-full h-[60%] backdrop-blur-[2.3px] pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)", maskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)" }} />

                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="absolute top-0 bottom-0 left-0 right-0 z-[3] pointer-events-none">
        <div className="overlay__content ">
          <p className="overlay__count">
            0<span className="count">{currentCount}</span>
          </p>
          <figure className="overlay__img-cont rounded-3xl shadow-2xl">
            {slides.map((slide, index) => (
              <React.Fragment key={`overlay-${slide.heading}`}>
                {/* Renderizar video si existe, sino imagen */}
                {slide.overlayVideo ? (

                  <>
                  <video
                    className="image"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={slide.overlayVideo} type="video/mp4" />
                  </video>
                  <span className="absolute left-0 bottom-0 w-full h-[30%] z-50 backdrop-blur-[2.3px] pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)", maskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)" }} />
                  </>
                ) : (
                  slide.overlayImage && (
                    <Image
                      className="image"
                      src={slide.overlayImage}
                      alt={`Imagen de la diapositiva ${slide.heading}`}
                      width={1800}
                      height={1800}
                    />
                  )
                )}
                
                <span 
                  className="absolute left-0 bottom-0 w-full h-[30%] z-50 backdrop-blur-[2.3px] pointer-events-none" 
                  style={{ 
                    WebkitMaskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)", 
                    maskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)" 
                  }} 
                />
              </React.Fragment>
            ))}
          </figure>
        </div>
      </section>
    </div>
  );
};