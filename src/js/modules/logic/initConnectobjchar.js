import initCheckRadios from "../../lk_request_fileinput.js";

function initConnectobjchar (node) {
    if (document.querySelector('input[name=requesttype_id]') &&
        document.querySelector('input[name=requesttype_id]').value === '10002' &&
        node.querySelector('.connectobjchar'))
        initCheckRadios('connectobjchar')
}

export default initConnectobjchar