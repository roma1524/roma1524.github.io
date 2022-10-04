document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main_nav'),
    hamburgerBtn = document.querySelector('.menu_link');

  hamburgerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (menu.classList.contains('main_nav_close')) {
      menu.classList.remove('main_nav_close');
      menu.classList.add('main_nav_open');
    } else if (!menu.classList.contains('main_nav_close')) {
      menu.classList.remove('main_nav_open');
      menu.classList.add('main_nav_close');
    }
  })


})

