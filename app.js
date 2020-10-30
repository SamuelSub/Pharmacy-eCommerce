const toggle = document.querySelector('.toggle');
let tl = gsap.timeline(); 

document.addEventListener('click', (e) => {
  if((e.target.className === 'toggle-1') || (e.target.className === 'toggle-2') || (e.target.className === 'toggle-3') && tl.reversed()) {
    tl.play();
    const hero = document.querySelector('.hero');
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
      .from('.side-menu', {x: '-100%', opacity: 1, duration: 0.5}, 'dissapear')
      .fromTo('h2', {x: '-100%'}, {x: 0, duration: 0.3, stagger: 0.1}, 'dissapear');
  } else {
    tl.reverse();
  }
});