function initModalForPrintButton(){
    const buttons = document.querySelectorAll('a.print_btn')
    const modal = document.querySelector('#successAfterPrint')
    if(buttons && modal)
        buttons.forEach(b => b.addEventListener('click', () => modal.classList.remove('hidden')))
}

export default initModalForPrintButton