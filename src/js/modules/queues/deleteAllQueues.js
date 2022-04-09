import deleteTableQueues from './deleteTableQueues.js'
import deleteDetailedQueues from './deleteDetailedQueues.js'


// очистка всех очередей при переключении "Запуск по очередям" в "Нет", слайд 1, 4
function deleteAllQueues(node) {
  // console.log(node)
  const queueTable = node.querySelector('.queue_launch_yes table')
  // console.log(queueTable)
  const queueSlider = node.querySelector('.queue_slider')
  // console.log(queueSlider)

  deleteTableQueues(queueTable)
  deleteDetailedQueues(queueSlider)
}


export default deleteAllQueues
