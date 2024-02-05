document.getElementById('menu-mobile').addEventListener('click', openMenu);
document.addEventListener('click', (e) => {
  if (e.target.matches('.menu__item a')) {
    closeMenu();
  }
});

const menuItems = document.getElementById('menu-items');
const backMenu = document.getElementById('menu-back');
backMenu?.addEventListener('click', closeMenu);

function openMenu() {
  menuItems.style.right = '0';
  backMenu.style.display = 'block';
}

function closeMenu() {
  menuItems.style.right = '-100%';
  backMenu.style.display = 'none';
}
