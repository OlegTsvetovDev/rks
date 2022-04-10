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
    fetch(`./getTownsJson?townName=${query.querySelector('input[name^="town_code"]:checked').value}`)
      .then(response => response.json())
      .then(data => renderList(searchInArray(query,JSON.parse(data)), 'town_code', 'locality'))
      .catch(e => console.log(e))
  }

  // получить улицы с бэка
  const setStreets = (query) => {
    let townInput = query.querySelector('input[name^="town_code"]:checked');
    let streetName = query.querySelector('input.address__street').value;
    let queueNumberInput = query.querySelector('#number_queue');
    if(townInput){
      fetch(`./getStreetsJson?streetName=${streetName}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(streetName,JSON.parse(data)), queueNumberInput ? `street_code__${queueNumberInput.value}` : 'street_code', queueNumberInput ? `street__${queueNumberInput.value}` : 'street'))
        .catch(e => console.log(e))
    }
      else
      renderList('');
  }

  // получить районы с бэка
  const setDistricts = (query) => {
    let townInput = query.querySelector('input[name^="town_code"]:checked');
    let districtName = query.querySelector('input.address__district').value;
    let queueNumberInput = query.querySelector('#number_queue');
    if(townInput)
      fetch(`./getDistrictsJson?districtName=${districtName}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(districtName,JSON.parse(data)), queueNumberInput ? `district_code__${queueNumberInput.value}` : 'district_code', queueNumberInput ? `district__${queueNumberInput.value}` : 'district'))
        .catch(e => console.log(e))
      else
      renderList('');
  }

  // получить микрорайоны с бэка
  const setMicrodistricts = (query) => {
    let townInput = query.querySelector('input[name^="town_code"]:checked');
    let subdistrictName = query.querySelector('input.address__microdistrict').value;
    let queueNumberInput = query.querySelector('#number_queue');
    if(townInput)
      fetch(`./getSubdistrictsJson?subdistrictName=${subdistrictName}&townCode=${townInput.value}`)
        .then(response => response.json())
        .then(data => renderList(searchInArray(subdistrictName,JSON.parse(data)), queueNumberInput ? `subdistrict_code__${queueNumberInput.value}` : 'subdistrict_code', queueNumberInput ? `subdistrict__${queueNumberInput.value}` : 'subdistrict'))
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
    const query = e.target.closest('.queue_block')
    setData(query)
  }

  node.addEventListener('keyup', handleNodeKeyUp)

}


export default initLookup
