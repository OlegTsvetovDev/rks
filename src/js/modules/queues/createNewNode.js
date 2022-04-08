// добавление блоков очередей, 4 сладер
// создание новой ноды
function createNewNode() {
  const baseNode = document.querySelector('.queue_block')
  return baseNode.cloneNode(true)
}


export default createNewNode
