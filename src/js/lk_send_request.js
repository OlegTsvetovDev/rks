import initRadioLabels from './modules/controls/initRadioLabels.js'
import initCheckboxLabels from './modules/controls/initCheckboxLabels.js'
import initPseudoSelects from './modules/controls/select/initPseudoSelects.js'
import initSlider from './modules/controls/slider/initSlider.js'
import changeSliderHeight from './modules/controls/slider/changeSliderHeight.js'
import initLookups from './modules/controls/lookup/initLookups.js'
import addressConcatination from './modules/address/addressConcatination.js'
import initAddressConcatination from './modules/address/initAddressConcatination.js'
import initQueueLaunch from './modules/queues/initQueueLaunch.js'
// import isQueueEnabled from './modules/queues/isQueueEnabled.js'
import initMultipleQueues from './modules/queues/initMultipleQueues.js'
import initMasks from './modules/masks/initMasks.js'
import initDrainage from './modules/logic/initDrainage.js'
import initWaterSource from './modules/logic/initWaterSource.js'
import initDatepickers from './modules/controls/initDatepickers.js'
import initCheckRepresentative from './modules/logic/initCheckRepresentative.js'
import initColdWaterSupply from './modules/logic/initColdWaterSupply.js'
import zheninKod from './modules/logic/zheninKod.js'

import initModalDownloadInstructions from './modules/modals/initModalDownloadInstructions.js'

import getSimpleJson from './modules/postService/getSimpleJson.js'



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
    initRadioLabels()

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
  // if (document.querySelector('.queue_launch__trigger'))
  //   isQueueEnabled(document)

  // инит раздела "Иные источники"
  // TODO: ДОБАВИТЬ В ВЕРСТКУ (НЕТ ЭТОГО РАЗДЕЛА)
  // TODO: дописать вызов на ноде
  if (document.querySelector('.other_water_sources'))
    initWaterSource()

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

  // инит блоков водоотведения
  if (queueBlocks)
    queueBlocks.forEach(queueBlock =>
      initDrainage(queueBlock))

  // import сверху, проверь что работает и назови нормально
  // вообще не представляю что этот кусок делает
  zheninKod()

  let is_simple;
  getSimpleJson(is_simple)

})
