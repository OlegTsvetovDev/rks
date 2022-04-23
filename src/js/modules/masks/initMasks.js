// маски
function initMasks(parentNode) {
  if (parentNode.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999", { autoclear: false })
  if (parentNode.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99", { autoclear: false })
  if (parentNode.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999", { autoclear: false })
  if (parentNode.querySelector('.passport_serial_input')) $('.passport_serial_input').mask("99 99", { autoclear: false })
  if (parentNode.querySelector('.passport_number_input')) $('.passport_number_input').mask("999999", { autoclear: false })
  if (parentNode.querySelector('.phone_input')) $('.phone_input').mask("+7 (999) 999-9999 ? доб. 99999", { autoclear: false })
  if (parentNode.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999", { autoclear: false })
  if (parentNode.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999", { autoclear: false })
  if (parentNode.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999", { autoclear: false })
  if (parentNode.querySelector('.integer_input')) $('.integer_input').on('input', function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ''))
  })

  if (parentNode.querySelector('.float_input')) $('.float_input').keypress(function (e) {
    const trigger = (e.which != 46 || $(this).val().indexOf('.') != -1)
                    && (e.which < 48 || e.which > 57)

    if (trigger) e.preventDefault()
  })

  if (parentNode.querySelector('.ffhc_input')) {
    const $ffhc = $('.ffhc_input')

    if($ffhc.val() === '')
      $ffhc.val('Ф')


    // обработка нажатия delete и backspace
    $ffhc.keydown(function (e) {
      const key = e.key
      const trigger = (key === 'Backspace' || key === 'Delete')

      if (trigger && $(this).val().length <= 1)
        e.preventDefault()

    })

    // TODO: обработка позиции каретки в инпуте
    // если во время нажатия клавиши коретка стоит на 1-ой позиции,
    // тогда передвинуть коретку в конец инпута
    // присвоить значение нажатой клавиши
    $ffhc.keydown(function (e) {
      
    })

    // обработка нажатия цифр и точки
    $ffhc.keypress(function (e) {
      if ($(this).val()[0] !== 'Ф')
        $(this).val('Ф' + $(this).val())

      const floatTrigger = (e.which != 46 || $(this).val().indexOf('.') != -1)
                           && (e.which < 48 || e.which > 57)

      if (floatTrigger)
        e.preventDefault()
    })
  }
}


export default initMasks
