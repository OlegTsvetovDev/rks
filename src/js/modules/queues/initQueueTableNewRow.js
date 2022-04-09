import getCurrentQueueCount from './getCurrentQueueCount.js'
import createAndRenderNewNode from './createAndRenderNewNode.js'
import changeSliderHeight from '../controls/slider/changeSliderHeight.js'
import initDatepickers from '../controls/initDatepickers.js'
import initMasks from '../masks/initMasks.js'
import deleteLastNode from './deleteLastNode.js'


// добавление новых строк в таблицу с очередями, слайд 1
function initQueueTableNewRow() {
  const queueTbody = $('.queue_launch_yes tbody')
  // let queueCount = getCurrentQueueCount(document, -1)

  // добавление новых строк в таблицу очередей, слайд 1
  $('.queue_btn').click(function(e) {
    e.preventDefault()
    const queueCount = getCurrentQueueCount(document, 0)
    // queueCount++

    const statementtc = document.querySelector('[name="statementtc_queuecount"]')
    if (statementtc) statementtc.value = queueCount;

    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">Очередь №${queueCount}</td>
                      <td class="table__cell">
                        <input type="text" class="field__input datepicker_input" name=${'statementtc_dateplan_' + queueCount} placeholder="Введите данные" />
                      </td>
                    </tr>
                   `

    queueTbody.append(new_row)
    createAndRenderNewNode(queueCount)
    changeSliderHeight()

    // инициализация дейтпикера на последней добавленной строке
    const lastChildDatepicker = queueTbody.children().last().find('.datepicker_input')
    lastChildDatepicker.datepicker($.datepicker.regional['ru'])
    lastChildDatepicker.mask("99.99.9999", { autoclear: false })
  })

  // удаление новых строк в таблицу с очередями, слайдер 1
  $('.queue_btn_remove').click(function(e) {
    e.preventDefault()
    const queueCount = getCurrentQueueCount(document, 0)

    if (queueCount < 1) return

    // queueCount--
    const statementtc = document.querySelector('[name="statementtc_queuecount"]')
    if (statementtc) statementtc.value = queueCount

    queueTbody.children().last().remove()
    deleteLastNode()
    changeSliderHeight()
    // removeLastSlide()

  })
}


export default initQueueTableNewRow
