// добавление блоков очередей, 4 сладер
// создание новой ноды
function createNewNode() {
  const newNode = document.querySelector('#summary_queue').cloneNode(true)
  newNode.removeAttribute('id')
  // показываем заголовок
  newNode.querySelector('h5.form__subheader').hidden = false
  // показываем кнопку для копирования данных из предыдущей очереди
  const buttonCopyData = newNode.querySelector('.subheader_block__controls .controls__copy')
  buttonCopyData.classList.remove('hidden')
  return newNode
}


export default createNewNode
