$(document).ready(function() {
  const body = $('body')

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

  // псевдо-селект
  function initPseudoSelect() {
    const selectSingle = document.querySelector('.__select')
    const selectSingle_title = selectSingle.querySelector('.__select__title')
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')

    selectSingle_title.addEventListener('click', function () {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '')
      } else {
        selectSingle.setAttribute('data-state', 'active')
      }
    });

    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', function (e) {
        selectSingle_title.textContent = e.target.textContent
        selectSingle.setAttribute('data-state', '')
      })
    }

    // скрытие при клике по body кроме .__select
    const body = document.querySelector('body')
    body.addEventListener('click', e => {
      const eClassList = e.target.classList
      const trigger = (eClassList[0] !== '__select__title') &&
                      (eClassList[0] !== '__select__content') &&
                      (eClassList[0] !== '__select__input')

      if (trigger) selectSingle.setAttribute('data-state', '')
    })

  }
  if (document.querySelector('.__select')) initPseudoSelect()


  // переключение блоков в "Запуск по очередям", слайдер 1
  $('input[name="queue_launch"]').click(function () {
    var target = $('.queue_launch_' + $(this).val())

    $('.queue_launch').not(target).hide(0)
    target.fadeIn(300)
  })


  // Модалка "Скачать инструкцию"
  function initModalDownloadInstructions() {
    var instructionsBtn = $('.instructions__btn'),
        instructionsModal = $('.modal_instructions'),
        instructionsModalContent = $('.modal_instructions__content'),
        instructionsModalClose = $('.modal_instructions .close')

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
  initModalDownloadInstructions()


  // пересчет высоты слайдера
  // action = 'increase' / 'decrease' (увеличить / уменьшить высоту), value = значение изменения
  function changeSliderHeight(action, value) {
    const slickList = document.querySelector('.slick-list')
    const slickListHeight = Number.parseInt(slickList.style.height)

    if (action === 'increase') {
      return slickList.style.height = slickListHeight + value + 'px'
    }
    return slickList.style.height = slickListHeight - value + 'px'
  }


  // добавление новых строк в таблицу с очередями, слайдер 1
  const queue_tbody = $('.queue_launch_yes tbody')
  let queue_count = 3

  $('.queue_btn').click(function(event) {
    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">Очередь №${queue_count}</td>
                      <td class="table__cell">
                        <input type="text" class="field__input datepicker_input" placeholder="Введите данные" />
                      </td>
                    </tr>
                   `
    event.preventDefault()

    queue_tbody.append(new_row)
    queue_count += 1
    changeSliderHeight('increase', 39)

    // инициализация дейтпикера на последней добавленной строке
    const lastChildDatepicker = queue_tbody.children().last().find('.datepicker_input')
    lastChildDatepicker.datepicker($.datepicker.regional['ru'])
    lastChildDatepicker.mask("99.99.9999", { autoclear: false })
  })
  // удаление новых строк в таблицу с очередями, слайдер 1
  $('.queue_btn_remove').click(function(event) {
    event.preventDefault()

    if (queue_count > 3) {
      queue_tbody.children().last().remove()
      queue_count -= 1
      changeSliderHeight('decrease', 39)
    }
  })

  // добавление новых строк в таблицу с иными источниками, слайдер 4
  const water_source_tbody = $('.other_water_sources tbody')
  let water_source_count = 2

  $('.add_source_btn').click(function(event) {
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
    event.preventDefault()

    water_source_tbody.append(new_row)
    water_source_count++
    changeSliderHeight('increase', 39)
  })

  // удаление новых строк в таблице с иными источниками, слайдер 4
  $('.add_source_btn_remove').click(function(event) {
    event.preventDefault()

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove()
      water_source_count -= 1
      changeSliderHeight('decrease', 39)
    }
  })

  // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4
  const land_coverage_tbody = $('.land_coverage_characteristics tbody')
  let land_coverage_count = 2

  $('.add_coverage_btn').click(function(event) {
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
    event.preventDefault()
    land_coverage_tbody.append(new_row);
    land_coverage_count++
    changeSliderHeight('increase', 39)
  })
  // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4
  $('.add_coverage_btn_remove').click(function(event) {
    event.preventDefault()

    if (land_coverage_count > 2) {
      land_coverage_tbody.children().last().remove()
      land_coverage_count -= 1
      changeSliderHeight('decrease', 39)
    }
  })

  // datepicker
  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru'])
  }
  if (document.querySelector('.datepicker_input')) initDatepickers()

  // маски
  if (document.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999", { autoclear: false })
  if (document.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99", { autoclear: false })
  if (document.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999", { autoclear: false })
  if (document.querySelector('.passport_serial_input')) $('.passport_serial_input').mask("99 99", { autoclear: false })
  if (document.querySelector('.passport_number_input')) $('.passport_number_input').mask("999999", { autoclear: false })
  if (document.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999", { autoclear: false })
  if (document.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999", { autoclear: false })
  if (document.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999", { autoclear: false })
  if (document.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999", { autoclear: false })


  // Блок "Являюсь представителем"
  function initCheckRepresentative() {
    const representativeBlock = document.querySelector('.representative')
    const isRepresentative = representativeBlock.querySelector('.yes')
    const isNotRepresentative = representativeBlock.querySelector('.no')
    const representativeAddDocsBlock = document.querySelector('.representative_add_docs_block')

    isRepresentative.addEventListener('change', () => representativeAddDocsBlock.classList.remove('hidden'))
    isNotRepresentative.addEventListener('change', () => representativeAddDocsBlock.classList.add('hidden'))
  }
  if (document.querySelector('.representative')) initCheckRepresentative()


  // Блок "Холодное водоснабжение"
  function initColdWaterSupply() {
    const connectionToColdWater= document.querySelector('.connection_to_cold_water')
    const coldWaterBlock = document.querySelector('.cold_water_supply_toggle')

    connectionToColdWater.addEventListener('change', () => {
      if (connectionToColdWater.checked) {
        coldWaterBlock.classList.remove('hidden')
        // высота каждой строки = 103px - 120px + отступ снизу
        // добавить пересчет высоты слайдера на основании сгенерированной высоты элементов
        changeSliderHeight('increase', 1250)
      } else {
        coldWaterBlock.classList.add('hidden')
        changeSliderHeight('decrease', 1250)
      }

    })
    // добавить пересчет высоты слайдера

  }
  if (document.querySelector('.connection_to_cold_water')) initColdWaterSupply()


  // Блок "Водоотведение"
  function initDrainage() {
    const connectionToDrainage= document.querySelector('.connection_to_drainage')
    const drainageBlock = document.querySelector('.drainage_toggle')

    connectionToDrainage.addEventListener('change', () => {
      if (connectionToDrainage.checked) {
        drainageBlock.classList.remove('hidden')
        // высота каждой строки = 103px - 120px + отступ снизу
        // добавить пересчет высоты слайдера на основании сгенерированной высоты элементов
        changeSliderHeight('increase', 650)
      } else {
        drainageBlock.classList.add('hidden')
        changeSliderHeight('decrease', 650)
      }

    })

  }
  if (document.querySelector('.connection_to_drainage')) initDrainage()

})
