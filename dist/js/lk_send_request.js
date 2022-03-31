"use strict";

// изменение высоты слайдера
function changeSliderHeight(action, value) {
  setTimeout(function () {
    var slickList = document.querySelector('.slick-list');
    var slickCurrent = slickList.querySelector('.slick-current');
    var slickCurrentHeight = getComputedStyle(slickCurrent).height;
    slickList.style.height = slickCurrentHeight;
  }, 0);
}

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
      adaptiveHeight: true,
      initialSlide: 0
    });
  } // переключение радио по клику на лейбл


  function initRadioLabels() {
    $('.radio').parent().click(function () {
      var $this = $(this);
      var $radio = $this.children('.radio');
      var $radioIsDisabled = $radio.is(':disabled');
      if ($radioIsDisabled) return;
      $radio.prop('checked', true);
    });
  }

  if (document.querySelector('.radio')) initRadioLabels(); // переключение чекбокса по клику на лейбл

  function initCheckboxLabels(node) {
    var checkboxes = node.querySelectorAll('.checkbox');
    checkboxes.forEach(function (checkbox) {
      var label = checkbox.parentNode;
      var isDisabled = checkbox.disabled;
      if (isDisabled) return;
      label.addEventListener('click', function () {
        var checkbox = label.querySelector('.checkbox');
        checkbox.checked = !checkbox.checked;
      });
    });
  }

  if (document.querySelector('.checkbox')) initCheckboxLabels(document); // псевдо-селект

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
      if (resultAddress[0] === '.') resultAddress = '';
      concated.value = resultAddress; // тоже ошибку выбрасывает теперь

      var connectobjkind = document.querySelector('[name="connectobjkind"]');
      var statementtc = document.querySelector('[name="statementtc_connectobjname"]');

      if (connectobjkind) {
        var checked = connectobjkind.checked;
        var trigger = connectobjkind.id === 'connectobjkind_01';
        if (checked && trigger) statementtc.value = "\u0427\u0430\u0441\u0442\u043D\u044B\u0439 \u0434\u043E\u043C \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443: ".concat(resultAddress);
      } // if(document.querySelector('[name="connectobjkind"]:checked').id == 'connectobjkind_01')
      //   document.querySelector('[name="statementtc_connectobjname"]').value = `Частный дом по адресу: ${resultAddress}`;
      // concated.textContent = resultAddress

    }, 100);
  } // инит модуля пересчета адреса


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
  }); // лукап
  // node - это input в лукапе
  // type = 'locality' / 'street' / 'district' / 'microdistrict'

  function initLookup(type, node) {
    var parentNode = node.parentNode;
    var contentNode = parentNode.querySelector('.__select__content'); // true, если с локалхоста будут запросы
    // в результате будет возвращать статичные данные
    // const getSettings = {
    //   url: {
    //     base: 'http://10.15.4.5/lktp/',
    //     locality: getSettings.url.base + 'getTownsJson',
    //     streets: getSettings.url.base + '',
    //     districts: getSettings.url.base + '',
    //     microdistricts: getSettings.url.base + ''
    //   },
    //   query: {
    //     locality: `?${param1}&${param2}`,
    //     streets: ``,
    //     districts: ``,
    //     microdistricts: ``
    //   }
    // }
    // получить города с бэка
    // TODO: нужно написать функцию запроса к гет сервису
    // функция должна возвращать массив из объектов
    // и вызывать renderList() для мутации списка городов в псевдоселекте

    var getData = function getData(query) {
      if (type === 'locality') return getLocality(query);
      if (type === 'street') return getStreets(query);
      if (type === 'district') return getDistricts(query);
      if (type === 'microdistrict') return getMicrodistricts(query);
      return console.log('Неверный тип лукапа');
    }; // const isDev = false


    var getLocality = function getLocality(query) {
      var initialLocalities = [{
        id: 1,
        code: 1,
        name: 'Пермь'
      }, {
        id: 2,
        code: 2,
        name: 'Москва'
      }, {
        id: 3,
        code: 3,
        name: 'Санкт-Петербург'
      }, {
        id: 4,
        code: 4,
        name: 'Новосибирск'
      }]; // if (isDev) return initialLocalities
      // fetch('http://10.15.4.5/lktp/getTownsJson?townName=')
      //   .then(response => response.json())
      //   .then(data => JSON.parse(data))
      //   .then(list => renderList(list))
      //   .catch(e => console.log(e))

      return initialLocalities;
    };

    getLocality(); // получить улицы с бэка

    var getStreets = function getStreets(query) {
      var initialStreets = [{
        id: 1,
        code: 1,
        name: '1905 года'
      }, {
        id: 2,
        code: 2,
        name: 'Ленина'
      }, {
        id: 3,
        code: 3,
        name: 'Комсомольский проспект'
      }];
      return initialStreets;
    }; // получить районы с бэка


    var getDistricts = function getDistricts(query) {
      var initialDistricts = [{
        id: 1,
        code: 1,
        name: 'Дзержинский'
      }, {
        id: 2,
        code: 2,
        name: 'Индустриальный'
      }, {
        id: 3,
        code: 3,
        name: 'Кировский'
      }];
      return initialDistricts;
    }; // получить микрорайоны с бэка


    var getMicrodistricts = function getMicrodistricts(query) {
      var initialMicrodistricts = [{
        id: 1,
        code: 1,
        name: 'Закамск'
      }, {
        id: 2,
        code: 2,
        name: 'Садовый'
      }, {
        id: 3,
        code: 3,
        name: 'Голованово'
      }];
      return initialMicrodistricts;
    }; // поиск по объекту


    var searchInArray = function searchInArray(query, arr) {
      var result = [];
      query = query.toLowerCase();
      arr.forEach(function (obj) {
        if (obj.name.toLowerCase().includes(query)) result.push(obj);
      });
      return result;
    }; // рендер ноды в лукап


    var renderNode = function renderNode(obj) {
      var template = "\n                        <input value=\"".concat(obj.value, "\" type=\"radio\" class=\"__select__input\" id=\"locality_").concat(obj.id, "\" tabindex=\"0\">\n                        <label class=\"__select__label\" for=\"locality_").concat(obj.id, "\">").concat(obj.name, "</label>\n                       ");
      contentNode.insertAdjacentHTML('beforeend', template);
    }; // возвращаем строки в начальное состояние


    function removePreviousList(contentNode) {
      contentNode.innerHTML = "\n                               <input type=\"radio\" class=\"__select__input\" id=\"\" tabindex=\"0\">\n                               <label class=\"__select__label\" for=\"\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435</label>\n                              ";
    }

    function initEventListeners(node) {
      var labels = node.querySelectorAll('label');
      var inputs = node.querySelectorAll('input');

      var handleLabelClick = function handleLabelClick(label, i) {
        var queryInput = node.parentNode.querySelector('input');
        queryInput.value = label.innerText;
      };

      labels.forEach(function (label, i) {
        return label.addEventListener('click', function () {
          return handleLabelClick(label, i);
        });
      });
    } // рендер всех найденных нод
    // list - массив


    function renderList(list) {
      var contentNode = parentNode.querySelector('.__select__content'); // удаляем предыдущие ноды

      removePreviousList(contentNode);
      parentNode.setAttribute('data-state', ''); // добавляем новые ноды

      list.forEach(function (obj) {
        return renderNode(obj);
      });
      parentNode.setAttribute('data-state', 'active'); // вешаем прослушку по строкам для изменения значения

      initEventListeners(contentNode);
    } // логика работы лукапа


    var handleNodeKeyUp = function handleNodeKeyUp(e) {
      var query = e.target.value;
      var data = getData(query);
      setTimeout(function () {
        var searchResult = searchInArray(query, data);
        renderList(searchResult);
      }, 10);
    };

    node.addEventListener('keyup', handleNodeKeyUp);
  } // инит лукапов в ноде


  function initLookups(node) {
    var localityNodes = node.querySelectorAll('.address__locality');
    var streetNodes = node.querySelectorAll('.address__street');
    var districtNodes = node.querySelectorAll('.address__district');
    var microdistrictNodes = node.querySelectorAll('.address__microdistrict');
    if (localityNodes) localityNodes.forEach(function (node) {
      return initLookup('locality', node);
    });
    if (streetNodes) streetNodes.forEach(function (node) {
      return initLookup('street', node);
    });
    if (districtNodes) districtNodes.forEach(function (node) {
      return initLookup('district', node);
    });
    if (microdistrictNodes) microdistrictNodes.forEach(function (node) {
      return initLookup('microdistrict', node);
    });
  } // базовый инит всех лукапов


  initLookups(document); // Модалка "Скачать инструкцию"

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

  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions(); // логика блоков очередей (добавление, удаление), 1 и 4 сладер

  function initMultipleQueues() {
    // состояние количества очередей
    var queue_count = -1; // пересчет текущего количества очередей, отраженных на странице

    function getCurrentQueueCount() {
      var nodes = document.querySelectorAll('.queue_launch_yes .field__table .table__body .table__row');
      var nodesLength = nodes.length;
      if (!nodesLength) return;
      nodes.forEach(function (node) {
        return queue_count += 1;
      });
    }

    getCurrentQueueCount(); // переключение блоков в "Запуск по очередям", слайдер 1

    function initQueueLaunch() {// const queueLaunchInput = $('input[name="queue_launch"]')
      // const isDisabled = queueLaunchInput.is(':disabled')
      // const queueLaunchLabel = queueLaunchInput.parent()
      //
      // if (isDisabled) return
      //
      // queueLaunchLabel.click(function () {
      //   const target = $('.queue_launch_' + $(this).children().val())
      //
      //   $('.queue_launch').not(target).hide(0)
      //   target.fadeIn(300)
      // })
    }

    if (document.querySelector('input[name="queue_launch"]')) initQueueLaunch(); // инит слайдера в слайд 4

    function initQueueSlider() {
      $('.queue_slider').slick({
        dots: true,
        arrows: false
      });
    }

    initQueueSlider(); // добавление блоков очередей, 4 сладер
    // создание новой ноды

    function createNewNode() {
      var baseNode = document.querySelector('.queue_block');
      return baseNode.cloneNode(true);
    } // замена суффиксов в аттрибутах name в зависимости от номера очереди
    // добавляет "_<номер очереди>" ко всем name очереди


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
      // const divs = node.querySelectorAll('div#show_name')
      // divs.forEach(div => {
      //   if (!div.id) return
      //
      //   let newName = div.id
      //   newName += `_${queue_count}`
      //   div.id = newName
      // })
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
      initRadioLabels(newNode);
      initCheckboxLabels(newNode);
      initMasks(newNode);
      initColdWaterSupply(newNode);
      initDrainage(newNode);
      initAddressConcatination(newNode); // addNewSlide(newNode)
    } // добавление новых строк в таблицу с очередями, слайдер 1


    var queue_tbody = $('.queue_launch_yes tbody');
    $('.queue_btn').click(function (e) {
      e.preventDefault();
      queue_count++;
      var statementtc = document.querySelector('[name="statementtc_queuecount"]');
      if (statementtc) statementtc.value = queue_count;
      var new_row = "\n                      <tr class=\"table__row\">\n                        <td class=\"table__cell\">\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u2116".concat(queue_count, "</td>\n                        <td class=\"table__cell\">\n                          <input type=\"text\" class=\"field__input datepicker_input\" name=").concat('TechCondObj_QueueName_' + queue_count, " placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                        </td>\n                      </tr>\n                     ");
      queue_tbody.append(new_row);
      createAndRenderNewNode();
      changeSliderHeight(); // инициализация дейтпикера на последней добавленной строке

      var lastChildDatepicker = queue_tbody.children().last().find('.datepicker_input');
      lastChildDatepicker.datepicker($.datepicker.regional['ru']);
      lastChildDatepicker.mask("99.99.9999", {
        autoclear: false
      });
    }); // удаление новых строк в таблицу с очередями, слайдер 1

    $('.queue_btn_remove').click(function (e) {
      e.preventDefault();
      if (queue_count < 1) return;
      queue_count--;
      var statementtc = document.querySelector('[name="statementtc_queuecount"]');
      if (statementtc) statementtc.value = queue_count;
      queue_tbody.children().last().remove();
      deleteLastNode();
      changeSliderHeight(); // removeLastSlide()
    }); // очистка всех очередей в таблице при переключении "Запуск по очередям" в "Нет", слайд 1

    function clearTableQueues(queueTable) {
      var queueRows = queueTable.querySelector('tbody').querySelectorAll('.table__row');
      queueRows.forEach(function (queueRow, i) {
        if (i === 0) return;
        queueRow.remove();
      });
      queue_count = 0;
    } // очистка всех развернутых очередей при переключении "Запуск по очередям" в "Нет", слайд 4


    function clearDetailedQueues(queueSlider) {
      var queueBlocks = queueSlider.querySelectorAll('.queue_block');
      queueBlocks.forEach(function (queueBlock, i) {
        if (i === 0) return;
        queueBlock.remove();
      });
    } // очистка всех очередей при переключении "Запуск по очередям" в "Нет", слайд 1, 4


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
      var queueBtns = step2.querySelectorAll('input[name="queue_launch"]');
      var queueLaunchYesBtn, queueLaunchNoBtn;
      queueBtns.forEach(function (queueBtn) {
        if (queueBtn.value === 'yes') return queueLaunchYesBtn = queueBtn;
        if (queueBtn.value === 'no') return queueLaunchNoBtn = queueBtn;
      }); // блокируем события при disabled

      var trigger = queueLaunchYesBtn.disabled || queueLaunchNoBtn.disabled;
      if (trigger) return; // создание и рендер модалки

      function createModal() {
        var modalPopupConfirm = "\n                            <section class=\"modal modal_popup_confirm\">\n                              <div class=\"modal__content modal_popup_confirm__content\">\n                                <div class=\"close\"></div>\n                                <div class=\"modal__text\">\n                                  \u0411\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C. \u0423\u0434\u0430\u043B\u0438\u0442\u044C?\n                                </div>\n                                <div class=\"form__field\">\n                                  <button class=\"form__submit btn btn_agree\">\u0414\u0430</button>\n                                  <button class=\"form__submit btn dark_btn btn_abort\">\u041D\u0435\u0442</button>\n                                </div>\n                              </div>\n                            </section>\n                           ";
        document.body.insertAdjacentHTML('beforeend', modalPopupConfirm);
      } // добавление прослушки эвентов у модалки


      function addListenersToModal() {
        var modalPopupConfirm = document.querySelector('.modal_popup_confirm');
        var closeModal = modalPopupConfirm.querySelector('.close');
        var abortModal = modalPopupConfirm.querySelector('.btn_abort');
        var btnAgree = modalPopupConfirm.querySelector('.btn_agree'); // хэндлер подтверждения удаления очередей

        var handleProceedModal = function handleProceedModal() {
          queueLaunchYes.removeAttribute('style');
          queueLaunchNo.removeAttribute('style');
          queueLaunchYes.classList.add('hidden');
          queueLaunchNo.classList.remove('hidden');
          modalPopupConfirm.remove(); // TODO: overflow: hidden для body

          body.addClass('');
          clearAllQueues();
        }; // хэндлер отказа от удаления очередей


        var handleCloseModal = function handleCloseModal() {
          queueLaunchYesBtn.checked = true; // ебучий jQuery прописывает инлайн стили

          queueLaunchYes.removeAttribute('style');
          queueLaunchNo.removeAttribute('style');
          queueLaunchYes.classList.remove('hidden');
          queueLaunchNo.classList.add('hidden');
          modalPopupConfirm.remove();
        };

        closeModal.addEventListener('click', handleCloseModal);
        abortModal.addEventListener('click', handleCloseModal);
        btnAgree.addEventListener('click', handleProceedModal);
      } // хэндлер обработки нажатия на "Нет" в "Запуск по очередям"


      var handleNoClick = function handleNoClick() {
        changeSliderHeight(); // при клике по радио "Нет", если нет заполненных очередей, то завершаем вызов модалки

        if (queue_count < 1) return;
        createModal();
        addListenersToModal();
      };

      var handleYesClick = function handleYesClick() {
        return changeSliderHeight();
      };

      queueLaunchNoBtn.parentNode.addEventListener('click', handleNoClick);
      queueLaunchYesBtn.parentNode.addEventListener('click', handleYesClick);
    }

    initClearAllQueues();
  }

  if (document.querySelector('.queue_launch_yes')) initMultipleQueues(); // проверка очередей на disabled
  // Характеристика объека подключения = "Объекты капитального строительства"
  // Тогда очередь разблокирована, иначе заблокирована

  var isQueueEnabled = function isQueueEnabled(node) {
    var housekeepingNode = node.querySelector('input[name="connectobjkind_0"][value="01"]');
    var objectsNode = node.querySelector('input[name="connectobjkind_0"][value="02"]');
    var objectChecked = objectsNode.checked;
    var reconstructionNode = node.querySelector('input[name="connectobjkind_0"][value="03"]');
    var radioYesNode = node.querySelector('input[type="radio"][value="yes"]');
    var radioNoNode = node.querySelector('input[type="radio"][value="no"]');
    var queueLaunchYesNode = node.querySelector('.queue_launch_yes');

    var disableQueue = function disableQueue() {
      radioYesNode.disabled = true;
      radioNoNode.disabled = true;
      queueLaunchYesNode.querySelector('input').disabled = true;
      queueLaunchYesNode.querySelector('button').disabled = true;
    };

    var enableQueue = function enableQueue() {
      radioYesNode.disabled = false;
      radioNoNode.disabled = false;
      queueLaunchYesNode.querySelector('input').disabled = false;
      queueLaunchYesNode.querySelector('button').disabled = false;
    }; // начальная проверка на отметку


    if (objectChecked) enableQueue();
    if (!objectChecked) disableQueue(); // хэндлер включения/выключения блокировки очередей

    var handleClick = function handleClick(e) {
      var currInput = e.target.querySelector('input');
      var currInputValue = currInput.value;
      if (currInputValue === '02') return enableQueue();
      return disableQueue();
    }; // добавляем прослушку на клики по радио


    housekeepingNode.parentNode.addEventListener('click', function (e) {
      return handleClick(e);
    });
    objectsNode.parentNode.addEventListener('click', function (e) {
      return handleClick(e);
    });
    reconstructionNode.parentNode.addEventListener('click', function (e) {
      return handleClick(e);
    });
  };

  if (document.querySelector('.queue_launch_yes')) isQueueEnabled(document); // добавление новых строк в таблицу с иными источниками, слайдер 4

  var water_source_tbody = $('.other_water_sources tbody');
  var water_source_count = 2;
  $('.add_source_btn').click(function (e) {
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ";
    e.preventDefault();
    water_source_tbody.append(new_row);
    water_source_count++;
    changeSliderHeight();
  }); // удаление новых строк в таблице с иными источниками, слайдер 4

  $('.add_source_btn_remove').click(function (e) {
    e.preventDefault();

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove();
      water_source_count--;
      changeSliderHeight();
    }
  }); // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4

  var land_coverage_tbody = $('.land_coverage_characteristics tbody');
  var land_coverage_count = 2;
  $('.add_coverage_btn').click(function (e) {
    e.preventDefault();
    var new_row = "\n                    <tr class=\"table__row\">\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                      <td class=\"table__cell\">\n                        <input type=\"text\" class=\"field__input\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\" />\n                      </td>\n                    </tr>\n                   ";
    land_coverage_tbody.append(new_row);
    land_coverage_count++;
    changeSliderHeight();
  }); // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4

  $('.add_coverage_btn_remove').click(function (event) {
    event.preventDefault();
    if (land_coverage_count <= 1) return;
    land_coverage_tbody.children().last().remove();
    land_coverage_count--;
    changeSliderHeight();
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
    isRepresentativeLabel.addEventListener('click', function () {
      return representativeAddDocsBlock.classList.remove('hidden');
    });
    isNotRepresentativeLabel.addEventListener('click', function () {
      return representativeAddDocsBlock.classList.add('hidden');
    });
  }

  if (document.querySelector('.representative')) initCheckRepresentative(); // Блок "Холодное водоснабжение", слайд 4

  function initColdWaterSupply(baseNode) {
    var connectionToColdWater = baseNode.querySelector('.connection_to_cold_water');
    var connectionToColdWaterLabel = connectionToColdWater.parentNode;
    var isConnectionToColdWaterChecked = connectionToColdWater.checked;
    var isConnectionToColdWaterDisabled = connectionToColdWater.disabled;
    var coldWaterToggle = baseNode.querySelector('.cold_water_supply_toggle'); // проверка начального состояния чекбокса

    if (isConnectionToColdWaterChecked) coldWaterToggle.classList.remove('hidden');
    if (!isConnectionToColdWaterChecked) coldWaterToggle.classList.add('hidden');
    if (isConnectionToColdWaterDisabled) return;
    connectionToColdWaterLabel.addEventListener('click', function () {
      isConnectionToColdWaterChecked = !isConnectionToColdWaterChecked;

      if (isConnectionToColdWaterChecked) {
        coldWaterToggle.classList.remove('hidden');
        changeSliderHeight();
      } else {
        coldWaterToggle.classList.add('hidden');
        changeSliderHeight();
      }
    });
  }

  var queueBlocks = document.querySelectorAll('.queue_block');
  if (queueBlocks) queueBlocks.forEach(function (queueBlock) {
    return initColdWaterSupply(queueBlock);
  }); // Блок "Водоотведение", слайд 4

  function initDrainage(baseNode) {
    var connectionToDrainage = baseNode.querySelector('.connection_to_drainage');
    var connectionToDrainageLabel = connectionToDrainage.parentNode;
    var isConnectionToDrainageChecked = connectionToDrainage.checked;
    var isConnectionToDrainageDisabled = connectionToDrainage.disabled;
    var drainageToggle = baseNode.querySelector('.drainage_toggle'); // проверка начального состояния чекбокса

    if (isConnectionToDrainageChecked) drainageToggle.classList.remove('hidden');
    if (!isConnectionToDrainageChecked) drainageToggle.classList.add('hidden');
    if (isConnectionToDrainageDisabled) return;
    connectionToDrainageLabel.addEventListener('click', function () {
      isConnectionToDrainageChecked = !isConnectionToDrainageChecked;

      if (isConnectionToDrainageChecked) {
        drainageToggle.classList.remove('hidden');
        changeSliderHeight();
      } else {
        drainageToggle.classList.add('hidden');
        changeSliderHeight();
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
              if ($this.find('input:checked').length == 0 && $this.is(':visible')) err.push("Не выбрано ни одно значение поля " + getTitle($this));
              break;

            case "INPUT":
              if (!$this.val() && $this.is(':visible')) err.push("Не указано значение поля " + getTitle($this));
              break;

            case "DIV":
              if ($this.is(':visible') && ($this.find(".__select__title").text() == "Выберите тип документа" || $this.text() == "Полученный адрес" || $this.find(".attachment").length == 0 && $this.hasClass("field__control_btns"))) err.push("Не указано значение поля " + getTitle($this));
              break;

            case "TABLE":
              // тут надо проверить обязательную таблицу на заполненность в Заявлении на подключение
              break;
          }
        });
        var elems_req_group = $('.form__field:not(.hidden) [class*=req_group_]');
        var group_names = []; // получаем существующие названия групп

        elems_req_group.each(function () {
          var $this = $(this);
          var el_id = $this[0].id;
          if (!group_names.includes(el_id)) group_names.push(el_id);
        });
        group_names.forEach(function (e) {
          // для каждой группы получаем ее элементы
          var group = elems_req_group.filter('#' + e);
          var isAtt = false;
          group.each(function () {
            var $this = $(this);

            if ($this.find(".attachment").length != 0) {
              isAtt = true;
              return false;
            }
          });

          if (!isAtt) {
            // если в группе не оказалось прикрепленных файлов, то выдаем обшибку
            if (group.length === 1) err.push("<h6>Требуется прикрепить документ: </h6> \n <p>" + group[0].previousElementSibling.innerText + '</p>');else {
              var text = "<h6>Требуется прикрепить один из документов: \n</h6>";
              group.each(function () {
                var $this = $(this);
                text = text + '<p>' + $this[0].previousElementSibling.innerText + ';</p>';
              });
              err.push(text);
            }
          }
        });

        if (err.length) {
          $('.modal.modal_alert.autopopup.hidden .modal__text').html(err[0]);
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
  }); // let is_simple;
  // function HideElemsSimple(){
  //   if(is_simple)
  //     switch(document.querySelector('[name="connectobjkind"]:checked').getAttribute('id')){
  //       case 'connectobjkind_01':
  //         document.querySelector('[name="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
  //         document.querySelector('[name="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
  //         document.querySelector('[name="statementtc_connectobjname"]').value = `Частный дом по адресу: ${document.querySelector('[name="show_name"]').textContent}`; // Наименование объекта подключения
  //         document.querySelector('[name="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
  //         document.querySelector('[name="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
  //         document.querySelector('[name="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
  //         document.querySelector('[name="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
  //         document.querySelector('[name="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
  //         if(document.querySelector('[name="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
  //           document.querySelector('[name="connectloadparamdata_value1"].md').value = '1';
  //         document.querySelector('[name="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
  //         document.querySelector('[name="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
  //         document.querySelector('[name="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
  //         if(document.querySelector('[name="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
  //           document.querySelector('[name="connectloadparamdata_value1_2"].md').value = '1';
  //         document.querySelector('[name="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
  //       break;
  //       case 'connectobjkind_02':
  //         document.querySelector('[name="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
  //         document.querySelector('[name="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
  //         document.querySelector('[name="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').textContent}`; // Наименование объекта подключения
  //         document.querySelector('[name="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
  //         document.querySelector('[name="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
  //         document.querySelector('[name="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
  //         document.querySelector('[name="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
  //         document.querySelector('[name="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //         document.querySelector('[name="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
  //         document.querySelector('[name="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //       break;
  //       case 'connectobjkind_03':
  //         document.querySelector('[name="room_number"]').parentElement.classList.remove('hidden'); // Номер квартиры
  //         document.querySelector('[name="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
  //         document.querySelector('[name="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').textContent}`; // Наименование объекта подключения
  //         document.querySelector('[name="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
  //         document.querySelector('[name="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
  //         document.querySelector('[name="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
  //         document.querySelector('[name="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
  //         document.querySelector('[name="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
  //         document.querySelector('[name="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
  //         document.querySelector('[name="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
  //       break;
  //     }
  //   else
  //     switch(document.querySelector('[name="connectobjkind"]:checked').getAttribute('id')){
  //       case 'connectobjkind_01':
  //         document.querySelector('[name="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
  //         document.querySelector('[name="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
  //         document.querySelector('[name="statementtc_connectobjname"]').value = `Частный дом по адресу: ${document.querySelector('[name="show_name"]').textContent}`; // Наименование объекта подключения
  //         document.querySelector('[name="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
  //         document.querySelector('[name="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
  //         document.querySelector('[name="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
  //         document.querySelector('[name="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
  //         document.querySelector('[name="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
  //         if(document.querySelector('[name="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
  //           document.querySelector('[name="connectloadparamdata_value1"].md').value = '1';
  //         document.querySelector('[name="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //         document.querySelector('[name="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
  //         document.querySelector('[name="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
  //         if(document.querySelector('[name="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
  //           document.querySelector('[name="connectloadparamdata_value1_2"].md').value = '1';
  //         document.querySelector('[name="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //       break;
  //       case 'connectobjkind_02':
  //         document.querySelector('[name="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
  //         document.querySelector('[name="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
  //         document.querySelector('[name="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').textContent}`; // Наименование объекта подключения
  //         document.querySelector('[name="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
  //         document.querySelector('[name="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
  //         document.querySelector('[name="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
  //         document.querySelector('[name="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
  //         document.querySelector('[name="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //         document.querySelector('[name="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
  //         document.querySelector('[name="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //
  //       break;
  //       case 'connectobjkind_03':
  //         document.querySelector('[name="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
  //         document.querySelector('[name="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
  //         document.querySelector('[name="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').textContent}`; // Наименование объекта подключения
  //         document.querySelector('[name="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
  //         document.querySelector('[name="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
  //         document.querySelector('[name="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
  //         document.querySelector('[name="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
  //         document.querySelector('[name="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //         document.querySelector('[name="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
  //         document.querySelector('[name="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
  //         document.querySelector('[name="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
  //         document.querySelector('[name="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
  //       break;
  //     }
  //     changeSliderHeight();
  // }
  //
  // $.ajax({
  //   url: "./getSimpleJson/",
  //   success: function(data){
  //     is_simple = data === "true" ? true : false;
  //     //is_simple = false
  //
  //     if(is_simple){
  //       let list_hidden_elem = document.querySelectorAll(
  //         "[name='infmaxparam3']" + // Протяжность сети
  //         ",[name='infmaxparam4']" + // Диаметр сети
  //         ",[name='techcondobj_note']" + // Примечание
  //         ",[name='connectloadparamdata_value2']" +
  //         ",[name='addconnectloadparamdata_value_05']" +
  //         ",[name='connectloadparamdata_value2_2']" +
  //         ",[name='addconnectloadparamdata_value_06']" +
  //         ",[name='addconnectloadparamdata_value_08'].mh" +
  //         ",[name='addconnectloadparamdata_value_08'].md" +
  //         ",[name='addconnectloadparamdata_value_02'].mh" +
  //         ",[name='addconnectloadparamdata_value_02'].md" +
  //         ",[name='addconnectloadparamdata_value_07'].mh" +
  //         ",[name='addconnectloadparamdata_value_07'].md"
  //       );
  //       list_hidden_elem.forEach(x => x.parentElement.classList.add('hidden'));
  //       if(document.querySelector('[name="connectobjkind"]:checked').id == 'connectobjkind_03')
  //         document.querySelector('[name="room_number"]').parentElement.classList.remove('hidden');
  //     }
  //
  //     document.querySelectorAll('[name="connectobjkind"]').forEach(x => x.parentElement.addEventListener('click', HideElemsSimple));
  //
  //     HideElemsSimple();
  //   }
  // });
  //
  // document.querySelectorAll('.__select__content .__select__input').forEach(x => x.addEventListener('change', changeAddress));

  function changeAddress() {// let elem = this;
    // let elemName = elem.getAttribute('name');
    // let number = elemName.indexOf("_", elemName.indexOf("_") + 1);
    // let streetName = $('.address__street').val();
    // let townCode = $('.__select input[name="town_code"]:checked').val();
    // let selectList = $('.address__street').next('.__select__content');
    // if(streetName != '' && townCode != undefined)
    // {
    //   $.ajax({
    //     url: "./getStreetsJson/?townCode=" + town_code + "&street_name=" + street_name,
    //     success: function(data){
    //       let streets = JSON.parse(JSON.parse(data));
    //       select_list.html('<input id="street_0" class="__select__input" type="radio" name="street_code" selected="" checked="" />'+
    //       let streets = JSON.parse(JSON.parse(data));
    //       selectList.html('<input id="street_0" class="__select__input" type="radio" name="street_code" selected="" checked="" />'+
    //       '<label for="street_0" class="__select__label">Выберите улицу</label>');
    //       streets.forEach(street =>
    //         select_list.html(select_list.html() +
    //         '<input id="street_' + street.id + '" class="__select__input" type="radio" name="street_code" selected="" checked="" />'+
    //         '<label for="street_' + street.id + '" class="__select__label">' + street.name + '</label>'
    //         )
    //       )
    //     }
    //   });
    // }
    // else {
    //   select_list.empty();
    // }
  } //#endregion

}); // export changeSliderHeight