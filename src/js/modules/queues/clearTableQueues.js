import getCurrentQueueCount from './getCurrentQueueCount.js'


// очистка всех очередей в таблице при переключении "Запуск по очередям" в "Нет", слайд 1
function clearTableQueues(queueTable) {
  let queueCount = getCurrentQueueCount(document, -1)
  const queueRows = queueTable.querySelector('tbody').querySelectorAll('.table__row')

  queueRows.forEach((queueRow, i) => {
    if (i === 0) return
    queueRow.remove()
  })

  // queueCount = 0
}


export default clearTableQueues
