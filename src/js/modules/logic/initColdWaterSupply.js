import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// Блок "Холодное водоснабжение", слайд 4
function initColdWaterSupply(node) {
  const coldWater = node.querySelector('.connection_to_cold_water')
  const label = coldWater.parentNode
  let isChecked = coldWater.checked
  const isDisabled = coldWater.disabled
  const toggle = node.querySelector('.cold_water_supply_toggle')

  // проверка начального состояния чекбокса
  if (isChecked) toggle.classList.remove('hidden')
  if (!isChecked) toggle.classList.add('hidden')


  if (isDisabled) return

  label.addEventListener('click', () => {
    isChecked = !isChecked

    if (isChecked) {
      toggle.classList.remove('hidden')
      changeSliderHeight()
    } else {
      toggle.classList.add('hidden')
      changeSliderHeight()
    }

  })
}


export default initColdWaterSupply
