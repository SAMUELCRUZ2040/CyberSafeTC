import gsap from "gsap";

export const animatePageIn = () => {
  const banners = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5", "banner-6"].map(id => document.getElementById(id));

  if (banners) {
    const tl = gsap.timeline();

    tl.set([banners], {
      yPercent: 0,
    }).to([banners], {
      yPercent: 100,
      stagger: 0.05,
    });
  }
};

export const animatePageOut = (href, router) => {
  const banners = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5", "banner-6"].map(id => document.getElementById(id));

  if (banners) {
    const tl = gsap.timeline();

    tl.set([banners], {
      yPercent: -100,
    }).to([banners], {
      yPercent: 0,
      stagger: 0.05,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
