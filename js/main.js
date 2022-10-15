const hamburgerMenu = document.querySelector('.hamburger--Menu')
hamburgerMenu.addEventListener('click', showMenu)

const mainContent = document.querySelector('.mainContent')

const logoContainer = document.querySelector('.logo_container')

const menuMobile = document.querySelector('.menu--mobile')

function showMenu() {
    hamburgerMenu.classList.toggle('open')
    menuMobile.classList.toggle('hidden')
    mainContent.classList.toggle('hidden')
    
}


const firstMenuRoll = document.querySelector('.firstOfFour')
firstMenuRoll.addEventListener('click', showHiddenList1)
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')

function showHiddenList1 () {
    content1.classList.toggle('hidden')
    console.log('Uncover')
}

const secondMenuRoll = document.querySelector('.secondOfFour')
secondMenuRoll.addEventListener('click', showHiddenList2)

function showHiddenList2 () {
    content2.classList.toggle('hidden')
    console.log('Uncover')
}

const proposalInfo = document.querySelector('.proposal--info')

proposalArray = document.querySelectorAll('.proposalList--option')
proposalArray.forEach((el) => {
    el.addEventListener('click', () => {
        el.childNodes[3].classList.toggle('hidden')
    })
})
