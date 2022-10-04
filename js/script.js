document.addEventListener('DOMContentLoaded', () => {

  // Variables
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    counters = document.querySelectorAll('.skills__rating-counter'),
    lines = document.querySelectorAll('.skills__bar__item-footer div'),
    overlay = document.querySelector('.menu__overlay');

  /**
   * Open hamburger menu
   */
  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  });

  /**
   * Close menu, click on closeElem
   */
  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  /**
   * Close menu, click on overlay
   */
  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
  })


  counters.forEach((item, i) => {
    lines[i].style.width = item.textContent;
  })


});