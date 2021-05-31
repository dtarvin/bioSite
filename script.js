// $( document ).ready(function() {
function toggle_visibility(cl){
  console.log("========>cl is ", cl);
  var elements=document.getElementsByClassName("showInfo");
  for (i=0; i<elements.length; i++) {
    elements[i].style.display="none";
  }
  document.getElementById(cl).style.display="block";
};

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
// });
//
$("#school1").click(function() {
  $("#schoolInfo1").fadeIn("slow");
})
