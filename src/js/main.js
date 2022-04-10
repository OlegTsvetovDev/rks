$(function() {

  var historySupport = !!window.history.replaceState;

  $(".autopopup").addClass("modal_show").each(function() {
    var $this = $(this);
    var s = $this.attr("data-onPopupState");
    if (s) {
      if (historySupport) {
        window.history.replaceState({}, null, s);
      } else {
        document.location = s;
      }
    }
  });

  $("form.ajax-loader").submit(function(e) {

    e.preventDefault();
    e.stopPropagation();

    var $this = $(this);

    var action = $this.attr("data-action") || "";
    var target = $($this.attr("data-target"));

    target.addClass("loading");
    $.ajax({

      type: "GET",
      url: action,
      data: $this.serialize(),

      complete: function(r) {

        target.removeClass("loading");

        if (r.status == 200) {
          target.html(r.responseText);
        }

      }

    })

  });

  window.showAlert = function(html, callback) {

    var dialog = $("#alert");
    dialog.find(".modal__text").html(html);

    dialog.find(".action_close").unbind().click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).closest(".modal").addClass("hidden");
      if (callback) {
        callback();
      }
    });

    dialog.removeClass("hidden");

  };

  window.showError = function(html, callback) {
    return window.showAlert(html, callback);
  }

  if ($.fn.select2) {
    $("select.select2").select2();
  }

  function fixDate() {
    var el = $(this);
    if (!/^\d{2}\.\d{2}\.\d{4}$/gi.exec(el.val())) el.val("");
  }

  if ($.fn.datepicker) {
    $(".text-input_date").datepicker({
      autoClose: true,
      toggleSelected: false,
      clearButton: true,
      onHide: function(inst, ac) {
        fixDate.call(inst.$el);
      }
    }).on("blur", fixDate);
  }

  $(".print-button").click(function(e) {

    e.preventDefault();
    e.stopPropagation();

    var $this = $(this);

    var target = $($this.attr("data-printTarget"));

    if (target.length) {

      target = target.clone();

      $(document.body).prepend(target).addClass("print");

      target.addClass("printable");
      target.find("*").addClass("printable");

      window.print();

      $(document.body).removeClass("print");
      target.remove();

    }

  });

  function filterText(s) {
    if (s == null) return s;
    s = s.replace(/[\r\n]+/gi, "\r");
    return s;
  }

  window.mask = function mask(f) {
    $("body").toggleClass("preloader", f);
  };

  window.bindForm = function bindForm(f) {

    var f = $(f);

    if (f.data("__bindflag")) return;

    function filterFileName(fileName) {
      if (!fileName) return null;
      var pos = fileName.lastIndexOf("\\");
      if (pos < 0) pos = fileName.lastIndexOf("//");
      if (pos >= 0) fileName = fileName.substring(pos + 1);
      return fileName;
    }

    f.find("input[type=file]").change(function() {
      $(this).closest("button").attr("data-text",
        filterFileName($(this).val()) || "Выбрать файл");
    });

    if ((f.attr("method") || "").toUpperCase() == "POST") {
      f.submit(function(e) {

        e.preventDefault();
        e.stopPropagation();

        var $this = $(this);

        var upload = ($this.attr("enctype") || "").toLowerCase() == "multipart/form-data";

        var formData;
        if (upload) {
          formData = new FormData($this[0]);
          formData.append("embed", "true");
        } else {
          formData = $this.serialize();
          formData = formData.split("&");
          formData.push("embed=true");
          formData = formData.join("&");
        }

        mask(true);

        $.ajax({

          type: "POST",
          url: $this.attr("action") || "",
          data: formData,
          contentType: upload ? false
            : "application/x-www-form-urlencoded; charset=UTF-8",
          processData: false,

          complete: function(xhr) {

            if (xhr.status == 200) {

              var l = xhr.getResponseHeader("Redirect")
                || xhr.getResponseHeader("Location")
                || xhr.getResponseHeader("RequestUrl");

              if (l != null)
                document.location = l;

              else {
                mask(false);
                document.write(xhr.responseText);
              }

            }

            else {
              mask(false);
              showError(filterText(xhr.responseText));
            }

          }

        })

      });
    }

    f.data("__bindflag", true);

  };

  $("form.ajax-form").each(function() {
    bindForm(this);
  });

});
