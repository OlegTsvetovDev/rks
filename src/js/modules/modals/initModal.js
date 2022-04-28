// инит модалки
function initModal(btn, modal) {
  const body = $('body')
  const modalContent = modal.find('.modal__content')
  const modalClose = modal.find('.close')
  const modalBtnClose = modal.find('.btn_close')

  btn.click(function (e) {
    e.preventDefault();
    body.css('overflow', 'hidden');
    modalContent.css('overflow-y', 'auto');
    modalContent.css('overflow-x', 'hidden');
    modal.removeClass('hidden');
  })

  modalClose.click(function (e) {
    e.preventDefault();
    body.css('overflow', 'auto');
    modal.addClass('hidden');
  })

  modalBtnClose.click(function (e) {
    e.preventDefault();
    body.css('overflow', 'auto');
    modal.addClass('hidden');
  })
}


export default initModal
