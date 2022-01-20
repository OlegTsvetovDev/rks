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
    })
  }
  setActiveMenuItem()


  // псевдо-селект
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
  (document.querySelector('.__select')) ? initPseudoSelect() : ''


  // datepicker
  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru'])
  }
  if (document.querySelector('.datepicker_input')) initDatepickers()

  // маски
  if (document.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999")
  if (document.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99")
  if (document.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999")
  if (document.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999")
  if (document.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999")
  if (document.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999")
  if (document.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999")

});
