document.addEventListener('DOMContentLoaded', () => {

  // ------------------------ Menu ------------------------

  const hamburgerBtn = document.querySelector('.hamburger'),
    menuList = document.querySelector('.menu'),
    closeMenuBtn = document.querySelector('[data-menu-close]');

  hamburgerBtn.addEventListener('click', () => {
    menuList.classList.add('active');
    document.body.style.overflow = 'hidden';
  })

  menuList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('active')) {
      target.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (target.classList.contains('close_menu')) {
      menuList.classList.remove('active');
      document.body.style.overflow = '';
    }
  })


  // ---------------------- Show tabs ----------------------

  const tabsItem = document.querySelectorAll('[data-tabs]'),
    descriptionItem = document.querySelectorAll('[data-descr]'),
    parentNode = document.querySelector('.working_nav-list');

  /**
   * Adds an active class to the selected tab
   * @param event
   */
  function showTabContent(event) {
    tabsItem.forEach(item => {
      item.classList.remove('active');
    });

    descriptionItem.forEach(item => {
      item.classList.remove('active_tab');
    })

    tabsItem.forEach((item, i) => {
      if (item == event.target) {
        item.classList.add('active');
        descriptionItem[i].classList.add('active_tab');
      }
    })
  }

  parentNode.addEventListener('click', showTabContent);


  // ---------------------- Modal ----------------------

  const buttonsFromModal = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector('.modal');

  function openModalWindow(event) {
    event.preventDefault();

    modalWindow.classList.add('show');
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '17px';
  }

  function closeModalWindow() {
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
  }

  buttonsFromModal.forEach(btn => {
    btn.addEventListener('click', openModalWindow)
  });

  modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
      closeModalWindow();
    }
  });

  // ---------------------- Search panel ----------------------

  const searchBtn = document.querySelector('.search-icon'),
    searchPanel = document.querySelector('.search_panel');

  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.parentNode == searchBtn) {
      searchPanel.classList.toggle('show_panel');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModalWindow();
    }
    if (event.code === 'Escape' && searchPanel.classList.contains('show_panel')) {
      searchPanel.classList.remove('show_panel');
    }
    if (event.code === 'Escape' && menuList.classList.contains('active')) {
      menuList.classList.remove('active');
    }
  })

})