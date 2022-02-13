$(document).ready(function () {
  const body = $('body')


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


  // Модалка "Согласие на обработку персональных данных"
  function initModalPersonalData() {
    const personalData = $('.personal_agreement__label .personal_data')
    const personalDataModal = $('.modal_personal_data')
    const personalDataModalContent = $('.modal_personal_data__content')
    const personalDataModalClose = $('.modal_personal_data .close')

    personalData.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'hidden')
      personalDataModalContent.css('overflow-y', 'auto')
      personalDataModalContent.css('overflow-x', 'hidden')
      personalDataModal.removeClass('hidden')
    })

    personalDataModalClose.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'auto')
      personalDataModal.addClass('hidden')
    })

  }
  if (document.querySelector('.personal_agreement__label')) initModalPersonalData()


  // Модалка "Правила пользования интерактивным сервисом"
  function initModalRules() {
    const rules = $('.personal_agreement__label .rules')
    const rulesModal = $('.modal_rules')
    const rulesModalContent = $('.modal_rules__content')
    const rulesModalClose = $('.modal_rules__content .close')

    rules.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'hidden')
      rulesModalContent.css('overflow-y', 'auto')
      rulesModalContent.css('overflow-x', 'hidden')
      rulesModal.removeClass('hidden')
    })

    rulesModalClose.click(function (e) {
      e.preventDefault()
      body.css('overflow', 'auto')
      rulesModal.addClass('hidden')
    })

  }
  if (document.querySelector('.personal_agreement__label')) initModalRules()


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
  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions()

});
