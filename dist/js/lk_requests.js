"use strict";

$(document).ready(function () {
  // .lk_menu стили для пункта меню
  function setActiveMenuItem() {
    var menuItems = $('.lk_menu__list_item a'),
        pathname = window.location.pathname.split('/');
    menuItems.each(function (i) {
      var menuItem = $(this),
          menuItemHref = menuItem.attr('href'),
          parentItem = menuItem.parent(),
          pathnameLastItem = pathname[pathname.length - 1];
      menuItemHref == pathnameLastItem ? parentItem.addClass('active') : parentItem.removeClass('active');
    });
  }

  setActiveMenuItem(); // показ меню
  // function toggleMenu() {
  //   const lkMenuBurger = $('.lk_menu__burger'),
  //         lkMenuList = $('.lk_menu__list'),
  //         lkMenuClose = $('.lk_menu__close');
  //
  //   lkMenuBurger.click(function() {
  //     lkMenuList.addClass('active');
  //   });
  //
  //   lkMenuClose.click(function() {
  //     lkMenuList.removeClass('active');
  //   });
  // };
  // toggleMenu();
  // показ блока таблиц

  function showTablesBlock() {
    var itemShowMore = $('.item__show_more');
    itemShowMore.click(function () {
      $(this).toggleClass('active');
      $(this).parent().next().toggleClass('hidden');
    });
  }

  ;
  showTablesBlock(); // Модалка "Удалить"

  var body = $('body');

  function initModalDeleteRequest() {
    var deleteRequest = $('.control_btns__link.delete_icon'),
        deleteRequestModal = $('.modal_delete_request'),
        deleteRequestModalContent = $('.modal_delete_request__content'),
        deleteRequestModalClose = $('.modal_delete_request .close'),
        deleteRequestModalCancel = $('.modal_delete_request .cancel'),
        deleteRequestModalSubmit = $('.modal_delete_request .submit');
    deleteRequest.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      deleteRequestModalContent.css('overflow-y', 'auto');
      deleteRequestModalContent.css('overflow-x', 'hidden');
      deleteRequestModal.removeClass('hidden');
    });
    deleteRequestModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      deleteRequestModal.addClass('hidden');
    });
    deleteRequestModalCancel.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      deleteRequestModal.addClass('hidden');
    });
    deleteRequestModalSubmit.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      deleteRequestModal.addClass('hidden'); // обработчик удаления запроса/заявки
    });
  }

  ;
  initModalDeleteRequest(); // Модалка "Аннулировать"

  function initModalAnnulRequest() {
    var annulRequest = $('.control_btns__link.annul_icon'),
        annulRequestModal = $('.modal_annul_request'),
        annulRequestModalContent = $('.modal_annul_request__content'),
        annulRequestModalClose = $('.modal_annul_request .close'),
        annulRequestModalCancel = $('.modal_annul_request .cancel'),
        annulRequestModalSubmit = $('.modal_annul_request .submit');
    annulRequest.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      annulRequestModalContent.css('overflow-y', 'auto');
      annulRequestModalContent.css('overflow-x', 'hidden');
      annulRequestModal.removeClass('hidden');
    });
    annulRequestModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      annulRequestModal.addClass('hidden');
    });
    annulRequestModalCancel.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      annulRequestModal.addClass('hidden');
    });
    annulRequestModalSubmit.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      annulRequestModal.addClass('hidden'); // обработчик аннулирования запроса/заявки
    });
  }

  ;
  initModalAnnulRequest(); // Модалка "Добавить ответ"

  function initModalAddAnswer() {
    var addAnswer = $('.add_answer__button'),
        addAnswerModal = $('.modal_add_answer'),
        addAnswerModalContent = $('.modal_add_answer__content'),
        addAnswerModalClose = $('.modal_add_answer .close'),
        addAnswerModalCancel = $('.modal_add_answer .cancel'),
        addAnswerModalSubmit = $('.modal_add_answer .submit');
    addAnswer.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      addAnswerModalContent.css('overflow-y', 'auto');
      addAnswerModalContent.css('overflow-x', 'hidden');
      addAnswerModal.removeClass('hidden');
    });
    addAnswerModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      addAnswerModal.addClass('hidden');
    });
    addAnswerModalCancel.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      addAnswerModal.addClass('hidden');
    });
    addAnswerModalSubmit.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      addAnswerModal.addClass('hidden'); // обработчик отправки добавления ответа на сервер
    });
  }

  ;
  initModalAddAnswer(); // фильтр

  function initFilter() {
    var filterBtn = $('.filter__btn'),
        filterInput = $('.filter__input');
    filterBtn.click(function (e) {
      e.preventDefault();
      filterInput.toggleClass('hidden');
      filterBtn.toggleClass('active');
    });
  }

  initFilter();
});