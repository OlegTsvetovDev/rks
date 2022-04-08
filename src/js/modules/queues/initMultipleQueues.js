import initQueueLaunch from './initQueueLaunch.js'
import initPseudoSelects from '../controls/select/initPseudoSelects.js'
import changeSliderHeight from '../controls/slider/changeSliderHeight.js'
import initRadioLabels from '../controls/initRadioLabels.js'
import initCheckboxLabels from '../controls/initCheckboxLabels.js'
import initMasks from '../masks/initMasks.js'
import createNewNode from './createNewNode.js'
import getCurrentQueueCount from './getCurrentQueueCount.js'


// логика блоков очередей (добавление, удаление), 1 и 4 сладер
function initMultipleQueues() {
  // состояние количества очередей
  let queue_count = getCurrentQueueCount(document, -1)

  //
  if (document.querySelector('.queue_launch__trigger'))
    initQueueLaunch(document)

  // инит слайдера в слайд 4
  function initQueueSlider() {
    $('.queue_slider').slick({
      dots: true,
      arrows: false
    })
  }
  initQueueSlider()



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
                        <input type="text" class="field__input datepicker_input" name=${'statementtc_dateplan_' + queue_count} placeholder="Введите данные" />
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
      document.querySelector('[name="statementtc_queuecount"').value = 0;

      // при клике по радио "Нет", если нет заполненных очередей, то завершаем вызов модалки
      if (queue_count < 1) return
      createModal()
      addListenersToModal()
    }

    const handleYesClick = () => {
      changeSliderHeight()
      document.querySelector('[name="statementtc_queuecount"').value = queue_count;
    }

    queueLaunchNoBtn.parentNode.addEventListener('click', handleNoClick)
    queueLaunchYesBtn.parentNode.addEventListener('click', handleYesClick)

  }
  initClearAllQueues()


}


export default initMultipleQueues
