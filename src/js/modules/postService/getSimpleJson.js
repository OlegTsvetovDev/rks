import hideElemsSimple from './hideElemsSimple.js'
import hideForUL from "./hideForUL.js";


function getSimpleJson(is_simple) {
  $.ajax({
    url: "./getSimpleJson/",
    success: function(data){
      is_simple = data === "true" ? true : false;
      //is_simple = false

      if(is_simple){
        let list_hidden_elem = document.querySelectorAll(
          "[name^='infmaxparam3']" + // Протяжность сети
          ",[name^='infmaxparam4']" + // Диаметр сети
          ",[name^='techcondobj_note']" + // Примечание
          ",[name^='connectloadparamdata_value2']" +
          ",[name^='addconnectloadparamdata_value_05']" +
          ",[name^='connectloadparamdata_value2_2']" +
          ",[name^='addconnectloadparamdata_value_06']" +
          ",[name^='addconnectloadparamdata_value_08'].mh" +
          ",[name^='addconnectloadparamdata_value_08'].md" +
          ",[name^='addconnectloadparamdata_value_02'].mh" +
          ",[name^='addconnectloadparamdata_value_02'].md" +
          ",[name^='addconnectloadparamdata_value_07'].mh" +
          ",[name^='addconnectloadparamdata_value_07'].md"
        );
        list_hidden_elem.forEach(x => x.parentElement.classList.add('hidden'));
        if(document.querySelector('[name="connectobjkind"]:checked').id == 'connectobjkind_03')
          document.querySelector('[name="room_number"]').parentElement.classList.remove('hidden');

        hideForUL("request");





        document.querySelector('.requests_form').classList.add('simple');
      }

      document.querySelectorAll('[name="connectobjkind"]').forEach(x => x.parentElement.addEventListener('click', () => {hideElemsSimple(is_simple)}));

      hideElemsSimple(is_simple);
    }
  });
}
//#endregion


export default getSimpleJson
