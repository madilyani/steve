function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
      $("#blah").addClass("show");
    };

    reader.readAsDataURL(input.files[0]);
  }
}
$(".testimonialAgent__slider").slick({
  dots: true,
  infinite: true,
  arrows: true,
  prevArrow: $(".testPrev"),
  nextArrow: $(".testNext"),
  speed: 500,
  fade: true,
  cssEase: "linear",
});
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();
