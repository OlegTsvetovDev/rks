import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


function hideElemsSimple(is_simple){
  if(is_simple)
    switch(document.querySelector('[name="connectobjkind"]:checked').getAttribute('id')){
      case 'connectobjkind_01':
        document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
        if(document.querySelector('[name^="landplot_area"]'))
          document.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
        if(document.querySelector('[name^="usage_type"]'))
          document.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
        document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
        document.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
        document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
        document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
        document.querySelector('[name^="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
        document.querySelector('[name^="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
        document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = '1';
        document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
        document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
        document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
        document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = '1';
        document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
      break;
      case 'connectobjkind_02':
        document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
        if(document.querySelector('[name^="landplot_area"]'))
          document.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
        if(document.querySelector('[name^="usage_type"]'))
          document.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
        document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
        document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
        document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
        document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
        document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
        document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
        document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
        document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
        document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
      break;
      case 'connectobjkind_03':
        document.querySelector('[name^="room_number"]').parentElement.classList.remove('hidden'); // Номер квартиры
        if(document.querySelector('[name^="landplot_area"]'))
          document.querySelector('[name^="landplot_area"]').parentElement.classList.add('hidden'); // Площадь земельного участка
        if(document.querySelector('[name^="usage_type"]'))
          document.querySelector('[name^="usage_type"]').parentElement.classList.add('hidden'); // Вид разрешенного использования
        document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
        document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
        document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.add('hidden'); // Необходимые виды ресурсов
        document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.add('hidden'); // Информация о предельных параметрах разрешенного строительства
        document.querySelector('[name^="infmaxparam1"]').parentElement.classList.add('hidden'); // Количество надземных этажей
        document.querySelector('[name^="infmaxparam2"]').parentElement.classList.add('hidden'); // Этажность
        document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
        document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.add('hidden'); // Кол-во пожарных кранов, шт
        document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.add('hidden'); // Расход на наружное пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.add('hidden'); // Расход на внутреннее пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.add('hidden'); // Расход на автоматическое пожаротушение, л/с
        document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.add('hidden'); // Подключаемая нагрузка (м3/час)
      break;
    }
  else
    switch(document.querySelector('[name="connectobjkind"]:checked').getAttribute('id')){
      case 'connectobjkind_01':
        document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
        if(document.querySelector('[name^="landplot_area"]'))
          document.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
        if(document.querySelector('[name^="usage_type"]'))
          document.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
        document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения'; // Наименование объекта подключения
        document.querySelector('[name^="statementtc_connectobjname"]').value = `Частный дом по адресу: ${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
        document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
        document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
        document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
        document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
        document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = '1';
        document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
        document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
        document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', 'Не более 1 м3/сут'); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = '1';
        document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
      break;
      case 'connectobjkind_02':
        document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
        if(document.querySelector('[name^="landplot_area"]'))
          document.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
        if(document.querySelector('[name^="usage_type"]'))
          document.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
        document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (МКД, Магазин и т.д.)'; // Наименование объекта подключения
        document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
        document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
        document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
        document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
        document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
        document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
        document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
        document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)

      break;
      case 'connectobjkind_03':
        document.querySelector('[name^="room_number"]').parentElement.classList.add('hidden'); // Номер квартиры
        if(document.querySelector('[name^="landplot_area"]'))
          document.querySelector('[name^="landplot_area"]').parentElement.classList.remove('hidden'); // Площадь земельного участка
        if(document.querySelector('[name^="usage_type"]'))
          document.querySelector('[name^="usage_type"]').parentElement.classList.remove('hidden'); // Вид разрешенного использования
        document.querySelector('[name^="statementtc_connectobjname"]').previousElementSibling.innerHTML = 'Наименование объекта подключения (Офис, магазин, аптека и т.д.)'; // Наименование объекта подключения
        document.querySelector('[name^="statementtc_connectobjname"]').value = `${document.querySelector('[name="show_name"]').value}`; // Наименование объекта подключения
        document.querySelector('[name^="resourcekindreq"]').closest('.form__field').classList.remove('hidden'); // Необходимые виды ресурсов
        document.querySelector('[name^="infmaxparam1"]').closest('.form__field').previousElementSibling.classList.remove('hidden'); // Информация о предельных параметрах разрешенного строительства
        document.querySelector('[name^="infmaxparam1"]').parentElement.classList.remove('hidden'); // Количество надземных этажей
        document.querySelector('[name^="infmaxparam2"]').parentElement.classList.remove('hidden'); // Этажность
        document.querySelector('[name^="connectloadparamdata_value1"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
        document.querySelector('[name^="connectloadparamdata_value3"]').parentElement.classList.remove('hidden'); // Кол-во пожарных кранов, шт
        document.querySelector('[name^="addconnectloadparamdata_value_08"].ls').parentElement.classList.remove('hidden'); // Расход на наружное пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_02"].ls').parentElement.classList.remove('hidden'); // Расход на внутреннее пожаротушение, л/с
        document.querySelector('[name^="addconnectloadparamdata_value_07"].ls').parentElement.classList.remove('hidden'); // Расход на автоматическое пожаротушение, л/с
        document.querySelector('[name^="connectloadparamdata_value1_2"].md').setAttribute('title', ''); // Подключаемая нагрузка (м3/сут.)
        if(document.querySelector('[name^="connectloadparamdata_value1_2"].md').value == "1") // Подключаемая нагрузка (м3/сут.)
          document.querySelector('[name^="connectloadparamdata_value1_2"].md').value = ''; // Подключаемая нагрузка (м3/сут.)
        document.querySelector('[name^="connectloadparamdata_value1_2"].mh').parentElement.classList.remove('hidden'); // Подключаемая нагрузка (м3/час)
      break;
    }
    changeSliderHeight();
}


export default hideElemsSimple
