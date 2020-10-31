// GSAP Animations
const toggle = document.querySelector('.menu-icon');
const hero = document.querySelector('.hero');
const sideMenu = document.querySelector('.side-menu');
const button = document.querySelector('.button');
let firstToggle = false;
let tl = gsap.timeline(); 

toggle.addEventListener('click', (e) => {

  if(firstToggle === false) {
    sideMenu.style.display = 'block';
    tl.to('.toggle-1' , {rotate: '40', transformOrigin: '20% 40%', duration: 0.5}, 'dissapear')
      .to('.toggle-2', {opacity: 0 , duration: 0.3}, 'dissapear')
      .to('.toggle-3', {rotate: '-40', transformOrigin: '20% 40%', duration: 0.5}, 'dissapear')
      .from('.side-menu', {x: '-100%', duration: 0.4}, 'dissapear')
      .from('.side-list li', {ease: "back.out(2)", x: '-100%', stagger: 0.10}, 'dissapear');
    firstToggle = true;
  } else {
    if(!tl.reversed()) {
      tl.reverse();
    } else {
      tl.play();
    }
  }
});

// 