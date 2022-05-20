// рендер новой ноды в блок .step_5, 4 слайдера
function renderNewNode(newNode) {
  const nodeContainer = document.querySelector('.step_5 .queue_slider')
  nodeContainer.querySelector('#summary_queue').before(newNode)
}


export default renderNewNode
