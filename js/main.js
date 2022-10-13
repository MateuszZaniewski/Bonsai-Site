const hamburgerMenu = document.querySelector('.hamburger--Menu')
hamburgerMenu.addEventListener('click', showMenu)

const logoContainer = document.querySelector('.logo_container')

const menuMobile = document.querySelector('.menu--mobile')

function showMenu() {
    hamburgerMenu.classList.toggle('open')
    menuMobile.classList.toggle('hidden')
    
}
