import deleteAllQueues from '../queues/deleteAllQueues.js'
import disableAllQueues from '../queues/disableAllQueues.js'
import enableAllQueues from '../queues/enableAllQueues.js'


// добавление прослушки эвентов у модалки
function addListenersToModal(node, queueLaunchYes, queueLaunchNo) {
  const modalPopupConfirm = node.querySelector('.modal_popup_confirm')
  const closeModal = modalPopupConfirm.querySelector('.close')
  const abortModal = modalPopupConfirm.querySelector('.btn_abort')
  const btnAgree = modalPopupConfirm.querySelector('.btn_agree')
  const radioYes = node.querySelector('input[name="queue_launch"][value="yes"]')
  const radioNo = node.querySelector('input[name="queue_launch"][value="no"]')


  // хэндлер подтверждения удаления очередей
  const handleProceedModal = () => {
    if(radioYes.checked){
      document.querySelector('.queue_launch__trigger').classList.add('hidden')
      radioNo.checked = true
    }
    document.querySelector('[name="statementtc_queuecount"').value = 0;
    // удаление jQuery инлайн стилей
    queueLaunchYes.removeAttribute('style')
    queueLaunchNo.removeAttribute('style')
    queueLaunchYes.classList.add('hidden')
    queueLaunchNo.classList.remove('hidden')
    modalPopupConfirm.remove()
    // TODO: overflow: hidden для body
    // блокирование всех очередей в таблице
    disableAllQueues(queueLaunchYes)
    // удаление всех очередей и в таблице, и на слайде 4
    deleteAllQueues(node)
  }

  // хэндлер отказа от удаления очередей
  const handleCloseModal = () => {
    radioYes.checked = true
    document.querySelector("#connectobjkind_02").checked = true
    // удаление jQuery инлайн стилей
    queueLaunchYes.removeAttribute('style')
    queueLaunchNo.removeAttribute('style')
    queueLaunchYes.classList.remove('hidden')
    queueLaunchNo.classList.add('hidden')
    modalPopupConfirm.remove()
    // разблокируем очереди
    enableAllQueues(node)
  }

  closeModal.addEventListener('click', handleCloseModal)
  abortModal.addEventListener('click', handleCloseModal)
  btnAgree.addEventListener('click', handleProceedModal)
}


export default addListenersToModal
