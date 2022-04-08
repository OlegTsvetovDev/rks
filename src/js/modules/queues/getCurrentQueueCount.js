// пересчет текущего количества очередей, отраженных на странице
function getCurrentQueueCount(node, queue_count) {
  const nodes = node.querySelectorAll('.queue_launch_yes .field__table .table__body .table__row')
  const nodesLength = nodes.length

  if (!nodesLength) return

  nodes.forEach(node => queue_count += 1)

  return queue_count
}


export default getCurrentQueueCount
