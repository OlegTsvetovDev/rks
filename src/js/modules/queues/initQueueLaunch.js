// переключение блоков в "Запуск по очередям", слайдер 1
function initQueueLaunch(node) {
  const trigger = node.querySelector('.queue_launch__trigger')
  const yes = trigger.querySelector('input[type="radio"][value="yes"]')
  const no = trigger.querySelector('input[type="radio"][value="no"]')
  const isDisabled = yes.disabled || no.disabled
  const yesNode = node.querySelector('.queue_launch_yes')
  const noNode = node.querySelector('.queue_launch_no')

  if (isDisabled) return

  const handleYesClick = () => {
    if(document.querySelector('[name="statementtc_queuecount"]').value === '0'){
      yesNode.querySelectorAll('input').forEach(inp => inp.removeAttribute('disabled'));
      noNode.querySelectorAll('input').forEach(inp => inp.setAttribute('disabled', ''));
      const tBody = yesNode.querySelector('.table__body')
      const row = tBody.querySelector('.table__row')
      let rowClone = row.cloneNode(true)
      rowClone.querySelectorAll('.table__cell')[0].innerHTML = 'Очередь №2'
      rowClone.querySelector('.table__cell input').setAttribute('name', 'statementtc_dateplan__2')
      rowClone.querySelector('.table__cell input').value = ''
      let inpDatepicker = jQuery(rowClone.querySelector('.datepicker_input'))
      inpDatepicker.datepicker($.datepicker.regional['ru'])
      inpDatepicker.mask("99.99.9999", { autodelete: false })
      tBody.prepend(rowClone)
      rowClone = row.cloneNode(true)
      rowClone.querySelectorAll('.table__cell')[0].innerHTML = 'Очередь №1'
      rowClone.querySelector('.table__cell input').setAttribute('name', 'statementtc_dateplan__1')
      rowClone.querySelector('.table__cell input').value = ''
      inpDatepicker = jQuery(rowClone.querySelector('.datepicker_input'))
      inpDatepicker.datepicker($.datepicker.regional['ru'])
      inpDatepicker.mask("99.99.9999", { autodelete: false })
      tBody.prepend(rowClone)

      yesNode.classList.remove('hidden')
      noNode.classList.add('hidden')
    }
  }

  const handleNoClick = () => {
    yesNode.querySelectorAll('input').forEach(inp => inp.setAttribute('disabled', ''));
    noNode.querySelectorAll('input').forEach(inp => inp.removeAttribute('disabled'));
    yesNode.classList.add('hidden')
    noNode.classList.remove('hidden')
  }

  yes.parentNode.addEventListener('click', handleYesClick)
  no.parentNode.addEventListener('click', handleNoClick)
}


export default initQueueLaunch
