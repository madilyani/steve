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
$(".card__inner-slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: "linear",
});
const tabsBtn = document.querySelectorAll(".tabBtn");
const tabsItems = document.querySelectorAll(".tabEvent");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
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
  });
}
const buyRentBtn = document.querySelectorAll(".buyRentBtn");
const buyRentItem = document.querySelectorAll(".buyRentItem");
buyRentBtn.forEach((e) => {
  onTabClick(buyRentBtn, buyRentItem, e);
});
function onTabClick(buyRentBtns, buyRentItems, itemBuyRent) {
  itemBuyRent.addEventListener("click", function (e) {
    let currentbuyRentBtn = itemBuyRent;
    let tabIdButRent = currentbuyRentBtn.getAttribute("data-tab");
    let currentbuyRentItem = document.querySelector(tabIdButRent);
    if (!currentbuyRentBtn.classList.contains("active")) {
      buyRentBtns.forEach(function (itemBuyRent) {
        itemBuyRent.classList.remove("active");
      });
      buyRentItems.forEach(function (itemBuyRent) {
        itemBuyRent.classList.remove("active");
      });
      currentbuyRentBtn.classList.add("active");
      currentbuyRentItem.classList.add("active");
    }
  });
}
const interestBtn = document.querySelectorAll(".interestBtn");
const interestItem = document.querySelectorAll(".interestItem");
interestBtn.forEach((e) => {
  onTabClick(interestBtn, interestItem, e);
});
function onTabClick(interestBtns, interestItems, itemInterest) {
  itemInterest.addEventListener("click", function (e) {
    let currentinterestBtn = itemInterest;
    let tabIdButRent = currentinterestBtn.getAttribute("data-tab");
    let currentinterestItem = document.querySelector(tabIdButRent);
    if (!currentinterestBtn.classList.contains("active")) {
      interestBtns.forEach(function (itemInterest) {
        itemInterest.classList.remove("active");
      });
      interestItems.forEach(function (itemInterest) {
        itemInterest.classList.remove("active");
      });
      currentinterestBtn.classList.add("active");
      currentinterestItem.classList.add("active");
    }
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
// Utility function
