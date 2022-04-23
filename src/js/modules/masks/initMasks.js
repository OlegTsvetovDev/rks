import initFfhcMasks from './initFfhcMasks.js'
import initFloatMasks from './initFloatMasks.js'
import initIntegerMasks from './initIntegerMasks.js'
import { initTinEMasks, initTinFlMasks, initTinUlMasks } from './initTinMasks.js'
import initPhoneMasks from './initPhoneMasks.js'
import { initPassportMasks, initPassportSerialMasks, initPassportNumberMasks } from './initPassportMasks.js'
import initDatepickerMasks from './initDatepickerMasks.js'
import initSnilsMasks from './initSnilsMasks.js'


// инит масок
function initMasks(parentNode) {
  // маска на дейтпикер
  if (parentNode.querySelector('.datepicker_input'))
    initDatepickerMasks()

  // маска СНИЛС
  if (parentNode.querySelector('.snils_input'))
    initSnilsMasks()

  // маска паспорта серия + номер
  if (parentNode.querySelector('.passport_input'))
    initPassportMasks()

  // маска срии паспорта
  if (parentNode.querySelector('.passport_serial_input'))
    initPassportSerialMasks()

  // маска номера паспорта
  if (parentNode.querySelector('.passport_number_input'))
    initPassportNumberMasks()

  // маски номер телефонов
  if (parentNode.querySelector('.phone_input'))
    initPhoneMasks()

  // ИНН ЮЛ маски
  if (parentNode.querySelector('.tin_ul_input'))
    initTinUlMasks()

  // ИНН ФЛ маски
  if (parentNode.querySelector('.tin_fl_input'))
    initTinFlMasks()

  // ИНН ИП маски
  if (parentNode.querySelector('.tin_e_input'))
    initTinEMasks()

  // маска для целых чисел
  if (parentNode.querySelector('.integer_input'))
    initIntegerMasks()

  // маска чисел с плавающей запятой
  if (parentNode.querySelector('.float_input'))
    initFloatMasks()

  // маска для "Класса функциональной пожарной опасности"
  if (parentNode.querySelector('.ffhc_input'))
    initFfhcMasks()

}

export default initMasks
