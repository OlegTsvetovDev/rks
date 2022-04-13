import createNewNode from './createNewNode.js'
import pasteNameSuffixes from './pasteNameSuffixes.js'
import renderNewNode from './renderNewNode.js'
import initPseudoSelects from '../controls/select/initPseudoSelects.js'
import initRadioLabels from '../controls/initRadioLabels.js'
import initCheckboxLabels from '../controls/initCheckboxLabels.js'
import initMasks from '../masks/initMasks.js'
import initColdWaterSupply from '../logic/initColdWaterSupply.js'
import initDrainage from '../logic/initDrainage.js'
import initAddressConcatination from '../address/initAddressConcatination.js'
import initWaterSource from '../logic/initWaterSource.js'
import initLookups from '../controls/lookup/initLookups.js'


// создание и рендер новой ноды, 4 слайдер
function createAndRenderNewNode(queueCount) {
  const newNode = createNewNode()
  pasteNameSuffixes(newNode, queueCount)
  renderNewNode(newNode, document.querySelector('.step_5 .queue_slider'))
  initLookups(newNode)
  initPseudoSelects(newNode)
  initRadioLabels(newNode)
  initCheckboxLabels(newNode)
  initMasks(newNode)
  initColdWaterSupply(newNode)
  initDrainage(newNode)
  initAddressConcatination(newNode)
  initWaterSource(newNode)

  // addNewSlide(newNode)
}


export default createAndRenderNewNode
