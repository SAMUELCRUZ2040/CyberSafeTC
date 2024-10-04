import gsap from 'gsap';

export const animatePageOut = () => {
  return new Promise((resolve) => {
    const banners = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5", "banner-6"].map(id => document.getElementById(id));

    if (banners) {
      const tl = gsap.timeline();

      tl.set([banners], {
        yPercent: -100,
      }).to([banners], {
        yPercent: 0,
        stagger: 0.06,
        onComplete: () => {
          resolve(); // Resuelve la promesa cuando la animación termine
        },
      });
    } else {
      resolve(); // Si no se encuentran los elementos, resolver la promesa inmediatamente
    }
  });
};

export const animatePageIn = () => {
  return new Promise(()=>{
    const banners = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5", "banner-6"].map(id => document.getElementById(id));
  
    if (banners) {
      const tl = gsap.timeline();
  
      tl.set([banners], {
        yPercent: 0,
      }).to([banners], {
        yPercent: 100,
        stagger: 0.06,
      });
    }
  })
};
