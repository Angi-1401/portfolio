// Toggle navbar in mobile view

const menuButton = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});