import gsap from "gsap"

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")
  const bannerFive = document.getElementById("banner-5")
  const bannerSix = document.getElementById("banner-6")

  if (bannerOne && bannerTwo && bannerThree && bannerFour && bannerFive && bannerSix) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix], {
      yPercent: 100,
      stagger: 0.03,
    })
  }
}

export const animatePageOut = (callback) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")
  const bannerFive = document.getElementById("banner-5")
  const bannerSix = document.getElementById("banner-6")

  if (bannerOne && bannerTwo && bannerThree && bannerFour && bannerFive && bannerSix) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix], {
      yPercent: 0,
      stagger: 0.03,
      onComplete: () => {
        if (callback) callback()
      },
    })
  }
}
