import addressConcatination from '../../address/addressConcatination.js'
import clearAddrDistSubdistr from '../../queues/clearAddrDistSubdistr.js'


// псевдо-селект
function initPseudoSelect(select) {
  const selectTitle = select.querySelector('.__select__title')
  const selectLabels = select.querySelectorAll('.__select__label')

  selectTitle.addEventListener('click', function () {
    if ('active' === select.getAttribute('data-state')) {
      select.setAttribute('data-state', '')
    } else {
      select.setAttribute('data-state', 'active')
    }
  })

  for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', function (e) {
      selectTitle.textContent = e.target.textContent
      selectTitle.value = e.target.textContent
      select.setAttribute('data-state', '')

      clearAddrDistSubdistr(selectTitle)

      // вызов пересчета адреса в случае, если модуль активен
      const addressNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
      const thisAddressConcatination = addressNode.querySelector('.address__concated')
      if (thisAddressConcatination) addressConcatination(addressNode)
    })
  }

  // скрытие при клике по body кроме .__select
  const body = document.querySelector('body')
  body.addEventListener('click', e => {
    const eClassList = e.target.classList
    const trigger = (eClassList[0] !== '__select__title')
                    && (eClassList[0] !== '__select__content')
                    && (eClassList[0] !== '__select__input')

    if (trigger) select.setAttribute('data-state', '')
  })
}


export default initPseudoSelect
