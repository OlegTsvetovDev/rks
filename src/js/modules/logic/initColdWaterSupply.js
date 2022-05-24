import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// Блок "Холодное водоснабжение", слайд 4
function initColdWaterSupply(node) {
  const coldWater = node.querySelector('.connection_to_cold_water')
  const label = coldWater.parentNode
  let isChecked = coldWater.checked
  const isDisabled = coldWater.disabled
  const toggle = node.querySelector('.cold_water_supply_toggle')

  // проверка начального состояния чекбокса
  if (isChecked){
    if(window.location.search.indexOf('view') === -1)
      toggle.querySelectorAll('input').forEach(inp => inp.removeAttribute('disabled'))
    toggle.classList.remove('hidden')
  }
  if (!isChecked) {
    toggle.classList.add('hidden')
    toggle.querySelectorAll('input').forEach(inp => inp.setAttribute('disabled', ''))
  }


  if (isDisabled) return

  label.addEventListener('click', () => {
    isChecked = !isChecked

    if (isChecked) {
      toggle.querySelectorAll('input').forEach(inp => inp.removeAttribute('disabled'))
      toggle.classList.remove('hidden')
      changeSliderHeight()
    } else {
      toggle.classList.add('hidden')
      toggle.querySelectorAll('input').forEach(inp => inp.setAttribute('disabled', ''))
      changeSliderHeight()
    }

  })
}


export default initColdWaterSupply
