import initRadioLabels from './modules/controls/initRadioLabels.js'
import initCheckboxLabels from './modules/controls/initCheckboxLabels.js'
import initPseudoSelects from './modules/controls/select/initPseudoSelects.js'
import initSlider from './modules/controls/slider/initSlider.js'
import changeSliderHeight from './modules/controls/slider/changeSliderHeight.js'
import initLookups from './modules/controls/lookup/initLookups.js'
import addressConcatination from './modules/address/addressConcatination.js'
import initAddressConcatination from './modules/address/initAddressConcatination.js'
import initQueueLaunch from './modules/queues/initQueueLaunch.js'
import isQueueEnabled from './modules/queues/isQueueEnabled.js'
import initMultipleQueues from './modules/queues/initMultipleQueues.js'
import initMasks from './modules/masks/initMasks.js'

import initModalDownloadInstructions from './modules/modals/initModalDownloadInstructions.js'

import getSimpleJson from './modules/postService/getSimpleJson.js'



$(document).ready(function() {
  const body = $('body')
  // упрощенная подача заявления
  let simpleSendRequest = false
  if (document.querySelector('.requests_form.simple'))
    simpleSendRequest = true

  // инит базового слайдера при заявлении
  // TODO: дописать вызов на ноде
  if (document.querySelector('.slider'))
    initSlider()

  // переключение радио по клику на лейбл
  // TODO: дописать вызов на ноде
  if (document.querySelector('.radio'))
    initRadioLabels()

  // переключение чекбокса по клику на лейбл
  if (document.querySelector('.checkbox'))
    initCheckboxLabels(document)

  // стартовый инит псевдо-селектов
  if (document.querySelector('.__select'))
    initPseudoSelects(document)


  // стартовый инит конкатенации адресов
  const addressBlocks = document.querySelectorAll('.address__concated')
  if (addressBlocks)
    addressBlocks.forEach(addressBlock =>
      initAddressConcatination(addressBlock.parentNode.parentNode.parentNode))

  // базовый инит всех лукапов
  if (document.querySelector('.cascader_input'))
    initLookups(document)

  // инит модалки "Скачать инструкцию"
  // TODO: дописать вызов на ноде
  if (document.querySelector('.instructions__btn'))
    initModalDownloadInstructions()

  // инит запуска по очередям
  if (document.querySelector('.queue_launch_yes'))
    initMultipleQueues()

  // доступность блока "Запуск по очередям"
  if (document.querySelector('.queue_launch__trigger'))
    isQueueEnabled(document)


  // добавление новых строк в таблицу с иными источниками, слайдер 4
  const water_source_tbody = $('.other_water_sources tbody')
  let water_source_count = 1
  const water_sources_count = document.querySelector('[name="other_water_sources_count"]');


  $('.add_source_btn').click(function(e) {
    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">
                        <input type="text" class="field__input" name=${'other_water_sources_name_' + water_source_count} placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" name=${'other_water_sources_vol_' + water_source_count} placeholder="Введите данные" />
                      </td>
                    </tr>
                   `
    e.preventDefault()

    water_source_tbody.append(new_row)
    water_source_count++
    if (water_sources_count) water_sources_count.value = water_source_count;
    changeSliderHeight()
  })

  // удаление новых строк в таблице с иными источниками, слайдер 4
  $('.add_source_btn_remove').click(function(e) {
    e.preventDefault()

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove()
      water_source_count--
      changeSliderHeight()
    }
  })

  // добавление новых строк в таблицу с характеристиками земельных участков, слайдер 4
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
                        <input type="text" class="field__input" name=${'other_water_sources_vol_' + water_source_count} placeholder="Введите данные" />
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

  // datepicker
  function initDatepickers() {
    $('.datepicker_input').datepicker($.datepicker.regional['ru'])
  }
  if (document.querySelector('.datepicker_input')) initDatepickers()

  // инит масок
  initMasks(document)


  // Блок "Являюсь представителем"
  function initCheckRepresentative() {
    const representativeBlock = document.querySelector('.representative')
    const isRepresentative = representativeBlock.querySelector('.yes')
    const isRepresentativeChecked = isRepresentative.checked
    const isRepresentativeLabel = isRepresentative.parentNode
    const isNotRepresentative = representativeBlock.querySelector('.no')
    const isNotRepresentativeLabel = isNotRepresentative.parentNode
    const representativeAddDocsBlock = document.querySelector('.representative_add_docs_block')

    // проверка начального состояния чекбокса
    if (isRepresentativeChecked) representativeAddDocsBlock.classList.remove('hidden')
    if (!isRepresentativeChecked) representativeAddDocsBlock.classList.add('hidden')

    isRepresentativeLabel.addEventListener('click', () => representativeAddDocsBlock.classList.remove('hidden'))
    isNotRepresentativeLabel.addEventListener('click', () => representativeAddDocsBlock.classList.add('hidden'))
  }
  if (document.querySelector('.representative')) initCheckRepresentative()


  // Блок "Холодное водоснабжение", слайд 4
  function initColdWaterSupply(baseNode) {
    const connectionToColdWater = baseNode.querySelector('.connection_to_cold_water')
    const connectionToColdWaterLabel = connectionToColdWater.parentNode
    let isConnectionToColdWaterChecked = connectionToColdWater.checked
    const isConnectionToColdWaterDisabled = connectionToColdWater.disabled
    const coldWaterToggle = baseNode.querySelector('.cold_water_supply_toggle')

    // проверка начального состояния чекбокса
    if (isConnectionToColdWaterChecked) coldWaterToggle.classList.remove('hidden')
    if (!isConnectionToColdWaterChecked) coldWaterToggle.classList.add('hidden')

    if (isConnectionToColdWaterDisabled) return

    connectionToColdWaterLabel.addEventListener('click', () => {
      isConnectionToColdWaterChecked = !isConnectionToColdWaterChecked

      if (isConnectionToColdWaterChecked) {
        coldWaterToggle.classList.remove('hidden')
        changeSliderHeight()
      } else {
        coldWaterToggle.classList.add('hidden')
        changeSliderHeight()
      }

    })
  }
  const queueBlocks = document.querySelectorAll('.queue_block')
  if (queueBlocks) queueBlocks.forEach(queueBlock => initColdWaterSupply(queueBlock))

  // Блок "Водоотведение", слайд 4
  function initDrainage(baseNode) {
    const connectionToDrainage= baseNode.querySelector('.connection_to_drainage')
    const connectionToDrainageLabel = connectionToDrainage.parentNode
    let isConnectionToDrainageChecked = connectionToDrainage.checked
    const isConnectionToDrainageDisabled = connectionToDrainage.disabled
    const drainageToggle = baseNode.querySelector('.drainage_toggle')

    // проверка начального состояния чекбокса
    if (isConnectionToDrainageChecked) drainageToggle.classList.remove('hidden')
    if (!isConnectionToDrainageChecked) drainageToggle.classList.add('hidden')

    if (isConnectionToDrainageDisabled) return

    connectionToDrainageLabel.addEventListener('click', () => {
      isConnectionToDrainageChecked = !isConnectionToDrainageChecked

      if (isConnectionToDrainageChecked) {
        drainageToggle.classList.remove('hidden')
        changeSliderHeight()
      } else {
        drainageToggle.classList.add('hidden')
        changeSliderHeight()
      }
    })
  }
  if (queueBlocks) queueBlocks.forEach(queueBlock => initDrainage(queueBlock))


  //#region женин код
  if($('input[name="requesttype_id"]').val() == '10002')
    $('input[name="personbasis"][value="05"]').parent().attr( 'style', 'display:none;' );

  function getTitle(el) {
    return el.siblings(".required").text();
  }

  let form = $('form');
  $("input[type='submit']").click(function (e) {
    let activeElement = $(document.activeElement, this).attr("name")
    switch (activeElement) {
      case "ecp_button":
        e.preventDefault();
        e.stopPropagation();
        var err = [];
        let elems = form.find(".required + *");
        elems.each(function () {
          var $this = $(this);
          let attr = $this.prop("tagName");
          switch (attr) {
            case "SPAN":
              if ($this.find('input:checked').length == 0 && $this.is(':visible'))
                err.push("Не выбрано ни одно значение поля " + getTitle($this));
              break;
            case "INPUT":
              if (!$this.val() && $this.is(':visible'))
                err.push("Не указано значение поля " + getTitle($this));
              break;
            case "DIV":
              if ($this.is(':visible') && (
                  $this.find(".__select__title").text() == "Выберите тип документа" ||
                  $this.text() == "Полученный адрес" ||
                  ($this.find(".attachment").length == 0 &&
                    $this.hasClass("field__control_btns"))
                ))
                err.push("Не указано значение поля " + getTitle($this));
              break;
            case "TABLE":
              // тут надо проверить обязательную таблицу на заполненность в Заявлении на подключение
              break;
          }
        });

        let elems_req_group = $('.form__field:not(.hidden) [class*=req_group_]');
        var group_names = [];   // получаем существующие названия групп
        elems_req_group.each(function () {
          var $this = $(this);
          var el_id = $this[0].id;
          if (!group_names.includes(el_id))
            group_names.push(el_id);
        });
        group_names.forEach(function (e) {    // для каждой группы получаем ее элементы
          let group = elems_req_group.filter('#' + e);
          let isAtt = false;
          group.each(function () {
            var $this = $(this);
            if ($this.find(".attachment").length != 0) {
              isAtt = true;
              return false;
              }
          });
          if (!isAtt) {   // если в группе не оказалось прикрепленных файлов, то выдаем обшибку
            if (group.length === 1 ) err.push("<h6>Требуется прикрепить документ: </h6> \n <p>" + group[0].previousElementSibling.innerText + '</p>');
            else {
              let text = "<h6>Требуется прикрепить один из документов: \n</h6>";
              group.each(function () {
                var $this = $(this);
                text = text + '<p>' + $this[0].previousElementSibling.innerText + ';</p>';
              })
              err.push(text);
            }
          }
        })


        if (err.length) {
          $('.modal.modal_alert.autopopup.hidden .modal__text').html(err[0]);
          $('.modal.modal_alert.autopopup.hidden').removeClass('hidden');
          return;
        }
        form = $(this).closest('form');
        form.append("<input type='hidden' name='ecp' value='true' />");
        document.querySelectorAll("form input[disabled='']").forEach(inp => inp.removeAttribute("disabled"));
        form.submit();
        break;
      case "save_button":
        $('input[name="redirect"]').val('newrequesttp')
        break;
    }
    document.querySelectorAll("form input[disabled='']").forEach(inp => inp.removeAttribute("disabled"));
  });


  let is_simple;
  getSimpleJson(is_simple)

})

export { changeSliderHeight }
