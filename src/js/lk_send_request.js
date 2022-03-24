$(document).ready(function() {
  const body = $('body')
  // упрощенная подача заявления
  let simpleSendRequest = false
  if (document.querySelector('.requests_form.simple')) simpleSendRequest = true

  // инициализация слайдера
  if (document.querySelector('.slider')) {
    $('.slider').slick({
      nextArrow: '<button type="button" class="slick-arrow slick-next btn dark_btn">Далее</button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev btn">Назад</button>',
      dots: true,
      infinite: false,
      draggable: false,
      adaptiveHeight: true
    })
  }


  // переключение радио по клику на лейбл
  $('.radio').parent().click(function () {
    const $this = $(this)
    const $radio = $this.children('.radio')
    const $radioIsDisabled = $radio.is(':disabled')

    if ($radioIsDisabled) return
    $radio.prop('checked', true)
  })


  // переключение чекбокса по клику на лейбл
  // TODO: ломается на новых очередях в слайдере 4
  function initCheckboxLabels() {
    const $checkboxes = $('.checkbox')
    const $labels = $checkboxes.parent()

    $checkboxes.click(function () {
      const $checkbox = $(this)
      const $checkboxIsChecked = $checkbox.is(':checked')
      const $checkboxIsDisabled = $checkbox.is(':disabled')

      if ($checkboxIsDisabled) return
      $checkbox.prop('checked', !$checkboxIsChecked)
    })

    $labels.click(function () {
      const $checkbox = $(this).children()
      const $checkboxIsChecked = $checkbox.is(':checked')
      const $checkboxIsDisabled = $checkbox.is(':disabled')

      if ($checkboxIsDisabled) return
      $checkbox.prop('checked', !$checkboxIsChecked)
    })
  }
  if (document.querySelector('.checkbox')) initCheckboxLabels()


  // псевдо-селект
  function initPseudoSelect(select) {
    const selectTitle = select.querySelector('.__select__title')
    const selectLabels = select.querySelectorAll('.__select__label')

    selectTitle.addEventListener('click', function () {
      if ('active' === select.getAttribute('data-state')) {
        select.setAttribute('data-state', '')
      } else {
        select.setAttribute('data-state', 'active')
      }
    })

    for (let i = 0; i < selectLabels.length; i++) {
      selectLabels[i].addEventListener('click', function (e) {
        selectTitle.textContent = e.target.textContent
        selectTitle.value = e.target.textContent
        select.setAttribute('data-state', '')

        // вызов пересчета адреса в случае, если модуль активен
        const addressNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
        const thisAddressConcatination = addressNode.querySelector('.address__concated')
        if (thisAddressConcatination) addressConcatination(addressNode)
      })
    }

    // скрытие при клике по body кроме .__select
    const body = document.querySelector('body')
    body.addEventListener('click', e => {
      const eClassList = e.target.classList
      const trigger = (eClassList[0] !== '__select__title')
                      && (eClassList[0] !== '__select__content')
                      && (eClassList[0] !== '__select__input')

      if (trigger) select.setAttribute('data-state', '')
    })
  }


  // стартовый инит псевдо-селектов
  function initPseudoSelects(baseNode) {
    const selects = document.querySelectorAll('.__select')
    selects.forEach(select => initPseudoSelect(select))
  }
  if (document.querySelector('.__select')) initPseudoSelects(document)


  // Пересчет итогового адреса
  function addressConcatination(baseNode) {
    const concated = baseNode.querySelector('.address__concated')
    const locality = baseNode.querySelector('.address__locality')
    const district = baseNode.querySelector('.address__district')
    const microdistrict = baseNode.querySelector('.address__microdistrict')
    const street = baseNode.querySelector('.address__street')
    const housing = baseNode.querySelector('.address__housing')
    const house = baseNode.querySelector('.address__house')

    setTimeout(() => {
      // TODO: остается точка с пустой строкой в итоговом адресе после enter
      const resultLocality = `${locality.value ? 'г. ' + locality.value : ''}`
      const resultdDistrict = `${district.value ?  ', ' + district.value + ' район' : ''}`
      const resultMicrodistrict = `${microdistrict.value ? ', микрорайон ' + microdistrict.value : ''}`
      const resultStreet = `${street.value ? ', ул. ' + street.value : ''}`
      const resultHousing = `${housing.value ? ', корпус ' + housing.value : ''}`
      const resultHouse = `${house.value ? ', дом ' + house.value : ''}`
      let resultAddress = `${resultLocality + resultdDistrict + resultMicrodistrict + resultStreet + resultHousing + resultHouse + '.'}`
      if (resultAddress[0] === ',') resultAddress = resultAddress.slice(1)

      concated.value = resultAddress
      // concated.textContent = resultAddress
    }, 100)
  }

  function initAddressConcatination(baseNode) {
    const concated = baseNode.querySelector('.address__concated')
    const locality = baseNode.querySelector('.address__locality')
    const district = baseNode.querySelector('.address__district')
    const microdistrict = baseNode.querySelector('.address__microdistrict')
    const street = baseNode.querySelector('.address__street')
    const housing = baseNode.querySelector('.address__housing')
    const house = baseNode.querySelector('.address__house')


    if (locality) locality.addEventListener('change', () => addressConcatination(baseNode))
    if (district) district.addEventListener('change', () => addressConcatination(baseNode))
    if (microdistrict) microdistrict.addEventListener('change', () => addressConcatination(baseNode))
    if (street) street.addEventListener('change', () => addressConcatination(baseNode))
    if (housing) housing.addEventListener('change', () => addressConcatination(baseNode))
    if (house) house.addEventListener('change', () => addressConcatination(baseNode))
  }
  const addressBlocks = document.querySelectorAll('.address__concated')
  if (addressBlocks) addressBlocks.forEach(addressBlock => initAddressConcatination(addressBlock.parentNode.parentNode.parentNode))


  // переключение блоков в "Запуск по очередям", слайдер 1
  function initQueueLaunch() {
    const queueLaunchInput = $('input[name="queue_launch"]')
    const isDisabledQueueLaunchInput = queueLaunchInput.is(':disabled')
    const queueLaunchLabel = queueLaunchInput.parent()

    if (isDisabledQueueLaunchInput) return

    queueLaunchLabel.click(function () {
      const target = $('.queue_launch_' + $(this).children().val())

      $('.queue_launch').not(target).hide(0)
      target.fadeIn(300)
    })

  }
  if (document.querySelector('input[name="queue_launch"]')) initQueueLaunch()


  // Модалка "Скачать инструкцию"
  function initModalDownloadInstructions() {
    const instructionsBtn = $('.instructions__btn')
    const instructionsModal = $('.modal_instructions')
    const instructionsModalContent = $('.modal_instructions__content')
    const instructionsModalClose = $('.modal_instructions .close')

    instructionsBtn.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'hidden')
      instructionsModalContent.css('overflow-y', 'auto')
      instructionsModalContent.css('overflow-x', 'hidden')
      instructionsModal.removeClass('hidden')
    })

    instructionsModalClose.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'auto')
      instructionsModal.addClass('hidden')
    })

  }
  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions()


  // изменение высоты слайдера
  // action = 'increase' / 'decrease' (увеличить / уменьшить высоту), value = значение изменения
  function changeSliderHeight(action, value) {
    const slickList = document.querySelector('.slick-list')
    const slickListHeight = Number.parseInt(slickList.style.height)

    if (action === 'increase') {
      return slickList.style.height = slickListHeight + value + 'px'
    }
    return slickList.style.height = slickListHeight - value + 'px'
  }



  // логика блоков очередей (добавление, удаление), 1 и 4 сладер
  function initMultipleQueues() {
    // состояние количества очередей
    let queue_count = -1

    // пересчет текущего количества очередей, отраженных на странице
    function getCurrentQueueCount() {
      const nodes = document.querySelectorAll('.queue_launch_yes .field__table .table__body .table__row')
      const nodesLength = nodes.length

      if (!nodesLength) return
      nodes.forEach(node => queue_count += 1)
    }
    getCurrentQueueCount()

    // если количество очередей >=1, то "Запуск по очередям" в "Да"
    // добавление высоты слайду 1, если количество очередей >=1
    function initCurrentQueueState() {
      if (queue_count < 1) return

      // 73px в "Нет"
      // 32px + 81px + X*41px в "Да"
      changeSliderHeight('increase', 113 + queue_count * 41)
    }
    initCurrentQueueState()

    // инит слайдера в слайд 4
    function initQueueSlider() {
      $('.queue_slider').slick({
        dots: true,
        arrows: false
      })
    }
    // initQueueSlider()

    // добавление блоков очередей, 4 сладер
    // создание новой ноды
    function createNewNode() {
      const baseNode = document.querySelector('.queue_block')
      return baseNode.cloneNode(true)
    }

    // замена суффиксов в аттрибутах name в зависимости от номера очереди
    // добавляет "_<номер очереди>" ко всем name очереди
    function pasteNameSuffixes(node) {
      const subheader = node.querySelector('.form__subheader')
      subheader.innerText = `Очередь №${queue_count}`

      // все инпуты, слайд 4
      const inputs = node.querySelectorAll('input')
      inputs.forEach(input => {
        if (!input.name) return

        let newName = input.name
        newName += `_${queue_count}`
        // newName = newName.slice(0, -2) + `_${queue_count}`
        input.name = newName
      })

      // дивы с name = "show_name", слайд 4
      // const divs = node.querySelectorAll('div#show_name')
      // divs.forEach(div => {
      //   if (!div.id) return
      //
      //   let newName = div.id
      //   newName += `_${queue_count}`
      //   div.id = newName
      // })

    }

    // рендер новой ноды в блок .step_5, 4 слайдера
    function renderNewNode(newNode) {
      const parentNode = document.querySelector('.step_5 .queue_slider')
      parentNode.append(newNode)
    }

    // удаление последней очереди
    function deleteLastNode() {
      const nodeContainer = $('.step_5 .queue_slider')
      nodeContainer.children().last().remove()
    }

    // TODO: дефект - не добавляется больше 3 слайдов
    // TODO: создать пустой слайдер и потом в него сложить все ноды, включая базовую?
    function addNewSlide(newNode) {
      $('.queue_slider').slick('slickAdd', queue_count + 1, newNode)
      // newNode.setAttribute('data-slick-index', queue_count)
      // $('.queue_slider').slick('slickAdd', '<div><h3>' + queue_count + '</h3></div>')
    }

    function removeLastSlide() {
      $('.queue_slider').slick('slickRemove')
    }

    // создание и рендер новой ноды, 4 слайдер
    function createAndRenderNewNode() {
      const newNode = createNewNode()
      pasteNameSuffixes(newNode)
      renderNewNode(newNode)
      initPseudoSelects(newNode.querySelector('.__select'))
      initMasks(newNode)
      initColdWaterSupply(newNode)
      initDrainage(newNode)
      initAddressConcatination(newNode)

      // addNewSlide(newNode)
    }

    // добавление новых строк в таблицу с очередями, слайдер 1
    const queue_tbody = $('.queue_launch_yes tbody')

    $('.queue_btn').click(function(e) {
      e.preventDefault()
      queue_count++

      const new_row = `
                      <tr class="table__row">
                        <td class="table__cell">Очередь №${queue_count}</td>
                        <td class="table__cell">
                          <input type="text" class="field__input datepicker_input" name=${'TechCondObj_QueueName_' + queue_count} placeholder="Введите данные" />
                        </td>
                      </tr>
                     `

      queue_tbody.append(new_row)
      createAndRenderNewNode()
      changeSliderHeight('increase', 39)

      // инициализация дейтпикера на последней добавленной строке
      const lastChildDatepicker = queue_tbody.children().last().find('.datepicker_input')
      lastChildDatepicker.datepicker($.datepicker.regional['ru'])
      lastChildDatepicker.mask("99.99.9999", { autoclear: false })

    })

    // удаление новых строк в таблицу с очередями, слайдер 1
    $('.queue_btn_remove').click(function(e) {
      e.preventDefault()
      if (queue_count < 1) return

      queue_count -= 1
      queue_tbody.children().last().remove()
      deleteLastNode()
      changeSliderHeight('decrease', 39)
      // removeLastSlide()

    })

    // очистка всех очередей в таблице при переключении "Запуск по очередям" в "Нет", слайд 1
    function clearTableQueues(queueTable) {
      const queueRows = queueTable.querySelector('tbody').querySelectorAll('.table__row')
      queueRows.forEach((queueRow, i) => {
        if (i === 0) return
        queueRow.remove()
      })

      queue_count = 0
    }

    // очистка всех развернутых очередей при переключении "Запуск по очередям" в "Нет", слайд 4
    function clearDetailedQueues(queueSlider) {
      const queueBlocks = queueSlider.querySelectorAll('.queue_block')

      queueBlocks.forEach((queueBlock, i) => {
        if (i === 0) return
        queueBlock.remove()
      })
    }

    // очистка всех очередей при переключении "Запуск по очередям" в "Нет", слайд 1, 4
    function clearAllQueues() {
      const queueTable = document.querySelector('.queue_launch_yes table')
      const queueSlider = document.querySelector('.queue_slider')

      clearTableQueues(queueTable)
      clearDetailedQueues(queueSlider)
    }

    function initClearAllQueues() {
      const step2 = document.querySelector('.step_2')
      const queueLaunchYes = step2.querySelector('.queue_launch_yes')
      const queueLaunchNo = step2.querySelector('.queue_launch_no')
      const queueBtns = step2.querySelectorAll('input[name="queue_launch"]')
      let queueLaunchYesBtn, queueLaunchNoBtn

      queueBtns.forEach(queueBtn => {
        if (queueBtn.value === 'yes') return queueLaunchYesBtn = queueBtn
        if (queueBtn.value === 'no') return queueLaunchNoBtn = queueBtn
      })

      // блокируем события при disabled
      const trigger = queueLaunchYesBtn.disabled || queueLaunchNoBtn.disabled
      if (trigger) return

      // создание и рендер модалки
      function createModal() {
        const modalPopupConfirm = `
                            <section class="modal modal_popup_confirm">
                              <div class="modal__content modal_popup_confirm__content">
                                <div class="close"></div>
                                <div class="modal__text">
                                  Будут удалены все данные по очередям. Удалить?
                                </div>
                                <div class="form__field">
                                  <button class="form__submit btn btn_agree">Да</button>
                                  <button class="form__submit btn dark_btn btn_abort">Нет</button>
                                </div>
                              </div>
                            </section>
                           `

        document.body.insertAdjacentHTML('beforeend', modalPopupConfirm)
      }

      // добавление прослушки эвентов у модалки
      function addListenersToModal() {
        const modalPopupConfirm = document.querySelector('.modal_popup_confirm')
        const closeModal = modalPopupConfirm.querySelector('.close')
        const abortModal = modalPopupConfirm.querySelector('.btn_abort')
        const btnAgree = modalPopupConfirm.querySelector('.btn_agree')

        // хэндлер подтверждения удаления очередей
        const handleProceedModal = () => {
          queueLaunchYes.removeAttribute('style')
          queueLaunchNo.removeAttribute('style')
          queueLaunchYes.classList.add('hidden')
          queueLaunchNo.classList.remove('hidden')
          modalPopupConfirm.remove()
          clearAllQueues()
        }

        // хэндлер отказа от удаления очередей
        const handleCloseModal = () => {
          queueLaunchYesBtn.checked = true
          // ебучий jQuery прописывает инлайн стили
          queueLaunchYes.removeAttribute('style')
          queueLaunchNo.removeAttribute('style')
          queueLaunchYes.classList.remove('hidden')
          queueLaunchNo.classList.add('hidden')
          modalPopupConfirm.remove()
        }

        closeModal.addEventListener('click', handleCloseModal)
        abortModal.addEventListener('click', handleCloseModal)
        btnAgree.addEventListener('click', handleProceedModal)
      }

      // хэндлер обработки нажатия на "Нет" в "Запуск по очередям"
      function handleNoClick() {
        // при клике по радио "Нет", если нет заполненных очередей, то завершаем вызов модалки
        if (queue_count < 1) return
        createModal()
        addListenersToModal()
        changeSliderHeight('decrease', 100)
        changeSliderHeight('increase', 50)
      }

      function handleYesClick() {
        changeSliderHeight('decrease', 50)
        changeSliderHeight('increase', 100)
      }

      queueLaunchNoBtn.parentNode.addEventListener('click', () => handleNoClick())
      queueLaunchYesBtn.parentNode.addEventListener('click', () => handleYesClick())

    }
    initClearAllQueues()


  }
  if (document.querySelector('.queue_launch_yes')) initMultipleQueues()


  // добавление новых строк в таблицу с иными источниками, слайдер 4
  const water_source_tbody = $('.other_water_sources tbody')
  let water_source_count = 2

  $('.add_source_btn').click(function(e) {
    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                    </tr>
                   `
    e.preventDefault()

    water_source_tbody.append(new_row)
    water_source_count++
    changeSliderHeight('increase', 39)
  })

  // удаление новых строк в таблице с иными источниками, слайдер 4
  $('.add_source_btn_remove').click(function(e) {
    e.preventDefault()

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove()
      water_source_count--
      changeSliderHeight('decrease', 39)
    }
  })

  // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4
  const land_coverage_tbody = $('.land_coverage_characteristics tbody')
  let land_coverage_count = 2

  $('.add_coverage_btn').click(function(e) {
    e.preventDefault()

    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                    </tr>
                   `

    land_coverage_tbody.append(new_row)
    land_coverage_count++
    changeSliderHeight('increase', 39)
  })
  // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4
  $('.add_coverage_btn_remove').click(function(event) {
    event.preventDefault()
    if (land_coverage_count <= 1) return

    land_coverage_tbody.children().last().remove()
    land_coverage_count--
    changeSliderHeight('decrease', 39)
  })

  // datepicker
  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru'])
  }
  if (document.querySelector('.datepicker_input')) initDatepickers()


  // маски
  function initMasks(parentNode) {
    if (parentNode.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999", { autoclear: false })
    if (parentNode.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99", { autoclear: false })
    if (parentNode.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999", { autoclear: false })
    if (parentNode.querySelector('.passport_serial_input')) $('.passport_serial_input').mask("99 99", { autoclear: false })
    if (parentNode.querySelector('.passport_number_input')) $('.passport_number_input').mask("999999", { autoclear: false })
    if (parentNode.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999", { autoclear: false })
    if (parentNode.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999", { autoclear: false })
    if (parentNode.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999", { autoclear: false })
    if (parentNode.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999", { autoclear: false })
    if (parentNode.querySelector('.integer_input')) $('.integer_input').on('input', function () {
      $(this).val($(this).val().replace(/[^0-9]/g, ''))
    })
    if (parentNode.querySelector('.float_input')) $('.float_input').keypress(function (e) {
      const trigger = (e.which != 46 || $(this).val().indexOf('.') != -1)
                      && (e.which < 48 || e.which > 57)

      if (trigger) e.preventDefault()
    })
  }
  initMasks(document)


  // Блок "Являюсь представителем"
  function initCheckRepresentative() {
    const representativeBlock = document.querySelector('.representative')
    const isRepresentative = representativeBlock.querySelector('.yes')
    const isRepresentativeChecked = isRepresentative.checked
    const isRepresentativeLabel = isRepresentative.parentNode
    const isNotRepresentative = representativeBlock.querySelector('.no')
    const isNotRepresentativeLabel = isNotRepresentative.parentNode
    const representativeAddDocsBlock = document.querySelector('.representative_add_docs_block')

    // проверка начального состояния чекбокса
    if (isRepresentativeChecked) representativeAddDocsBlock.classList.remove('hidden')
    if (!isRepresentativeChecked) representativeAddDocsBlock.classList.add('hidden')

    isRepresentativeLabel.addEventListener('click', () => representativeAddDocsBlock.classList.remove('hidden'))
    isNotRepresentativeLabel.addEventListener('click', () => representativeAddDocsBlock.classList.add('hidden'))
  }
  if (document.querySelector('.representative')) initCheckRepresentative()


  // Блок "Холодное водоснабжение", слайд 4
  function initColdWaterSupply(baseNode) {
    const connectionToColdWater = baseNode.querySelector('.connection_to_cold_water')
    const connectionToColdWaterLabel = connectionToColdWater.parentNode
    let isConnectionToColdWaterChecked = connectionToColdWater.checked
    const isConnectionToColdWaterDisabled = connectionToColdWater.disabled
    const coldWaterToggle = baseNode.querySelector('.cold_water_supply_toggle')

    // проверка начального состояния чекбокса
    if (isConnectionToColdWaterChecked) coldWaterToggle.classList.remove('hidden')
    if (!isConnectionToColdWaterChecked) coldWaterToggle.classList.add('hidden')

    if (isConnectionToColdWaterDisabled) return

    connectionToColdWaterLabel.addEventListener('click', () => {
      isConnectionToColdWaterChecked = !isConnectionToColdWaterChecked
      let blockHeight = 1000
      if (simpleSendRequest) blockHeight = 225

      if (isConnectionToColdWaterChecked) {
        coldWaterToggle.classList.remove('hidden')
        changeSliderHeight('increase', blockHeight)
      } else {
        coldWaterToggle.classList.add('hidden')
        changeSliderHeight('decrease', blockHeight)
      }

    })
  }
  const queueBlocks = document.querySelectorAll('.queue_block')
  if (queueBlocks) queueBlocks.forEach(queueBlock => initColdWaterSupply(queueBlock))

  // Блок "Водоотведение", слайд 4
  function initDrainage(baseNode) {
    const connectionToDrainage= baseNode.querySelector('.connection_to_drainage')
    const connectionToDrainageLabel = connectionToDrainage.parentNode
    let isConnectionToDrainageChecked = connectionToDrainage.checked
    const isConnectionToDrainageDisabled = connectionToDrainage.disabled
    const drainageToggle = baseNode.querySelector('.drainage_toggle')

    // проверка начального состояния чекбокса
    if (isConnectionToDrainageChecked) drainageToggle.classList.remove('hidden')
    if (!isConnectionToDrainageChecked) drainageToggle.classList.add('hidden')

    if (isConnectionToDrainageDisabled) return

    connectionToDrainageLabel.addEventListener('click', () => {
      isConnectionToDrainageChecked = !isConnectionToDrainageChecked
      let blockHeight = 750
      if (simpleSendRequest) blockHeight = 225

      if (isConnectionToDrainageChecked) {
        drainageToggle.classList.remove('hidden')
        changeSliderHeight('increase', blockHeight)
      } else {
        drainageToggle.classList.add('hidden')
        changeSliderHeight('decrease', blockHeight)
      }
    })
  }
  if (queueBlocks) queueBlocks.forEach(queueBlock => initDrainage(queueBlock))


  //#region женин код
  if($('input[name="requesttype_id"]').val() == '10002')
    $('input[name="personbasis"][value="05"]').parent().attr( 'style', 'display:none;' );

  function getTitle(el) {
    return el.siblings(".required").text();
  }

  let form = $('form');
  $("input[type='submit']").click(function (e) {
    let activeElement = $(document.activeElement, this).attr("name")
    switch (activeElement) {
      case "ecp_button":
        e.preventDefault();
        e.stopPropagation();
        var err = [];
        let elems = form.find(".required + *");
        elems.each(function () {
          var $this = $(this);
          let attr = $this.prop("tagName");
          switch (attr) {
            case "SPAN":
              if ($this.find('input:checked').length == 0)
                err.push("Не выбрано ни одно значение поля " + getTitle($this));
              break;
            case "INPUT":
              if (!$this.val() && $this.is(':visible'))
                err.push("Не указано значение поля " + getTitle($this));
              break;
            case "DIV":
              if ($this.is(':visible') && (
                  $this.find(".__select__title").text() == "Выберите тип документа" ||
                  $this.text() == "Полученный адрес" ||
                  ($this.find(".attachment").length == 0 &&
                    $this.hasClass("field__control_btns"))
                ))
                err.push("Не указано значение поля " + getTitle($this));
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
        $('input[name="redirect"]').val('newrequesttp')
        break;
    }

  });

  $.ajax({
    url: "./getSimpleJson/",
    success: function(data){
      let is_simple = JSON.parse(data);
      if(is_simple)
      {
          let list_hidden_elem = document.querySelectorAll(
            "[name='infmaxparam3']" +
            ",[name='infmaxparam4']" +
            ",[name='techcondobj_note']" +
            ",[name='connectloadparamdata_value2']" +
            ",[name='addconnectloadparamdata_value_05']" +
            ",[name='connectloadparamdata_value2_2']" +
            ",[name='addconnectloadparamdata_value_06']"
          );

          list_hidden_elem.forEach(x => x.parentElement.classList.add('hidden'));

          document.querySelectorAll('[name="connectobjkind"]').forEach(x => x.addEventListener('change', function(){
            let elem = this;
            // проверка elem и че делать надо
          }));
      }
      else{
        document.querySelectorAll('[name="connectobjkind"]').forEach(x => x.addEventListener('change', function(){
          let elem = this;
          // проверка elem и че делать надо
        }));
      }
    }
  });

  document.querySelectorAll('.__select__content .__select__input').forEach(x => x.addEventListener('change', changeAddress));

  function changeAddress(){
    let elem = this;
    /*let elemName = elem.getAttribute('name');
    let number = elemName.indexOf("_", elemName.indexOf("_") + 1);
    /*let streetName = $('.address__street').val();
    let townCode = $('.__select input[name="Town_code"]:checked').val();
    let selectList = $('.address__street').next('.__select__content');
    if(streetName != '' && townCode != undefined)
    {
      $.ajax({
        url: "./getStreetsJson/?townCode=" + town_code + "&street_name=" + street_name,
        success: function(data){
          let streets = JSON.parse(JSON.parse(data));
          select_list.html('<input id="street_0" class="__select__input" type="radio" name="Street_code" selected="" checked="" />'+
          let streets = JSON.parse(JSON.parse(data));
          selectList.html('<input id="street_0" class="__select__input" type="radio" name="Street_code" selected="" checked="" />'+
          '<label for="street_0" class="__select__label">Выберите улицу</label>');
          streets.forEach(street =>
            select_list.html(select_list.html() +
            '<input id="street_' + street.id + '" class="__select__input" type="radio" name="Street_code" selected="" checked="" />'+
            '<label for="street_' + street.id + '" class="__select__label">' + street.name + '</label>'
            )
          )
        }
      });
    }
    else{
      select_list.empty();
    }
  }
  //#endregion
})
