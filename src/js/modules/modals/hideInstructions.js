function hideInstructions() {
    let clienttype = "unknown"
    const instr_links = document.querySelectorAll('.modal_instructions .instructions__link')

    $.ajax({
        url: "./getClienttypeJson/",
        method: "get",
        success: function(data){

            clienttype = data.replaceAll('"', '')
            if (clienttype === 'unknown') return
            instr_links.forEach(l => {
                if (!l.classList.contains(clienttype)) l.classList.add('hidden')
            })
        },
        error: function(){
           console.log("Не удалось определить тип пользователя")
        }
    });
}


export default hideInstructions