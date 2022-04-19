function hideForUL(pageType) {
    var is_ul
    $.ajax({
        url: "./getClienttypeJson/",
        success: function(data){
            is_ul = data === "\"UL\"";

            if (!is_ul) return

            if (pageType === "settings") {
                if(document.querySelector('[name="kpp"]'))
                    document.querySelector('[name="kpp"]').parentElement.parentElement.classList.add('hidden');
            }
            else if (pageType === "request") {
                if(document.querySelector('[name="statementtcjul_kpp"]')) {
                    document.querySelector('[name="statementtcjul_kpp"]').parentElement.parentElement.classList.add('hidden');
                    if(document.querySelector('[name="statementtcjul_ogrn"]'))
                        document.querySelector('[name="statementtcjul_ogrn"]').parentElement.parentElement.classList.add('fr');
                }
                if(document.querySelector('[name="statementtcjul_tel"]'))
                    document.querySelector('[name="statementtcjul_tel"]').parentElement.parentElement.classList.add('hidden');
                if(document.querySelector('[name="statementtcjul_email"]'))
                    document.querySelector('[name="statementtcjul_email"]').parentElement.parentElement.classList.add('hidden');

            }

        }
    });
}


export default hideForUL