  // если изменен населенный пункт, то чистим улицу, район, микрорайон, корпус и улицу
  function clearAddrDistSubdistr(changedNode){
    if(changedNode.classList.contains('address__locality')){
      const queue_block = changedNode.closest('.queue_block')
      const lookups = queue_block.querySelectorAll('.address__street, .address__district, .address__microdistrict, .address__house, .address__housing')
      lookups.forEach(lookup => {
        lookup.value = ''
      });
      const selectContent = queue_block.querySelectorAll('.address__street~div, .address__district~div, .address__microdistrict~div')
      selectContent.forEach(div => div.innerHTML=
        `
          <input type="radio" class="__select__input" id="" tabindex="0">
          <label class="__select__label" for="">Выберите значение</label>
        `)
    }
  }

  export default clearAddrDistSubdistr