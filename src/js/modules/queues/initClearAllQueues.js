import changeSliderHeight from '../controls/slider/changeSliderHeight.js'
import getCurrentQueueCount from './getCurrentQueueCount.js'
import addListenersToModal from '../modals/addListenersToModal.js'
import clearAllQueues from './clearAllQueues.js'


function initClearAllQueues() {
  const step2 = document.querySelector('.step_2')
  const queueLaunchYes = step2.querySelector('.queue_launch_yes')
  const queueLaunchNo = step2.querySelector('.queue_launch_no')
  const queueBtns = step2.querySelectorAll('input[name="queue_launch"]')
  let queueLaunchYesBtn, queueLaunchNoBtn

  queueBtns.forEach(queueBtn => {
    if (queueBtn.value === 'yes')
      return queueLaunchYesBtn = queueBtn
    if (queueBtn.value === 'no')
      return queueLaunchNoBtn = queueBtn
  })

  // блокируем события при disabled
  const trigger = queueLaunchYesBtn.disabled || queueLaunchNoBtn.disabled
  if (trigger) return

  // создание и рендер модалки
  function createModal() {

    const modalPopupConfirm = `
                        <section class="modal modal_popup_confirm">
                          <div class="modal__content modal_popup_confirm__content">
                            <div class="close"></div>
                            <div class="modal__text">
                              Будут удалены все данные по очередям. Удалить?
                            </div>
                            <div class="form__field">
                              <button class="form__submit btn btn_agree">Да</button>
                              <button class="form__submit btn dark_btn btn_abort">Нет</button>
                            </div>
                          </div>
                        </section>
                       `

    document.body.insertAdjacentHTML('beforeend', modalPopupConfirm)
  }

  // хэндлер обработки нажатия на "Нет" в "Запуск по очередям"
  const handleNoClick = () => {
    const queueCount = getCurrentQueueCount(document, -1)
    changeSliderHeight()

    // вот здесь что происходит? Если нужно значение queueCount в рамках скриптов, то бери отсюда ее значение
    // добавил условие наличия ноды - ошибка возникает
    if (document.querySelector('[name="statementtc_queuecount"'))
      document.querySelector('[name="statementtc_queuecount"').value = 0;

    // при клике по радио "Нет", если нет заполненных очередей, то завершаем вызов модалки
    if (queueCount < 1) return
    createModal()
    addListenersToModal(document, queueLaunchYes, queueLaunchNo)
  }

  const handleYesClick = () => {
    changeSliderHeight()
    clearAllQueues(document)
    // вот здесь что происходит?
    // добавил услования наличия ноды - ошибка возникает
    if (document.querySelector('[name="statementtc_queuecount"'))
    document.querySelector('[name="statementtc_queuecount"').value = queueCount;
  }

  queueLaunchNoBtn.parentNode.addEventListener('click', handleNoClick)
  queueLaunchYesBtn.parentNode.addEventListener('click', handleYesClick)

}


export default initClearAllQueues
