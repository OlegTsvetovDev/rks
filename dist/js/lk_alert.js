"use strict";

$(document).ready(function () {
  // Модалка "Ошибка"
  const body = $('body');

  function initModalAlert() {
    var alert = $('.alert'),
        alertModal = $('.modal_alert'),
        alertModalContent = $('.modal_alert__content'),
        alertModalClose = $('.modal_alert .close'),
        alertBtnModalClose = $('.modal_alert .btn_close');
    alert.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      alertModalContent.css('overflow-y', 'auto');
      alertModalContent.css('overflow-x', 'hidden');
      alertModal.removeClass('hidden');
    });
    alertModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      alertModal.addClass('hidden');
    });
    alertBtnModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      alertModal.addClass('hidden');
    });
  }
  initModalAlert()

});
