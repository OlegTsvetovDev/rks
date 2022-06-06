import changeSliderHeight from '../controls/slider/changeSliderHeight.js'

function hideElemsSimple(is_simple){
  const connectObjKind = document.querySelector('[name="connectobjkind"]:checked');
  const queuecountInput = document.querySelector('[name="statementtc_queuecount"]');
  if(connectObjKind && queuecountInput){
    const queuecount = queuecountInput.value;
    if(is_simple)
      switch(connectObjKind.getAttribute('id')){
        case 'connectobjkind_01':
          for(let i = 0; i <= queuecount; i++){
            const queue = document.querySelector(`.number_queue[value="${i}"]`).parentElement;
            queue.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
            if(queue.querySelector('[name^="landplot_area"]'))
              queue.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
            if(queue.querySelector('[name^="usage_type"]'))
              queue.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
              queue.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
            if(window.location.search.indexOf('requesttype_id') !=  -1)
              queue.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${queue.querySelector('[name^="show_name"]').value}`; // Наименование объекта подключения
            //if (document.querySelector('input[name=requesttype_id]').value === "10001")
              queue.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
            queue.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
            queue.querySelector('[name^="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
            queue.querySelector('[name^="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
            queue.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
            if(queue.querySelector('[name^="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
              queue.querySelector('[name^="connectloadparamdata_value1"].md').value = '1';
              queue.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
              queue.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
              queue.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
              queue.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
              queue.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
              queue.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
            if(queue.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
              queue.querySelector('[name^="connectloadparamdata_value1_2"].md').value = '1';
            queue.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
          }
        break;
        case 'connectobjkind_02':
          for(let i = 0; i <= queuecount; i++){
            const queue = document.querySelector(`.number_queue[value="${i}"]`).parentElement;
            queue.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
            if(queue.querySelector('[name^="landplot_area"]'))
              queue.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
            if(queue.querySelector('[name^="usage_type"]'))
              queue.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
            queue.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
            if(window.location.search.indexOf('requesttype_id') !=  -1)
              queue.querySelector('[name^="statementtc_connectobjname"]').value = `${queue.querySelector('[name^="show_name"]').value}`; // Наименование объекта подключения
            //if (document.querySelector('input[name=requesttype_id]').value === "10001")
              queue.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
            queue.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
            queue.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
            queue.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
            queue.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
            queue.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
            queue.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
            queue.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          }
        break;
        case 'connectobjkind_03':
          for(let i = 0; i <= queuecount; i++){
            const queue = document.querySelector(`.number_queue[value="${i}"]`).parentElement;
            queue.querySelector('[name^="room_number"]').parentElement.classList.remove('hidden'); // Номер квартиры
            if(queue.querySelector('[name^="landplot_area"]'))
              queue.querySelector('[name^="landplot_area"]').parentElement.classList.add('hidden'); // Площадь земельного участка
            if(queue.querySelector('[name^="usage_type"]'))
              queue.querySelector('[name^="usage_type"]').parentElement.classList.add('hidden'); // Вид разрешенного использования
            queue.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
            if(window.location.search.indexOf('requesttype_id') !=  -1)
              queue.querySelector('[name^="statementtc_connectobjname"]').value = `${queue.querySelector('[name^="show_name"]').value}`; // Наименование объекта подключения
            //if (document.querySelector('input[name=requesttype_id]').value === "10001")
              queue.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
            queue.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
            queue.querySelector('[name^="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
            queue.querySelector('[name^="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
            queue.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
            queue.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
            queue.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
            queue.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
          }
        break;
      }
    else
      switch(connectObjKind.getAttribute('id')){
        case 'connectobjkind_01':
          for(let i = 0; i <= queuecount; i++){
            const queue = document.querySelector(`.number_queue[value="${i}"]`).parentElement;
            queue.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
            if(queue.querySelector('[name^="landplot_area"]'))
              queue.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
            if(queue.querySelector('[name^="usage_type"]'))
              queue.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
              queue.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
            if(window.location.search.indexOf('requesttype_id') !=  -1)
              queue.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${queue.querySelector('[name^="show_name"]').value}`; // Наименование объекта подключения
            queue.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
            queue.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
            queue.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
            queue.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
            queue.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
            if(queue.querySelector('[name^="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
              queue.querySelector('[name^="connectloadparamdata_value1"].md').value = '1';
            queue.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
            queue.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
            queue.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
            queue.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
            if(queue.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
              queue.querySelector('[name^="connectloadparamdata_value1_2"].md').value = '1';
            queue.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          }
        break;
        case 'connectobjkind_02':
          for(let i = 0; i <= queuecount; i++){
            const queue = document.querySelector(`.number_queue[value="${i}"]`).parentElement;
            queue.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
            if(queue.querySelector('[name^="landplot_area"]'))
              queue.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
            if(queue.querySelector('[name^="usage_type"]'))
              queue.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
            queue.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
            if(window.location.search.indexOf('requesttype_id') !=  -1)
              queue.querySelector('[name^="statementtc_connectobjname"]').value = `${queue.querySelector('[name^="show_name"]').value}`; // Наименование объекта подключения
            queue.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
            queue.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
            queue.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
            queue.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
            queue.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
            queue.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
            queue.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
            queue.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          }
        break;
        case 'connectobjkind_03':
          for(let i = 0; i <= queuecount; i++){
            const queue = document.querySelector(`.number_queue[value="${i}"]`).parentElement;
            queue.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
            if(queue.querySelector('[name^="landplot_area"]'))
              queue.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
            if(queue.querySelector('[name^="usage_type"]'))
              queue.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
            queue.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
            if(window.location.search.indexOf('requesttype_id') !=  -1)
              queue.querySelector('[name^="statementtc_connectobjname"]').value = `${queue.querySelector('[name^="show_name"]').value}`; // Наименование объекта подключения
            queue.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
            queue.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
            queue.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
            queue.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
            queue.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
            queue.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
            queue.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
            queue.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
            queue.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
            queue.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
          }
        break;
      }
    changeSliderHeight();
  }
}


export default hideElemsSimple
