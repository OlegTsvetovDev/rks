"use strict";

$(document).ready(function () {
  // Модалка "Восстановление пароля"
  var body = $('body');

  function openModalRestorePswd() {
    var restorePswd = $('.restore_pswd'),
        restorePswdModal = $('.modal_pswd_restore'),
        restorePswdModalContent = $('.modal_pswd_restore__content'),
        restorePswdModalClose = $('.modal_pswd_restore .close');
    restorePswd.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      restorePswdModalContent.css('overflow-y', 'auto');
      restorePswdModalContent.css('overflow-x', 'hidden');
      restorePswdModal.removeClass('hidden');
    });
    restorePswdModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      restorePswdModal.addClass('hidden');
    });
  }

  openModalRestorePswd();
});