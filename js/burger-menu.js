$(function () {
  $(".header__tougle").click(function () {
    $(this).toggleClass("active");
    $(".header__ul").slideToggle(230, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
});
