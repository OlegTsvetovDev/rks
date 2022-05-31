import initCheckRadios from "../../lk_request_fileinput.js";

function initConnectobjchar (node) {
    if (document.querySelector('input[name=requesttype_id]') && node.querySelector('.connectobjchar'))
        initCheckRadios('connectobjchar')
}

export default initConnectobjchar