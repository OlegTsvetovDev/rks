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
  const setData = (query) => {
    if (type === 'locality') setLocality(query)
    if (type === 'street') setStreets(query)
    if (type === 'district') setDistricts(query)
    if (type === 'microdistrict') setMicrodistricts(query)
  }

  const setLocality = (query) => {
    fetch(`./getTownsJson?townName=${query}`)
      .then(response => response.json())
      .then(data => renderList(searchInArray(query,JSON.parse(data)), 'town_code', 'locality'))
      .catch(e => console.log(e))
  }

  // получить улицы с бэка
  const setStreets = (query) => {
    let townInput = document.querySelector('input[id^="locality_"]:checked');
    if(townInput){
      fetch(`./getStreetsJson?streetName=${query}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(query,JSON.parse(data)), 'street_code', 'street'))
        .catch(e => console.log(e))
    }
      else
      renderList('');
  }

  // получить районы с бэка
  const setDistricts = (query) => {
    let townInput = document.querySelector('input[id^="locality_"]:checked');
    if(townInput)
      fetch(`./getDistrictsJson?districtName=${query}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(query,JSON.parse(data)), 'district_code', 'district'))
        .catch(e => console.log(e))
      else
      renderList('');
  }

  // получить микрорайоны с бэка
  const setMicrodistricts = (query) => {
    let townInput = document.querySelector('input[id^="locality_"]:checked');
    if(townInput)
      fetch(`./getSubdistrictsJson?subdistrictName=${query}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(query,JSON.parse(data)), 'subdistrict_code', 'subdistrict'))
        .catch(e => console.log(e))
      else
      renderList('');
  }

  // поиск по объекту
  const searchInArray = (query, arr) => {
    let result = []
    query = query.toLowerCase()

    arr.forEach(obj => {
      if (obj.name.toLowerCase().includes(query)) result.push(obj)
    })

    return result
  }

  // рендер ноды в лукап
  const renderNode = (obj, name, nameId) => {
    const template = `
                      <input value="${obj.code}" type="radio" class="__select__input" id="${nameId}_${obj.id}" tabindex="0" name=${name}>
                      <label class="__select__label" for="${nameId}_${obj.id}">${obj.name}</label>
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
    }

    labels.forEach(label => label.addEventListener('click', () => handleLabelClick(label)))
  }

  // рендер всех найденных нод
  // list - массив
  function renderList(list,name, nameId) {
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
  }



  // логика работы лукапа
  const handleNodeKeyUp = e => {
    const query = e.target.value
    setData(query)
  }

  node.addEventListener('keyup', handleNodeKeyUp)

}


export default initLookup
