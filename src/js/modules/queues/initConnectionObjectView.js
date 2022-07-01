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
  const disabled = (housekeepingNode.disabled || objectsNode.disabled || reconstructionNode.disabled)

  // блокировка при disabled
  if (disabled) return

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


  // всякие условия для переключателей
  const dateplan = document.querySelector('input[name*="statementtc_dateplan"]')
  const connectobjchar_new = document.querySelector('input[name*="connectobjchar"][value="001"]')
  const connectobjchar_reconstr = document.querySelector('input[name*="connectobjchar"][value="002"]')
  const connectobjchar_modern = document.querySelector('input[name*="connectobjchar"][value="003"]')
  let connectobjkind_prev = 1;

  if (housekeepingNode.checked) {
    if (dateplan.value === '') dateplan.value = '31.12.2099'
    if (connectobjchar_modern) connectobjchar_modern.click()
    connectobjchar_new.disabled = true
    connectobjchar_reconstr.disabled = true
  }


  // добавляем прослушку на клики по лейблам радио
  housekeepingNode.parentNode.addEventListener('click', disableMultipleQueues)
  housekeepingNode.parentNode.addEventListener('click', function () {
    connectobjchar_modern.click()
    if (dateplan) dateplan.value = '31.12.2099'

    connectobjchar_new.disabled = true
    connectobjchar_reconstr.disabled = true;

    connectobjkind_prev = 1;

  })

  objectsNode.parentNode.addEventListener('click', enableMultipleQueues)
  objectsNode.parentNode.addEventListener('click', function () {
    connectobjchar_new.disabled = false
    connectobjchar_reconstr.disabled = false
    if (connectobjkind_prev === 1) dateplan.value = ''

    document.querySelectorAll('input[id^="connectobjchar_001"]').forEach(inp => inp.click())   // Выбор Нового строительства
    document.querySelectorAll('input[id^="connectobjtype_001"]').forEach(inp => inp.click())   // Выбор Жилой

    connectobjkind_prev = 2;
  })

  reconstructionNode.parentNode.addEventListener('click', disableMultipleQueues)
  reconstructionNode.parentNode.addEventListener('click', function () {
    connectobjchar_new.disabled = false
    connectobjchar_reconstr.disabled = false

    const connectobjtype_not = document.querySelector('input[name*="connectobjtype"][value="002"]')
    const techcondobj_floors = document.querySelector('input[name*="techcondobj_floors"]')

    connectobjchar_reconstr.click()
    connectobjtype_not.click()
    techcondobj_floors.value = '1'

    if (connectobjkind_prev === 1) dateplan.value = ''

    connectobjkind_prev = 3;
  })

}


export default initConnectionObjectView
