// если в поле Вид объекта подключения выбраны Объекты капитального строительства, то некоторые поля становятся hidden
function initConnectobjkind(){
    document.querySelectorAll('input[name="connectobjkind"]').forEach(input => input.parentElement.addEventListener('click', (e) => {
    let input = e.target;
    if(input.tagName === 'LABEL')
      if(input.getAttribute('for') === 'connectobjkind_02')
      {
        document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
        document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
        document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
        document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
      }
      else
      {
        document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
        document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
        document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
        document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
      }
  }))
}

  export default initConnectobjkind