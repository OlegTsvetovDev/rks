import createAndRenderNewNode from './createAndRenderNewNode.js'

// добавление начальных очередей при нажатии на радиокнопку Да в поле Запуск по очередям
function addInitialQueues(){
  const nodeContainer = document.querySelector('.step_5 .queue_slider')
  createAndRenderNewNode(1)
  createAndRenderNewNode(2)
}

export default addInitialQueues