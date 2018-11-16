function toggle_visibility(cl, imgId) {
    var elements = document.getElementsByClassName("showInfo");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    document.getElementById(cl).style.display = "block";
}

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
