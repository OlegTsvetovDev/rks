const initFloatMasks = () => {
  $('.float_input').keypress(function (e) {
    const trigger = (e.which != 46 || $(this).val().indexOf('.') != -1)
                    && (e.which < 48 || e.which > 57)

    if (trigger) e.preventDefault()
  })
}


export default initFloatMasks
