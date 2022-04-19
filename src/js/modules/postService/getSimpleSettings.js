import hideForUL from "./hideForUL.js";

function getSimpleSettings(is_simple) {
    $.ajax({
        url: "./getSimpleJson/",
        success: function(data){
            is_simple = data === "true" ? true : false;

            if (is_simple)
                hideForUL("settings")
        }
    });
}


export default getSimpleSettings