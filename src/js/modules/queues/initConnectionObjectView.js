const initConnectionObjectView = node => {
  const housekeepingNode = node.querySelector('input[name="connectobjkind"][value="01"]')
  const objectsNode = node.querySelector('input[name="connectobjkind"][value="02"]')
  const reconstructionNode = node.querySelector('input[name="connectobjkind"][value="03"]')
  const sequenceNode = node.querySelector('.queue_launch__trigger')
  const yesNode = node.querySelector('.queue_launch_yes')
  const noNode = node.querySelector('.queue_launch_no')

  // Проверяем "Запуск по очередям" и показываем соответствующие блоки
  const checkSequenceNode = sequenceNode => {
    const yesRadio = sequenceNode.querySelector('input[name="queue_launch"][value="yes"]')
    const noRadio = sequenceNode.querySelector('input[name="queue_launch"][value="no"]')

    // если "Запуск по очередям" в "Да"
    if (yesRadio.checked) {
      yesNode.classList.remove('hidden')
      return noNode.classList.add('hidden')
    }

    // если "Запуск по очередям" в "Нет"
    yesNode.classList.add('hidden')
    return noNode.classList.remove('hidden')
  }

  // доступен "Запуск по очередям"
  const enableMultipleQueues = e => {
    sequenceNode.classList.remove('hidden')
    checkSequenceNode(sequenceNode)
  }

  // недоступен "Запуск по очередям"
  const disableMultipleQueues = e => {
    sequenceNode.classList.add('hidden')
    yesNode.classList.add('hidden')
    noNode.classList.add('hidden')
  }

  // проверка на начальную отметку objectsNode
  const checkInitialStatus = () => {
    if (objectsNode.checked)
      return enableMultipleQueues()

    if (housekeepingNode.checked)
      return disableMultipleQueues()

    if (reconstructionNode.checked)
      return disableMultipleQueues()
  }
  checkInitialStatus()

  // добавляем прослушку на клики по лейблам радио
  housekeepingNode.parentNode.addEventListener('click', disableMultipleQueues)
  objectsNode.parentNode.addEventListener('click', enableMultipleQueues)
  reconstructionNode.parentNode.addEventListener('click', disableMultipleQueues)
}


export default initConnectionObjectView
