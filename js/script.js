const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerButton.addEventListener('click', function()  {
   burgerMenu.classList.toggle('burger-menu--active');
   burgerButton.classList.toggle('burger-active');
});



const menu = document.querySelector('.burger-menu');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    menu.classList.remove('burger-menu--active');
   } else {
  }
});