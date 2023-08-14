$(document).ready(function() {
    $(".col-md-3").on("click", function() {
      $(this).find(".content").slideToggle();
    });
  });