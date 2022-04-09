import initQueueLaunch from './initQueueLaunch.js'
import initQueueTableNewRow from './initQueueTableNewRow.js'
import initAllQueuesDeletion from './initAllQueuesDeletion.js'
import initQueueSlider from '../controls/slider/initQueueSlider.js'


// логика блоков очередей (добавление, удаление), 1 и 4 сладер
function initMultipleQueues() {
  // инит блока "Запуск по очередям"
  if (document.querySelector('.queue_launch__trigger'))
    initQueueLaunch(document)

  // инит добавления новых строк в таблицу очередей
  if (document.querySelector('.queue_btn'))
    initQueueTableNewRow()

  // инит удаления и блокировки очередей
  initAllQueuesDeletion()

  // инит слайдера в слайд 4
  // initQueueSlider()

}


export default initMultipleQueues
