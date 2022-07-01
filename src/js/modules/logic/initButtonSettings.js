function initButtonSettings(){
    const button = document.querySelector('a[href="profile"]')
    const modal = document.querySelector('.modal_YesNo')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        modal.classList.remove('hidden')
    })
    modal.querySelector('.modal__close').addEventListener('click', (e) => {
        modal.classList.add('hidden')
    })
    modal.querySelector('.button_no').addEventListener('click', (e) => {
        modal.classList.add('hidden')
    })
    modal.querySelector('.button_yes').addEventListener('click', (e) => {
        window.location.href = 'profile'
    })
}

export default initButtonSettings