import IMask from 'imask'


const maskOptions = {
  mask: '{Ф}0[000000000]`[.]`[00000]',
  lazy: false
}

const initFfhcMask = input => IMask(input, maskOptions)

const initFfhcMasks = node => {
  const inputs = node.querySelectorAll('.ffhc_input')

  inputs.forEach(input => initFfhcMask(input))
}


export default initFfhcMasks
export { initFfhcMask }

// //старая версия
// const initFfhcMasks = () => {
//   const $ffhc = $('.ffhc_input')
//
//   if($ffhc.val() === '')
//     $ffhc.val('Ф')
//
//
//   // обработка нажатия delete и backspace
//   $ffhc.keydown(function (e) {
//     const key = e.key
//     const trigger = (key === 'Backspace' || key === 'Delete')
//
//     if (trigger && $(this).val().length <= 1)
//       e.preventDefault()
//
//   })
//
//   // обработка позиции каретки в инпуте
//   // TODO:
//   $ffhc.keydown(function (e) {
//     const cursorPosition = $(this)[0].selectionStart
//     const len = $(this)[0].selectionEnd
//     const setCursorPosition = $(this)[0].setSelectionRange(cursorPosition, len)
//
//     console.log(cursorPosition)
//
//     if (cursorPosition === 0)
//       setCursorPosition
//   })
//
//   // обработка нажатия цифр и точки
//   $ffhc.keypress(function (e) {
//     if ($(this).val()[0] !== 'Ф')
//       $(this).val('Ф' + $(this).val())
//
//     const floatTrigger = (e.which != 46 || $(this).val().indexOf('.') != -1)
//                          && (e.which < 48 || e.which > 57)
//
//     if (floatTrigger)
//       e.preventDefault()
//   })
// }
