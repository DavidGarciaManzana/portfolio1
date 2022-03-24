// hamburger button

const HAMBURGER_BUTTON = document.getElementById("hamburger-button")
const MENU_OPENED = document.getElementById("menu")
const showMenu = () => {
    HAMBURGER_BUTTON.classList.toggle("button-clicked")
    MENU_OPENED.classList.toggle("menu-opened")
}
HAMBURGER_BUTTON.addEventListener("click", showMenu)


// 3d cube

const THREED_CUBE = document.getElementById("threed-cube__cube")
let cssBar = document.getElementById("css__text")
let barCss = document.getElementById("bar__css")
const flexbox = () => {
    cssBar.innerHTML="<span class=\"title\">FLEXBOX</span> <span>80%</span>"
    barCss.classList.add("bar__flexbox")
}
THREED_CUBE.addEventListener("animationend", flexbox)