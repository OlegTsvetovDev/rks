// очистка всех развернутых очередей при переключении "Запуск по очередям" в "Нет", слайд 4
function deleteDetailedQueues(queueSlider) {
  const queueBlocks = queueSlider.querySelectorAll('.queue_block')

  queueBlocks.forEach(queueBlock => {
    if (queueBlock.id === 'summary_queue') return
    queueBlock.remove()
  })
}


export default deleteDetailedQueues
