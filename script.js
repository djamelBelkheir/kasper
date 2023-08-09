let menuBtn = document.querySelector('header .menuBtn')
let navBar = document.querySelector('header ul')

menuBtn.addEventListener('click', ()=> {
    navBar.classList.toggle('clicked')
})