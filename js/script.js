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
let htmlText = document.getElementById("html__text")
let barHtml = document.getElementById("bar__html")
let cssBar = document.getElementById("css__text")
let barCss = document.getElementById("bar__css")
let jsText = document.getElementById("js__text")
let barJs = document.getElementById("bar__js")

// html bar
const htmlBar = () => {
    htmlText.innerHTML = "<span class=\"title\">HTML</span> <span>100%</span>"
    barHtml.classList.add("bar__html")

}
THREED_CUBE.addEventListener("animationend", htmlBar)

// css bar
const css = () => {
    cssBar.innerHTML = "<span class=\"title\">CSS</span> <span>60%</span>"
    barCss.classList.add("bar__css")

    const flexbox = () => {
        setTimeout(function () {
            cssBar.innerHTML = "<span class=\"title\">FLEXBOX</span> <span>80%</span>"
            barCss.classList.add("bar__flexbox")
        }, 500)
        const grid = () => {
            setTimeout(function () {
                cssBar.innerHTML = "<span class=\"title\">GRID</span> <span>100%</span>"
                barCss.classList.add("bar__grid")
            }, 500)
            const sass = () => {
                setTimeout(function () {
                    cssBar.innerHTML = "<span class=\"title\">SASS</span> <span>110%</span>"
                    barCss.classList.add("bar__sass")
                }, 500)
                const animations = () => {
                    setTimeout(function () {
                        cssBar.innerHTML = "<span class=\"title\">ANIMATIONS</span> <span>120%</span>"
                        barCss.classList.add("bar__animations")
                    }, 500)
                    const rwd = () => {
                        setTimeout(function () {
                            cssBar.innerHTML = "<span class=\"title\">RWD</span> <span>130%</span>"
                            barCss.classList.add("bar__rwd")
                        }, 500)
                    }
                    barCss.addEventListener("transitionend", rwd)
                }
                barCss.addEventListener("transitionend", animations)
            }
            barCss.addEventListener("transitionend", sass)
        }
        barCss.addEventListener("transitionend", grid)
    }
    barCss.addEventListener("transitionend", flexbox)
}
THREED_CUBE.addEventListener("animationend", css)

// js bar
const jsBar = () => {
    jsText.innerHTML = "<span class=\"title\">VANILLA JS</span> <span>40%</span>"
    barJs.classList.add("bar__js")
    const domJs = () => {
        setTimeout(function () {
            jsText.innerHTML = "<span class=\"title\">DOM JS</span> <span>60%</span>"
            barJs.classList.add("bar__dom")
        }, 500)
    }
    barJs.addEventListener("transitionend", domJs)

}
THREED_CUBE.addEventListener("animationend", jsBar)