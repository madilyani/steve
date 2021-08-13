const loginBtn = document.querySelectorAll(".loginBtn");
const loginItem = document.querySelectorAll(".loginItem");
loginBtn.forEach((e) => {
  onLoignClick(loginBtn, loginItem, e);
});
function onLoignClick(loginBtns, loginItems, itemLogin) {
  itemLogin.addEventListener("click", function (e) {
    let currentLoginBtn = itemLogin;
    let tabIdLogin = currentLoginBtn.getAttribute("data-tab");
    let currentLoginItem = document.querySelector(tabIdLogin);
    if (!currentLoginBtn.classList.contains("active")) {
      loginBtns.forEach(function (itemLogin) {
        itemLogin.classList.remove("active");
      });
      loginItems.forEach(function (itemLogin) {
        itemLogin.classList.remove("active");
      });
      currentLoginBtn.classList.add("active");
      currentLoginItem.classList.add("active");
    }
  });
}
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
function readURLID(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#ID").attr("src", e.target.result);
      $("#ID").addClass("show");
    };

    reader.readAsDataURL(input.files[0]);
  }
}
