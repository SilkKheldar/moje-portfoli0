$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 10000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Solution Designer.", "Software Engineer.", "Business Analyst."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});
