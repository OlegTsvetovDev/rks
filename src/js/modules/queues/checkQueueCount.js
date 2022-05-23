// убираем заголовок Сводный объект на 4-й вкладке, если остался один элемент
function checkQueueCount(){
  const inpQueueCount = document.querySelector('input[name="statementtc_queuecount"]');
  const summaryQueue = document.querySelector('#summary_queue');
  if(inpQueueCount.value === "0")
    summaryQueue.querySelector('h5.form__subheader').hidden = true;
  else
    summaryQueue.querySelector('h5.form__subheader').hidden = false;
}
  
export default checkQueueCount