function checkQueueCount(){
  const inpQueueCount = document.querySelector('input[name="statementtc_queuecount"]');
  const summaryQueue = document.querySelector('[name="show_name__0"]').closest('.queue_block');
  if(inpQueueCount.value === "0")
    summaryQueue.querySelector('h5.form__subheader').hidden = true;
  else
    summaryQueue.querySelector('h5.form__subheader').hidden = false;
}
  
export default checkQueueCount