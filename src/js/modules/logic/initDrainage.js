import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// Блок "Водоотведение", слайд 4
function initDrainage(node) {
  const drainage= node.querySelector('.connection_to_drainage')
  const label = drainage.parentNode
  let isChecked = drainage.checked
  const isDisabled = drainage.disabled
  const toggle = node.querySelector('.drainage_toggle')

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


export default initDrainage
