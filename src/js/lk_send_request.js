import initRadioLabels from './modules/controls/initRadioLabels.js'
import initCheckboxLabels from './modules/controls/initCheckboxLabels.js'
import initPseudoSelects from './modules/controls/select/initPseudoSelects.js'
import initSlider from './modules/controls/slider/initSlider.js'
import initLookups from './modules/controls/lookup/initLookups.js'
import initAddressConcatination from './modules/address/initAddressConcatination.js'
import initConnectionObjectView from './modules/queues/initConnectionObjectView.js'
import initMultipleQueues from './modules/queues/initMultipleQueues.js'
import initMasks from './modules/masks/initMasks.js'
import initDrainage from './modules/logic/initDrainage.js'
import initWaterSource from './modules/logic/initWaterSource.js'
import initButtonSettings from './modules/logic/initButtonSettings.js'
import initDatepickers from './modules/controls/initDatepickers.js'
import initCheckRepresentative from './modules/logic/initCheckRepresentative.js'
import initColdWaterSupply from './modules/logic/initColdWaterSupply.js'
import checkRequiredField from './modules/logic/checkRequiredField.js'

import disableFormEnter from './modules/logic/disableFormEnter.js'

import initModalDownloadInstructions from './modules/modals/initModalDownloadInstructions.js'
import initModalForPrintButton from './modules/modals/initModalForPrintButton.js'

import getSimpleJson from './modules/postService/getSimpleJson.js'
import setSecurityMail from './modules/postService/setSecurityMail.js'
import initConnectobjkind from './modules/queues/initConnectobjkind.js'
import initPersonbasis from './modules/queues/initPersonbasis.js'
import initCopyButtons from "./modules/queues/initCopyButtons.js"
import callForPrint from "./modules/postService/callForPrint.js";


$(document).ready(function() {
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
    initRadioLabels(document)

  // переключение чекбокса по клику на лейбл
  if (document.querySelector('.checkbox'))
    initCheckboxLabels(document)

  // стартовый инит псевдо-селектов
  if (document.querySelector('.__select'))
    initPseudoSelects(document)

  // стартовый инит конкатенации адресов
  // TODO: выделить базовый инит в отдельную функцию
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
  // TODO: дописать вызов на ноде
  if (document.querySelector('.queue_launch_yes'))
    initMultipleQueues()

  // доступность блока "Запуск по очередям"
  if (document.querySelector('input[name="connectobjkind"]'))
    initConnectionObjectView(document)

  // инит раздела "Характеристики земельного участка"
  if (document.querySelector('.land_coverage_characteristics'))
    initLandCoverage(document)

  // инит дейтпикеров
  if (document.querySelector('.datepicker_input'))
    initDatepickers()

  // инит масок
  initMasks(document)

  // инит блока "Являюсь представителем"
  if (document.querySelector('.representative'))
    initCheckRepresentative()

  // инит блоков "Холодное водоснабжение", слайд 4
  const queueBlocks = document.querySelectorAll('.queue_block')
  if (queueBlocks)
    queueBlocks.forEach(queueBlock =>
      initColdWaterSupply(queueBlock))

  // инит раздела "Иные источники"
  // TODO: ДОБАВИТЬ В ВЕРСТКУ (НЕТ ЭТОГО РАЗДЕЛА)
  // TODO: дописать вызов на ноде
  if (document.querySelector('.other_water_sources'))
    if (queueBlocks)
      queueBlocks.forEach(queueBlock =>
          initWaterSource(queueBlock))

  // инит блоков водоотведения
  if (queueBlocks)
    queueBlocks.forEach(queueBlock =>
      initDrainage(queueBlock))

  // блокировка enter'а на форме
  // добавляются очереди при отключении
  disableFormEnter()

  // import сверху, проверь что работает и назови нормально
  // вообще не представляю что этот кусок делает
  checkRequiredField()

  let is_simple;
  getSimpleJson(is_simple)

  // инит радио кнопок Лицо для основания на выдачу ТУ
  initPersonbasis()

  // инит радио кнопок Вид объекта подключения
  const inpRequesttype = document.querySelector('input[name=requesttype_id]')
  if(inpRequesttype && inpRequesttype.value === '10001')
    initConnectobjkind()

  // если открыта страница после успешной подачи заявления
  if(window.location.search.indexOf('successId') > -1) setSecurityMail()

  // если открыта страница после нажатия кнопки "Распечатать"
  if(window.location.search.indexOf('printRequest') > -1) callForPrint()

  // инициализация кнопок копирования данных
  initCopyButtons(document)

  // инициализация кнопки печати
  initModalForPrintButton()

  // инициализация кнопки Настройки и модалки при переходе в настройки 
  if(window.location.search.indexOf('update') !== -1 || window.location.search.indexOf('requesttype_id=') !== -1 || window.location.search.indexOf('copy=') !== -1)
    initButtonSettings()
})
