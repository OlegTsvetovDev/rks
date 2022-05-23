import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// добавление новых строк в таблицу с иными источниками, слайдер 4
function initWaterSource(node) {
  const water_source_tbody = node.querySelector('div[class*="other_water_sources"] tbody')
  let water_source_count = 1
  const water_sources_count = node.querySelector('[name^="other_water_sources_count"]');
  if (water_sources_count && water_sources_count.value !== "0")
    water_source_count = parseInt(water_sources_count.value)
  const queue_number = node.querySelector('.number_queue').value

  $('.add_source_btn', node).click(function(e) {
    e.preventDefault()
    
    const tr = document.createElement('tr')
    tr.classList.add('table__row')
    const td1 = water_source_tbody.querySelectorAll('td')[0].cloneNode(true)
    td1.querySelector('input').setAttribute('name', `other_water_sources_name_${water_source_count}__${queue_number}`)
    const td2 = water_source_tbody.querySelectorAll('td')[1].cloneNode(true)
    td2.querySelector('input').setAttribute('name', `other_water_sources_vol_${water_source_count}__${queue_number}`)
    td2.querySelector('input').addEventListener('keypress', function (e) {
      const trigger = (e.which != 46 || $(this).val().indexOf('.') != -1)
                      && (e.which < 48 || e.which > 57)
  
      if (trigger) e.preventDefault()
    })
    tr.appendChild(td1)
    tr.appendChild(td2)
    water_source_tbody.appendChild(tr)

    water_source_count++
    if (water_sources_count) water_sources_count.value = water_source_count;
    changeSliderHeight()
  })

  // удаление новых строк в таблице с иными источниками, слайдер 4
  $('.add_source_btn_remove', node).click(function(e) {
    e.preventDefault()

    if (water_source_count > 1) {
      water_source_tbody.lastElementChild.remove()
      water_source_count--
      if (water_sources_count) water_sources_count.value = water_source_count;
      changeSliderHeight()
    }
  })
}


export default initWaterSource
