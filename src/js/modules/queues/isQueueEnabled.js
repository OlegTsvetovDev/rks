// deprecated
// проверка очередей на disabled
// Характеристика объека подключения = "Объекты капитального строительства"
// Тогда очередь разблокирована, иначе заблокирована
const isQueueEnabled = (node) => {
  const housekeepingNode = node.querySelector('input[name="connectobjkind"][value="01"]')
  const objectsNode = node.querySelector('input[name="connectobjkind"][value="02"]')
  const objectChecked = objectsNode.checked
  const reconstructionNode = node.querySelector('input[name="connectobjkind"][value="03"]')
  const queueLaunchTriggerNode = node.querySelector('.queue_launch__trigger')
  const radioYes = queueLaunchTriggerNode.querySelector('input[type="radio"][value="yes"]')
  const radioNo = queueLaunchTriggerNode.querySelector('input[type="radio"][value="no"]')
  const queueLaunchNode = node.querySelector('.queue_launch')
  const queueLaunchYesNode = node.querySelector('.queue_launch_yes')
  const queueLaunchNoNode = node.querySelector('.queue_launch_no')

  const hideQueueLaunch = () => {
    queueLaunchTriggerNode.classList.add('hidden')
    queueLaunchYesNode.classList.add('hidden')
    queueLaunchNoNode.classList.remove('hidden')
  }

  const showQueueLaunch = () => {
    queueLaunchTriggerNode.classList.remove('hidden')
    if(radioYes.checked){
      queueLaunchYesNode.classList.remove('hidden')
      queueLaunchNoNode.classList.add('hidden')
    }
    // initQueueLaunch(document)
  }

  const disableQueue = () => {
    // disabled для всех активных полей
    radioYes.disabled = true
    radioNo.disabled = true
    queueLaunchYesNode.querySelector('input').disabled = true
    queueLaunchYesNode.querySelector('button').disabled = true

    // TODO: добавить модалку подтверждения удаления всех очередей

    // "Запуск по очередям" скрываем - добавить класс .queue_launch__trigger
    radioNo.checked = true
    hideQueueLaunch()
  }

  const enableQueue = () => {
    // enable для всех активных полей
    radioYes.disabled = false
    radioNo.disabled = false
    queueLaunchYesNode.querySelector('input').disabled = false
    queueLaunchYesNode.querySelector('button').disabled = false

    showQueueLaunch()
  }

  // начальная проверка на отметку
  //if (objectChecked) enableQueue()
  //if (!objectChecked) disableQueue()

  // хэндлер включения/выключения блокировки очередей
  const handleClick = e => {
    // TODO: исправить двойной клик по лейблу и инпуту
    // console.log(e.target)
    const currInput = e.target.querySelector('input')
    const currInputValue = currInput.value

    if (currInputValue === '02') return enableQueue()
    return disableQueue()
  }

  // добавляем прослушку на клики по радио
  housekeepingNode.parentNode.addEventListener('click', e => handleClick(e))
  objectsNode.parentNode.addEventListener('click', e => handleClick(e))
  reconstructionNode.parentNode.addEventListener('click', e => handleClick(e))
}


export default isQueueEnabled
