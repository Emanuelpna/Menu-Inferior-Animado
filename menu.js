const menuItems = document.querySelectorAll(".menuItem");

function excluiTodo() {
  [...menuItems].map(menuItem => menuItem.classList.remove("isActive"));
  this.classList.add("isActive");
}

[...menuItems].map(menuItem => {
  menuItem.addEventListener("click", excluiTodo, false);
});
