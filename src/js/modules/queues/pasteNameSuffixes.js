// замена суффиксов в аттрибутах name в зависимости от номера очереди
// добавляет "__<номер очереди>" ко всем name очереди
function pasteNameSuffixes(node, queueCount) {
  const subheader = node.querySelector('.form__subheader')
  subheader.innerText = `Номер №${queueCount}`

  // все инпуты, слайд 4
  const inputs = node.querySelectorAll('input')
  inputs.forEach(input => {
    if (input.name){
      let newName = input.name
      newName = newName.slice(0, -2) + `_${queueCount}`
      input.name = newName
    }
    if(input.id){
      let newId = input.id
      newId = newId.slice(0, -2) + `_${queueCount}`
      input.id = newId
    }
  })

  // все лейблы, слайд 4
  const labels = node.querySelectorAll('label')
  labels.forEach(label => {
    if (label.getAttribute('for')){
      let newFor = label.getAttribute('for')
      newFor = newFor.slice(0, -2) + `_${queueCount}`
      label.setAttribute('for', newFor)
    }
  })

  // это не суффиксы, но тоже надо
  // обновляем input, в котором находится номер очереди
  // функция давно есть для получения количества очередей
  node.querySelector('.number_queue').value = queueCount;

}


export default pasteNameSuffixes
