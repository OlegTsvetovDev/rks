import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// Блок "Водоотведение", слайд 4
function initDrainage(node) {
  const drainage= node.querySelector('.connection_to_drainage')
  const label = drainage.parentNode
  let isChecked = drainage.checked
  const isDisabled = drainage.disabled
  const toggle = node.querySelector('.drainage_toggle')
  const water_sources_label = node.querySelector('.other_water_sources h6')

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


export default initDrainage
