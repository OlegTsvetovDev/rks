function initDatepickerMonthYear(dp) {
    let isClickTodayButton = false
    let month, year

    $(dp).datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        currentText: 'Очистить',
        onClose: function(dateText, inst) { 
            if(!isClickTodayButton){
                month = inst.selectedMonth
                year = inst.selectedYear
                $(this).datepicker("setDate", new Date(year, month, 1))
            }
            else{
                $.datepicker._clearDate(dp)
            }
            isClickTodayButton = false
            inst.dpDiv.hide()
            $(this).datepicker('widget').removeClass('hide-calendar')
        },
        beforeShow : function(input, inst) {
            if(year && month){
                $(this).datepicker('option', 'defaultDate', new Date(year, month, 1))
                $(this).datepicker('setDate', new Date(year, month, 1))
            }
            $(this).datepicker("widget").addClass('hide-calendar')
        }
      })

      // меняем функцию клика по кнопке Сегодня на очистку
      $.datepicker._gotoToday = (dp) => {
        isClickTodayButton = true
        $(dp).datepicker('hide')
      }

      // сохраняем дату и месяц для datepicker, потому что само не работает
      if($(dp).val()){
          let array = $(dp).val().split(' ')
          if(array.length === 2){
              year = array[1]
              month = $.inArray(array[0], $(dp).datepicker('option', 'monthNames'))
          }
      }
  }
  
  
export default initDatepickerMonthYear