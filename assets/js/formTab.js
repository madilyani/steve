
const formBtn = document.querySelectorAll(".formBtn");
const formItem = document.querySelectorAll(".formItem");
formBtn.forEach((e) => {
  onTabClick(formBtn, formItem, e);
});
function onTabClick(formBtns, formItems, itemForm) {
  itemForm.addEventListener("click", function (e) {
    let currentformBtn = itemForm;
    let tabIdForm = currentformBtn.getAttribute("data-tab");
    let currentformItem = document.querySelector(tabIdForm);
    if (!currentformBtn.classList.contains("active")) {
      formBtns.forEach(function (itemForm) {
        itemForm.classList.remove("active");
      });
      formItems.forEach(function (itemForm) {
        itemForm.classList.remove("active");
      });
      currentformBtn.classList.add("active");
      currentformItem.classList.add("active");
    }
  });
}
