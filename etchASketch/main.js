$(function() {

  $("button").on("click", function() {
    var size = prompt ("Enter a number between 10 and 100.");
    for(var i = 0; i<=size.parseInt(); i++) {
      $(".board").append("<div class='square'></div>");
    };
  });

})