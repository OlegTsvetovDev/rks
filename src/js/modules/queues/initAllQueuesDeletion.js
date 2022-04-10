import changeSliderHeight from '../controls/slider/changeSliderHeight.js'
import getCurrentQueueCount from './getCurrentQueueCount.js'
import createModal from '../modals/createModal.js'
import addListenersToModal from '../modals/addListenersToModal.js'
import deleteAllQueues from './deleteAllQueues.js'
import enableAllQueues from './enableAllQueues.js'


function initAllQueuesDeletion() {
  const step2 = document.querySelector('.step_2')
  const queueLaunchYes = step2.querySelector('.queue_launch_yes')
  const queueLaunchNo = step2.querySelector('.queue_launch_no')
  const radioYes = step2.querySelector('input[name="queue_launch"][value="yes"]')
  const radioNo = step2.querySelector('input[name="queue_launch"][value="no"]')

  // блокируем события при disabled
  const trigger = radioYes.disabled || radioNo.disabled
  if (trigger) return

  // хэндлер обработки нажатия на "Да" в "Запуск по очередям"
  const handleRadioYesClick = () => {
    // enable все очереди
    enableAllQueues(queueLaunchYes)

    // TODO: добавить дизейбл
    // disableAllQueues(queueLaunchYes)
    // deleteAllQueues(document)

    changeSliderHeight()

    // Если нужно значение queueCount в рамках скриптов, то бери ее значение из getCurrentQueueCount(document)
    // и не здесь, а в момент, когда используешь значение
    if (document.querySelector('[name="statementtc_queuecount"'))
      document.querySelector('[name="statementtc_queuecount"').value = getCurrentQueueCount(document, -1);
  }

  // хэндлер обработки нажатия на "Нет" в "Запуск по очередям"
  const handleRadioNoClick = () => {
    const queueCount = getCurrentQueueCount(document, -1)
    // при клике по радио "Нет", если нет заполненных очередей, то завершаем вызов модалки
    if (queueCount < 1) return

    // вызываем модалку на подтверждение
    createModal(document)
    addListenersToModal(document, queueLaunchYes, queueLaunchNo)

    changeSliderHeight()

    // Если нужно значение queueCount в рамках скриптов, то бери ее значение из getCurrentQueueCount(document)
    // и не здесь, а в момент, когда используешь значение
    if (document.querySelector('[name="statementtc_queuecount"'))
      document.querySelector('[name="statementtc_queuecount"').value = 0;
  }

  radioYes.parentNode.addEventListener('click', handleRadioYesClick)
  radioNo.parentNode.addEventListener('click', handleRadioNoClick)

}


export default initAllQueuesDeletion
