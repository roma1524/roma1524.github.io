/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener("DOMContentLoaded", () => {
  // Tabs

  const tabContainer = document.querySelector('.tabheader__items'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsHeaderItem = document.querySelectorAll('.tabheader__item');
  function hideTabContent() {
    tabsContent.forEach(el => {
      el.classList.add('display_hide');
      el.classList.remove('display_show', 'fade');
    });
    tabsHeaderItem.forEach(el => {
      el.classList.remove('tabheader__item_active');
    });
  }
  ;
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('display_show', 'fade');
    tabsContent[i].classList.remove('display_hide');
    tabsHeaderItem[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();
  tabContainer.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabsHeaderItem.forEach((el, i) => {
        if (target == el) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadLine = '2022-10-14';
  function getTimeRemaining(endTime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());
    if (t < 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / (1000 / 60) % 60);
      seconds = Math.floor(t / 1000) % 60;
    }
    return {
      'total': t,
      days,
      hours,
      minutes,
      seconds
    };
  }
  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock(); // Вызываем первый раз вручную, чтобы избежать задержки таймера

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = t.days < 10 ? `0${t.days}` : t.days;
      hours.innerHTML = t.hours < 10 ? `0${t.hours}` : t.hours;
      minutes.innerHTML = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
      seconds.innerHTML = t.seconds < 10 ? `0${t.seconds}` : t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadLine);

  // Modal

  const btns = document.querySelectorAll('[data-modal]'),
    btnClose = document.querySelector('[data-close]'),
    modalWindow = document.querySelector('.modal');
  function openModal() {
    modalWindow.classList.toggle('active');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }
  btns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  function closeModalWindow() {
    modalWindow.classList.toggle('active');
    document.body.style.overflow = '';
  }
  btnClose.addEventListener('click', closeModalWindow);
  modalWindow.addEventListener('click', event => {
    if (event.target === modalWindow) {
      closeModalWindow();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modalWindow.classList.contains('active')) {
      closeModalWindow();
    }
  });
  const modalTimerId = setTimeout(openModal, 15000);
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  // Add menu item in html (OOP)

  class MenuItems {
    constructor() {
      let container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.menu__field .container';
      this.container = container;
      this.menuItemsArr = [];
      this._fetchMenu();
      this.render();
    }
    _fetchMenu() {
      this.menuItemsArr = [{
        imgScr: 'img/tabs/vegy.jpg',
        title: 'Меню "Фитнес',
        alt: 'vegy',
        description: `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих 
            овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой 
            и высоким качеством!`,
        price: '229'
      }, {
        imgScr: 'img/tabs/elite.jpg',
        title: 'Меню “Премиум”',
        alt: 'elite',
        description: `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и
          качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в
          ресторан!`,
        price: '550'
      }, {
        imgScr: 'img/tabs/post.jpg',
        title: 'Меню “Премиум”',
        alt: 'post',
        description: `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
          продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество
          белков за счет тофу и импортных вегетарианских стейков.`,
        price: '430'
      }];
    }
    render() {
      const menuItemContainer = document.querySelector(this.container);
      this.menuItemsArr.forEach(item => {
        const element = new ItemMenu(item);
        menuItemContainer.innerHTML += element.render();
      });
    }
  }
  class ItemMenu {
    constructor(_ref) {
      let {
        imgScr,
        title,
        description,
        price,
        alt
      } = _ref;
      this.imgSrc = imgScr;
      this.title = title;
      this.description = description;
      this.price = price;
      this.alt = alt;
    }
    render() {
      return `<div class="menu__item">
                <img src=${this.imgSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>`;
    }
  }
  new MenuItems();

  // Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'Loading',
    success: "Success! We'll call you",
    failure: 'Something wrong'
  };
  forms.forEach(form => {
    postData(form);
  });
  function postData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      const dataToJson = JSON.stringify(object);
      request.send(dataToJson);
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessage.textContent = message.success;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          statusMessage.textContent = message.failure;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        }
      });
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map