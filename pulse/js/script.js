$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left arrow" srcset=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="left arrow" srcset=""></button>',
    response: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },
    ]
  });

  let btnAbout = document.querySelectorAll('.catalog-item__link'),
    linkToBack = document.querySelectorAll('.link__to__back');

  btnAbout.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.parentNode.classList.contains('catalog-item__content_active')) {
        e.target.parentNode.classList.toggle('catalog-item__content_active');
        e.target.parentNode.parentNode.querySelector('.catalog-item__list')
          .classList.add('catalog-item__list_active');
      }
    })
  });

  linkToBack.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.parentNode.classList.contains('catalog-item__list_active')) {
        e.target.parentNode.classList.toggle('catalog-item__list_active');
        e.target.parentNode.parentNode.querySelector('.catalog-item__content')
          .classList.add('catalog-item__content_active');
      }
    })
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
      .eq($(this).index()).addClass('catalog__content_active');
  });


  // Modal

  $('[data-modal=consultation]').on('click', () => {
    $('.overlay, #consultation').fadeIn('fast');
  });

  $('.modal__close').on('click', () => {
    $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
  })

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('fast');
    })
  })


  //Validate

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7(999) 999-99-99");

  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  })

  // Smooth scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
});

