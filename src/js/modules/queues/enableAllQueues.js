const enableAllQueues = node => {
  const inputs = node.querySelectorAll('input')
  const textareas = node.querySelectorAll('textarea')
  const buttons = node.querySelectorAll('button')

  inputs.forEach(input => input.disabled = false)
  textareas.forEach(textarea => textarea.disabled = false)
  buttons.forEach(button => button.disabled = false)
}

export default enableAllQueues
