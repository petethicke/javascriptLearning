$(function() {

  $("button").on("click", function() {
    var size = prompt ("Enter a number between 10 and 100.");
    var squares = Math.ceil(parseInt(size))*Math.ceil(parseInt(size));
    var square = "<div class='square'></div>"
    for(var i = 0; i <= squares; i++) {
      $(".board").append(square);
    };
  });

})

