"use strict";

$(document).ready(function () {
  var body = $('body'); // инициализация слайдера

  if (document.querySelector('.slider')) {
    $('.slider').slick({
      nextArrow: '<button type="button" class="slick-arrow slick-next btn dark_btn">Далее</button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev btn">Назад</button>',
      dots: true,
      infinite: false,
      draggable: false,
      adaptiveHeight: true
    });
  } // псевдо-селект


  function initPseudoSelect() {
    var selectSingle = document.querySelector('.__select');
    var selectSingle_title = selectSingle.querySelector('.__select__title');
    var selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
    selectSingle_title.addEventListener('click', function () {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
      } else {
        selectSingle.setAttribute('data-state', 'active');
      }
    });

    for (var i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', function (e) {
        selectSingle_title.textContent = e.target.textContent;
        selectSingle.setAttribute('data-state', '');
      });
    }
  }

  if (document.querySelector('.__select')) initPseudoSelect(); // переключение блоков в "Запуск по очередям", слайдер 1

  $('input[name="queue_launch"]').click(function () {
    var target = $('.queue_launch_' + $(this).val());
    $('.queue_launch').not(target).hide(0);
    target.fadeIn(300);
  }); // Модалка "Скачать инструкцию"

  function initModalDownloadInstructions() {
    var instructionsBtn = $('.instructions__btn'),
        instructionsModal = $('.modal_instructions'),
        instructionsModalContent = $('.modal_instructions__content'),
        instructionsModalClose = $('.modal_instructions .close');
    instructionsBtn.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      instructionsModalContent.css('overflow-y', 'auto');
      instructionsModalContent.css('overflow-x', 'hidden');
      instructionsModal.removeClass('hidden');
    });
    instructionsModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      instructionsModal.addClass('hidden');
    });
  }

  initModalDownloadInstructions(); // пересчет высоты слайдера
  // action = 'increase' / 'decrease' (увеличить / уменьшить высоту), значение изменения

  function changeSliderHeight(action, value) {
    var slickList = document.querySelector('.slick-list');
    var slickListHeight = Number.parseInt(slickList.style.height);

    if (action === 'increase') {
      return slickList.style.height = slickListHeight + value + 'px';
    }

    return slickList.style.height = slickListHeight - value + 'px';
  } // добавление новых строк в таблицу с очередями, слайдер 1


  var queue_tbody = $('.queue_launch_yes tbody');
  var queue_count = 3;
  $('.queue_btn').click(function (event) {
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u2116".concat(queue_count, "</td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input datepicker_input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ");
    event.preventDefault();
    queue_tbody.append(new_row);
    queue_count += 1;
    changeSliderHeight('increase', 39);
  }); // удаление новых строк в таблицу с очередями, слайдер 1

  $('.queue_btn_remove').click(function (event) {
    event.preventDefault();

    if (queue_count > 3) {
      queue_tbody.children().last().remove();
      queue_count -= 1;
      changeSliderHeight('decrease', 39);
    }
  }); // добавление новых строк в таблицу с иными источниками, слайдер 4

  var water_source_tbody = $('.other_water_sources tbody');
  var water_source_count = 2;
  $('.add_source_btn').click(function (event) {
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ";
    event.preventDefault();
    water_source_tbody.append(new_row);
    water_source_count++;
    changeSliderHeight('increase', 39);
  }); // удаление новых строк в таблице с иными источниками, слайдер 4

  $('.add_source_btn_remove').click(function (event) {
    event.preventDefault();

    if (water_source_count > 3) {
      water_source_tbody.children().last().remove();
      water_source_count -= 1;
      changeSliderHeight('decrease', 39);
    }
  }); // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4

  var land_coverage_tbody = $('.land_coverage_characteristics tbody');
  var land_coverage_count = 2;
  $('.add_coverage_btn').click(function (event) {
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ";
    event.preventDefault();
    land_coverage_tbody.append(new_row);
    land_coverage_count++;
    changeSliderHeight('increase', 39);
  }); // удаление новых строк в таблицу с характеристиками земельных участков, слайдер 4

  $('.add_coverage_btn_remove').click(function (event) {
    event.preventDefault();

    if (land_coverage_count > 3) {
      land_coverage_tbody.children().last().remove();
      land_coverage_count -= 1;
      changeSliderHeight('decrease', 39);
    }
  }); // datepicker

  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru']);
  }

  if (document.querySelector('.datepicker_input')) initDatepickers(); // маски

  if (document.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999");
  if (document.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99");
  if (document.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999");
  if (document.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999");
  if (document.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999");
  if (document.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999");
  if (document.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999"); // Блок "Являюсь представителем"

  function initCheckRepresentative() {
    var representativeBlock = document.querySelector('.representative');
    var isRepresentative = representativeBlock.querySelector('.yes');
    var isNotRepresentative = representativeBlock.querySelector('.no');
    var representativeAddDocsBlock = document.querySelector('.representative_add_docs_block');
    isRepresentative.addEventListener('change', function () {
      return representativeAddDocsBlock.classList.remove('hidden');
    });
    isNotRepresentative.addEventListener('change', function () {
      return representativeAddDocsBlock.classList.add('hidden');
    });
  }

  if (document.querySelector('.representative')) initCheckRepresentative();
});