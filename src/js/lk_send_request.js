"use strict";

$(document).ready(function () {

  // инициализация слайдера
  $('.slider').slick({
    nextArrow: '<button type="button" class="slick-arrow slick-next btn dark_btn">Далее</button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev btn">Назад</button>',
    dots: true,
    infinite: false,
    draggable: false,
    adaptiveHeight: true
  });


  // переключение блоков в "Запуск по очередям", слайдер 1
  $('input[name="queue_launch"]').click(function () {
    var target = $('.queue_launch_' + $(this).val());
    $('.queue_launch').not(target).hide(0);
    target.fadeIn(300);
  });


  // добавление новых строк в таблицу с очередями, слайдер 1
  var queue_tbody = $('.queue_launch_yes tbody')
  var queue_count = 3
  // var slick_list = $('.slick-list')

  $('.queue_btn').click(function(event) {
    var new_row = `
                    <tr class="table__row">
                      <td class="table__cell">Очередь №${queue_count}</td>
                      <td class="table__cell">
                        <input type="text" class="field__input datepicker_input" placeholder="Введите данные" />
                      </td>
                    </tr>
                   `
    event.preventDefault()

    queue_tbody.append(new_row)
    // после добавления новой строки не увеличивает высоту родитель - скорее всего из-за динамического определения высоты слайдера
    // на выосту авто не помогает, надо высчитывать высоту
    // 39px - высота инпута
    // slick_list.css('height', 'auto')
    queue_count += 1
  })

  // добавление новых строк в таблицу с иными источниками, слайдер 4
  var water_source_tbody = $('.other_water_sources tbody')
  var water_source_count = 2

  $('.add_source_btn').click(function(event) {
    var new_row = `
                    <tr class="table__row">
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" placeholder="Введите данные" />
                      </td>
                    </tr>
                   `
    event.preventDefault()

    water_source_tbody.append(new_row)
    // после добавления новой строки не увеличивает высоту родитель - скорее всего из-за динамического определения высоты слайдера
    // slick_list.css('height', 'auto')
    water_source_count++
  })


  // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4
  var land_coverage_tbody = $('.land_coverage_characteristics tbody')
  var land_coverage_count = 2

  $('.add_coverage_btn').click(function(event) {
      var new_row = `
                      <tr class="table__row">
                        <td class="table__cell">
                          <input type="text" class="field__input" placeholder="Введите данные" />
                        </td>
                        <td class="table__cell">
                          <input type="text" class="field__input" placeholder="Введите данные" />
                        </td>
                      </tr>
                     `
      event.preventDefault()
      land_coverage_tbody.append(new_row);
      // после добавления новой строки не увеличивает высоту родитель - скорее всего из-за динамического определения высоты слайдера
      // slick_list.css('height', 'auto')
      land_coverage_count++
    })
})
