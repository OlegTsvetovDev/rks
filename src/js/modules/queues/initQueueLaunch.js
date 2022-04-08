// переключение блоков в "Запуск по очередям", слайдер 1
function initQueueLaunch(node) {
  const queueLaunchTrigger = node.querySelector('.queue_launch__trigger')
  const queueLaunchYes = queueLaunchTrigger.querySelector('input[type="radio"][value="yes"]')
  const queueLaunchNo = queueLaunchTrigger.querySelector('input[type="radio"][value="no"]')
  const isDisabled = queueLaunchYes.disabled || queueLaunchNo.disabled
  const queueLaunchYesNode = node.querySelector('.queue_launch_yes')
  const queueLaunchNoNode = node.querySelector('.queue_launch_no')

  if (isDisabled) return

  const handleYesClick = () => {
    queueLaunchYesNode.classList.remove('hidden')
    queueLaunchNoNode.classList.add('hidden')
  }

  const handleNoClick = () => {
    queueLaunchYesNode.classList.add('hidden')
    queueLaunchNoNode.classList.remove('hidden')
  }

  queueLaunchYes.parentNode.addEventListener('click', handleYesClick)
  queueLaunchNo.parentNode.addEventListener('click', handleNoClick)
}


export default initQueueLaunch
