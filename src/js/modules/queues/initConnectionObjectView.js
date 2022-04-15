import getCurrentQueueCount from './getCurrentQueueCount.js'
import createModal from '../modals/createModal.js'
import addListenersToModal from '../modals/addListenersToModal.js'
import changeSliderHeight from '../controls/slider/changeSliderHeight.js'

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
    if (yesRadio.checked)
    {
      noNode.classList.add('hidden')
      yesNode.classList.remove('hidden')
      return
    }

    // если "Запуск по очередям" в "Нет"
    noNode.classList.remove('hidden')
    yesNode.classList.add('hidden')
  }

  // доступен "Запуск по очередям"
  const enableMultipleQueues = e => {
    sequenceNode.classList.remove('hidden')
    checkSequenceNode(sequenceNode)
  }

  // недоступен "Запуск по очередям"
  const disableMultipleQueues = e => {
    const step2 = document.querySelector('.step_2')
    const queueLaunchYes = step2.querySelector('.queue_launch_yes')
    const queueLaunchNo = step2.querySelector('.queue_launch_no')
    const radioYes = step2.querySelector('input[name="queue_launch"][value="yes"]')
    const radioNo = step2.querySelector('input[name="queue_launch"][value="no"]')
    const queueCount = getCurrentQueueCount(document, -1)
    // если есть очереди помимо базовой
    if (queueCount > 0) {

    // вызываем модалку на подтверждение
    createModal(document)
    addListenersToModal(document, queueLaunchYes, queueLaunchNo)

    changeSliderHeight()
    } else {
      sequenceNode.classList.add('hidden')
      yesNode.classList.add('hidden')
      noNode.classList.remove('hidden')
    }
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
  reconstructionNode.parentNode.addEventListener('click', function () {
    const connectobjchar = document.querySelectorAll('input[name*="connectobjchar"][value="002"]')
    const connectobjtype = document.querySelectorAll('input[name*="connectobjtype"][value="002"]')
    const techcondobj_floors = document.querySelectorAll('input[name*="techcondobj_floors"]')

    connectobjchar.forEach(item => item.click())
    connectobjtype.forEach(item => item.click())
    techcondobj_floors.forEach(item => item.value = '1')

  })

}


export default initConnectionObjectView
