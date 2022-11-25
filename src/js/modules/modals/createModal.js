// создание и рендер модалки
function createModal(node) {
  // блокировка вызова второй модалки
  if (document.querySelector('.modal_popup_confirm')) return

  const modalPopupConfirm = `
                      <section class="modal modal_popup_confirm">
                        <div class="modal__content modal_popup_confirm__content">
                          <div class="close"></div>
                          <div class="modal__text">
                            Будут удалены все данные по этапам. Удалить?
                          </div>
                          <div class="form__field">
                            <button class="form__submit btn btn_agree">Да</button>
                            <button class="form__submit btn dark_btn btn_abort">Нет</button>
                          </div>
                        </div>
                      </section>
                     `

  node.body.insertAdjacentHTML('beforeend', modalPopupConfirm)
}


export default createModal
