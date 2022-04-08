// Блок "Являюсь представителем"
function initCheckRepresentative() {
  const representativeBlock = document.querySelector('.representative')
  const isRepresentative = representativeBlock.querySelector('.yes')
  const isRepresentativeChecked = isRepresentative.checked
  const isRepresentativeLabel = isRepresentative.parentNode
  const isNotRepresentative = representativeBlock.querySelector('.no')
  const isNotRepresentativeLabel = isNotRepresentative.parentNode
  const representativeAddDocsBlock = document.querySelector('.representative_add_docs_block')

  // проверка начального состояния чекбокса
  if (isRepresentativeChecked) representativeAddDocsBlock.classList.remove('hidden')
  if (!isRepresentativeChecked) representativeAddDocsBlock.classList.add('hidden')

  isRepresentativeLabel.addEventListener('click', () => representativeAddDocsBlock.classList.remove('hidden'))
  isNotRepresentativeLabel.addEventListener('click', () => representativeAddDocsBlock.classList.add('hidden'))
}


export default initCheckRepresentative
