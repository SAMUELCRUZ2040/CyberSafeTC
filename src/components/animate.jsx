"use client"

import { useEffect } from 'react';
import anime from 'animejs';

//Animation 1 
export function BasedValues(){
     useEffect(()=>{
        
        anime({
            targets: '.demo .item',
            translateX: function(el) {
              return el.getAttribute('data-x');
            },
            translateY: function(el, i) {
              return 50 + (-50 * i);
            },
            scale: function(el, i, l) {
              return (l - i) + .25;
            },
            rotate: function() { return anime.random(-360, 360); },
            borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
            duration: function() { return anime.random(1200, 1800); },
            delay: function() { return anime.random(0, 400); },
            direction: 'alternate',
            loop: true
          });
         },[]);
         return(
             <div className="demo flex gap-3 justify-center flex-col w-full h-full p-4">
                <div className="item rounded-full w-[18px] h-[18px] bg-[#A4FF4F]" data-x="100"></div>
                <div className="item rounded-full w-[18px] h-[18px] bg-[#A4FF4F]" data-x="200"></div>
                <div className="item rounded-full w-[18px] h-[18px] bg-[#A4FF4F]" data-x="300"></div>
                <span></span>
             </div>
         )
}

//Animation 2
export function Inheritance (){
    useEffect(()=>{
         var tl = anime.timeline({
             targets: '.params .figure',
             delay: function(el, i) { return i * 200 },
             duration: 500, // Can be inherited
             easing: 'easeOutExpo', // Can be inherited
             direction: 'alternate', // Is not inherited
             loop: true // Is not inherited
           });
          
           tl
           .add({
             translateX: 300,
             // override the easing parameter
             easing: 'spring',
           })
           .add({
             opacity: .5,
             scale: 2
           })
           .add({
             // override the targets parameter
             targets: '.params .figure.triangle',
             rotate: 180
           })
           .add({
             translateX: 0,
             scale: 1
           });
     },[]);
     return(
             <div className="params flex gap-3 flex-col justify-center p-5" style={{width : "100%", height : "100%"}}>
                <span></span>
                <div  className="figure" data-x="150"></div>
                <div  className="figure rounded-full" data-x="90"></div>
                <div style={{ background : "transparent", borderLeft: '15px solid transparent', borderRight: '15px solid transparent',borderBottom: '25px solid #00b3ff'}} className="figure triangle" data-x="50"></div>
             </div>
     )
}

//Animation 3
export function Morphing (){
    useEffect(() => {
        anime({
          targets: '.morphing-demo .polymorph',
          points: [
            { value: [
              '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
              '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
            ]},
            { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
            { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
            { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
          ],
          easing: 'easeOutQuad',
          duration: 2000,
          loop: true
        });
      }, []);
    
    
      return (
        <svg className="morphing-demo" viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
          <polygon className="polymorph" points="70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369" style={{ fill: 'transparent', stroke: '#bb00ff57', strokeWidth: 2 }} />
        </svg>
      );
}
