import changeSliderHeight from "../controls/slider/changeSliderHeight.js";

function initPersonbasis() {
  const event = (input) => {
    if (!input) return

    const showLinkedElems = (nameElem) => {
      document.querySelector(`[name="${nameElem}"]`).closest('.form__field').classList.remove('hidden')
      if(document.querySelector(`[name="${nameElem}"]`).checked){
        document.querySelector(`[name="${nameElem}"]`).getAttribute('data-showfield').split(' ').forEach(name => {
          document.querySelector(`[name="${name}"]`).closest('.form__field').classList.remove('hidden')
        })
      }
    }
    const hideLinkedElems = (nameElem) => {
      document.querySelector(`[name="${nameElem}"]`).closest('.form__field').classList.add('hidden')
      if(document.querySelector(`[name="${nameElem}"]`).checked){
        document.querySelector(`[name="${nameElem}"]`).getAttribute('data-showfield').split(' ').forEach(name => {
          document.querySelector(`[name="${name}"]`).closest('.form__field').classList.add('hidden')
        })
      }
    }

    if(input.value === '01'){
      showLinkedElems('isownerofland')
      showLinkedElems('isownerofobject')
      hideLinkedElems('techcondobj_gremerzu')
    } else {
      hideLinkedElems('isownerofland')
      hideLinkedElems('isownerofobject')
      showLinkedElems('techcondobj_gremerzu')
    }
    if (input.value === '05') {
      document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
      document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
      document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
      document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.previousElementSibling.classList.add('required'))
    } else {
      document.querySelectorAll('input[name^="livingSpace"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
      document.querySelectorAll('input[name^="notLivingSpace"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
      document.querySelectorAll('input[name^="totalVolume"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
      document.querySelectorAll('input[name^="hazardClass"]').forEach(inp => inp.previousElementSibling.classList.remove('required'))
    }
    changeSliderHeight()
  }

  document.querySelectorAll('input[name="personbasis"]').forEach(input => input.parentElement.addEventListener('click', (e) => {event(e.target.querySelector('input'))}))

  event(document.querySelector('input[name="personbasis"][checked]'))
}

export default initPersonbasis