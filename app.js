const toggle = document.querySelector('.toggle');
let tl = gsap.timeline(); 
let clicked = false;

document.addEventListener('click', (e) => {
  if((e.target.className === 'toggle-1' || 'toggle-2' || 'toggle-3') && clicked === false) {
    tl.to('.toggle-1' , {rotate: '40', transformOrigin: '20% 0%', duration: 0.5})
      .to('.toggle-2', {opacity: 0 , duration: 0.3}, "-=1")
      .to('.toggle-3', {rotate: '-40', transformOrigin: '20% 0%', duration: 0.5}, 0.5);
      clicked = true;
  } else {
    // tl.to('.toggle-1' , {rotate: '0', duration: 0.5}, 0.3)
    //   .to('.toggle-2', {opacity: 1 , duration: 0.3}, 0.3)
    //   .to('.toggle-3', {rotate: '0', duration: 0.5}, 0.3);
    clicked = false;
  }
});