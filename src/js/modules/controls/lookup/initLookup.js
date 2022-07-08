import addressConcatination from "../../address/addressConcatination.js"
import clearAddrDistSubdistr from "../../queues/clearAddrDistSubdistr.js"

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

  // если локалхост то берем данные с теста
  const default_url = window.location.hostname === 'localhost' ? "http://test-lktp.novogor.perm.ru" : window.location.hostname

  async function setLocality (node) {
    let localityName = node.querySelector('input.address__locality').value;
    let queueNumber = node.querySelector('.number_queue').value;
    //try{
      const link = `${default_url}/getTownsJson?townName=${localityName}`
      console.log(link)
      const response = await fetch(link)
      if(response.ok){
        const data = await response.text()//.json()
        console.log(data)
        renderList(JSON.parse(data), 'town', queueNumber)
      }
    //}
    //catch (e){
    //  console.log('Ошибка: ' + e)
    //}
  }

  // получить улицы с бэка
  async function setStreets(node) {
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
  async function setDistricts(node) {
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
  async function setMicrodistricts(node) {
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
      
      clearAddrDistSubdistr(queryInput)
    }

    labels.forEach(label => label.addEventListener('click', () => handleLabelClick(label)))
  }

  // рендер всех найденных нод
  // list - массив
  function renderList(list, name, number) {
    const contentNode = parentNode.querySelector('.__select__content')
    // удаляем предыдущие ноды
    removePreviousList(contentNode)
    parentNode.setAttribute('data-state', '')

    // добавляем новые ноды
    if(list !== '')
    {
      list.forEach(obj => renderNode(obj, name, number))
      parentNode.setAttribute('data-state', 'active')
    }

    // вешаем прослушку по строкам для изменения значения
    initEventListeners(contentNode)
  }

  // логика работы лукапа
  const handleNodeKeyUp = e => {
    const node = e.target.closest('.queue_block')
    setData(node)
  }

  node.addEventListener('keyup', handleNodeKeyUp)
  node.addEventListener('click', (e) => {
    if(node.value == '' && window.getComputedStyle(node.nextElementSibling, null).opacity === '0')
    {
      handleNodeKeyUp(e) 
    } 
  })
}

export default initLookup