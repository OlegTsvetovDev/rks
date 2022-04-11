function initRadioLabels() {
  $('.radio').parent().click(function () {
    const $this = $(this)
    const $radio = $this.children('.radio')
    const $radioIsDisabled = $radio.is(':disabled')

    if ($radioIsDisabled) return
    $radio.prop('checked', true)
  })
}

// function initRadioLabels(node) {
//   const radios = node.querySelectorAll('.radio')
//
//   radios.forEach(radio => {
//     const disabled = radio.disabled
//     if (disabled) return
//
//     radio.parentNode.addEventListener('click', function () {
//       const input = this.querySelector('input')
//       return input.checked = !input.checked
//     })
//   })
//
// }


export default initRadioLabels
