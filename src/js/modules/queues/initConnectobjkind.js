// скрытие полей для выбранных видов подключения
function initConnectobjkind(){
  HideHideHide(document.querySelector('[name^="connectobjkind"]:checked').closest('label'))
  document.querySelectorAll('input[name="connectobjkind"]').forEach(input => input.parentElement.addEventListener('click', (e) => {
  const input = e.target;
  if(input.tagName === 'LABEL')
    HideHideHide(input)
  }))
}

function HideHideHide(input){
  switch(input.getAttribute('for')){
    case 'connectobjkind_01':
      document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))   // Площадь жилая
      document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))   // Площадь нежилая
      document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))   // Объем общий
      document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))   // Класс функциональной пожарной опасности
      document.querySelectorAll('input[name^="techcondobj_floors"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))   // Этажность объекта
    break;
    case 'connectobjkind_02':
      document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
      document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
      document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
      document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))
      document.querySelectorAll('input[name^="techcondobj_floors"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))   // Этажность объекта
    break;
    case 'connectobjkind_03':
      document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
      document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
      document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
      document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.parentElement.parentElement.classList.add('hidden'))
      document.querySelectorAll('input[name^="techcondobj_floors"]').forEach(inp => inp.parentElement.parentElement.classList.remove('hidden'))   // Этажность объекта
    break;
  }
}

  export default initConnectobjkind