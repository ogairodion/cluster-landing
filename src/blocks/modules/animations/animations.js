import $ from 'jquery';
import * as THREE from 'three';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger);

const scene     = new THREE.Scene(),
      camera    = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
      renderer  = new THREE.WebGLRenderer(),
      imgs      = document.querySelectorAll('.img'),
      sections  = document.querySelectorAll('section'),
      glows     = document.querySelectorAll('.glow-info'),
      logo      = document.querySelector('.logo');
      
let staticEl    = true,
    hidden      = false;

sections.forEach((el, i) => {
    el.classList.add('section-' + i);
});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

$(window).on('resize', function() {
    renderer.setSize( window.innerWidth, window.innerHeight );
});

camera.position.z = 5;

function animate() {    
    renderer.render( scene, camera );
}

$(window).on('scroll', function() {
    animate()
});

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.4,
    firefoxMultiplier: 0.4,
    scrollFromAnywhere: true,
    getSpeed: true, 
    getDirection: true,
    reloadOnContextChange: true,
});

locoScroll.on('scroll', (instance) => {
    ScrollTrigger.update;

    let elView = instance.scroll.y + (window.innerHeight / 2);
    

    console.log(logo.offsetHeight);
});

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

imgs.forEach((el, i) => { 
    el.classList.add('img-' + i);

    gsap.from('.img-' + i, {
        xPercent: 100, 
        ease: 'power1',
    });

    gsap.to('.img-' + i, {
        scrollTrigger: {
            trigger: '.section-' + i,
            start: "top bottom",
            end: "100% right",
            scrub: true,
            scroller: ".container",
        },
        ease: 'power1',
        xPercent: 0, 
    });
});

ScrollTrigger.defaults({
    immediateRender: false,
    ease: "power1.inOut",
    scrub: 0.5
});


glows.forEach((el, i) => {
    el.classList.add('glow-info-' + i);

    gsap.from(".glow-info-" + i, {
        yPercent: 100,
        ease: 'power1',
    });

    gsap.to(".glow-info-" + i, {
        yPercent: -50,
        scrollTrigger: {
            trigger: '.section-' + i,
            scroller: '.container',
            scrub: true,
        }, 
        ease: 'power1',
    });
});
