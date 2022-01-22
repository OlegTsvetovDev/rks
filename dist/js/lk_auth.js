"use strict";

$(document).ready(function () {
  // Модалка "Восстановление пароля"
  var body = $('body');

  function initModalRestorePswd() {
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

  initModalRestorePswd(); // Модалка "Скачать инструкцию"

  function initModalDownloadInstructions() {
    var instructionsBtn = $('.instructions__btn'),
        instructionsModal = $('.modal_instructions'),
        instructionsModalContent = $('.modal_instructions__content'),
        instructionsModalClose = $('.modal_instructions .close');
    instructionsBtn.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      instructionsModalContent.css('overflow-y', 'auto');
      instructionsModalContent.css('overflow-x', 'hidden');
      instructionsModal.removeClass('hidden');
    });
    instructionsModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      instructionsModal.addClass('hidden');
    });
  }

  initModalDownloadInstructions();
});