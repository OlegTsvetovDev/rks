// изменение высоты слайдера
function changeSliderHeight(action, value) {
  setTimeout(() => {
    const slickList = document.querySelector('.slick-list')
    const slickCurrent = slickList.querySelector('.slick-current')
    const slickCurrentHeight = getComputedStyle(slickCurrent).height

    slickList.style.height = slickCurrentHeight
  }, 0)
}


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
      adaptiveHeight: true,
      initialSlide: 0
    })
  }


  // переключение радио по клику на лейбл
  function initRadioLabels() {
    $('.radio').parent().click(function () {
      const $this = $(this)
      const $radio = $this.children('.radio')
      const $radioIsDisabled = $radio.is(':disabled')

      if ($radioIsDisabled) return
      $radio.prop('checked', true)
    })
  }
  if (document.querySelector('.radio')) initRadioLabels()


  // переключение чекбокса по клику на лейбл
  function initCheckboxLabels(node) {
    const checkboxes = node.querySelectorAll('.checkbox')

    checkboxes.forEach(checkbox => {
      const label = checkbox.parentNode
      const isDisabled = checkbox.disabled

      if (isDisabled) return

      label.addEventListener('click', function () {
        const checkbox = label.querySelector('.checkbox')
        checkbox.checked = !checkbox.checked
      })
    })
  }
  if (document.querySelector('.checkbox')) initCheckboxLabels(document)


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
      const resultLocality = `${locality.value ? 'г. ' + locality.value : ''}`
      const resultdDistrict = `${district.value ?  ', ' + district.value + ' район' : ''}`
      const resultMicrodistrict = `${microdistrict.value ? ', микрорайон ' + microdistrict.value : ''}`
      const resultStreet = `${street.value ? ', ул. ' + street.value : ''}`
      const resultHousing = `${housing.value ? ', корпус ' + housing.value : ''}`
      const resultHouse = `${house.value ? ', дом ' + house.value : ''}`
      let resultAddress = `${resultLocality + resultdDistrict + resultMicrodistrict + resultStreet + resultHousing + resultHouse + '.'}`
      if (resultAddress[0] === ',') resultAddress = resultAddress.slice(1)
      if (resultAddress[0] === '.') resultAddress = ''

      concated.value = resultAddress

      if(document.querySelector('[name="connectobjkind"]:checked').id == 'connectobjkind_01')
        document.querySelector('[name="statementtc_connectobjname"]').value = `Частный дом по адресу: ${resultAddress}`;
      // concated.textContent = resultAddress
    }, 100)
  }

  // инит модуля пересчета адреса
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


  // лукап
  // node - это input в лукапе
  // type = 'locality' / 'street' / 'district' / 'microdistrict'
  function initLookup(type, node) {
    const parentNode = node.parentNode
    const contentNode = parentNode.querySelector('.__select__content')

    // получить города с бэка
    // Функцию запроса к гет сервису
    // функция возвращает массив из объектов
    // и вызывает renderList() для мутации списка городов в псевдоселекте
    const setData = (query) => {
      if (type === 'locality') setLocality(query)
      if (type === 'street') setStreets(query)
      if (type === 'district') setDistricts(query)
      if (type === 'microdistrict') setMicrodistricts(query)
    }

    const setLocality = (query) => {
      fetch(`./getTownsJson?townName=${query}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(query,JSON.parse(data)), 'town_code', 'locality'))
        .catch(e => console.log(e))
    }

    // получить улицы с бэка
    const setStreets = (query) => {
      let townInput = document.querySelector('input[id^="locality_"]:checked');
      if(townInput){
        fetch(`./getStreetsJson?streetName=${query}&townCode=${townInput.value}`)
          .then(response => response.json())
          .then(data => renderList(searchInArray(query,JSON.parse(data)), 'street_code', 'street'))
          .catch(e => console.log(e))
      }
        else
        renderList('');
    }

    // получить районы с бэка
    const setDistricts = (query) => {
      let townInput = document.querySelector('input[id^="locality_"]:checked');
      if(townInput)
        fetch(`./getDistrictsJson?districtName=${query}&townCode=${townInput.value}`)
          .then(response => response.json())
          .then(data => renderList(searchInArray(query,JSON.parse(data)), 'district_code', 'district'))
          .catch(e => console.log(e))
        else
        renderList('');
    }

    // получить микрорайоны с бэка
    const setMicrodistricts = (query) => {
      let townInput = document.querySelector('input[id^="locality_"]:checked');
      if(townInput)
        fetch(`./getSubdistrictsJson?subdistrictName=${query}&townCode=${townInput.value}`)
          .then(response => response.json())
          .then(data => renderList(searchInArray(query,JSON.parse(data)), 'subdistrict_code', 'subdistrict'))
          .catch(e => console.log(e))
        else
        renderList('');
    }

    // поиск по объекту
    const searchInArray = (query, arr) => {
      let result = []
      query = query.toLowerCase()

      arr.forEach(obj => {
        if (obj.name.toLowerCase().includes(query)) result.push(obj)
      })

      return result
    }

    // рендер ноды в лукап
    const renderNode = (obj, name, nameId) => {
      const template = `
                        <input value="${obj.code}" type="radio" class="__select__input" id="${nameId}_${obj.id}" tabindex="0" name=${name}>
                        <label class="__select__label" for="${nameId}_${obj.id}">${obj.name}</label>
                       `

      contentNode.insertAdjacentHTML('beforeend', template)
    }

    // возвращаем строки в начальное состояние
    function removePreviousList(contentNode) {
      contentNode.innerHTML = `
                               <input type="radio" class="__select__input" id="" tabindex="0">
                               <label class="__select__label" for="">Выберите значение</label>
                              `
    }

    function initEventListeners(node) {
      const labels = node.querySelectorAll('label')
      const inputs = node.querySelectorAll('input')

      const handleLabelClick = (label) => {
        const queryInput = node.parentNode.querySelector('input')
        queryInput.value = label.innerText
      }

      labels.forEach(label => label.addEventListener('click', () => handleLabelClick(label)))
    }

    // рендер всех найденных нод
    // list - массив
    function renderList(list) {
      const contentNode = parentNode.querySelector('.__select__content')
      // удаляем предыдущие ноды
      removePreviousList(contentNode)
      parentNode.setAttribute('data-state', '')

      // добавляем новые ноды
      if(list !== '')
      {
        list.forEach(obj => renderNode(obj))
        parentNode.setAttribute('data-state', 'active')
      }

      // вешаем прослушку по строкам для изменения значения
      initEventListeners(contentNode)
    }



    // логика работы лукапа
    const handleNodeKeyUp = e => {
      const query = e.target.value
      setData(query)
    }

    node.addEventListener('keyup', handleNodeKeyUp)

  }

  // инит лукапов в ноде
  function initLookups(node) {
    const localityNodes = node.querySelectorAll('.address__locality')
    const streetNodes = node.querySelectorAll('.address__street')
    const districtNodes = node.querySelectorAll('.address__district')
    const microdistrictNodes = node.querySelectorAll('.address__microdistrict')

    if (localityNodes) localityNodes.forEach(node => initLookup('locality', node))
    if (streetNodes) streetNodes.forEach(node => initLookup('street', node))
    if (districtNodes) districtNodes.forEach(node => initLookup('district', node))
    if (microdistrictNodes) microdistrictNodes.forEach(node => initLookup('microdistrict', node))
  }
  // базовый инит всех лукапов
  initLookups(document)

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

    // переключение блоков в "Запуск по очередям", слайдер 1
    function initQueueLaunch(node) {
      const queueLaunchTrigger = node.querySelector('.queue_launch__trigger')
      const queueLaunchYes = queueLaunchTrigger.querySelector('input[type="radio"][value="yes"]')
      const queueLaunchNo = queueLaunchTrigger.querySelector('input[type="radio"][value="no"]')
      const isDisabled = queueLaunchYes.disabled || queueLaunchNo.disabled
      const queueLaunchYesNode = node.querySelector('.queue_launch_yes')
      const queueLaunchNoNode = node.querySelector('.queue_launch_no')

      if (isDisabled) return

      // if (!(queueLaunchYes && queueLaunchNo)) return

      const handleYesClick = () => {
        queueLaunchYesNode.classList.remove('hidden')
        queueLaunchNoNode.classList.add('hidden')
      }

      const handleNoClick = () => {
        queueLaunchYesNode.classList.add('hidden')
        queueLaunchNoNode.classList.remove('hidden')
      }

      queueLaunchYes.parentNode.addEventListener('click', handleYesClick)
      queueLaunchNo.parentNode.addEventListener('click', handleNoClick)
    }
    if (document.querySelector('.queue_launch__trigger')) initQueueLaunch(document)

    // инит слайдера в слайд 4
    function initQueueSlider() {
      $('.queue_slider').slick({
        dots: true,
        arrows: false
      })
    }
    initQueueSlider()

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
      initRadioLabels(newNode)
      initCheckboxLabels(newNode)
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

      const statementtc = document.querySelector('[name="statementtc_queuecount"]')
      if (statementtc) statementtc.value = queue_count;

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
      changeSliderHeight()

      // инициализация дейтпикера на последней добавленной строке
      const lastChildDatepicker = queue_tbody.children().last().find('.datepicker_input')
      lastChildDatepicker.datepicker($.datepicker.regional['ru'])
      lastChildDatepicker.mask("99.99.9999", { autoclear: false })
    })

    // удаление новых строк в таблицу с очередями, слайдер 1
    $('.queue_btn_remove').click(function(e) {
      e.preventDefault()
      if (queue_count < 1) return

      queue_count--
      const statementtc = document.querySelector('[name="statementtc_queuecount"]')
      if (statementtc) statementtc.value = queue_count

      queue_tbody.children().last().remove()
      deleteLastNode()
      changeSliderHeight()
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
          // TODO: overflow: hidden для body
          body.addClass('')
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
      const handleNoClick = () => {
        changeSliderHeight()

        // при клике по радио "Нет", если нет заполненных очередей, то завершаем вызов модалки
        if (queue_count < 1) return
        createModal()
        addListenersToModal()
      }

      const handleYesClick = () => changeSliderHeight()

      queueLaunchNoBtn.parentNode.addEventListener('click', handleNoClick)
      queueLaunchYesBtn.parentNode.addEventListener('click', handleYesClick)

    }
    initClearAllQueues()


  }
  if (document.querySelector('.queue_launch_yes')) initMultipleQueues()


  // проверка очередей на disabled
  // Характеристика объека подключения = "Объекты капитального строительства"
  // Тогда очередь разблокирована, иначе заблокирована
  const isQueueEnabled = (node) => {
    const housekeepingNode = node.querySelector('input[name="connectobjkind"][value="01"]')
    const objectsNode = node.querySelector('input[name="connectobjkind"][value="02"]')
    const objectChecked = objectsNode.checked
    const reconstructionNode = node.querySelector('input[name="connectobjkind"][value="03"]')
    const radioYesNode = node.querySelector('input[type="radio"][value="yes"]')
    const radioNoNode = node.querySelector('input[type="radio"][value="no"]')
    const queueLaunchNode = node.querySelector('.queue_launch')
    const queueLaunchTriggerNode = node.querySelector('.queue_launch__trigger')
    const queueLaunchYesNode = node.querySelector('.queue_launch_yes')

    const hideQueueLaunch = () => {
      queueLaunchTriggerNode.classList.add('hidden')
      queueLaunchNode.classList.add('hidden')
    }

    const showQueueLaunch = () => {
      queueLaunchTriggerNode.classList.remove('hidden')
      queueLaunchNode.classList.remove('hidden')
      initQueueLaunch(document)
    }

    const disableQueue = () => {
      // disabled для всех активных полей
      radioYesNode.disabled = true
      radioNoNode.disabled = true
      queueLaunchYesNode.querySelector('input').disabled = true
      queueLaunchYesNode.querySelector('button').disabled = true

      // TODO: добавить модалку подтверждения удаления всех очередей

      // "Запуск по очередям" скрываем - добавить класс .queue_launch__trigger
      radioNoNode.checked = true
      hideQueueLaunch()
    }

    const enableQueue = () => {
      // enable для всех активных полей
      radioYesNode.disabled = false
      radioNoNode.disabled = false
      queueLaunchYesNode.querySelector('input').disabled = false
      queueLaunchYesNode.querySelector('button').disabled = false

      showQueueLaunch()
    }

    // начальная проверка на отметку
    if (objectChecked) enableQueue()
    if (!objectChecked) disableQueue()

    // хэндлер включения/выключения блокировки очередей
    const handleClick = e => {
      const currInput = e.target.querySelector('input')
      const currInputValue = currInput.value

      if (currInputValue === '02') return enableQueue()
      return disableQueue()
    }

    // добавляем прослушку на клики по радио
    housekeepingNode.parentNode.addEventListener('click', e => handleClick(e))
    objectsNode.parentNode.addEventListener('click', e => handleClick(e))
    reconstructionNode.parentNode.addEventListener('click', e => handleClick(e))
  }
  if (document.querySelector('.queue_launch__trigger')) isQueueEnabled(document)


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
                    </tr>
                   `
    e.preventDefault()

    water_source_tbody.append(new_row)
    water_source_count++
    changeSliderHeight()
  })

  // удаление новых строк в таблице с иными источниками, слайдер 4
  $('.add_source_btn_remove').click(function(e) {
    e.preventDefault()

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove()
      water_source_count--
      changeSliderHeight()
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
    changeSliderHeight()
  })
  // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4
  $('.add_coverage_btn_remove').click(function(event) {
    event.preventDefault()
    if (land_coverage_count <= 1) return

    land_coverage_tbody.children().last().remove()
    land_coverage_count--
    changeSliderHeight()
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

      if (isConnectionToColdWaterChecked) {
        coldWaterToggle.classList.remove('hidden')
        changeSliderHeight()
      } else {
        coldWaterToggle.classList.add('hidden')
        changeSliderHeight()
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

      if (isConnectionToDrainageChecked) {
        drainageToggle.classList.remove('hidden')
        changeSliderHeight()
      } else {
        drainageToggle.classList.add('hidden')
        changeSliderHeight()
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
              if ($this.find('input:checked').length == 0 && $this.is(':visible'))
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

        let elems_req_group = $('.form__field:not(.hidden) [class*=req_group_]');
        var group_names = [];   // получаем существующие названия групп
        elems_req_group.each(function () {
          var $this = $(this);
          var el_id = $this[0].id;
          if (!group_names.includes(el_id))
            group_names.push(el_id);
        });
        group_names.forEach(function (e) {    // для каждой группы получаем ее элементы
          let group = elems_req_group.filter('#' + e);
          let isAtt = false;
          group.each(function () {
            var $this = $(this);
            if ($this.find(".attachment").length != 0) {
              isAtt = true;
              return false;
              }
          });
          if (!isAtt) {   // если в группе не оказалось прикрепленных файлов, то выдаем обшибку
            if (group.length === 1 ) err.push("<h6>Требуется прикрепить документ: </h6> \n <p>" + group[0].previousElementSibling.innerText + '</p>');
            else {
              let text = "<h6>Требуется прикрепить один из документов: \n</h6>";
              group.each(function () {
                var $this = $(this);
                text = text + '<p>' + $this[0].previousElementSibling.innerText + ';</p>';
              })
              err.push(text);
            }
          }
        })


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
        $('input[name="redirect"]').val('newrequesttp')
        break;
    }

  });

  let is_simple;
  function HideElemsSimple(){
    if(is_simple)
      switch(document.querySelector('[name="connectobjkind"]:checked').getAttribute('id')){
        case 'connectobjkind_01':
          document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
          document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
          document.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
          document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
          document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
          document.querySelector('[name^="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
          document.querySelector('[name^="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
          document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
          if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
            document.querySelector('[name^="connectloadparamdata_value1"].md').value = '1';
          document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
          document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
          document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
          if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
            document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = '1';
          document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
        break;
        case 'connectobjkind_02':
          document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
          document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
          document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
          document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
          document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
          document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
          document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
          document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
          document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        break;
        case 'connectobjkind_03':
          document.querySelector('[name^="room_number"]').parentElement.classList.remove('hidden'); // Номер квартиры
          document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
          document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
          document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
          document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
          document.querySelector('[name^="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
          document.querySelector('[name^="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
          document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
          document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
          document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
        break;
      }
    else
      switch(document.querySelector('[name="connectobjkind"]:checked').getAttribute('id')){
        case 'connectobjkind_01':
          document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
          document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
          document.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
          document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
          document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
          document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
          document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
          document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
          if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
            document.querySelector('[name^="connectloadparamdata_value1"].md').value = '1';
          document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
          document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
          if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
            document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = '1';
          document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        break;
        case 'connectobjkind_02':
          document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
          document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
          document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
          document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
          document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
          document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
          document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
          document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
          document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)

        break;
        case 'connectobjkind_03':
          document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
          document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
          document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
          document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
          document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
          document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
          document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
          document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
          document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
          document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        break;
      }
      changeSliderHeight();
  }

  $.ajax({
    url: "./getSimpleJson/",
    success: function(data){
      is_simple = data === "true" ? true : false;
      //is_simple = false

      if(is_simple){
        let list_hidden_elem = document.querySelectorAll(
          "[name='infmaxparam3']" + // Протяжность сети
          ",[name='infmaxparam4']" + // Диаметр сети
          ",[name='techcondobj_note']" + // Примечание
          ",[name='connectloadparamdata_value2']" +
          ",[name='addconnectloadparamdata_value_05']" +
          ",[name='connectloadparamdata_value2_2']" +
          ",[name='addconnectloadparamdata_value_06']" +
          ",[name='addconnectloadparamdata_value_08'].mh" +
          ",[name='addconnectloadparamdata_value_08'].md" +
          ",[name='addconnectloadparamdata_value_02'].mh" +
          ",[name='addconnectloadparamdata_value_02'].md" +
          ",[name='addconnectloadparamdata_value_07'].mh" +
          ",[name='addconnectloadparamdata_value_07'].md"
        );
        list_hidden_elem.forEach(x => x.parentElement.classList.add('hidden'));
        if(document.querySelector('[name="connectobjkind"]:checked').id == 'connectobjkind_03')
          document.querySelector('[name="room_number"]').parentElement.classList.remove('hidden');

        document.querySelector('.requests_form').classList.add('simple');
      }

      document.querySelectorAll('[name="connectobjkind"]').forEach(x => x.parentElement.addEventListener('click', HideElemsSimple));

      HideElemsSimple();
    }
  });
  //#endregion
})

// export { changeSliderHeight }
