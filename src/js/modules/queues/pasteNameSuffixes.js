// замена суффиксов в аттрибутах name в зависимости от номера очереди
// добавляет "__<номер очереди>" ко всем name очереди
function pasteNameSuffixes(node, queueCount) {
  const subheader = node.querySelector('.form__subheader')
  subheader.innerText = `Очередь №${queueCount}`

  // все инпуты, слайд 4
  const inputs = node.querySelectorAll('input')
  inputs.forEach(input => {
    if (!input.name) return

    let newName = input.name
    newName += `__${queueCount}`
    // newName = newName.slice(0, -2) + `_${queue_count}`
    input.name = newName
  })

  // дивы с name = "show_name", слайд 4
  // const divs = node.querySelectorAll('div#show_name')
  // divs.forEach(div => {
  //   if (!div.id) return
  //
  //   let newName = div.id
  //   newName += `_${queue_count}`
  //   div.id = newName
  // })

}


export default pasteNameSuffixes
