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

  setActiveMenuItem(); // псевдо-селект

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

  initPseudoSelect();
});