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
  $(".agreeInput").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".agree").not(targetBox).hide();
    $(targetBox).show();
  });
  $(".paymentInput").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".payment").not(targetBox).hide();
    $(targetBox).show();
  });
  $(".availableTimeInput").click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".availableTime").not(targetBox).hide();
    $(targetBox).show();
  });
  $(".forSale").click(function () {
    var inputValue = $(this).attr("checked");
    if (inputValue) {
      $(".forSaleRemove").removeClass("forSaleRemove-hide");
      $(".forSaleShow").removeClass("forSaleRemove-show");
    } else {
      $(".forSaleRemove").addClass("forSaleRemove-hide");
      $(".forSaleShow").addClass("forSaleRemove-show");
    }
  });
});

function revealSelected(e) {
  var inputValue = e;
  if (inputValue == 3) {
    $(".entireProperty").addClass("entireProperty-hide");
    $(".roomOnly").removeClass("roomOnly-hide");
  } else {
    $(".entireProperty").removeClass("entireProperty-hide");
    $(".roomOnly").addClass("roomOnly-hide");
  }
}
function revealSelectedInput(e) {
  var inputValue = e;
  console.log(e);
  if (inputValue == 6) {
    $(".inputCustom").addClass("revealSelectedInput-show");
  } else {
    $(".inputCustom").removeClass("revealSelectedInput-hide");
  }
}
