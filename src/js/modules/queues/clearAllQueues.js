import clearTableQueues from './clearTableQueues.js'
import clearDetailedQueues from './clearDetailedQueues.js'


// очистка всех очередей при переключении "Запуск по очередям" в "Нет", слайд 1, 4
function clearAllQueues(node) {
  // console.log(node)
  const queueTable = node.querySelector('.queue_launch_yes table')
  // console.log(queueTable)
  const queueSlider = node.querySelector('.queue_slider')
  // console.log(queueSlider)

  clearTableQueues(queueTable)
  clearDetailedQueues(queueSlider)
}


export default clearAllQueues
