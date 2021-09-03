document.getElementById('burger-btn').onclick = function () {
  open();
};
function open() {
  document.getElementById('menu').classList.toggle('navbar-nav--is-active');
}
