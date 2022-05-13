function initCopyButtons(newNode){
  const buttons = newNode.querySelectorAll('.queue_block .subheader_block__controls .controls__copy')
  
  buttons.forEach(button => button.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    const queue = e.target.closest('.queue_block')
    const number = queue.querySelector('.number_queue').value

    setValueInTextField('building__', number)
    setValueInTextField('korpus__', number)
    setValueInTextField('show_name__', number)
    setValueInTextField('techcondobj_floors__', number)
    setValueInTextField('statementtc_connectobjname__', number)

    setValueInCheckField('connectobjchar__', number)
    setValueInCheckField('connectobjtype__', number)
    setValueInCheckField('systemtype__', number)

    // копирование адресов
    setAddressFields(number)
  }))
}

function setValueInTextField(name, number){
    const nameFieldSource = name + (number - 1)
    const nameFieldRecipient = name + number
    const fieldSource = document.querySelector('[name="' + nameFieldSource + '"]')
    const fieldRecipient = document.querySelector('[name="' + nameFieldRecipient + '"]')
    if(fieldRecipient && fieldSource) fieldRecipient.value = fieldSource.value
}

function setValueInCheckField(name, number){
    const selectedRadioSources = document.querySelectorAll('[name="' + name + (number - 1) + '"]:checked')
    let radioRecipientes = []
    if(selectedRadioSources) 
        selectedRadioSources.forEach(radio => radioRecipientes.push(document.querySelector('[name="' + name + number + '"][value="' + radio.value + '"]')))
    const allRadioRecipientes = Array.from(document.querySelectorAll('[name="' + name + number + '"]'))
    if(radioRecipientes && allRadioRecipientes) allRadioRecipientes.forEach(radio => {
        if(radioRecipientes.includes(radio)){
            if(!radio.checked) {
                radio.click()
                radio.checked = true
            }
        }
        else{
            if(radio.checked){
                radio.click()
                radio.checked = false
            } 
        }})
}

function setAddressFields(number){
    const sourceBlock = document.querySelector('input.number_queue[value="' + (number - 1) + '"]').closest('.queue_block')
    const recipientBlock = document.querySelector('input.number_queue[value="' + number + '"]').closest('.queue_block')
    const recipientLocality = recipientBlock.querySelector('.address__locality')
    const recipientStreet = recipientBlock.querySelector('.address__street')
    const recipientDistrict = recipientBlock.querySelector('.address__district')
    const recipientMicrodistrict = recipientBlock.querySelector('.address__microdistrict')
    const sourceLocality = sourceBlock.querySelector('.address__locality')
    const sourceStreet = sourceBlock.querySelector('.address__street')
    const sourceDistrict = sourceBlock.querySelector('.address__district')
    const sourceMicrodistrict = sourceBlock.querySelector('.address__microdistrict')

    recipientLocality.value = sourceLocality.value
    recipientLocality.nextElementSibling.innerHTML = `
                                                    <input type="radio" class="__select__input" id="" tabindex="0">
                                                    <label class="__select__label" for="">Выберите значение</label>
                                                    `
    if(sourceBlock.querySelector('[name="town_code__' + (number - 1) + '"]:checked') && sourceBlock.querySelector('[name="town_code__' + (number - 1) + '"]:checked').value !== 'on'){
        let inputValue = sourceBlock.querySelector('[name="town_code__' + (number - 1) + '"]:checked').value
        let inputCopy = sourceLocality.nextElementSibling.querySelector('input:checked').cloneNode(true)
        let labelCopy = sourceLocality.nextElementSibling.querySelector('input:checked').nextElementSibling.cloneNode(true)
        inputCopy.setAttribute('name', 'town_code__' + number)
        inputCopy.setAttribute('id', 'locality_' + inputValue + '__' + number)
        labelCopy.setAttribute('for', 'locality_' + inputValue + '__' + number)
        recipientLocality.nextElementSibling.append(inputCopy)
        recipientLocality.nextElementSibling.append(labelCopy)
    }

    recipientStreet.value = sourceStreet.value
    recipientStreet.nextElementSibling.innerHTML = `
                                                    <input type="radio" class="__select__input" id="" tabindex="0">
                                                    <label class="__select__label" for="">Выберите значение</label>
                                                    `
    if(sourceBlock.querySelector('[name="street_code__' + (number - 1) + '"]:checked') && sourceBlock.querySelector('[name="street_code__' + (number - 1) + '"]:checked').value !== 'on'){
        inputValue = sourceBlock.querySelector('[name="street_code__' + (number - 1) + '"]:checked').value
        inputCopy = sourceStreet.nextElementSibling.querySelector('input:checked').cloneNode(true)
        labelCopy = sourceStreet.nextElementSibling.querySelector('input:checked').nextElementSibling.cloneNode(true)
        inputCopy.setAttribute('name', 'street_code__' + number)
        inputCopy.setAttribute('id', 'street_' + inputValue + '__' + number)
        labelCopy.setAttribute('for', 'street_' + inputValue + '__' + number)
        recipientStreet.nextElementSibling.append(inputCopy)
        recipientStreet.nextElementSibling.append(labelCopy)
    }

    recipientDistrict.value = sourceDistrict.value
    recipientDistrict.nextElementSibling.innerHTML = `
                                                    <input type="radio" class="__select__input" id="" tabindex="0">
                                                    <label class="__select__label" for="">Выберите значение</label>
                                                    `
    if(sourceBlock.querySelector('[name="district_code__' + (number - 1) + '"]:checked') && sourceBlock.querySelector('[name="district_code__' + (number - 1) + '"]:checked').value !== '001'){
        inputValue = sourceBlock.querySelector('[name="district_code__' + (number - 1) + '"]:checked').value
        inputCopy = sourceDistrict.nextElementSibling.querySelector('input:checked').cloneNode(true)
        labelCopy = sourceDistrict.nextElementSibling.querySelector('input:checked').nextElementSibling.cloneNode(true)
        inputCopy.setAttribute('name', 'district_code__' + number)
        inputCopy.setAttribute('id', 'distrcict_' + inputValue + '__' + number)
        labelCopy.setAttribute('for', 'distrcict_' + inputValue + '__' + number)
        recipientDistrict.nextElementSibling.append(inputCopy)
        recipientDistrict.nextElementSibling.append(labelCopy)
    }

    recipientMicrodistrict.value = sourceMicrodistrict.value
    recipientMicrodistrict.nextElementSibling.innerHTML = `
                                                    <input type="radio" class="__select__input" id="" tabindex="0">
                                                    <label class="__select__label" for="">Выберите значение</label>
                                                    `
    if(sourceBlock.querySelector('[name="subdistrict_code__' + (number - 1) + '"]:checked') && sourceBlock.querySelector('[name="subdistrict_code__' + (number - 1) + '"]:checked').value !== '001'){
        inputValue = sourceBlock.querySelector('[name="subdistrict_code__' + (number - 1) + '"]:checked').value
        inputCopy = sourceMicrodistrict.nextElementSibling.querySelector('input:checked').cloneNode(true)
        labelCopy = sourceMicrodistrict.nextElementSibling.querySelector('input:checked').nextElementSibling.cloneNode(true)
        inputCopy.setAttribute('name', 'subdistrict_code__' + number)
        inputCopy.setAttribute('id', 'subdistrict_' + inputValue + '__' + number)
        labelCopy.setAttribute('for', 'subdistrict_' + inputValue + '__' + number)
        recipientMicrodistrict.nextElementSibling.append(inputCopy)
        recipientMicrodistrict.nextElementSibling.append(labelCopy)
    }
}

export default initCopyButtons