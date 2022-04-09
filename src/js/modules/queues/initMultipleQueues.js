import initQueueLaunch from './initQueueLaunch.js'
import changeSliderHeight from '../controls/slider/changeSliderHeight.js'
import getCurrentQueueCount from './getCurrentQueueCount.js'
import initQueueSlider from '../controls/slider/initQueueSlider.js'
import addListenersToModal from '../modals/addListenersToModal.js'
import createAndRenderNewNode from './createAndRenderNewNode.js'
import initClearAllQueues from './initClearAllQueues.js'
import initQueueTableNewRow from './initQueueTableNewRow.js'


// логика блоков очередей (добавление, удаление), 1 и 4 сладер
function initMultipleQueues() {
  // состояние количества очередей
  let queueCount = getCurrentQueueCount(document, -1)

  // инит блока "Запуск по очередям"
  if (document.querySelector('.queue_launch__trigger'))
    initQueueLaunch(document)

  // инит слайдера в слайд 4
  initQueueSlider()

  // TODO: дефект - не добавляется больше 3 слайдов
  // TODO: создать пустой слайдер и потом в него сложить все ноды, включая базовую?
  function addNewSlide(newNode) {
    $('.queue_slider').slick('slickAdd', queueCount + 1, newNode)
    // newNode.setAttribute('data-slick-index', queueCount)
    // $('.queue_slider').slick('slickAdd', '<div><h3>' + queueCount + '</h3></div>')
  }

  function removeLastSlide() {
    $('.queue_slider').slick('slickRemove')
  }

  // инит добавления новых строк в таблицу очередей
  if (document.querySelector('.queue_btn'))
    initQueueTableNewRow()




  initClearAllQueues()


}


export default initMultipleQueues
