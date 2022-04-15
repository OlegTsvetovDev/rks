import addressConcatination from "../../address/addressConcatination.js"

// лукап
// node - это input в лукапе
// type = 'locality' / 'street' / 'district' / 'microdistrict'
function initLookup(type, node) {
  const parentNode = node.parentNode
  const contentNode = parentNode.querySelector('.__select__content')

  // получить города с бэка
  // Функцию запроса к гет сервису
  // функция возвращает массив из объектов
  // и вызывает renderList() для мутации списка городов в псевдоселекте
  const setData = (node) => {
    if (type === 'locality') setLocality(node)
    if (type === 'street') setStreets(node)
    if (type === 'district') setDistricts(node)
    if (type === 'microdistrict') setMicrodistricts(node)
  }

  const setLocality = (node) => {
    let localityName = node.querySelector('input.address__locality').value;
    let queueNumber = node.querySelector('.number_queue').value;
    fetch(`./getTownsJson?townName=${localityName}`)
      .then(response => response.json())
      .then(data => renderList(JSON.parse(data), 'town', queueNumber))
      .catch(e => console.log(e))
  }

  // получить улицы с бэка
  const setStreets = (node) => {
    let townInput = node.querySelector('input[name^="town_code"]:checked');
    let streetName = node.querySelector('input.address__street').value;
    let queueNumber = node.querySelector('.number_queue').value;
    if(townInput){
      fetch(`./getStreetsJson?streetName=${streetName}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(JSON.parse(data), 'street', queueNumber))
        .catch(e => console.log(e))
    }
      else
      renderList('');
  }

  // получить районы с бэка
  const setDistricts = (node) => {
    let townInput = node.querySelector('input[name^="town_code"]:checked');
    let districtName = node.querySelector('input.address__district').value;
    let queueNumber = node.querySelector('.number_queue').value;
    if(townInput)
      fetch(`./getDistrictsJson?districtName=${districtName}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(JSON.parse(data), 'district', queueNumber))
        .catch(e => console.log(e))
      else
      renderList('');
  }

  // получить микрорайоны с бэка
  const setMicrodistricts = (node) => {
    let townInput = node.querySelector('input[name^="town_code"]:checked');
    let subdistrictName = node.querySelector('input.address__microdistrict').value;
    let queueNumber = node.querySelector('.number_queue').value;
    if(townInput)
      fetch(`./getSubdistrictsJson?subdistrictName=${subdistrictName}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(JSON.parse(data), 'subdistrict', queueNumber))
        .catch(e => console.log(e))
      else
      renderList('');
  }

  // поиск по объекту
  const searchInArray = (name, arr) => {
    let result = []
    name = name.toLowerCase()

    arr.forEach(obj => {
      if (obj.name.toLowerCase().includes(name)) result.push(obj)
    })

    return result
  }

  // рендер ноды в лукап
  const renderNode = (obj, name, number) => {
    let template
    if(number == 0)
      template = `
                  <input value="${obj.code}" type="radio" class="__select__input" id="${name}_${obj.id}" tabindex="0" name="${name}_code">
                  <label class="__select__label" for="${name}_${obj.id}">${obj.name}</label>
                  `
    else
      template = `
                  <input value="${obj.code}" type="radio" class="__select__input" id="${name}_${obj.id}__${number}" tabindex="0" name="${name}_code__${number}">
                  <label class="__select__label" for="${name}_${obj.id}__${number}">${obj.name}</label>
                  `

    contentNode.insertAdjacentHTML('beforeend', template)
  }

  // возвращаем строки в начальное состояние
  function removePreviousList(contentNode) {
    contentNode.innerHTML = `
                             <input type="radio" class="__select__input" id="" tabindex="0">
                             <label class="__select__label" for="">Выберите значение</label>
                            `
  }

  function initEventListeners(node) {
    const labels = node.querySelectorAll('label')
    const inputs = node.querySelectorAll('input')

    const handleLabelClick = (label) => {
      const queryInput = node.parentNode.querySelector('input')
      queryInput.value = label.innerText
      addressConcatination(label.closest('.queue_block'))
    }

    labels.forEach(label => label.addEventListener('click', () => handleLabelClick(label)))
  }

  // рендер всех найденных нод
  // list - массив
  function renderList(list, name, nameId) {
    const contentNode = parentNode.querySelector('.__select__content')
    // удаляем предыдущие ноды
    removePreviousList(contentNode)
    parentNode.setAttribute('data-state', '')

    // добавляем новые ноды
    if(list !== '')
    {
      list.forEach(obj => renderNode(obj, name, nameId))
      parentNode.setAttribute('data-state', 'active')
    }

    // вешаем прослушку по строкам для изменения значения
    initEventListeners(contentNode)

    // вешаем прослушку для очистки инпутов с улицами, районами, микрорайонами, если сменили город
    if(type === "locality") 
    {
      const lookups = node.closest('.queue_block').querySelectorAll('.address__street, .address__district, .address__microdistrict')
      node.nextElementSibling.querySelectorAll('label').forEach(label => label.addEventListener('click', () => {
          // удаляем предыдущие ноды
          lookups.forEach(lookup => {
            lookup.value = ''
            removePreviousList(lookup.nextElementSibling)
          })
      }))
    }
  }



  // логика работы лукапа
  const handleNodeKeyUp = e => {
    const node = e.target.closest('.queue_block')
    setData(node)
  }

  node.addEventListener('keyup', handleNodeKeyUp)
  node.addEventListener('click', (e) => {
    if(node.value == '' && node.parentNode.getAttribute('data-state') === 'active')
    {
      handleNodeKeyUp(e) 
    } 
  })
}


export default initLookup
