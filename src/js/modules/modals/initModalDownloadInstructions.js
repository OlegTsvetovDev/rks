// Модалка "Скачать инструкцию"
function initModalDownloadInstructions() {
  const body = $('body')
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


export default initModalDownloadInstructions
