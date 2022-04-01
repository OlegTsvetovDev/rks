$(document).ready(function() {

  // .lk_menu стили для пункта меню
  function setActiveMenuItem() {
    const menuItems = $('.lk_menu__list_item a')
    const pathname = window.location.pathname.split('/')

    menuItems.each(function(e) {
      const menuItem = $(this)
      const menuItemHref = menuItem.attr('href')
      const parentItem = menuItem.parent()
      const pathnameLastItem = pathname[pathname.length - 1];

      (menuItemHref == pathnameLastItem) ?
        parentItem.addClass('active') :
        parentItem.removeClass('active')
    })

  }
  setActiveMenuItem()


  // показ меню
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
    const itemShowMore = $('.item__show_more')

    itemShowMore.click(function() {
      $(this).toggleClass('active')
      $(this).parent().next().toggleClass('hidden')
    })
  }
  showTablesBlock()


  // Модалка "Удалить"
  const body = $('body')

  function initModalDeleteRequest() {
    const deleteRequest = $('.control_btns__link.delete_icon'),
          deleteRequestModal = $('.modal_delete_request'),
          deleteRequestModalContent = $('.modal_delete_request__content'),
          deleteRequestModalClose = $('.modal_delete_request .close'),
          deleteRequestModalCancel = $('.modal_delete_request .cancel'),
          deleteRequestModalSubmit = $('.modal_delete_request .submit');

    deleteRequest.click(function(e) {
      e.preventDefault();
      body.css('overflow', 'hidden');
      deleteRequestModalContent.css('overflow-y', 'auto');
      deleteRequestModalContent.css('overflow-x', 'hidden');
      deleteRequestModal.removeClass('hidden');
    })

    deleteRequestModalClose.click(function(e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      deleteRequestModal.addClass('hidden');
    })

    deleteRequestModalCancel.click(function(e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      deleteRequestModal.addClass('hidden');
    })

    deleteRequestModalSubmit.click(function(e) {
      e.preventDefault();
      body.css('overflow', 'auto');
      deleteRequestModal.addClass('hidden');

      // обработчик удаления запроса/заявки

    })

  }
  initModalDeleteRequest()


  // Модалка "Аннулировать"
  // function initModalAnnulRequest() {
  //   const annulRequest = $('.control_btns__link.annul_icon'),
  //         annulRequestModal = $('.modal_annul_request'),
  //         annulRequestModalContent = $('.modal_annul_request__content'),
  //         annulRequestModalClose = $('.modal_annul_request .close'),
  //         annulRequestModalCancel = $('.modal_annul_request .cancel'),
  //         annulRequestModalSubmit = $('.modal_annul_request .submit');
  //
  //   annulRequest.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'hidden');
  //     annulRequestModalContent.css('overflow-y', 'auto');
  //     annulRequestModalContent.css('overflow-x', 'hidden');
  //     annulRequestModal.removeClass('hidden');
  //   });
  //
  //   annulRequestModalClose.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'auto');
  //     annulRequestModal.addClass('hidden');
  //   });
  //
  //   annulRequestModalCancel.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'auto');
  //     annulRequestModal.addClass('hidden');
  //   });
  //
  //   annulRequestModalSubmit.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'auto');
  //     annulRequestModal.addClass('hidden');
  //
  //     // обработчик аннулирования запроса/заявки
  //
  //   })
  //
  // }
  // initModalAnnulRequest()


  // Модалка "Добавить ответ"
  // function initModalAddAnswer() {
  //   const addAnswer = $('.add_answer__button'),
  //         addAnswerModal = $('.modal_add_answer'),
  //         addAnswerModalContent = $('.modal_add_answer__content'),
  //         addAnswerModalClose = $('.modal_add_answer .close'),
  //         addAnswerModalCancel = $('.modal_add_answer .cancel'),
  //         addAnswerModalSubmit = $('.modal_add_answer .submit');
  //
  //   addAnswer.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'hidden');
  //     addAnswerModalContent.css('overflow-y', 'auto');
  //     addAnswerModalContent.css('overflow-x', 'hidden');
  //     addAnswerModal.removeClass('hidden');
  //   });
  //
  //   addAnswerModalClose.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'auto');
  //     addAnswerModal.addClass('hidden');
  //   });
  //
  //   addAnswerModalCancel.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'auto');
  //     addAnswerModal.addClass('hidden');
  //   });
  //
  //   addAnswerModalSubmit.click(function(e) {
  //     e.preventDefault();
  //     body.css('overflow', 'auto');
  //     addAnswerModal.addClass('hidden');
  //
  //     // обработчик отправки добавления ответа на сервер
  //
  //   })
  //
  // }
  // initModalAddAnswer()


  // Модалка "Скачать инструкцию"
  function initModalDownloadInstructions() {
    const instructionsBtn = $('.instructions__btn')
    const instructionsModal = $('.modal_instructions')
    const instructionsModalContent = $('.modal_instructions__content')
    const instructionsModalClose = $('.modal_instructions .close')

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


 // тогл фильтра в Реестре
  function initFilter() {
    const filterBtn = $('.filter__btn')
    const filterInput = $('.filter__input')

    filterBtn.click(function (e) {
      e.preventDefault()
      setTimeout(function () {
        filterInput.toggleClass('hidden')
        filterBtn.toggleClass('active')
      }, 200)
    })
  }
  initFilter()

  // тогл сортировки в Реестре
   function initSort() {
     const sortBtn = $('.sort__btn')
     const sortContent = $('.sort__content')
     const radioBtn = $('.radio')

     sortBtn.click(function (e) {
       e.preventDefault()
       sortContent.toggleClass('hidden')
       sortBtn.toggleClass('active')
     })

     radioBtn.click(function (e) {

       // функция обработки сортировки

       setTimeout(() => {
         sortContent.toggleClass('hidden')
         sortBtn.toggleClass('active')
       }, 200)
     })

   }
   initSort()

})
