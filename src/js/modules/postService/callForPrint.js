function callForPrint(){

    let request_id;
    if(window.location.search.indexOf('update') > -1)
        request_id = new URLSearchParams(window.location.search).get('update')
    else if(window.location.search.indexOf('view') > -1)
        request_id = new URLSearchParams(window.location.search).get('view')

    location.href = "./requestprint?request_id=" + request_id;

    const modal = document.querySelector('#successAfterPrint')
    modal.classList.remove('hidden')

}

export default callForPrint