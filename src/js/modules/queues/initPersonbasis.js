// если в поле Лицо для основания на выдачу ТУ выбран Застройщик/иное лицо по договору подряда на ПСД, то некоторые поля становятся required
function initPersonbasis(){
    document.querySelectorAll('input[name="personbasis"]').forEach(input => input.parentElement.addEventListener('click', (e) => {
    let input = e.target;
    if(input.tagName === 'LABEL')
      if(input.getAttribute('for') === 'personbasis_05')
      {
        document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
        document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
        document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
        document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
      }
      else
      {
        document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
        document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
        document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
        document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
      }
  }))
}

  export default initPersonbasis