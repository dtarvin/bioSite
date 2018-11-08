function toggle_visibility(cl){
  console.log("========>cl is ", cl);
  var elements=document.getElementsByClassName("showInfo");
  for (i=0; i<elements.length; i++) {
    elements[i].style.display="none";
  }
  document.getElementById(cl).style.display="block";
};