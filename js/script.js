document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  });
  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  const counters = document.querySelectorAll('.skills__rating-counter'),
    lines = document.querySelectorAll('.skills__bar__item-footer div');

  counters.forEach((item, i) => {
    lines[i].style.width = item.textContent;
  })


});