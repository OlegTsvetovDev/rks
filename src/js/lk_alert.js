import initModal from './modules/modals/initModal.js'


$(document).ready(function () {

  // Модалка "Ошибка"
  initModal($('.alert'), $('.modal_alert').not('.modal_success'))
  // Модалка "Успешное событие"
  initModal($('.success'), $('.modal_alert.modal_success'))

})
