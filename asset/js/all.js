$(document).ready(function () {
  // hamburger
  $(".l-header__hamburger").click(function (e) {
    e.preventDefault();
    $(".l-header__hamburger").toggleClass("active");
    $(".l-header__inner").toggleClass("active");
  });

  //header
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) {
      $("#js-nav").addClass("bgWhite");
    } else {
      $("#js-nav").removeClass("bgWhite");
    }
  });

  // top
  $(".top").click(function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 500);
  });
});
