const initPassportMasks = () => {
  $('.passport_input').mask("99 99 / 999999", { autoclear: false })
}

const initPassportSerialMasks = () => {
  $('.passport_serial_input').mask("99 99", { autoclear: false })
}

const initPassportNumberMasks = () => {
  $('.passport_number_input').mask("999999", { autoclear: false })
}


export { initPassportMasks, initPassportSerialMasks, initPassportNumberMasks }
