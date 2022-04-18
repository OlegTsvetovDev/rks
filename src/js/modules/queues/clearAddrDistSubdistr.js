  // если изменен населенный пункт, то чистим улицу, район, микрорайон, корпус и улицу
  function clearAddrDistSubdistr(changedNode){
    if(changedNode.classList.contains('address__locality')){
      const queue_block = changedNode.closest('.queue_block')
      const lookups = queue_block.querySelectorAll('.address__street, .address__district, .address__microdistrict, .address__house, .address__housing')
      lookups.forEach(lookup => {
        lookup.value = ''
      });
    }
  }

  export default clearAddrDistSubdistr