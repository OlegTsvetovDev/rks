// замена суффиксов в аттрибутах name в зависимости от номера очереди
// добавляет "__<номер очереди>" ко всем name очереди
function pasteNameSuffixes(node, queueCount) {
  const subheader = node.querySelector('.form__subheader')
  subheader.innerText = `Очередь №${queueCount}`

  // все инпуты, слайд 4
  const inputs = node.querySelectorAll('input')
  inputs.forEach(input => {
    if (input.name){
      let newName = input.name
      //newName += `__${queueCount}`
      newName = newName.slice(0, -2) + `_${queueCount}`
      input.name = newName
    }
    if(input.id){
      let newId = input.id
      //newId += `__${queueCount}`
      newId = newId.slice(0, -2) + `_${queueCount}`
      input.id = newId
    }
  })

  // все лейблы, слайд 4
  const labels = node.querySelectorAll('label')
  labels.forEach(label => {
    if (label.getAttribute('for')){
      let newFor = label.getAttribute('for')
      //newFor += `__${queueCount}`
      newFor = newFor.slice(0, -2) + `_${queueCount}`
      label.setAttribute('for', newFor)
    }
  })

  // это не суффиксы, но тоже надо
  // обновляем input, в котором находится номер очереди
  node.querySelector('.number_queue').value = queueCount;

  // дивы с name = "show_name", слайд 4
  // const divs = node.querySelectorAll('div#show_name')
  // divs.forEach(div => {
  //   if (!div.id) return
  //
  //   let newName = div.id
  //   newName += `_${queueCount}`
  //   div.id = newName
  // })

}


export default pasteNameSuffixes
