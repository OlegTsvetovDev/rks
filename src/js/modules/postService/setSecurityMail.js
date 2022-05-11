function setSecurityMail(){
  const inp_request_id = document.querySelector('#request_id');
  const message = document.querySelector('.main__text');
  const mail = document.querySelector('#mail').value;
  
  const pos_a = mail.indexOf('@');
  const pos_point = mail.lastIndexOf('.');
  let new_mail = mail.substring(0, 1);
  for(let i = 0; i < pos_a - 1; i++)
    new_mail += '*';
  new_mail += mail.substring(pos_a, pos_a + 2);
  for(let i = 0; i < pos_point - (pos_a + 2); i++)
    new_mail += '*';
  new_mail += mail.substring(pos_point);
  message.innerHTML += new_mail + '.'
  /*if(inp_request_id)
    fetch(`./getSecurityMailJson?requestId=${inp_request_id.value}`)
    .then(response => response.json())
    .then(data => message.innerHTML += data + '.')*/
}

export default(setSecurityMail)