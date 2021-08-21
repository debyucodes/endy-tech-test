console.log('Hi! Welcome to the my console');

const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const back = document.querySelector('.back');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
let windowWidth;

// function to fire overlay when user exits browswer
document.addEventListener('mouseleave', e => {
  windowWidth = window.innerWidth;
  e.preventDefault();
  console.log('hi');
  // only fires when browser is larger than 1320px
  if(windowWidth > 1100) {
    overlay.classList.add('show');
  } else if (windowWidth < 1099) {
    return;
  }
})

// close overlay when user clicks X
close.addEventListener('click', e => {
  e.preventDefault();
  console.log('hehe back to shopping')
  overlay.classList.remove('show')
})

// close overlay when user clicks "back to shopping"
back.addEventListener('click', e => {
  e.preventDefault();
  overlay.classList.remove('show')
})

// open burger menu
burger.addEventListener('click', e => {
  e.preventDefault();
  burger.classList.toggle('fa-chevron-left');
  mobileMenu.classList.toggle('mobile-menu-open');
})
