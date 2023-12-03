const navigation = function () {
  const icon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".main-header_container");
  icon.classList.toggle("xcross");
  menu.classList.toggle("mover");
  document.body.classList.toggle("no-scroll");
};

const openMenu = function () {
  const navLinks = document.querySelectorAll(
    ".main-header_container_nav-list-items"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", navigation);
  });
  document.querySelector(".menu-icon").addEventListener("click", navigation);
};

openMenu();
