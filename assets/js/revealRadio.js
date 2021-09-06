$(document).ready(function () {
  $(".revealInput").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".revealForm__info-box").not(targetBox).hide();
    $(targetBox).show();
  });
  $(".revealInput-2").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".revealForm__info-box-2").not(targetBox).hide();
    $(targetBox).show();
  });
  $(".revealInput-3").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".revealForm__info-box-3").not(targetBox).hide();
    $(targetBox).show();
  });
  $(".revealInput-4").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".revealForm__info-box-4").not(targetBox).hide();
    $(targetBox).show();
  });
});
