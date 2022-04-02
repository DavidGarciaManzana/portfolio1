// ------------------------------------------------------------------------SCROLL----------------------------------------------------------------------------------

let totalHeight = document.documentElement.scrollHeight;
let viewportHeight = document.documentElement.clientHeight;
let scrollHeightPercentage = (totalHeight - viewportHeight) / 100;
let percentageScroll = 0;

let upButton = document.getElementById("up-button")
scrolling = () => {
    percentageScroll = Math.round(scrollY / scrollHeightPercentage)
    if (percentageScroll>4) {
        upButton.classList.add("display")
    } else {
        upButton.classList.remove("display")
    }
}

addEventListener("scroll", scrolling)

// --------------------------------------------------------------HAMBURGER BUTTON & UP BUTTON----------------------------------------
const HAMBURGER_BUTTON = document.getElementById("hamburger-button")
const MENU_OPENED = document.getElementById("menu")
const toggleMenu = (e) => {
    HAMBURGER_BUTTON.classList.toggle("button-clicked")
    MENU_OPENED.classList.toggle("menu-opened")
    document.body.classList.toggle("not-scrolling")
}
let hamburgerAction = (e) => {
    e.preventDefault()
    toggleMenu()
}

HAMBURGER_BUTTON.addEventListener("click", hamburgerAction)

const UP_BUTTON = document.getElementById("up-button")
let up = () => {
    window.scroll({
        top: top,
        behavior: 'smooth'
    });
}
UP_BUTTON.addEventListener("click",up)


// --------------------------------------------------------------NAV BAR--------------------------------------------------
const HOME_BUTTON = document.getElementById("home")
const ABOUT_BUTTON = document.getElementById("about")
const SKILLS_BUTTON = document.getElementById("skills")
const CV_BUTTON = document.getElementById("cv")
const PORTFOLIO_BUTTON = document.getElementById("portfolio")
const CONTACT_BUTTON = document.getElementById("contact")

let takeMeToHome = () => {
    document.body.classList.toggle("not-scrolling")
    setTimeout(function () {
        HAMBURGER_BUTTON.classList.toggle("button-clicked")
        MENU_OPENED.classList.toggle("menu-opened")
        up()
    }, 1)
}

HOME_BUTTON.addEventListener("click", takeMeToHome)
ABOUT_BUTTON.addEventListener("click", toggleMenu)
SKILLS_BUTTON.addEventListener("click", toggleMenu)
CV_BUTTON.addEventListener("click", toggleMenu)
PORTFOLIO_BUTTON.addEventListener("click", toggleMenu)
CONTACT_BUTTON.addEventListener("click", toggleMenu)

// -----------------------------------------------------3D CUBE------------------------------------------------------------

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


// ----------------------------------------------------PORTFOLIO-------------------------------------------------------------

const responsiveGallery = document.getElementById("responsive-gallery")

let projects = [
    ["../media/images/dog.webp", "../media/images/cat.webp", "../media/images/parrot.jpg", "Web", "Portfolio", "01/04/2022", "briandavid.nft", "HTML, CSS(SASS), Flexbox, Grid, Animations, RWD & JS", "My personal portfolio where I show all my projects and what technologies I like to implement to them."],
    ["../media/images/dog.webp", "../media/images/cat.webp", "../media/images/parrot.jpg", "Exercise", "Homer", "17/11/2021", "homer.com", "HTML & CSS", "Draw of homer using HTML & CSS"],
    ["../media/images/cat.webp", "../media/images/dog.webp", "../media/images/parrot.jpg", "Web", "Drilling Mud Mex", "17/02/2022", "davidgarxa.com/drilling-mud-mex/", "HTML, CSS, Flexbox, Animations & JS", "Petroleum Engineering web app that accurately describe the addition of weight material to clay/water muds."],
    ["../media/images/cat.webp", "../media/images/dog.webp", "../media/images/parrot.jpg", "Web", "Drilling Mud Mex", "17/02/2022", "davidgarxa.com/drilling-mud-mex/", "HTML, CSS, Flexbox, Animations & JS", "Petroleum Engineering web app that accurately describe the addition of weight material to clay/water muds."],
    ["../media/images/dog.webp", "../media/images/cat.webp", "../media/images/parrot.jpg", "Exercise", "Homer", "17/11/2021", "homer.com", "HTML & CSS", "Draw of homer using HTML & CSS"],
    ["../media/images/dog.webp", "../media/images/cat.webp", "../media/images/parrot.jpg", "Exercise", "Homer", "17/11/2021", "homer.com", "HTML & CSS", "Draw of homer using HTML & CSS"],
    ["../media/images/cat.webp", "../media/images/dog.webp", "../media/images/parrot.jpg", "Web", "Drilling Mud Mex", "17/02/2022", "davidgarxa.com/drilling-mud-mex/", "HTML, CSS, Flexbox, Animations & JS", "Petroleum Engineering web app that accurately describe the addition of weight material to clay/water muds."],
    ["../media/images/cat.webp", "../media/images/dog.webp", "../media/images/parrot.jpg", "Exercise", "Profile Card", "02/09/2021", "davidgarxa.com", "HTML & CSS", "A profile card made with HTML & CSS"],

]

