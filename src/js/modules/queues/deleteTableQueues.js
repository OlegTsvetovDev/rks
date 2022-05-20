import getCurrentQueueCount from './getCurrentQueueCount.js'


// очистка всех очередей в таблице при переключении "Запуск по очередям" в "Нет", слайд 1
function deleteTableQueues(queueTable) {
  let queueCount = getCurrentQueueCount(document, -1)
  const queueRows = queueTable.querySelector('tbody').querySelectorAll('.table__row')

  for(let i = 0; i < queueCount; i++)
    queueRows[i].remove()
}


export default deleteTableQueues
