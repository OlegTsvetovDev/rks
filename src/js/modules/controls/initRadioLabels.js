function initRadioLabels() {
  $('.radio').parent().click(function () {
    const $this = $(this)
    const $radio = $this.children('.radio')
    const $radioIsDisabled = $radio.is(':disabled')

    if ($radioIsDisabled) return
    $radio.prop('checked', true)
  })
}


export default initRadioLabels