// filter button for finding projects
let filterAll = document.getElementById("gallery-filter-all")
let filterWeb = document.getElementById("gallery-filter-web")
let filterExercises = document.getElementById("gallery-filter-exercises")
let filter = ""

// Projects with different information
projects.forEach(
    function (project, index) {
        let projectContainer = document.createElement("div")
        projectContainer.classList.add("responsive-gallery__item")
        responsiveGallery.appendChild(projectContainer)

        let projectImage = document.createElement("img")
        projectImage.classList.add("responsive-gallery__item-image")
        projectImage.setAttribute("alt", project[8])
        projectImage.setAttribute("src", project[0])
        projectContainer.appendChild(projectImage)

        let projectName = document.createElement("div")
        projectName.classList.add("responsive-gallery__item-name")
        projectName.innerHTML = `<p>${project[4]}</p>`
        projectContainer.appendChild(projectName)

        let projectIcon = document.createElement("div")
        projectIcon.classList.add("responsive-gallery__item-icon")
        projectIcon.innerText = "+"
        projectName.appendChild(projectIcon)

        //Put a different name to each "+" button
        projectIcon.setAttribute("id", `responsive-gallery__item-icon-${index}`)


        // all filter button
        let showAllProjects = (e) => {
            e.preventDefault()
            projectContainer.classList.remove("disappear-display")
            projectContainer.classList.remove("disappear-class")
        }
        filterAll.addEventListener("click", showAllProjects)

        // web filter button
        let showWebProjects = (e) => {
            e.preventDefault()
            if (project.includes("Web")) {
                projectContainer.classList.remove("disappear-display")
                projectContainer.classList.remove("disappear-class")
            } else {
                projectContainer.classList.add("disappear-class")
                let dissapear = () => {
                    projectContainer.classList.add("disappear-display")
                }
                setTimeout(dissapear, 1001)
            }
        }

        filterWeb.addEventListener("click", showWebProjects)

        //exercises filter button
        let showExercisesProjects = (e) => {
            e.preventDefault()
            if (project.includes("Exercise")) {
                projectContainer.classList.remove("disappear-display")
                projectContainer.classList.remove("disappear-class")
            } else {
                projectContainer.classList.add("disappear-class")
                let dissapear = () => {
                    projectContainer.classList.add("disappear-display")
                }
                setTimeout(dissapear, 1001)
            }
        }

        filterExercises.addEventListener("click", showExercisesProjects)

        let projectDetailsFather = document.getElementById("responsive-gallery__modal")
        const displayProjectDetails = () => {
            projectDetailsFather.classList.add("display")

            let projectDetails = document.createElement("div")
            projectDetails.classList.add("responsive-gallery__modal-details")
            projectDetailsFather.appendChild(projectDetails)

            document.body.style.overflow = "hidden"

            let buttonCloseProjectDetails = document.createElement("div")
            buttonCloseProjectDetails.innerHTML =
                `
                <div class="responsive-gallery__item-close-icon-first"></div>
                <div class="responsive-gallery__item-close-icon-second"></div>
                `
            buttonCloseProjectDetails.classList.add("responsive-gallery__item-close-icon")
            projectDetails.appendChild(buttonCloseProjectDetails)

            const closeProjectDetails = () => {
                //Here's where the magic happens
                projectDetailsFather.removeChild(projectDetails)
                projectDetailsFather.classList.remove("display")
                document.body.style.overflow = "scroll"
            }
            buttonCloseProjectDetails.addEventListener("click", closeProjectDetails)

            let projectDetailsTitle = document.createElement("p")
            projectDetailsTitle.innerHTML =
                `
                <div class="responsive-gallery__title">
                    <h1>Portfolio Details</h1>
                    <h2>${project[4]}</h2>
                </div>
                `
            projectDetails.appendChild(projectDetailsTitle)


            let projectDetailsImageContainer = document.createElement("div")
            projectDetailsImageContainer.classList.add("responsive-gallery__image-container")
            projectDetails.appendChild(projectDetailsImageContainer)


            let projectDetailsFirstImage = document.createElement("img")
            projectDetailsFirstImage.setAttribute("src", project[0])
            projectDetailsFirstImage.setAttribute("alt", "Website Image")
            projectDetailsFirstImage.classList.add("responsive-gallery__first-image")
            projectDetailsImageContainer.appendChild(projectDetailsFirstImage)

            let projectDetailsSecondImage = document.createElement("img")
            projectDetailsSecondImage.setAttribute("src", project[1])
            projectDetailsSecondImage.setAttribute("alt", "Mobile Image")
            projectDetailsSecondImage.classList.add("responsive-gallery__second-image")
            projectDetailsImageContainer.appendChild(projectDetailsSecondImage)

            let projectDetailsThirdImage = document.createElement("img")
            projectDetailsThirdImage.setAttribute("src", project[2])
            projectDetailsThirdImage.setAttribute("alt", "Lighthouse Image")
            projectDetailsThirdImage.classList.add("responsive-gallery__third-image")
            projectDetailsImageContainer.appendChild(projectDetailsThirdImage)

            //automatic swipe between images
            let swipeProjectImages = () => {
                let swipeRight = () => {
                    projectDetailsImageContainer.scrollTo(250, 0)
                    let swipeRightPlus = () => {
                        projectDetailsImageContainer.scrollTo(500, 0)
                    }
                    setTimeout(swipeRightPlus, 2000);
                }
                setTimeout(swipeRight, 2000);
            }
            swipeProjectImages()

            let projectDetailsInfoContainer = document.createElement("div")
            projectDetailsInfoContainer.classList.add("responsive-gallery__details-info-container")
            projectDetails.appendChild(projectDetailsInfoContainer)

            let projectDetailsInfo = document.createElement("h1")
            projectDetailsInfo.innerText = "Project information"
            projectDetailsInfoContainer.appendChild(projectDetailsInfo)

            let projectDetailsCategory = document.createElement("p")
            projectDetailsCategory.innerHTML = `<p><strong>Category: </strong>${project[3]}</p>`
            projectDetailsInfoContainer.appendChild(projectDetailsCategory)

            let projectDetailsDate = document.createElement("p")
            projectDetailsDate.innerHTML = `<p><strong>Released date: </strong>${project[5]}</p>`
            projectDetailsInfoContainer.appendChild(projectDetailsDate)

            let projectDetailsUrl = document.createElement("p")
            projectDetailsUrl.innerHTML = `<strong>Url: </strong><a href="${project[6]}">${project[6]}</a>`
            projectDetailsInfoContainer.appendChild(projectDetailsUrl)

            let projectDetailsTechnologies = document.createElement("p")
            projectDetailsTechnologies.innerHTML = `<p><strong><span>Technologies used: </span></strong>${project[7]}</p>`
            projectDetailsInfoContainer.appendChild(projectDetailsTechnologies)


            let projectDetailsDescriptionContainer = document.createElement("div")
            projectDetailsDescriptionContainer.classList.add("responsive-gallery__details-description-container")
            projectDetails.appendChild(projectDetailsDescriptionContainer)

            let projectDetailsDescription = document.createElement("p")
            projectDetailsDescription.innerHTML = `<h1>Description: </h1> <p>${project[8]}</p>`
            projectDetailsDescriptionContainer.appendChild(projectDetailsDescription)

            let projectDetailsFooter = document.createElement("footer")
            projectDetailsFooter.classList.add("responsive-gallery__details-footer")
            projectDetailsFooter.innerText = `© Copyright briandavid.nft`
            projectDetails.appendChild(projectDetailsFooter)


        }
        projectIcon.addEventListener("click", displayProjectDetails)


    }
)



