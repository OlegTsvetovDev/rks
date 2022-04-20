function hideInstructions() {
    let clienttype = "unkown"
    const instr_links = document.querySelectorAll('.modal_instructions .instructions__link')

    $.ajax({
        url: "./getClienttypeJson/",
        success: function(data){

            clienttype = data.replaceAll('"', '')
            if (clienttype === 'unknown') return
            instr_links.forEach(l => {
                if (!l.classList.contains(clienttype)) l.classList.add('hidden')
            })
        }
    });
}


export default hideInstructions