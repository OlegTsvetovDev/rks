function getSimpleSettings(is_simple) {
    $.ajax({
        url: "./getSimpleJson/",
        success: function(data){
            is_simple = data === "true" ? true : false;
            //hideElems_settings(is_simple);
            if (is_simple)
                if(document.querySelector('[name="kpp"]'))
                    document.querySelector('[name="kpp"]').parentElement.parentElement.classList.add('hidden');
        }
    });
}


export default getSimpleSettings