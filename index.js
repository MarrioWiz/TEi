$(document).ready(function(){
  $("#yesButton").click(function(){
      $("#message").text("SABIA QUE DIRIAS QUE SI");
  });
  $("#noButton").mouseenter(function(){
      $(this).css("left", Math.random() * ($(window).width() - $(this).width()) + "px");
      $(this).css("top", Math.random() * ($(window).height() - $(this).height()) + "px");
  });
  $("#noButton").click(function(e){
      e.preventDefault();
  });
});
