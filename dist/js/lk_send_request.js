"use strict";

$(document).ready(function () {
  var body = $('body'); // упрощенная подача заявления

  var simpleSendRequest = false;
  if (document.querySelector('.requests_form.simple')) simpleSendRequest = true; // инициализация слайдера

  if (document.querySelector('.slider')) {
    $('.slider').slick({
      nextArrow: '<button type="button" class="slick-arrow slick-next btn dark_btn">Далее</button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev btn">Назад</button>',
      dots: true,
      infinite: false,
      draggable: false,
      adaptiveHeight: true
    });
  } // переключение радио по клику на лейбл


  $('.radio').parent().click(function () {
    $(this).children('.radio').prop('checked', true);
  }); // переключение чекбокса по клику на лейбл
  // TODO: ломается на новых очередях в слайдере 4

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

  if (document.querySelector('.checkbox')) initCheckboxLabels(); // псевдо-селект

  function initPseudoSelect(select) {
    var selectTitle = select.querySelector('.__select__title');
    var selectLabels = select.querySelectorAll('.__select__label');
    selectTitle.addEventListener('click', function () {
      if ('active' === select.getAttribute('data-state')) {
        select.setAttribute('data-state', '');
      } else {
        select.setAttribute('data-state', 'active');
      }
    });

    for (var i = 0; i < selectLabels.length; i++) {
      selectLabels[i].addEventListener('click', function (e) {
        selectTitle.textContent = e.target.textContent;
        selectTitle.value = e.target.textContent;
        select.setAttribute('data-state', ''); // вызов пересчета адреса в случае, если модуль активен

        var addressNode = this.parentNode.parentNode.parentNode.parentNode.parentNode;
        var thisAddressConcatination = addressNode.querySelector('.address__concated');
        if (thisAddressConcatination) addressConcatination(addressNode);
      });
    } // скрытие при клике по body кроме .__select


    var body = document.querySelector('body');
    body.addEventListener('click', function (e) {
      var eClassList = e.target.classList;
      var trigger = eClassList[0] !== '__select__title' && eClassList[0] !== '__select__content' && eClassList[0] !== '__select__input';
      if (trigger) select.setAttribute('data-state', '');
    });
  } // стартовый инит псевдо-селектов


  function initPseudoSelects(baseNode) {
    var selects = document.querySelectorAll('.__select');
    selects.forEach(function (select) {
      return initPseudoSelect(select);
    });
  }

  if (document.querySelector('.__select')) initPseudoSelects(document); // Пересчет итогового адреса

  function addressConcatination(baseNode) {
    var concated = baseNode.querySelector('.address__concated');
    var locality = baseNode.querySelector('.address__locality');
    var district = baseNode.querySelector('.address__district');
    var microdistrict = baseNode.querySelector('.address__microdistrict');
    var street = baseNode.querySelector('.address__street');
    var housing = baseNode.querySelector('.address__housing');
    var house = baseNode.querySelector('.address__house');
    setTimeout(function () {
      var resultLocality = "".concat(locality.value ? 'г. ' + locality.value : '');
      var resultdDistrict = "".concat(district.value ? ', ' + district.value + ' район' : '');
      var resultMicrodistrict = "".concat(microdistrict.value ? ', микрорайон ' + microdistrict.value : '');
      var resultStreet = "".concat(street.value ? ', ул. ' + street.value : '');
      var resultHousing = "".concat(housing.value ? ', корпус ' + housing.value : '');
      var resultHouse = "".concat(house.value ? ', дом ' + house.value : '');
      var resultAddress = "".concat(resultLocality + resultdDistrict + resultMicrodistrict + resultStreet + resultHousing + resultHouse + '.');
      if (resultAddress[0] === ',') resultAddress = resultAddress.slice(1);
      concated.textContent = resultAddress;
    }, 100);
  }

  function initAddressConcatination(baseNode) {
    var concated = baseNode.querySelector('.address__concated');
    var locality = baseNode.querySelector('.address__locality');
    var district = baseNode.querySelector('.address__district');
    var microdistrict = baseNode.querySelector('.address__microdistrict');
    var street = baseNode.querySelector('.address__street');
    var housing = baseNode.querySelector('.address__housing');
    var house = baseNode.querySelector('.address__house');
    if (locality) locality.addEventListener('change', function () {
      return addressConcatination(baseNode);
    });
    if (district) district.addEventListener('change', function () {
      return addressConcatination(baseNode);
    });
    if (microdistrict) microdistrict.addEventListener('change', function () {
      return addressConcatination(baseNode);
    });
    if (street) street.addEventListener('change', function () {
      return addressConcatination(baseNode);
    });
    if (housing) housing.addEventListener('change', function () {
      return addressConcatination(baseNode);
    });
    if (house) house.addEventListener('change', function () {
      return addressConcatination(baseNode);
    });
  }

  var addressBlocks = document.querySelectorAll('.address__concated');
  if (addressBlocks) addressBlocks.forEach(function (addressBlock) {
    return initAddressConcatination(addressBlock.parentNode.parentNode.parentNode);
  }); // переключение блоков в "Запуск по очередям", слайдер 1

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
    var instructionsBtn = $('.instructions__btn');
    var instructionsModal = $('.modal_instructions');
    var instructionsModalContent = $('.modal_instructions__content');
    var instructionsModalClose = $('.modal_instructions .close');
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

  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions(); // изменение высоты слайдера
  // action = 'increase' / 'decrease' (увеличить / уменьшить высоту), value = значение изменения

  function changeSliderHeight(action, value) {
    var slickList = document.querySelector('.slick-list');
    var slickListHeight = Number.parseInt(slickList.style.height);

    if (action === 'increase') {
      return slickList.style.height = slickListHeight + value + 'px';
    }

    return slickList.style.height = slickListHeight - value + 'px';
  } // логика блоков очередей (добавление, удаление), 1 и 4 сладер


  function initMultipleQueues() {
    // состояние количества очередей
    var queue_count = -1; // пересчет текущего количества очередей, отраженных на странице

    function getCurrentQueueCount() {
      var nodes = document.querySelectorAll('.queue_launch_yes .field__table .table__body .table__row');
      var nodesLength = nodes.length;
      if (!nodesLength) return console.log('Не найдены строки очередей в таблице .queue_launch_yes .field__table');
      nodes.forEach(function (node) {
        return queue_count += 1;
      });
    }

    getCurrentQueueCount(); // инит слайдера в слайд 4

    function initQueueSlider() {
      $('.queue_slider').slick({
        dots: true,
        arrows: false
      });
    } // initQueueSlider()
    // добавление блоков очередей, 4 сладер
    // создание новой ноды


    function createNewNode() {
      var baseNode = document.querySelector('.queue_block');
      return baseNode.cloneNode(true);
    } // замена суффиксов в аттрибутах name в зависимости от номера очереди
    // заменят _0 на _<номер очереди>, ожидает окончание на _0 в базовой ноде


    function pasteNameSuffixes(node) {
      var subheader = node.querySelector('.form__subheader');
      subheader.innerText = "\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u2116".concat(queue_count); // все инпуты, слайд 4

      var inputs = node.querySelectorAll('input');
      inputs.forEach(function (input) {
        if (!input.name) return;
        var newName = input.name;
        newName += "_".concat(queue_count); // newName = newName.slice(0, -2) + `_${queue_count}`

        input.name = newName;
      }); // дивы с name = "show_name", слайд 4

      var divs = node.querySelectorAll('div#show_name');
      divs.forEach(function (div) {
        if (!div.id) return;
        var newName = div.id;
        newName += "_".concat(queue_count);
        div.id = newName;
      });
    } // рендер новой ноды в блок .step_5, 4 слайдера


    function renderNewNode(newNode) {
      var parentNode = document.querySelector('.step_5 .queue_slider');
      parentNode.append(newNode);
    } // удаление последней очереди


    function deleteLastNode() {
      var nodeContainer = $('.step_5 .queue_slider');
      nodeContainer.children().last().remove();
    } // TODO: дефект - не добавляется больше 3 слайдов
    // TODO: создать пустой слайдер и потом в него сложить все ноды, включая базовую?


    function addNewSlide(newNode) {
      $('.queue_slider').slick('slickAdd', queue_count + 1, newNode); // newNode.setAttribute('data-slick-index', queue_count)
      // $('.queue_slider').slick('slickAdd', '<div><h3>' + queue_count + '</h3></div>')
    }

    function removeLastSlide() {
      $('.queue_slider').slick('slickRemove');
    } // создание и рендер новой ноды, 4 слайдер


    function createAndRenderNewNode() {
      var newNode = createNewNode();
      pasteNameSuffixes(newNode);
      renderNewNode(newNode);
      initPseudoSelects(newNode.querySelector('.__select'));
      initMasks(newNode);
      initColdWaterSupply(newNode);
      initDrainage(newNode);
      initAddressConcatination(newNode); // addNewSlide(newNode)
    } // добавление новых строк в таблицу с очередями, слайдер 1


    var queue_tbody = $('.queue_launch_yes tbody');
    $('.queue_btn').click(function (e) {
      e.preventDefault();
      queue_count += 1;
      var new_row = "\n                      <tr class=\"table__row\">\n                        <td class=\"table__cell\">\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u2116".concat(queue_count, "</td>\n                        <td class=\"table__cell\">\n                          <input type=\"text\" class=\"field__input datepicker_input\" name=").concat('TechCondObj_QueueName_' + queue_count, " placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                        </td>\n                      </tr>\n                     ");
      queue_tbody.append(new_row);
      createAndRenderNewNode();
      changeSliderHeight('increase', 39); // инициализация дейтпикера на последней добавленной строке

      var lastChildDatepicker = queue_tbody.children().last().find('.datepicker_input');
      lastChildDatepicker.datepicker($.datepicker.regional['ru']);
      lastChildDatepicker.mask("99.99.9999", {
        autoclear: false
      });
    }); // удаление новых строк в таблицу с очередями, слайдер 1

    $('.queue_btn_remove').click(function (e) {
      e.preventDefault();

      if (queue_count >= 1) {
        queue_count -= 1;
        queue_tbody.children().last().remove();
        deleteLastNode();
        changeSliderHeight('decrease', 39);
        removeLastSlide();
      }
    }); // очистка всех очередей в таблице при переключении "Запуск по очередям" в нет, слайд 1

    function clearTableQueues(queueTable) {
      var queueRows = queueTable.querySelector('tbody').querySelectorAll('.table__row');
      queueRows.forEach(function (queueRow, i) {
        if (i === 0) return;
        queueRow.remove();
      });
      queue_count = 0;
    } // очистка всех развернутых очередей при переключении "Запуск по очередям" в нет, слайд 4


    function clearDetailedQueues(queueSlider) {
      var queueBlocks = queueSlider.querySelectorAll('.queue_block');
      queueBlocks.forEach(function (queueBlock, i) {
        if (i === 0) return;
        queueBlock.remove();
      });
    } // очистка всех очередей при переключении "Запуск по очередям" в нет, слайд 1, 4


    function clearAllQueues() {
      var queueTable = document.querySelector('.queue_launch_yes table');
      var queueSlider = document.querySelector('.queue_slider');
      clearTableQueues(queueTable);
      clearDetailedQueues(queueSlider);
    }

    function initClearAllQueues() {
      var step2 = document.querySelector('.step_2');
      var queueLaunchYes = step2.querySelector('.queue_launch_yes');
      var queueLaunchNo = step2.querySelector('.queue_launch_no');
      var queueBtns = step2.querySelectorAll('input[name="queue_launch"]'); // let agreeQueueDelete = false
      // создается модалка

      function createModal() {
        var modalPopupConfirm = "\n                            <section class=\"modal modal_popup_confirm\">\n                              <div class=\"modal__content modal_popup_confirm__content\">\n                                <div class=\"close\"></div>\n                                <div class=\"modal__text\">\n                                  \u0411\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C. \u0423\u0434\u0430\u043B\u0438\u0442\u044C?\n                                </div>\n                                <div class=\"form__field\">\n                                  <button class=\"form__submit btn btn_agree\">\u0414\u0430</button>\n                                  <button class=\"form__submit btn btn_abort\">\u041D\u0435\u0442</button>\n                                </div>\n                              </div>\n                            </section>\n                           ";
        document.body.insertAdjacentHTML('beforeend', modalPopupConfirm);
      } // добавление прослушки эвентов у модалки


      function addListenersToModal() {
        var modalPopupConfirm = document.querySelector('.modal_popup_confirm');
        var closeModal = modalPopupConfirm.querySelector('.close');
        var abortModal = modalPopupConfirm.querySelector('.btn_abort');
        var btnAgree = modalPopupConfirm.querySelector('.btn_agree');

        var handleCloseModal = function handleCloseModal() {
          queueBtns.forEach(function (queueBtn) {
            if (queueBtn.value === 'yes') queueBtn.checked = true;
            queueLaunchYes.classList.remove('hidden');
            queueLaunchNo.classList.add('hidden');
          });
          modalPopupConfirm.remove();
        };

        var handleProceedModal = function handleProceedModal() {
          clearAllQueues();
          modalPopupConfirm.remove();
        };

        closeModal.addEventListener('click', handleCloseModal);
        abortModal.addEventListener('click', handleCloseModal);
        btnAgree.addEventListener('click', handleProceedModal);
      }

      function handleClick() {
        createModal();
        addListenersToModal();
      }

      queueBtns.forEach(function (queueBtn) {
        if (queueBtn.value === "no") queueBtn.parentNode.addEventListener('click', handleClick);
      });
    }

    initClearAllQueues();
  }

  if (document.querySelector('.queue_launch_yes')) initMultipleQueues(); // добавление новых строк в таблицу с иными источниками, слайдер 4

  var water_source_tbody = $('.other_water_sources tbody');
  var water_source_count = 2;
  $('.add_source_btn').click(function (e) {
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ";
    e.preventDefault();
    water_source_tbody.append(new_row);
    water_source_count++;
    changeSliderHeight('increase', 39);
  }); // удаление новых строк в таблице с иными источниками, слайдер 4

  $('.add_source_btn_remove').click(function (e) {
    e.preventDefault();

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove();
      water_source_count--;
      changeSliderHeight('decrease', 39);
    }
  }); // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4

  var land_coverage_tbody = $('.land_coverage_characteristics tbody');
  var land_coverage_count = 2;
  $('.add_coverage_btn').click(function (e) {
    e.preventDefault();
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ";
    land_coverage_tbody.append(new_row);
    land_coverage_count++;
    changeSliderHeight('increase', 39);
  }); // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4

  $('.add_coverage_btn_remove').click(function (event) {
    event.preventDefault();

    if (land_coverage_count > 2) {
      land_coverage_tbody.children().last().remove();
      land_coverage_count--;
      changeSliderHeight('decrease', 39);
    }
  }); // datepicker

  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru']);
  }

  if (document.querySelector('.datepicker_input')) initDatepickers(); // маски

  function initMasks(parentNode) {
    if (parentNode.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999", {
      autoclear: false
    });
    if (parentNode.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99", {
      autoclear: false
    });
    if (parentNode.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999", {
      autoclear: false
    });
    if (parentNode.querySelector('.passport_serial_input')) $('.passport_serial_input').mask("99 99", {
      autoclear: false
    });
    if (parentNode.querySelector('.passport_number_input')) $('.passport_number_input').mask("999999", {
      autoclear: false
    });
    if (parentNode.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999", {
      autoclear: false
    });
    if (parentNode.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999", {
      autoclear: false
    });
    if (parentNode.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999", {
      autoclear: false
    });
    if (parentNode.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999", {
      autoclear: false
    });
    if (parentNode.querySelector('.integer_input')) $('.integer_input').on('input', function () {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
    if (parentNode.querySelector('.float_input')) $('.float_input').keypress(function (e) {
      var trigger = (e.which != 46 || $(this).val().indexOf('.') != -1) && (e.which < 48 || e.which > 57);
      if (trigger) e.preventDefault();
    });
  }

  initMasks(document); // Блок "Являюсь представителем"

  function initCheckRepresentative() {
    var representativeBlock = document.querySelector('.representative');
    var isRepresentative = representativeBlock.querySelector('.yes');
    var isRepresentativeChecked = isRepresentative.checked;
    var isRepresentativeLabel = isRepresentative.parentNode;
    var isNotRepresentative = representativeBlock.querySelector('.no');
    var isNotRepresentativeLabel = isNotRepresentative.parentNode;
    var representativeAddDocsBlock = document.querySelector('.representative_add_docs_block'); // проверка начального состояния чекбокса

    if (isRepresentativeChecked) representativeAddDocsBlock.classList.remove('hidden');
    if (!isRepresentativeChecked) representativeAddDocsBlock.classList.add('hidden');
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

  function initColdWaterSupply(baseNode) {
    var connectionToColdWater = baseNode.querySelector('.connection_to_cold_water');
    var connectionToColdWaterLabel = connectionToColdWater.parentNode;
    var isConnectionToColdWaterChecked = connectionToColdWater.checked;
    var coldWaterToggle = baseNode.querySelector('.cold_water_supply_toggle');
    if (isConnectionToColdWaterChecked) coldWaterToggle.classList.remove('hidden');
    if (!isConnectionToColdWaterChecked) coldWaterToggle.classList.add('hidden');
    connectionToColdWaterLabel.addEventListener('click', function () {
      isConnectionToColdWaterChecked = !isConnectionToColdWaterChecked;
      var blockHeight = 1000;
      if (simpleSendRequest) blockHeight = 225;

      if (isConnectionToColdWaterChecked) {
        coldWaterToggle.classList.remove('hidden');
        changeSliderHeight('increase', blockHeight);
      } else {
        coldWaterToggle.classList.add('hidden');
        changeSliderHeight('decrease', blockHeight);
      }
    });
  }

  var queueBlocks = document.querySelectorAll('.queue_block');
  if (queueBlocks) queueBlocks.forEach(function (queueBlock) {
    return initColdWaterSupply(queueBlock);
  }); // Блок "Водоотведение"
  // TODO: добавить проверку при редактиваронии документа, когда уже существует ряд родительских нод

  function initDrainage(baseNode) {
    var connectionToDrainage = baseNode.querySelector('.connection_to_drainage');
    var connectionToDrainageLabel = connectionToDrainage.parentNode;
    var isConnectionToDrainageChecked = connectionToDrainage.checked;
    var drainageToggle = baseNode.querySelector('.drainage_toggle');
    if (isConnectionToDrainageChecked) drainageToggle.classList.remove('hidden');
    if (!isConnectionToDrainageChecked) drainageToggle.classList.add('hidden');
    connectionToDrainageLabel.addEventListener('click', function () {
      isConnectionToDrainageChecked = !isConnectionToDrainageChecked;
      var blockHeight = 750;
      if (simpleSendRequest) blockHeight = 225;

      if (isConnectionToDrainageChecked) {
        drainageToggle.classList.remove('hidden');
        changeSliderHeight('increase', blockHeight);
      } else {
        drainageToggle.classList.add('hidden');
        changeSliderHeight('decrease', blockHeight);
      }
    });
  }

  if (queueBlocks) queueBlocks.forEach(function (queueBlock) {
    return initDrainage(queueBlock);
  }); //#region женин код

  if ($('input[name="requesttype_id"]').val() == '10002') $('input[name="personbasis"][value="05"]').parent().attr('style', 'display:none;');

  function getTitle(el) {
    return el.siblings(".required").text();
  }

  var form = $('form');
  $("input[type='submit']").click(function (e) {
    var activeElement = $(document.activeElement, this).attr("name");

    switch (activeElement) {
      case "ecp_button":
        e.preventDefault();
        e.stopPropagation();
        var err = [];
        var elems = form.find(".required + *");
        elems.each(function () {
          var $this = $(this);
          var attr = $this.prop("tagName");

          switch (attr) {
            case "SPAN":
              if ($this.find('input:checked').length == 0) err.push("Не выбрано ни одно значение поля " + getTitle($this));
              break;

            case "INPUT":
              if (!$this.val() && $this.is(':visible')) err.push("Не указано значение поля " + getTitle($this));
              break;

            case "DIV":
              var qweqwe = $this.find(".attachment").length;
              if ($this.is(':visible') && ($this.find(".__select__title").text() == "Выберите тип документа" || $this.text() == "Полученный адрес"
              /* ||
              ($this.find(".attachment").length == 0 &&
              $this.hasClass("field__control_btns")) закомментирована проверка файлов на 5-ой вкладке*/
              )) err.push("Не указано значение поля " + getTitle($this));
              break;

            case "TABLE":
              // тут надо проверить обязательную таблицу на заполненность в Заявлении на подключение
              break;
          }
        });

        if (err.length) {
          $('.modal.modal_alert.autopopup.hidden .modal__text').text(err[0]);
          $('.modal.modal_alert.autopopup.hidden').removeClass('hidden');
          return;
        }

        form = $(this).closest('form');
        form.append("<input type='hidden' name='ecp' value='true' />");
        form.submit();
        break;

      case "save_button":
        $('input[name="redirect"]').val('newrequesttp');
        break;
    }
  });
  $.ajax({
    url: "/lktp/getSimpleJson/",
    success: function success(data) {
      if (data == 'true') {
        $("[name='infmaxparam4']," + "[name='infmaxparam3']," + "[name='connectloadparamdata_value2']," + "[name='addconnectloadparamdata_value_05']," + "[name='addconnectloadparamdata_value_08']," + "[name='addconnectloadparamdata_value_02']," + "[name='addconnectloadparamdata_value_07']," + "[name='connectloadparamdata_value2_2']," + "[name='addconnectloadparamdata_value_06']," + "[name='connectloadparamdata_value3']," + "[name='connectloadparamdata_value1'].mh," + "[name='connectloadparamdata_value1_2'].mh," + "#needToHide," + "#typeOfConnectionObject label:contains('Реконструкция') input," + "[name='infmaxparam2']").parent().hide(); //).parent().addClass('hidden');
      }
    }
  }); //#endregion
});