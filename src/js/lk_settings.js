$(document).ready(function () {
  const body = $('body')

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
    const selectSingle = document.querySelector('.__select')
    const selectSingle_title = selectSingle.querySelector('.__select__title')
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')

    selectSingle_title.addEventListener('click', function () {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '')
      } else {
        selectSingle.setAttribute('data-state', 'active')
      }
    });

    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', function (e) {
        selectSingle_title.textContent = e.target.textContent
        selectSingle.setAttribute('data-state', '')
      })
    }

    // скрытие при клике по body кроме .__select
    const body = document.querySelector('body')
    body.addEventListener('click', e => {
      const eClassList = e.target.classList
      const trigger = (eClassList[0] !== '__select__title') &&
                      (eClassList[0] !== '__select__content') &&
                      (eClassList[0] !== '__select__input')

      if (trigger) selectSingle.setAttribute('data-state', '')
    })

  }
  if (document.querySelector('.__select')) initPseudoSelect()


  // Модалка "Скачать инструкцию"
  function initModalDownloadInstructions() {
    var instructionsBtn = $('.instructions__btn'),
        instructionsModal = $('.modal_instructions'),
        instructionsModalContent = $('.modal_instructions__content'),
        instructionsModalClose = $('.modal_instructions .close')

    instructionsBtn.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'hidden')
      instructionsModalContent.css('overflow-y', 'auto')
      instructionsModalContent.css('overflow-x', 'hidden')
      instructionsModal.removeClass('hidden')
    })

    instructionsModalClose.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'auto')
      instructionsModal.addClass('hidden')
    })

  }
  initModalDownloadInstructions()

  // datepicker
  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru'])
  }
  if (document.querySelector('.datepicker_input')) initDatepickers()

  // маски
  if (document.querySelector('.datepicker_input')) $('.datepicker_input').mask("99.99.9999", { autoclear: false })
  if (document.querySelector('.snils_input')) $('.snils_input').mask("999-999-999 99", { autoclear: false })
  if (document.querySelector('.passport_input')) $('.passport_input').mask("99 99 / 999999", { autoclear: false })
  if (document.querySelector('.passport_serial_input')) $('.passport_serial_input').mask("99 99", { autoclear: false })
  if (document.querySelector('.passport_number_input')) $('.passport_number_input').mask("999999", { autoclear: false })
  if (document.querySelector('.phone_input')) $('.phone_input').mask("(999) 999-9999", { autoclear: false })
  if (document.querySelector('.tin_ul_input')) $('.tin_ul_input').mask("9999999999", { autoclear: false })
  if (document.querySelector('.tin_fl_input')) $('.tin_fl_input').mask("999999999999", { autoclear: false })
  if (document.querySelector('.tin_e_input')) $('.tin_e_input').mask("999999999999", { autoclear: false })


  // Модалка "Смена пароля"

  function initModalChangePswd() {
    var changePswd = $('.change_pswd_input'),
        changePswdModal = $('.modal_change_pswd'),
        changePswdModalContent = $('.modal_change_pswd__content'),
        changePswdModalClose = $('.modal_change_pswd .close'),
        changePswdModalInput = $('.modal_change_pswd .password');
    changePswd.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      changePswdModalContent.css('overflow-y', 'auto');
      changePswdModalContent.css('overflow-x', 'hidden');
      changePswdModal.removeClass('hidden');
    });
    changePswdModalClose.click(function (e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      changePswdModal.addClass('hidden');
      changePswdModalInput.val('');
    });
  }
  initModalChangePswd()


  // Модалка "Смена email"

  function initModalChangeEmail() {
    var changeEmail = $('.change_email_input'),
       changeEmailModal = $('.modal_change_email'),
       changeEmailModalContent = $('.modal_change_email__content'),
       changeEmailModalClose = $('.modal_change_email .close'),
       changeEmailModalInput = $('.modal_change_email .email');
    changeEmail.click(function (e) {
     e.preventDefault();
     body.css('overflow', 'hidden');
     changeEmailModalContent.css('overflow-y', 'auto');
     changeEmailModalContent.css('overflow-x', 'hidden');
     changeEmailModal.removeClass('hidden');
    });
    changeEmailModalClose.click(function (e) {
     e.preventDefault();
     body.css('overflow', 'auto');
     changeEmailModal.addClass('hidden');
     changeEmailModalInput.val('');
    });
  }
  initModalChangeEmail()


   // Смена выбора документа
   // $('input[type=radio][name=docname]').change(function() {
   //   $('input[id=if_docname_selected]').attr('name', '');
   // });

});
