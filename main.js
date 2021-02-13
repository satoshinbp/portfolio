const menuList = document.getElementById('menu-list')
const menuOpenButton = document.getElementById('menu-open-button')
const menuCloseButton = document.getElementById('menu-close-button')
const overlay = document.getElementById('overlay')
let menuItems = document.getElementsByClassName('menu-item')

const openMenu = () => {
  menuList.classList.add('shown-menu')
  menuOpenButton.classList.add('hidden-button')
  menuCloseButton.classList.remove('hidden-button')
  overlay.classList.add('overlay')
}

const closeMenu = () => {
  menuList.classList.remove('shown-menu')
  menuOpenButton.classList.remove('hidden-button')
  menuCloseButton.classList.add('hidden-button')
  overlay.classList.remove('overlay')
}

menuOpenButton.addEventListener('click', openMenu)
menuCloseButton.addEventListener('click', closeMenu)
menuItems = Array.from(menuItems)
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMenu)
})

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth >= 600) {
    closeMenu()
  }
})
