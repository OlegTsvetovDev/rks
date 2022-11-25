import initDatepickerMonthYear from '../controls/initDatepickerMonthYear.js'

// datepicker
function initDatepickers() {
  $('.datepicker_input').datepicker($.datepicker.regional['ru'])
  $('.datepickerMY_input').each((i, inp) => {initDatepickerMonthYear(inp)})
}


export default initDatepickers