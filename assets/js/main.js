var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// sticky
let stickyPosition = document.getElementById("stickyPosition");
let header = document.getElementById("header");

let sticky = stickyPosition.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};

// sticky

const tabsBtn = document.querySelectorAll(".tabBtn");
const tabsItems = document.querySelectorAll(".tabEvent");
tabsBtn.forEach((e) => {
  onTopTabClick(tabsBtn, tabsItems, e);
});
function onTopTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let eId = e.target.getAttribute("data-tab");
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      console.log(e.target);
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      if (eId == "#book-1" || eId == "#book-2") {
        document.querySelector("#mapStart").classList.remove("active");
        document.querySelector("#cardStart").classList.add("active");
      } else {
        document.querySelector("#mapStart").classList.add("active");
        document.querySelector("#cardStart").classList.remove("active");
      }
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
const agentBtn = document.querySelectorAll(".agentBtn");
const agentItem = document.querySelectorAll(".agentItem");
agentBtn.forEach((e) => {
  onTabClick(agentBtn, agentItem, e);
});
const buyRentBtn = document.querySelectorAll(".buyRentBtn");
const buyRentItem = document.querySelectorAll(".buyRentItem");
buyRentBtn.forEach((e) => {
  onTabClick(buyRentBtn, buyRentItem, e);
});
const interestBtn = document.querySelectorAll(".interestBtn");
const interestItem = document.querySelectorAll(".interestItem");
interestBtn.forEach((e) => {
  onTabClick(interestBtn, interestItem, e);
});
const realEstateBtn = document.querySelectorAll(".realEstateBtn");
const realEstateEvent = document.querySelectorAll(".realEstateEvent");
realEstateBtn.forEach((e) => {
  onTabClick(realEstateBtn, realEstateEvent, e);
});
const agentProfileBtn = document.querySelectorAll(".agentProfileBtn");
const agentProfileEvent = document.querySelectorAll(".agentProfileEvent");
agentProfileBtn.forEach((e) => {
  onTabClick(agentProfileBtn, agentProfileEvent, e);
});
function onTabClick(agentBtns, agentItems, itemAgent) {
  itemAgent.addEventListener("click", function (e) {
    let currentAgentBtn = itemAgent;
    let tabIdAgent = currentAgentBtn.getAttribute("data-tab");
    let currentAgentItem = document.querySelector(tabIdAgent);
    if (!currentAgentBtn.classList.contains("active")) {
      agentBtns.forEach(function (itemAgent) {
        itemAgent.classList.remove("active");
      });
      agentItems.forEach(function (itemAgent) {
        itemAgent.classList.remove("active");
      });
      currentAgentBtn.classList.add("active");
      currentAgentItem.classList.add("active");
    }
    $(".card__inner-slider").slick("setPosition");
  });
}
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
