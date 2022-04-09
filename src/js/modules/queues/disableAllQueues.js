const disableAllQueues = node => {
  const inputs = node.querySelectorAll('input')
  const textareas = node.querySelectorAll('textarea')
  const buttons = node.querySelectorAll('button')

  inputs.forEach(input => input.disabled = true)
  textareas.forEach(textarea => textarea.disabled = true)
  buttons.forEach(button => button.disabled = true)
}

export default disableAllQueues
