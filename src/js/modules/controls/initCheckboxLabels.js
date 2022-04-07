function initCheckboxLabels(node) {
  const checkboxes = node.querySelectorAll('.checkbox')

  checkboxes.forEach(checkbox => {
    const label = checkbox.parentNode
    const isDisabled = checkbox.disabled

    if (isDisabled) return

    label.addEventListener('click', function () {
      const checkbox = label.querySelector('.checkbox')
      checkbox.checked = !checkbox.checked
    })
  })
}


export default initCheckboxLabels
