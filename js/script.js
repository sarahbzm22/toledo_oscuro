$(document).ready(function() {
  let sections = $("section, footer");
  let currentIndex = 0;

  $(window).on("wheel", function(e) {
    if (e.originalEvent.deltaY > 0) {
      // Scroll hacia abajo
      if (currentIndex < sections.length - 1) {
        $(sections[currentIndex]).removeClass("active");
        currentIndex++;
        $(sections[currentIndex]).addClass("active");
      }
    } else {
      // Scroll hacia arriba
      if (currentIndex > 0) {
        $(sections[currentIndex]).removeClass("active");
        currentIndex--;
        $(sections[currentIndex]).addClass("active");
      }
    }
  });
});
