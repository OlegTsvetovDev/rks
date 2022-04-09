// очистка всех развернутых очередей при переключении "Запуск по очередям" в "Нет", слайд 4
function clearDetailedQueues(queueSlider) {
  const queueBlocks = queueSlider.querySelectorAll('.queue_block')

  queueBlocks.forEach((queueBlock, i) => {
    if (i === 0) return
    queueBlock.remove()
  })
}


export default clearDetailedQueues
