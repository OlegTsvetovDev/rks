import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4
function initLandCoverage(node) {
  const land_coverage_tbody = $('.land_coverage_characteristics tbody')
  let land_coverage_count = 2

  $('.add_coverage_btn').click(function(e) {
    e.preventDefault()

    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                    </tr>
                   `

    land_coverage_tbody.append(new_row)
    land_coverage_count++
    changeSliderHeight()
  })
  // удаление новых строк в таблице с характеристиками земельных участков, слайдер 4
  $('.add_coverage_btn_remove').click(function(event) {
    event.preventDefault()
    if (land_coverage_count <= 1) return

    land_coverage_tbody.children().last().remove()
    land_coverage_count--
    changeSliderHeight()
  })
}


export default initLandCoverage
