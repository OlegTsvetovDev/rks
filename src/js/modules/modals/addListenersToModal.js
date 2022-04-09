import clearAllQueues from '../queues/clearAllQueues.js'


// добавление прослушки эвентов у модалки
function addListenersToModal(node, queueLaunchYes, queueLaunchNo) {
  const modalPopupConfirm = node.querySelector('.modal_popup_confirm')
  const closeModal = modalPopupConfirm.querySelector('.close')
  const abortModal = modalPopupConfirm.querySelector('.btn_abort')
  const btnAgree = modalPopupConfirm.querySelector('.btn_agree')

  // хэндлер подтверждения удаления очередей
  const handleProceedModal = () => {
    queueLaunchYes.removeAttribute('style')
    queueLaunchNo.removeAttribute('style')
    queueLaunchYes.classList.add('hidden')
    queueLaunchNo.classList.remove('hidden')
    modalPopupConfirm.remove()
    // TODO: overflow: hidden для body
    clearAllQueues(node)
  }

  // хэндлер отказа от удаления очередей
  const handleCloseModal = () => {
    queueLaunchYesBtn.checked = true
    // jQuery прописывает инлайн стили
    queueLaunchYes.removeAttribute('style')
    queueLaunchNo.removeAttribute('style')
    queueLaunchYes.classList.remove('hidden')
    queueLaunchNo.classList.add('hidden')
    modalPopupConfirm.remove()
  }

  closeModal.addEventListener('click', handleCloseModal)
  abortModal.addEventListener('click', handleCloseModal)
  btnAgree.addEventListener('click', handleProceedModal)
}


export default addListenersToModal
