import initPseudoSelect from './initPseudoSelect.js'


function initPseudoSelects(node) {
  const selects = node.querySelectorAll('.__select')
  selects.forEach(select => initPseudoSelect(select))
}


export default initPseudoSelects
