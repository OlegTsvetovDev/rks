import changeSliderHeight from "./slider/changeSliderHeight.js";

function initCheckboxLabels(node) {
  const checkboxes = node.querySelectorAll('.checkbox')

  checkboxes.forEach(checkbox => {
    const label = checkbox.parentNode
    const isDisabled = checkbox.disabled
    const checksShowField = document.querySelectorAll('input[type="checkbox"][data-showfield]')

    const checkShowField = (elem) => {
      if (elem.getAttribute('data-showfield') != '') {
        elem.getAttribute('data-showfield').split(' ').forEach(name => {
          if (elem.checked) {
            document.querySelectorAll(`input[name="${name}"]`)
              .forEach(field => field.closest('.form__field').classList.remove('hidden'))
            changeSliderHeight()
          } else {
            document.querySelectorAll(`input[name="${name}"]`)
              .forEach(field => field.closest('.form__field').classList.add('hidden'))
            changeSliderHeight()
          }
        })
      }
    }

    checksShowField.forEach(elem => {
      checkShowField(elem)
    })

    if (isDisabled) return

    label.addEventListener('click', function () {
      const checkbox = label.querySelector('.checkbox')
      checkbox.checked = !checkbox.checked
    })

    checksShowField.forEach(elem => {
      elem.addEventListener('change', (e) => {
        checkShowField(e.target)
      })
    })
  })
}


export default initCheckboxLabels