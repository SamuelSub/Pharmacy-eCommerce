const toggle = document.querySelector('.toggle');
let tl = gsap.timeline(); 

document.addEventListener('click', (e) => {
  if(e.target.className === 'toggle-1') {
    tl.to('.toggle-1' , {rotate: '45deg', duration: 1});
  }
});