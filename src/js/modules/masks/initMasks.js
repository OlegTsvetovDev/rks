import initFfhcMasks from './initFfhcMasks.js'
import initFloatMasks from './initFloatMasks.js'
import initIntegerMasks from './initIntegerMasks.js'
import { initTinEMasks, initTinFlMasks, initTinUlMasks } from './initTinMasks.js'
import initPhoneMasks from './initPhoneMasks.js'
import { initPassportMasks, initPassportSerialMasks, initPassportNumberMasks } from './initPassportMasks.js'
import initDatepickerMasks from './initDatepickerMasks.js'
import initSnilsMasks from './initSnilsMasks.js'


// инит масок
function initMasks(node) {
  // маска на дейтпикер
  if (node.querySelector('.datepicker_input'))
    initDatepickerMasks()

  // маска СНИЛС
  if (node.querySelector('.snils_input'))
    initSnilsMasks()

  // маска паспорта серия + номер
  if (node.querySelector('.passport_input'))
    initPassportMasks()

  // маска срии паспорта
  if (node.querySelector('.passport_serial_input'))
    initPassportSerialMasks()

  // маска номера паспорта
  if (node.querySelector('.passport_number_input'))
    initPassportNumberMasks()

  // маски номер телефонов
  if (node.querySelector('.phone_input'))
    initPhoneMasks()

  // ИНН ЮЛ маски
  if (node.querySelector('.tin_ul_input'))
    initTinUlMasks()

  // ИНН ФЛ маски
  if (node.querySelector('.tin_fl_input'))
    initTinFlMasks()

  // ИНН ИП маски
  if (node.querySelector('.tin_e_input'))
    initTinEMasks()

  // маска для целых чисел
  if (node.querySelector('.integer_input'))
    initIntegerMasks()

  // маска чисел с плавающей запятой
  if (node.querySelector('.float_input'))
    initFloatMasks()

  // маска для "Класса функциональной пожарной опасности"
  if (node.querySelector('.ffhc_input'))
    initFfhcMasks(node)

}

export default initMasks
