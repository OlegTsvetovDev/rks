function setSecurityMail(){
  const inp_request_id = document.querySelector('#request_id');
  const message = document.querySelector('.main__text');
  let mail;
  if(inp_request_id)
    fetch(`./getSecurityMailJson?requestId=${inp_request_id.value}`)
    .then(response => response.json())
    .then(data => message.innerHTML += data + '.')
}

export default(setSecurityMail)