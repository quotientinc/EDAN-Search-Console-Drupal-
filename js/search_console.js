function clear_form_elements(ele) {
  // this js script handles styling and actions for the clear buttons on all 3 forms
  jQuery(ele).find(":input").each(function() {
    switch(this.type) {
      case "password":
      case "select-multiple":
      case "select-one":
      case "text":
      case "textarea":
      if (jQuery(this).attr("id") == "edit-rows") {
        jQuery(this).val("10");
      } else if (jQuery(this).attr("id") == "edit-start") {
        jQuery(this).val("1");
      } else {
        jQuery(this).val("");
      }
      break;
      case "checkbox":
      case "radio":
      this.checked = false;
    }
  });
}


jQuery(document).ready(function() {

  jQuery("#edit-clear, #edit-clear--2, #edit-clear--3").hover(
    function() {
      jQuery(this).css("background", "#0079a1")
    },
    function() {
      jQuery(this).css("background", "#008cba")
    }
    );

  jQuery("#edit-clear, #edit-clear--2, #edit-clear--3").click( function (e) {
    e.preventDefault();
    clear_form_elements(jQuery("#search-console-form"));
  });

  // hide parts of description box
  jQuery(".filter-wrapper").hide();

  //  handles copying to clipboard
  jQuery("#edit-copy-to-clipboard").click( function (e) {
    e.preventDefault();
    // create a temporary input and attach it to the body
    var temp = jQuery("<input>");
    jQuery("body").append(temp);
    // set the temp input value to a copy of #holdtext value
    temp.val(jQuery("#holdtext").text()).select();
    // copy the temp input value to the clipboard
    document.execCommand("copy");
    // remove temp
    temp.remove();
  });

});
