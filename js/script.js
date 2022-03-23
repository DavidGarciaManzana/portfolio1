const HAMBURGER_BUTTON = document.getElementById("hamburger-button")
const MENU_OPENED = document.getElementById("menu")
const showMenu = () => {
    HAMBURGER_BUTTON.classList.toggle("button-clicked")
    MENU_OPENED.classList.toggle("menu-opened")
}
HAMBURGER_BUTTON.addEventListener("click", showMenu)