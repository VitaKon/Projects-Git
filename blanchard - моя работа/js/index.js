//header swiper
new Swiper('.header__swiper', {
  loop: true,
  grabCursor: true,
});

// choices
// const choices = () => {
//   const elements = document.querySelectorAll('.header__choices-menu');
//   elements.forEach(el => {
//     const choices = new Choices(el, {
//       searchEnabled: false,
//     });
//   })
// }

// choices();

// choices 2
const choices2 = () => {
  const element2 = document.querySelector('.gallery__choice-menu');
  const choices2 = new Choices(element2, {
    searchEnabled: false,
  });
}

choices2();

// swiper
new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    dynamicBullets: true,
    grabCursor: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});


// accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
})

//events swiper
new Swiper('.events__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  rewind: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});

//events swiper
new Swiper('.projects__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//maps
ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("Mymap1", {
    center: [55.758, 37.601],
    zoom: 14
  });
  // Создание геообъекта с типом точка (метка).
  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../imeg/map.svg',
    iconImageSize: [20, 20],
    // iconImageOffset: [-7, -42]
  });
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

//
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new window.JustValidate('.footer__form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const ph = tel.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      }
    },
  },
  messages: {
    name: {
      required: "Вы не ввели имя",
      minLength: "Не менее 2 символов",
      maxLength: "Не более 30 символов"
    },
    tel: {
      required: "Вы не ввели телефон",
      function: "Недопустимый формат"
    }
  }
});







