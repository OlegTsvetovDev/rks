// удаление последней очереди
// TODO: переписать на js
function deleteLastNode() {
  const nodeContainer = $('.step_5 .queue_slider')
  nodeContainer.children().last().remove()
}


export default deleteLastNode
