//--------------------------------HEADER BUTTONS

let user = document.getElementById("user")
let mark = document.getElementById("mark")
let arrow = document.getElementById("arrow")


let showUserMeme = (x) => {
    let exist = document.getElementById("modal-meme")
    if (exist === null) {
        let modalMeme = document.createElement("div")
        modalMeme.classList.add("modal-meme")
        modalMeme.setAttribute("id", "modal-meme")
        if (x === "a") {
            modalMeme.innerHTML = `<img src="media/videos/sully.gif">`
        }
        if (x === "b"){
            modalMeme.innerHTML = `<img src="media/images/po.jpg">`
            modalMeme.classList.add("po")
        }
        if(x === "c") {
            modalMeme.innerHTML = `<video src="media/videos/empty.mp4" autoplay ></video>`
            modalMeme.classList.add("empty")
        }


        document.body.appendChild(modalMeme)
    } else {
        exist.remove()
    }
}
user.addEventListener("click", () => {
    showUserMeme("a")
});
mark.addEventListener("click", () => {
    showUserMeme("b")
});
arrow.addEventListener("click", () => {
    showUserMeme("c")
});


let hamburgerButton = document.getElementById("hamburger-button")
let secondHeader = document.getElementById("unreal-games")
let openMenu = (e) => {
    e.preventDefault()
    let menu = document.createElement("div")
    menu.classList.add("menu")
    secondHeader.insertAdjacentElement("beforebegin", menu)
    document.body.classList.add("stop-scroll")

    let menuHeader = document.createElement("div")
    menuHeader.classList.add("menu-header")
    menuHeader.innerHTML = `<p class="title">Báaxal Games</p>`
    menu.appendChild(menuHeader)

    let closeButton = document.createElement("button")
    closeButton.classList.add("menu-close-button")
    menuHeader.appendChild(closeButton)
    let closeMenu = () => {
        menu.remove()
        document.body.classList.remove("stop-scroll")
    }
    closeButton.addEventListener("click", closeMenu)

    let moreExperiences = document.createElement("div")
    moreExperiences.classList.add("more-exp")
    moreExperiences.innerHTML = `
<div class="faqs-container">

<details class="faqs">
<summary class="faq-item">Games<div class="down"></div></summary>
<p>Mars-Rover</p>
</details>

<details class="faqs">
<summary class="faq-item">More experiences<div class="down"></div></summary>
<p>Portfolio</p>
</details>

<details class="faqs">
<summary class="faq-item">About<div class="down"></div></summary>
<p><a href="https://davidgarxa.com" target="_blank">Davidgarxa.com</a></p>
</details>

<details class="faqs">
<summary class="faq-item">Commitments<div class="down"></div></summary>
<p>Build wonderful apps</p>
<p>Create a great user experience (UX)</p>
<p>Create a great user interface (UI)</p>
</details>

<details class="faqs">
<summary class="faq-item">Resources<div class="down"></div></summary>
<p>Javascript</p>
</details>


</div>
    `
    menu.appendChild(moreExperiences)
}
hamburgerButton.addEventListener("click", openMenu)

let marsGame = document.getElementById("mars-rover")
let openGame = (e) => {
//     e.preventDefault()
//     let workingOnIt = document.createElement("div")
//     workingOnIt.classList.add("working-on-it")
//     workingOnIt.innerHTML = `
//     <a class="hamburger-button white-version" id="close-working-on-it" href="#" aria-label="Hamburger button">
//      <div class="cross"></div>
//     </a>
// `
//     document.body.appendChild(workingOnIt)
//
//     let workInProgress = document.createElement("div")
//     workInProgress.classList.add("work-in-progress")
//     workingOnIt.appendChild(workInProgress)
//
//     let closeModalWorikingOnIt = document.getElementById("close-working-on-it")
//     closeModalWoriking = () => {
//         workingOnIt.remove()
//         document.body.classList.remove("stop-scroll")
//     }
//     closeModalWorikingOnIt.addEventListener("click", closeModalWoriking)
//     document.body.classList.add("stop-scroll")
    window.open("game.html")
}
marsGame.addEventListener("click", openGame)