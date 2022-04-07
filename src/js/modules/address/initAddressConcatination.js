// инит модуля пересчета адреса
function initAddressConcatination(baseNode) {
  const concated = baseNode.querySelector('.address__concated')
  const locality = baseNode.querySelector('.address__locality')
  const district = baseNode.querySelector('.address__district')
  const microdistrict = baseNode.querySelector('.address__microdistrict')
  const street = baseNode.querySelector('.address__street')
  const housing = baseNode.querySelector('.address__housing')
  const house = baseNode.querySelector('.address__house')


  if (locality) locality.addEventListener('change', () => addressConcatination(baseNode))
  if (district) district.addEventListener('change', () => addressConcatination(baseNode))
  if (microdistrict) microdistrict.addEventListener('change', () => addressConcatination(baseNode))
  if (street) street.addEventListener('change', () => addressConcatination(baseNode))
  if (housing) housing.addEventListener('change', () => addressConcatination(baseNode))
  if (house) house.addEventListener('change', () => addressConcatination(baseNode))
}


export default initAddressConcatination
