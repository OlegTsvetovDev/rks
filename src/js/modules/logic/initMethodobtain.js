import changeSliderHeight from "../controls/slider/changeSliderHeight.js";

function initMethodobtain() {
    const changeMethodobtain = (inp) => {
        if(!inp) return
        
        if(inp.value === '002' || inp.value === '003' || inp.value === '004'){
            const formField = document.querySelector('[name="statementtc_mail"]').closest('.form__field')
            formField.classList.remove('hidden')
            if(inp.value === '002'){
                formField.querySelector('.field__description').textContent = 'Адрес электронной почты'
            }
            if(inp.value === '003'){
                formField.querySelector('.field__description').textContent = 'Почтовый адрес для уведомления'
            }
            if(inp.value === '004'){
                formField.querySelector('.field__description').textContent = 'Примечание'
            }
        } else {
            document.querySelector('[name="statementtc_mail"]').closest('.form__field').classList.add('hidden')
        }
        changeSliderHeight()
    }

    document.querySelectorAll('[name="methodobtain"]').forEach(elem => elem.closest('.form__field')
        .addEventListener('click', (e) => {changeMethodobtain(e.target.querySelector('input'))}))

    changeMethodobtain(document.querySelector('[name="methodobtain"][checked]'))
}

export default initMethodobtain