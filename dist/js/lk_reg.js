"use strict";

$(document).ready(function () {
  var body = $('body'); // псевдо-селект

  function initPseudoSelect() {
    var selectSingle = document.querySelector('.__select');
    var selectSingle_title = selectSingle.querySelector('.__select__title');
    var selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
    selectSingle_title.addEventListener('click', function () {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
      } else {
        selectSingle.setAttribute('data-state', 'active');
      }
    });

    for (var i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', function (e) {
        selectSingle_title.textContent = e.target.textContent;
        selectSingle.setAttribute('data-state', '');
      });
    }
  }

  initPseudoSelect(); // Модалка "Согласие на обработку персональных данных"

  function initModalPersonalData() {
    var personalData = $('.personal_agreement__label .personal_data');
    var personalDataModal = $('.modal_personal_data');
    var personalDataModalContent = $('.modal_personal_data__content');
    var personalDataModalClose = $('.modal_personal_data .close');
    personalData.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      personalDataModalContent.css('overflow-y', 'auto');
      personalDataModalContent.css('overflow-x', 'hidden');
      personalDataModal.removeClass('hidden');
    });
    personalDataModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      personalDataModal.addClass('hidden');
    });
  }

  initModalPersonalData(); // Модалка "Правила пользования интерактивным сервисом"

  function initModalRules() {
    var rules = $('.personal_agreement__label .rules');
    var rulesModal = $('.modal_rules');
    var rulesModalContent = $('.modal_rules__content');
    var rulesModalClose = $('.modal_rules__content .close');
    rules.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      rulesModalContent.css('overflow-y', 'auto');
      rulesModalContent.css('overflow-x', 'hidden');
      rulesModal.removeClass('hidden');
    });
    rulesModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      rulesModal.addClass('hidden');
    });
  }

  initModalRules(); // Модалка "Скачать инструкцию"

  function initModalDownloadInstructions() {
    var instructionsBtn = $('.instructions__btn');
    var instructionsModal = $('.modal_instructions');
    var instructionsModalContent = $('.modal_instructions__content');
    var instructionsModalClose = $('.modal_instructions .close');
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