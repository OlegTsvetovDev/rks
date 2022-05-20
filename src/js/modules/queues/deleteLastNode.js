// удаление последней очереди
// TODO: переписать на js
function deleteLastNode() {
  const nodeContainer = document.querySelector('.step_5 .queue_slider')
  nodeContainer.querySelector('#summary_queue').previousElementSibling.remove()
}


export default deleteLastNode
