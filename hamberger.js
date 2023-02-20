const hamburgerIcon = document.querySelector(".hamburger_icon_yogi");
const hamburgerMenuItems = document.querySelector(".navbar_hamburger_menu_items_yogi");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenuItems.classList.toggle("active");
});
