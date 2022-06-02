import changeSliderHeight from './modules/controls/slider/changeSliderHeight.js'


    function parseLimit(size) {
      if (!size) return Number.MAX_VALUE;
      if (typeof size == "number") return size > 0 ? size : Number.MAX_VALUE;
      size = size.toString().toLowerCase();
      size = /^(\d+)(k|m)?$/g.exec(size);
      if (!size) return Number.MAX_VALUE;
      var result = parseInt(size[1], 10);
      if (size[2] == "k")
        result *= 1024;
      else if (size[2] == "m")
        result *= 1024 * 1024;
      else if (size[2] == "g") result *= 1024 * 1024 * 1024;
      return result;
    }

    function formatSize(size) {
      var K = 1024;
      var M = K * K;
      var suffix = "";
      if (size > K) {
        size /= K;
        suffix = " кб";
      }
      if (size > K) {
        size /= K;
        suffix = " мб";
      }
      size = size.toFixed(2);
      size = size.replace(/0+$/gi, "").replace(/\.$/gi, "");
      return size + suffix;
    }

    var totalSize = 0;

    function bindAttachment(div, input, size) {
      div.find(".delete_file_btn").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        totalSize -= size;
        input.remove();
        div.remove();
	      changeSliderHeight()
      });
    }

    function bindFileInput(el) {

      el = $(el);

      el.change(function () {

        var $this = $(this);
        var label = $("label[for=" + $this.attr("id") + "]");
        if (!label.length) return;

        var div = $("<div class=\"attachment\" />");
        var names = [];
        var size = 0;
        $(this.files).each(function (i, f) {
          names.push(f.name);
          size += f.size;
          $("<div class=\"attachment__item\" />")
            .text(f.name + " (" + formatSize(f.size) + ")")
            .appendTo(div);
          $("<a href=\"#\" class=\"delete_file_btn\" />").appendTo(div);
		      changeSliderHeight()
        });



        if (names.length) {

          var limit = parseLimit($this.attr("data-maxsize"));

          // Проверить лимит на размер выбранных файлов
          if (totalSize + size > limit) {
            alert("Ошибка", "Размер выбранных файлов "
              + formatSize(totalSize + size)
              + " превышает указанный лимит в " + formatSize(limit));
            $this.val("");
            setTimeout(function () {
              $this.change();
            }, 1);
            return;
          }

          label.after(div);

          var newInput = $this.clone();
          newInput.val("");
          label.after(newInput);
          bindFileInput(newInput);

          $this.removeAttr("id");
          // Присвоим наименование поле выбора файла с указанным типом документа
          var doctype_id = $this.attr('data-id');
          $this.attr("name", "doc_" + doctype_id);

          totalSize += size;
          bindAttachment(div, $this, size);

        }

        else {
          label.empty();
        }

      });

    }

    $(function() {
      bindFileInput(".fileinput");
    });

    $(function() {

         $(".modaldelfileclose").click(function(e) {
             e.preventDefault();
             var modal = e.target.parentNode.parentNode;
             if (modal) modal.classList.add('hidden');
         });

         $("[data-target-modal-file^='confirm_']").click(function(e) {
             e.preventDefault();
             var modal = document.getElementById(e.target.getAttribute('data-target-modal-file') || '');
             if (modal) modal.classList.remove('hidden');
         });

         $("[id^='delete_cancel_']").click(function() {
             var uuid = $(this).attr("id").replace("delete_cancel_", "");
             $("input#" + uuid).prop("checked", false);
             $(".modaldelfileclose").trigger('click');
         });

         $("[id^='modal_accept_del_']").click(function() {
             var uuid = $(this).attr("id").replace("modal_accept_del_", "");
             $("input#" + uuid).prop("checked", true);
             $("label[for='" + uuid + "']").hide();
             $(".attachment__item_" + uuid).remove();
             $(".modaldelfileclose").trigger('click');
	           changeSliderHeight();
         });

         $("[id^='attachment__decldel_']").click(function() {
             var uuid = $(this).attr("id").replace("attachment__decldel_", "");
             $("input#" + uuid).prop("checked", false);
             $("label[for='" + uuid + "']").hide();
             $(".attachment__item_" + uuid).remove();
	         changeSliderHeight();
         });



     });
                                              // Лица для осн    //Тип правообл        // Вид объ. подкл.   // Характер-ка объ подкл
    function addDocRestrictiveInputs(docblock, personbasis_vals, owner_or_tenant_vals, connectobjkind_vals, connectobjchar_vals) {
        const doc_div = docblock.querySelector('div[class*=field__control_btns]')
        if (personbasis_vals !== '' ) $(doc_div).append(`<input class="attachment__doctype hidden" name="doc_personbasis_" value="`+ personbasis_vals +`" disabled="disabled"/>`)
        if (owner_or_tenant_vals !== '' ) $(doc_div).append(`<input class="attachment__doctype hidden" name="doc_owner_or_tenant_" value="`+ owner_or_tenant_vals +`" disabled="disabled"/>`)
        if (connectobjkind_vals !== '' ) $(doc_div).append(`<input class="attachment__doctype hidden" name="doc_connectobjkind_" value="`+ connectobjkind_vals +`" disabled="disabled"/>`)
        if (connectobjchar_vals !== '' ) $(doc_div).append(`<input class="attachment__doctype hidden" name="doc_connectobjchar_" value="`+ connectobjchar_vals +`" disabled="disabled"/>`)
    }
    function initDocRestrictions (clienttype) {
        const docblocks = document.querySelectorAll('div[class*=add_files]');
        const requesttype = document.querySelector('input[name=requesttype_id]').value;

        docblocks.forEach(docblock => {
            let doc_id = docblock.id;
            switch (doc_id) {
                case "TC-CONTRTERR":
                    addDocRestrictiveInputs(docblock, '03', '','','')
                    break;
                case "TC-PERMISSION":
                    addDocRestrictiveInputs(docblock, '02', '','','')
                    break;
                case "TC-TOPMAP2":
                    addDocRestrictiveInputs(docblock, '', '','01,02','')
                    break;
                case "TC-SCHEME":
                    addDocRestrictiveInputs(docblock, '03', '','','')
                    break;
                case "TC-CALC":
                    addDocRestrictiveInputs(docblock, '', '','02','')
                    break;
                case "TC-SITPLAN2":
                    addDocRestrictiveInputs(docblock, '', '','02','')
                    break;
                case "TC-PROJECTPLAN":
                    addDocRestrictiveInputs(docblock, '03', '','','')
                    break;
                case "TC-SCHEMEENG":
                    addDocRestrictiveInputs(docblock, '03', '','','')
                    break;
                case "TC-CONTRDEAL":
                    addDocRestrictiveInputs(docblock, '', '01','','')
                    break;
                case "TC-SCHEMEFLAT":
                    addDocRestrictiveInputs(docblock, '', '','03','')
                    break;
                case "TC-CONTRRENTFLAT":
                    addDocRestrictiveInputs(docblock, '', '02,03','03','')
                    break;
                case "TC-CONTRRENT2":
                    addDocRestrictiveInputs(docblock, '', '02','01,02','')
                    break;
                case "TC-CONTRRENT3":
                    addDocRestrictiveInputs(docblock, '', '03','01','')
                    break;
                case "TC-CONTRRENT4":
                    addDocRestrictiveInputs(docblock, '', '02,03','03','')
                    break;
                case "TC-EXTRTERR4":
                    addDocRestrictiveInputs(docblock, '', '01','03','')
                    break;
                case "TC-EXTRTERR3":
                    addDocRestrictiveInputs(docblock, '', '','01','')
                    break;
                case "TC-EXTRTERR":
                    switch (requesttype) {
                        case "10001":
                            addDocRestrictiveInputs(docblock, '', '01','01,02','')
                            break;
                        case "10002":
                            if (clienttype === "UL" || clienttype === "OGV")
                                addDocRestrictiveInputs(docblock, '01', '','','')
                            break
                    }
                    break;
                case "TC-CONTRRENT":
                    switch (requesttype) {
                        case "10001":
                            addDocRestrictiveInputs(docblock, '', '02','01,02','')
                            break;
                        case "10002":
                            addDocRestrictiveInputs(docblock, '', '02','','')
                            break
                    }
                    break;
                case "TC-URBANPLAN":
                    switch (requesttype) {
                        case "10001":
                            addDocRestrictiveInputs(docblock, '', '','01,02','')
                            break;
                        case "10002":
                            addDocRestrictiveInputs(docblock, '', '','','001')
                            break
                    }
                    break;
                case "TC-CONTRUSAGE":
                    switch (requesttype) {
                        case "10001":
                            addDocRestrictiveInputs(docblock, '', '03','01,02','')
                            break;
                        case "10002":
                            if (clienttype === "UL" || clienttype === "OGV")
                                addDocRestrictiveInputs(docblock, '01', '03','','')
                            else
                                addDocRestrictiveInputs(docblock, '', '03','','')
                            break
                    }
                    break;
                case "TC-EXTRTERR2":
                    switch (requesttype) {
                        case "10002":
                            addDocRestrictiveInputs(docblock, '', '','','002,003')
                            break;
                        case "10001":
                            addDocRestrictiveInputs(docblock, '', ',',',',',') // документ с обработкой в другом месте
                            break
                    }
                    break;
                default:
                    break;
            }
            }
        )

        if (document.querySelector('.personbasis')) initCheckRadios('personbasis');
        if (document.querySelector('.owner_or_tenant')) initCheckRadios('owner_or_tenant');
        if (document.querySelector('.connectobjkind')) initCheckRadios('connectobjkind');
        if (document.querySelector('.connectobjchar')) initCheckRadios('connectobjchar');
    }

    function specialRestrictionDocblocksHide (docblock){
        const requesttype = document.querySelector('input[name=requesttype_id]').value;

        const personbasis_radio = $('input[name=personbasis]:checked').val();
        const owner_or_tenant_radio = $('input[name=owner_or_tenant]:checked').val();
        const connectobjkind_radio = $('input[name=connectobjkind]:checked').val();
        const connectobjchar_radio = $('input[name*=connectobjchar]:checked')

        const doc_id = docblock.id;
        switch (doc_id) {
            case 'TC-EXTRTERR2':
                if (requesttype === '10001') {
                    if (connectobjkind_radio === '01' && owner_or_tenant_radio === '01') {
                        docblock.removeClass('doc_hide')
                    }
                    else if (connectobjkind_radio === '02') {
                        let hide = true
                        connectobjchar_radio.each(function () {
                            let $cur_val = $(this).val()
                            if ($cur_val === '002' || $cur_val === '003') {
                                hide = false
                                return false
                            }
                        })
                        if (hide) docblock.addClass('doc_hide')
                        else docblock.removeClass('doc_hide')
                    }
                    else docblock.addClass('doc_hide')
                }
                break;
        }
    }

    // Блоки "Лицо для основания на подключение", "Вид правообладания земельным участком", "Вид объекта подключения" - д/них сущ-ет привязка доков к БД + "Характеристика..."

    function docblocksHide(doc_blocks, radio_name) {

        var $cur_val = $('input[name='+radio_name+']:checked').val();

        doc_blocks.each(
            function () {
                var $this = $(this);
                var doctype_vals = $this.val()
                var docblock = $this.parent().parent();

                if ((doctype_vals === ','))
                {
                    specialRestrictionDocblocksHide(docblock)
                }
                else {
                    if ($cur_val === null || $cur_val === undefined || (doctype_vals.length !== 0 && doctype_vals.indexOf($cur_val) === -1))
                    {
                        docblock.addClass(radio_name+'_hide');
                    }
                    else {
                        docblock.removeClass(radio_name+'_hide');
                    }
                }

                if (document.querySelector('input[name=requesttype_id]').value === '10001' && radio_name === 'connectobjkind' && docblock.attr('id') === 'TC-EXTRTERR') {
                    if ($cur_val === '02')
                        $this.parent().prev().addClass('required')
                    else $this.parent().prev().removeClass('required')
                }



            }
        )
        //docGroupsRequiredIfOne();
    }

