"use strict";

$(document).ready(function () {
  // возврат на страницу ЛК Запросы и заявки
  function rollBackToLkRequests() {
    var arrowToLk = $('.arrow_to_lk_requests');
    arrowToLk.click(function () {
      window.history.back();
    });
  }

  rollBackToLkRequests();
  var body = $('body');

  function openModalPersonalData() {
    // Модалка "Согласие на обработку персональных данных"
    var personalData = $('.personal_agreement__label .personal_data'),
        personalDataModal = $('.modal_personal_data'),
        personalDataModalContent = $('.modal_personal_data__content'),
        personalDataModalClose = $('.modal_personal_data .close');
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

  openModalPersonalData();

  function openModalRules() {
    // Модалка "Правила пользования интерактивным сервисом"
    var rules = $('.personal_agreement__label .rules'),
        rulesModal = $('.modal_rules'),
        rulesModalContent = $('.modal_rules__content'),
        rulesModalClose = $('.modal_rules__content .close');
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

  openModalRules();
  var inquiryOrRequest = $('.inquiry_or_request');
  var listItemInquiry = $('.list__item.inquiry'),
      // список классов для запроса
  inquiryFormStep1 = $('.inquiry__form.step_1'),
      inquiryFormStep2 = $('.inquiry__form.step_2'),
      inquiryFormStep3 = $('.inquiry__form.step_3'),
      btnShowInquiryStep3 = $('.btn.show_inquiry_step_3'),
      inquiryFormArrowBack = $('.inquiry_form__arrow_back'),
      arrowToLkRequests = $('.arrow_to_lk_requests'),
      inquiryArrowToStep1 = $('.inquiry__form .arrow_to_step_1'),
      inquiryArrowToStep2 = $('.inquiry__form .arrow_to_step_2'),
      inquiryForm = $('.requests_form.inquiry__form');
  var listItemRequest = $('.list__item.request'),
      // список классов для заявки
  requestFormStep1 = $('.request__form.step_1'),
      requestFormStep2 = $('.request__form.step_2'),
      requestFormStep3 = $('.request__form.step_3'),
      requestFormStep4 = $('.request__form.step_4'),
      requestFormStep5 = $('.request__form.step_5'),
      requestFormStep6 = $('.request__form.step_6'),
      requestFormStep7 = $('.request__form.step_7'),
      btnShowRequestStep3 = $('.btn.show_request_step_3'),
      btnShowRequestStep4 = $('.btn.show_request_step_4'),
      btnShowRequestStep5 = $('.btn.show_request_step_5'),
      btnShowRequestStep6 = $('.btn.show_request_step_6'),
      btnShowRequestStep7 = $('.btn.show_request_step_7'),
      requestFormArrowBack = $('.request_form__arrow_back'),
      requestArrowToStep1 = $('.request__form .arrow_to_step_1'),
      requestArrowToStep2 = $('.request__form .arrow_to_step_2'),
      requestArrowToStep3 = $('.request__form .arrow_to_step_3'),
      requestArrowToStep4 = $('.request__form .arrow_to_step_4'),
      requestArrowToStep5 = $('.request__form .arrow_to_step_5'),
      requestArrowToStep6 = $('.request__form .arrow_to_step_6'),
      requestForm = $('.requests_form.request__form');

  function handleInquiryForm() {
    // переключение формы подачи запроса
    function showInquiryFormStep2() {
      setTimeout(function () {
        return inquiryFormStep1.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return inquiryFormStep2.removeClass('hidden');
      }, 0);
    }

    function showInquiryFormStep3() {
      setTimeout(function () {
        return inquiryFormStep2.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return inquiryFormStep3.removeClass('hidden');
      }, 0);
    }

    listItemInquiry.click(function (e) {
      e.preventDefault();
      showInquiryFormStep2();
    });
    btnShowInquiryStep3.click(function (e) {
      e.preventDefault();
      showInquiryFormStep3();
    });

    function rollBackToStep1() {
      setTimeout(function () {
        return inquiryFormStep2.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return inquiryFormStep1.removeClass('hidden');
      }, 0);
    }

    function rollBackToStep2() {
      setTimeout(function () {
        return inquiryFormStep3.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return inquiryFormStep2.removeClass('hidden');
      }, 0);
    }

    inquiryArrowToStep1.click(function (e) {
      e.preventDefault();
      window.history.back(); //rollBackToStep1();
    });
    inquiryArrowToStep2.click(function (e) {
      e.preventDefault();
      rollBackToStep2();
    });
  }

  handleInquiryForm();

  function handleRequestForm() {
    // переключение формы подачи заявки
    function showRequestForm() {
      setTimeout(function () {
        return requestFormStep1.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep2.removeClass('hidden');
      }, 0);
    }

    function showRequestFormStep3() {
      setTimeout(function () {
        return requestFormStep2.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep3.removeClass('hidden');
      }, 0);
    }

    function showRequestFormStep4() {
      setTimeout(function () {
        return requestFormStep3.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep4.removeClass('hidden');
      }, 0);
    }

    function showRequestFormStep5() {
      setTimeout(function () {
        return requestFormStep4.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep5.removeClass('hidden');
      }, 0);
    }

    function showRequestFormStep6() {
      setTimeout(function () {
        return requestFormStep5.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep6.removeClass('hidden');
      }, 0);
    }

    function showRequestFormStep7() {
      setTimeout(function () {
        return requestFormStep6.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep7.removeClass('hidden');
      }, 0);
    }

    listItemRequest.click(function (e) {
      e.preventDefault();
      showRequestForm();
    });
    btnShowRequestStep3.click(function (e) {
      e.preventDefault();
      showRequestFormStep3();
    });
    btnShowRequestStep4.click(function (e) {
      e.preventDefault();
      showRequestFormStep4();
    });
    btnShowRequestStep5.click(function (e) {
      e.preventDefault();
      showRequestFormStep5();
    });
    btnShowRequestStep6.click(function (e) {
      e.preventDefault();
      showRequestFormStep6();
    });
    btnShowRequestStep7.click(function (e) {
      e.preventDefault();
      showRequestFormStep7();
    });

    function rollBackToStep1() {
      setTimeout(function () {
        return requestFormStep2.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep1.removeClass('hidden');
      }, 0);
    }

    function rollBackToStep2() {
      setTimeout(function () {
        return requestFormStep3.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep2.removeClass('hidden');
      }, 0);
    }

    function rollBackToStep3() {
      setTimeout(function () {
        return requestFormStep4.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep3.removeClass('hidden');
      }, 0);
    }

    function rollBackToStep4() {
      setTimeout(function () {
        return requestFormStep5.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep4.removeClass('hidden');
      }, 0);
    }

    function rollBackToStep5() {
      setTimeout(function () {
        return requestFormStep6.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep5.removeClass('hidden');
      }, 0);
    }

    function rollBackToStep6() {
      setTimeout(function () {
        return requestFormStep7.addClass('hidden');
      }, 0);
      setTimeout(function () {
        return requestFormStep6.removeClass('hidden');
      }, 0);
    }

    requestArrowToStep1.click(function (e) {
      e.preventDefault();
      window.history.back(); //rollBackToStep1();
    });
    requestArrowToStep2.click(function (e) {
      e.preventDefault();
      rollBackToStep2();
    });
    requestArrowToStep3.click(function (e) {
      e.preventDefault();
      rollBackToStep3();
    });
    requestArrowToStep4.click(function (e) {
      e.preventDefault();
      rollBackToStep4();
    });
    requestArrowToStep5.click(function (e) {
      e.preventDefault();
      rollBackToStep5();
    });
    requestArrowToStep6.click(function (e) {
      e.preventDefault();
      rollBackToStep6();
    });
  }

  handleRequestForm();
});