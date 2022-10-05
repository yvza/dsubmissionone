'use strict';

document.getElementById('year').innerHTML = new Date().getFullYear()

let hamburgerMenu = document.getElementsByClassName('list-wrapper')[0]
hamburgerMenu.addEventListener('click', function() {
    window.scrollTo(0, 0)
    let grabMenu = document.getElementsByClassName('overlay-menu')[0]
    let grabBody = document.getElementsByTagName('body')[0]
    grabMenu.style.visibility = 'visible'
    grabBody.style.overflowY = 'hidden'
})

let closeMenu = document.getElementsByClassName('bi bi-x')[0]
closeMenu.addEventListener('click', function() {
    window.scrollTo(0, 0)
    let grabMenu = document.getElementsByClassName('overlay-menu')[0]
    let grabBody = document.getElementsByTagName('body')[0]
    grabMenu.style.visibility = 'hidden'
    grabBody.style.overflowY = 'scroll'
})