function docblocksHideQueueVals(doc_blocks, radio_name) {

    var checkedRadios = $('input[name*='+radio_name+']:checked')

    doc_blocks.forEach(docblock_radio =>
        {
            var doctype_vals = $(docblock_radio).val()
            var docblock = $(docblock_radio).parent().parent();
            if ((doctype_vals === ','))
            {
                specialRestrictionDocblocksHide(docblock)
            }
            else {
                checkedRadios.each(function() {
                    var $cur_val = $(this).val()
                    if ($cur_val === null || $cur_val === undefined || (doctype_vals.length !== 0 && doctype_vals.indexOf($cur_val) === -1)) {
                        docblock.addClass(radio_name+'_hide');
                        return false;
                    }
                    else {
                        docblock.removeClass(radio_name+'_hide');
                    }
                })
            }
        }
    )
    //docGroupsRequiredIfOne();
}

    // если в группе условно-обязательных документов только один документ, то показываем звездочку
    function docGroupsRequiredIfOne() {
        let elems_req_group = $('.form__field:not([class*=_hide]) [class*=req_group_]');
        var group_names = [];   // получаем существующие названия групп
        elems_req_group.each(function () {
            var $this = $(this);
            var el_id = $this[0].id;
            if (!group_names.includes(el_id))
                group_names.push(el_id);
        });
        group_names.forEach(function (e) {    // для каждой группы получаем ее элементы
            let group = elems_req_group.filter('#' + e);
            if (group.length === 1 ) group[0].previousElementSibling.classList.add("required_doc_group")
            else group.each(function () {
                var $this = $(this);
                $this[0].previousElementSibling.classList.remove("required_doc_group")
            })

        })
    }

    function initCheckRadios(radio_name) {

        const radios = document.querySelectorAll('input[name^='+radio_name+']');
        if (radio_name !== 'connectobjchar') {
            const docblocks = $('[name^="doc_'+radio_name+'_"]');
            docblocksHide(docblocks, radio_name);

            for (let i = 0; i < radios.length; i++) {
                if (radios[i].disabled) return;
                const label = radios[i].parentNode;
                label.addEventListener('click', () => docblocksHide(docblocks, radio_name));
            }
        }
        else {
            const docblocks = document.querySelectorAll('[name^=doc_'+radio_name+']');
            docblocksHideQueueVals(docblocks, radio_name)
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].disabled) return;
                const label = radios[i].parentNode;
                label.addEventListener('click', () => docblocksHideQueueVals(docblocks, radio_name));
            }
        }
    }


    function beforInitDocRestr (){
        $.ajax({
            url: "./getClienttypeJson/",
            method: "get",
            success: function(data){
                let clienttype = data.replaceAll('"', '')
                initDocRestrictions(clienttype)
            },
            error: function(){
                console.log("Не удалось определить тип пользователя")
            }
        });
    }

    if (document.querySelector('input[name=requesttype_id]')) beforInitDocRestr()





export default initCheckRadios
