const toggle = document.querySelector('.menu-icon');
const hero = document.querySelector('.hero');
let firstToggle = false;
let tl = gsap.timeline(); 

toggle.addEventListener('click', (e) => {

  if(firstToggle === false) {
    const sideMenu = document.createElement('div');
    sideMenu.className = 'side-menu';
    hero.appendChild(sideMenu);
    const ul = document.createElement('ul');
    ul.className = 'side-ul';
    const li = document.createElement('li');
    li.innerHTML =`  
      <h2>Products</h2>
      <h2>About</h2>
      <h2>Contact</h2>`;
    ul.appendChild(li);
    sideMenu.appendChild(ul);
    tl.to('.toggle-1' , {rotate: '40', transformOrigin: '20% 40%', duration: 0.5}, 'dissapear')
      .to('.toggle-2', {opacity: 0 , duration: 0.3}, 'dissapear')
      .to('.toggle-3', {rotate: '-40', transformOrigin: '20% 40%', duration: 0.5}, 'dissapear')
      .from('.side-menu', {x: '-100%', duration: 0.4}, 'dissapear')
      .from('h2', {ease: "back.out(2)", x: '-100%'}, 'dissapear');
    firstToggle = true;
  } else {
    if(!tl.reversed()) {
      tl.reverse();
    } else {
      tl.play();
    }
  }
});