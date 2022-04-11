function disableFormEnter() {
  $('form').on('keyup keypress', function(e) {
    const keyCode = e.keyCode || e.which

    if (keyCode === 13) {
      e.preventDefault()
      return false
    }
  })
}


export default disableFormEnter
