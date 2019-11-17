const menuItems = document.querySelectorAll(".menuItem");
const menuSvg = document.querySelector(".menuSvg");

function moveMenu(element) {
  const offsetSvgMenu = -(
    element.offsetParent.offsetWidth / 2 -
    (element.offsetLeft + element.clientWidth / 2)
  );

  menuSvg.setAttribute(
    "style",
    `transform: translate3d(${offsetSvgMenu}px, 0, 0);`
  );
}

function ativaPagina() {
  moveMenu(this);

  [...menuItems].map(menuItem => menuItem.classList.remove("isActive"));
  this.classList.add("isActive");
}

[...menuItems].map(menuItem => {
  menuItem.addEventListener("click", ativaPagina, false);
});
