import getCurrentQueueCount from './getCurrentQueueCount.js'
import createAndRenderNewNode from './createAndRenderNewNode.js'
import changeSliderHeight from '../controls/slider/changeSliderHeight.js'
import initDatepickers from '../controls/initDatepickers.js'
import initMasks from '../masks/initMasks.js'
import deleteLastNode from './deleteLastNode.js'
import checkQueueCount from './checkQueueCount.js'


// добавление новых строк в таблицу с очередями, слайд 1
function initQueueTableNewRow() {
  const queueTbody = $('.queue_launch_yes tbody')

  // добавление новых строк в таблицу очередей, слайд 1
  $('.queue_btn').click(function(e) {
    e.preventDefault()
    const queueCount = getCurrentQueueCount(document, 0)

    const statementtc = document.querySelector('[name="statementtc_queuecount"]')
    if (statementtc){
      statementtc.value = queueCount;
      checkQueueCount();
    }

    const new_row = queueTbody[0].querySelector('[name=statementtc_dateplan__0]').closest('tr').cloneNode(true)
    new_row.querySelectorAll('td')[0].innerHTML = 'Очередь №' + queueCount
    new_row.querySelector('input').setAttribute('name', 'statementtc_dateplan__' + queueCount)
    new_row.querySelector('input').value = ''
    new_row.querySelector('input').removeAttribute('id')
    queueTbody[0].querySelector('[name=statementtc_dateplan__0]').closest('tr').before(new_row)
    createAndRenderNewNode(queueCount)
    changeSliderHeight()

    // инициализация дейтпикера на последней добавленной строке
    let lastChildDatepicker = $(new_row.querySelector('.datepicker_input'))
    lastChildDatepicker.removeClass('hasDatepicker')
    lastChildDatepicker.datepicker($.datepicker.regional['ru'])
    lastChildDatepicker.mask("99.99.9999", { autodelete: false })
  })

  // удаление новых строк в таблицу с очередями, слайдер 1
  $('.queue_btn_remove').click(function(e) {
    e.preventDefault()
    const queueCount = getCurrentQueueCount(document, -1)

    if (queueCount < 3) return

    const statementtc = document.querySelector('[name="statementtc_queuecount"]')
    if (statementtc){
      statementtc.value = queueCount - 1
      checkQueueCount();
    }

    queueTbody[0].querySelector('[name=statementtc_dateplan__0]').closest('tr').previousElementSibling.remove()
    deleteLastNode()
    changeSliderHeight()
    // removeLastSlide()

  })
}


export default initQueueTableNewRow
