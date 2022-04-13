// Пересчет итогового адреса
function addressConcatination(baseNode) {
  const concated = baseNode.querySelector('.address__concated')
  const locality = baseNode.querySelector('.address__locality')
  const district = baseNode.querySelector('.address__district')
  const microdistrict = baseNode.querySelector('.address__microdistrict')
  const street = baseNode.querySelector('.address__street')
  const housing = baseNode.querySelector('.address__housing')
  const house = baseNode.querySelector('.address__house')

  setTimeout(() => {
    const resultLocality = `${locality.value ? 'г. ' + locality.value : ''}`
    const resultdDistrict = `${district.value ?  ', ' + district.value + ' район' : ''}`
    const resultMicrodistrict = `${microdistrict.value ? ', микрорайон ' + microdistrict.value : ''}`
    const resultStreet = `${street.value ? ', ул. ' + street.value : ''}`
    const resultHousing = `${housing.value ? ', корпус ' + housing.value : ''}`
    const resultHouse = `${house.value ? ', дом ' + house.value : ''}`
    let resultAddress = `${resultLocality + resultdDistrict + resultMicrodistrict + resultStreet + resultHousing + resultHouse + '.'}`
    if (resultAddress[0] === ',') resultAddress = resultAddress.slice(1)
    if (resultAddress[0] === '.') resultAddress = ''

    concated.value = resultAddress

    if(document.querySelector('[name="connectobjkind"]:checked').id == 'connectobjkind_01')
      baseNode.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${resultAddress}`;
    // concated.textContent = resultAddress
  }, 100)
}


export default addressConcatination
