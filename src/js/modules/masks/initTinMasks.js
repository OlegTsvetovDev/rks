const initTinEMasks = () => {
  $('.tin_e_input').mask("999999999999", { autoclear: false })
}

const initTinFlMasks = () => {
  $('.tin_fl_input').mask("999999999999", { autoclear: false })
}

const initTinUlMasks = () => {
  $('.tin_ul_input').mask("9999999999", { autoclear: false })
}


export { initTinEMasks, initTinFlMasks, initTinUlMasks }
