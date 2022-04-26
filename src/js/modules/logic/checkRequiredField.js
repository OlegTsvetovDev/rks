//#region женин код [чуть-чуть ингин тоже]
function checkRequiredField() {
  if($('input[name="requesttype_id"]').val() == '10002')
    $('input[name="personbasis"][value="05"]').parent().attr( 'style', 'display:none;' );

  function getTitle(el) {
    return el.siblings(".required").text();
  }

  let form = $('form');
  $("input[type='submit']").click(function (e) {
    let activeElement = $(document.activeElement, this).attr("name")
    switch (activeElement) {
      case "ecp_button":
        e.preventDefault();
        e.stopPropagation();
        var err = [];
        let elems = form.find(".required + *");
        elems.each(function () {
          var $this = $(this);
          let attr = $this.prop("tagName");
          switch (attr) {
            case "SPAN":
              if ($this.find('input:checked').length == 0 && $this.is(':visible'))
                err.push("Не выбрано ни одно значение поля " + getTitle($this));
              break;
            case "INPUT":
              if (!$this.val() && $this.is(':visible'))
                err.push("Не указано значение поля " + getTitle($this));
              break;
            case "DIV":
              if ($this.is(':visible') && (
                  $this.find(".__select__title").text() == "Выберите тип документа" ||
                  $this.text() == "Полученный адрес" ||
                  ($this.find(".attachment").length == 0 &&
                    $this.hasClass("field__control_btns"))
                ))
                err.push("Не указано значение поля " + getTitle($this));
              break;
            case "TABLE":
              var t_fields = $this.find('tbody tr td input');
              var t_name = getTitle($this)
              t_fields.each( function () {
                    if(!$(this).val())
                      err.push("Не указано значение поля в таблице " + getTitle($this));
                  }
              )
              break;
          }
        });

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
          let isAtt = false;
          group.each(function () {
            var $this = $(this);
            if ($this.find(".attachment").length != 0) {
              isAtt = true;
              return false;
              }
          });
          if (!isAtt) {   // если в группе не оказалось прикрепленных файлов, то выдаем обшибку
            if (group.length === 1 ) err.push("<h6>Требуется прикрепить документ: </h6> \n <p>" + group[0].previousElementSibling.innerText + '</p>');
            else {
              let text = "<h6>Требуется прикрепить один из документов: \n</h6>";
              group.each(function () {
                var $this = $(this);
                text = text + '<p>' + $this[0].previousElementSibling.innerText + ';</p>';
              })
              err.push(text);
            }
          }
        })


        if (err.length) {
          $('.modal.modal_alert.autopopup.hidden .modal__text').html(err[0]);
          $('.modal.modal_alert.autopopup.hidden').removeClass('hidden');
          return;
        }
        form = $(this).closest('form');
        form.append("<input type='hidden' name='ecp' value='true' />");
        document.querySelectorAll("form input[disabled='']").forEach(inp => inp.removeAttribute("disabled"));
        form.submit();
        break;
      case "save_button":
        $('input[name="redirect"]').val('newrequesttp')
        break;
    }
    document.querySelectorAll("form input[disabled='']").forEach(inp => inp.removeAttribute("disabled"));
  });
}


export default checkRequiredField
