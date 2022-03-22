// пересчет высоты слайдера
  // action = 'increase' / 'decrease' (увеличить / уменьшить высоту), value = значение изменения

function changeSliderHeight(action, value) {
    var slickList = document.querySelector('.slick-list');
    var slickListHeight = Number.parseInt(slickList.style.height);

    if (action === 'increase') {
      return slickList.style.height = slickListHeight + value + 'px';
    }

    return slickList.style.height = slickListHeight - value + 'px';
  }

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
	      changeSliderHeight('decrease', 37)
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
          $("<div class=\"attachment__item\" />") //
            .text(f.name + " (" + formatSize(f.size) + ")") //
            .appendTo(div);
          $("<a href=\"#\" class=\"delete_file_btn\" />").appendTo(div);
		      changeSliderHeight('increase', 37)
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
	           changeSliderHeight('decrease', 37);
         });

         $("[id^='attachment__decldel_']").click(function() {
             var uuid = $(this).attr("id").replace("attachment__decldel_", "");
             $("input#" + uuid).prop("checked", false);
             $("label[for='" + uuid + "']").hide();
             $(".attachment__item_" + uuid).remove();
	           changeSliderHeight('decrease', 35);
         });



     });

    // Блоки "Лицо для основания на подключение", "Вид правообладания земельным участком", "Вид объекта подключения"

    function docblocksHide(doc_blocks, radio_name) {

        var $cur_val = $('input[name='+radio_name+']:checked').val(); // при клике на лейбл в этот метод попадаем 2 раза, один раз значение старое, в другой - новое; нужно только новое

        doc_blocks.each(
            function () {
                var $this = $(this);
                var doctype_vals = $this.val()
                var docblock = $this.parent();
                //docblock = this.parentNode;

                if ($cur_val === null || $cur_val === undefined || (doctype_vals.length !== 0 && doctype_vals.indexOf($cur_val) === -1))
                {
                    docblock.addClass(radio_name+'_hide');
                }
                else {
                    docblock.removeClass(radio_name+'_hide');
                }

                if (docblock.hasClass('personbasis_hide') ||
                    docblock.hasClass('owner_or_tenant_hide') ||
                    docblock.hasClass('connectobjkind_hide')) {
                    docblock.addClass('hidden');
                    docblock.css("display", "none"); //временно
                }
                else if (!docblock.hasClass('personbasis_hide') &&
                    !docblock.hasClass('owner_or_tenant_hide')  &&
                    !docblock.hasClass('connectobjkind_hide')) {
                    docblock.removeClass('hidden');
                    docblock.css("display", "flex"); //временно
                }

            }
        )
    }

    function initCheckRadios(radio_name) {
        const docblocks = $('[name^="doc_'+radio_name+'_"]'); // поменять на querySelectorAll

        docblocksHide(docblocks, radio_name);

        const radios = document.querySelectorAll('input[name='+radio_name+']');


        for (let i = 0; i < radios.length; i++) {

            radios[i].addEventListener('change', () => docblocksHide(docblocks, radio_name));

            // const label = radios[i].parentNode;
            // label.addEventListener('click', () => docblocksHide(docblocks, radio_name));
        }
    }



    if (document.querySelector('.personbasis')) initCheckRadios('personbasis');
    if (document.querySelector('.owner_or_tenant')) initCheckRadios('owner_or_tenant');
    if (document.querySelector('.connectobjkind')) initCheckRadios('connectobjkind');


