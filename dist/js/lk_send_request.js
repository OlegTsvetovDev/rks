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


  function initPseudoSelect(selectSingle) {
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
        selectSingle_title.value = e.target.textContent;
        selectSingle.setAttribute('data-state', ''); // проверка на наличие модуля пересчета итогового адреса для вызова пересчета

        if (document.querySelector('.address__concated')) addressConcatination();
      });
    } // скрытие при клике по body кроме .__select


    var body = document.querySelector('body');
    body.addEventListener('click', function (e) {
      var eClassList = e.target.classList;
      var trigger = eClassList[0] !== '__select__title' && eClassList[0] !== '__select__content' && eClassList[0] !== '__select__input';
      if (trigger) selectSingle.setAttribute('data-state', '');
    });
  } // псевдо-селекты


  function initPseudoSelects() {
    var selects = document.querySelectorAll('.__select');
    selects.forEach(function (select) {
      return initPseudoSelect(select);
    });
  }

  if (document.querySelector('.__select')) initPseudoSelects(); // Пересчет итогового адреса

  var concated = document.querySelector('.address__concated');
  var locality = document.querySelector('.address__locality');
  var district = document.querySelector('.address__district');
  var microdistrict = document.querySelector('.address__microdistrict');
  var street = document.querySelector('.address__street');
  var housing = document.querySelector('.address__housing');
  var house = document.querySelector('.address__house');

  function addressConcatination() {
    setTimeout(function () {
      concated.textContent = "\n                              ".concat(locality.value ? 'г. ' + locality.value + ', ' : '', "\n                              ").concat(district.value ? district.value + ' район, ' : '', "\n                              ").concat(microdistrict.value ? microdistrict.value + ' микрорайон, ' : '', "\n                              ").concat(street.value ? 'ул. ' + street.value + ', ' : '', "\n                              ").concat(housing.value ? 'корпус ' + housing.value + ', ' : '', "\n                              ").concat(house.value ? 'дом ' + house.value + '.' : '', "\n                             ");
    }, 100);
  }

  function initAddressConcatination() {
    locality.addEventListener('change', function () {
      return addressConcatination();
    });
    district.addEventListener('change', function () {
      return addressConcatination();
    });
    microdistrict.addEventListener('change', function () {
      return addressConcatination();
    });
    street.addEventListener('change', function () {
      return addressConcatination();
    });
    housing.addEventListener('change', function () {
      return addressConcatination();
    });
    house.addEventListener('change', function () {
      return addressConcatination();
    });
  }

  if (document.querySelector('.address__concated')) initAddressConcatination(); // переключение блоков в "Запуск по очередям", слайдер 1

  function initQueueLaunch() {
    var queueLaunchInput = $('input[name="queue_launch"]');
    var queueLaunchLabel = queueLaunchInput.parent();
    queueLaunchLabel.click(function () {
      var target = $('.queue_launch_' + $(this).children().val());
      $('.queue_launch').not(target).hide(0);
      target.fadeIn(300);
    });
  }

  if (document.querySelector('input[name="queue_launch"]')) initQueueLaunch(); // Модалка "Скачать инструкцию"

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

  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions(); // пересчет высоты слайдера
  // action = 'increase' / 'decrease' (увеличить / уменьшить высоту), value = значение изменения

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
    changeSliderHeight('increase', 39); // инициализация дейтпикера на последней добавленной строке

    var lastChildDatepicker = queue_tbody.children().last().find('.datepicker_input');
    lastChildDatepicker.datepicker($.datepicker.regional['ru']);
    lastChildDatepicker.mask("99.99.9999", {
      autoclear: false
    });
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

    if (water_source_count > 2) {
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
  }); // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4

  $('.add_coverage_btn_remove').click(function (event) {
    event.preventDefault();

    if (land_coverage_count > 2) {
      land_coverage_tbody.children().last().remove();
      land_coverage_count -= 1;
      changeSliderHeight('decrease', 39);
    }
  }); // datepicker

  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru']);
  }

  if (document.querySelector('.datepicker_input')) initDatepickers(); // маски

  if (document.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999", {
    autoclear: false
  });
  if (document.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99", {
    autoclear: false
  });
  if (document.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999", {
    autoclear: false
  });
  if (document.querySelector('.passport_serial_input')) $('.passport_serial_input').mask("99 99", {
    autoclear: false
  });
  if (document.querySelector('.passport_number_input')) $('.passport_number_input').mask("999999", {
    autoclear: false
  });
  if (document.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999", {
    autoclear: false
  });
  if (document.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999", {
    autoclear: false
  });
  if (document.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999", {
    autoclear: false
  });
  if (document.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999", {
    autoclear: false
  });
  if (document.querySelector('.integer_input')) $('.integer_input').on('input', function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
  if (document.querySelector('.float_input')) $('.float_input').keypress(function (e) {
    var trigger = (e.which != 46 || $(this).val().indexOf('.') != -1) && (e.which < 48 || e.which > 57);
    if (trigger) e.preventDefault();
  }); // Блок "Являюсь представителем"

  function initCheckRepresentative() {
    var representativeBlock = document.querySelector('.representative');
    var isRepresentative = representativeBlock.querySelector('.yes');
    var isRepresentativeChecked = isRepresentative.checked;
    var isRepresentativeLabel = isRepresentative.parentNode;
    var isNotRepresentative = representativeBlock.querySelector('.no');
    var isNotRepresentativeLabel = isNotRepresentative.parentNode;
    var representativeAddDocsBlock = document.querySelector('.representative_add_docs_block'); // проверка начального состояния чекбокса

    if (isRepresentativeChecked) representativeAddDocsBlock.classList.remove('hidden');
    isRepresentative.addEventListener('click', function () {
      return representativeAddDocsBlock.classList.remove('hidden');
    });
    isRepresentativeLabel.addEventListener('click', function () {
      return representativeAddDocsBlock.classList.remove('hidden');
    });
    isNotRepresentative.addEventListener('click', function () {
      return representativeAddDocsBlock.classList.add('hidden');
    });
    isNotRepresentativeLabel.addEventListener('click', function () {
      return representativeAddDocsBlock.classList.add('hidden');
    });
  }

  if (document.querySelector('.representative')) initCheckRepresentative(); // Блок "Холодное водоснабжение"

  function initColdWaterSupply() {
    var connectionToColdWater = document.querySelector('.connection_to_cold_water');
    var connectionToColdWaterLabel = connectionToColdWater.parentNode;
    var isConnectionToColdWaterChecked = connectionToColdWater.checked;
    var coldWaterToggle = document.querySelector('.cold_water_supply_toggle');
    if (isConnectionToColdWaterChecked) coldWaterToggle.classList.remove('hidden');
    connectionToColdWaterLabel.addEventListener('click', function () {
      var isConnectionToColdWaterChecked = !connectionToColdWater.checked;

      if (isConnectionToColdWaterChecked) {
        coldWaterToggle.classList.remove('hidden');
        changeSliderHeight('increase', 1000);
      } else {
        coldWaterToggle.classList.add('hidden');
        changeSliderHeight('decrease', 1000);
      }
    });
  }

  if (document.querySelector('.connection_to_cold_water')) initColdWaterSupply(); // Блок "Водоотведение"

  function initDrainage() {
    var connectionToDrainage = document.querySelector('.connection_to_drainage');
    var connectionToDrainageLabel = connectionToDrainage.parentNode;
    var isConnectionToDrainageChecked = connectionToDrainage.checked;
    var drainageToggle = document.querySelector('.drainage_toggle');
    if (isConnectionToDrainageChecked) drainageToggle.classList.remove('hidden');
    connectionToDrainageLabel.addEventListener('click', function () {
      var isConnectionToDrainageChecked = !connectionToDrainage.checked;

      if (isConnectionToDrainageChecked) {
        drainageToggle.classList.remove('hidden');
        changeSliderHeight('increase', 750);
      } else {
        drainageToggle.classList.add('hidden');
        changeSliderHeight('decrease', 750);
      }
    });
  }

  if (document.querySelector('.connection_to_drainage')) initDrainage(); // переключение радио по клику на лейбл

  $('.radio').parent().click(function () {
    $(this).children('.radio').prop('checked', true);
  }); // переключение чекбокса по клику на лейбл

  function initCheckboxLabels() {
    var checkboxes = $('.checkbox');
    var labels = checkboxes.parent();
    checkboxes.click(function () {
      var checkbox = $(this);
      var isCheckboxChecked = checkbox.is(':checked');
      checkbox.prop('checked', !isCheckboxChecked);
    });
    labels.click(function () {
      var checkbox = $(this).children();
      var isCheckboxChecked = checkbox.is(':checked');
      checkbox.prop('checked', !isCheckboxChecked);
    });
  }

  if (document.querySelector('.checkbox')) initCheckboxLabels();
});