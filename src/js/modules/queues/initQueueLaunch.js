// переключение блоков в "Запуск по очередям", слайдер 1
function initQueueLaunch(node) {
  const trigger = node.querySelector('.queue_launch__trigger')
  const yes = trigger.querySelector('input[type="radio"][value="yes"]')
  const no = trigger.querySelector('input[type="radio"][value="no"]')
  const isDisabled = yes.disabled || no.disabled
  const yesNode = node.querySelector('.queue_launch_yes')
  const noNode = node.querySelector('.queue_launch_no')

  if (isDisabled) return

  const handleYesClick = () => {
    yesNode.querySelectorAll('input').forEach(inp => inp.removeAttribute('disabled'));
    noNode.querySelectorAll('input').forEach(inp => inp.setAttribute('disabled', ''));
    yesNode.classList.remove('hidden')
    noNode.classList.add('hidden')
  }

  const handleNoClick = () => {
    yesNode.querySelectorAll('input').forEach(inp => inp.setAttribute('disabled', ''));
    noNode.querySelectorAll('input').forEach(inp => inp.removeAttribute('disabled'));
    yesNode.classList.add('hidden')
    noNode.classList.remove('hidden')
  }

  yes.parentNode.addEventListener('click', handleYesClick)
  no.parentNode.addEventListener('click', handleNoClick)
}


export default initQueueLaunch
