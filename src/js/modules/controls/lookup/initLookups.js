import initLookup from './initLookup.js'


// инит лукапов в ноде
function initLookups(node) {
  const localityNodes = node.querySelectorAll('.address__locality')
  const streetNodes = node.querySelectorAll('.address__street')
  const districtNodes = node.querySelectorAll('.address__district')
  const microdistrictNodes = node.querySelectorAll('.address__microdistrict')

  if (localityNodes) localityNodes.forEach(node => initLookup('locality', node))
  if (streetNodes) streetNodes.forEach(node => initLookup('street', node))
  if (districtNodes) districtNodes.forEach(node => initLookup('district', node))
  if (microdistrictNodes) microdistrictNodes.forEach(node => initLookup('microdistrict', node))
}


export default initLookups
