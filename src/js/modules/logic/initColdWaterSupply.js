import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// Блок "Холодное водоснабжение", слайд 4
function initColdWaterSupply(node) {
  const coldWater = node.querySelector('.connection_to_cold_water')
  const label = coldWater.parentNode
  let isChecked = coldWater.checked
  const isDisabled = coldWater.disabled
  const toggle = node.querySelector('.cold_water_supply_toggle')
  const water_sources_label = document.querySelector('.other_water_sources h6');

  // проверка начального состояния чекбокса
  if (isChecked) {
    toggle.classList.remove('hidden')
    if (water_sources_label) water_sources_label.classList.add('required')
  }
  if (!isChecked) {
    toggle.classList.add('hidden')
    if (water_sources_label) water_sources_label.classList.remove('required')
  }

  if (isDisabled) return

  label.addEventListener('click', () => {
    isChecked = !isChecked

    if (isChecked) {
      toggle.classList.remove('hidden')
      if (water_sources_label) water_sources_label.classList.add('required')
      changeSliderHeight()
    } else {
      toggle.classList.add('hidden')
      if (water_sources_label) water_sources_label.classList.remove('required')
      changeSliderHeight()
    }

  })
}


export default initColdWaterSupply
