$(document).ready(function () {
  if (window.File && window.FileList && window.FileReader) {
    $(".files").on("change", function (e) {
      var files = e.target.files,
        filesLength = files.length;
      var targetElement = $(e.target);
      console.log(e.target);
      for (var i = 0; i < filesLength; i++) {
        var f = files[i];
        var fileReader = new FileReader();
        fileReader.onload = function (x) {
          var file = x.target;
          var aa = $(
            '<div class="gallery__inner-column">' +
              '<img class="imageThumb" src="' +
              x.target.result +
              '" title="' +
              file.name +
              '"/>' +
              '<br/><div class="remove">&#10006;</div>' +
              "</div>"
          );
          aa.insertBefore(targetElement.closest(".insertBefore"));
          $(".remove").click(function () {
            $(this).parent(".gallery__inner-column").remove();
          });
        
        };
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API");
  }
});
