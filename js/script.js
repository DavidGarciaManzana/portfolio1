onblur = function () {
    document.title = ' 😓 Are you leaving? 💔';
}
onfocus = function () {
    document.title = 'Brian David';
}

// ------------------------------------------------------------------------SCROLL----------------------------------------------------------------------------------

let totalHeight = document.documentElement.scrollHeight;
let viewportHeight = window.innerHeight
let scrollHeightPercentage = (totalHeight - viewportHeight) / 100;
let percentageScroll = 0;

let upButton = document.getElementById("up-button")

let scrolling = () => {
    percentageScroll = Math.round(scrollY / scrollHeightPercentage)
    if (percentageScroll > 4) {
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
        top: top, behavior: 'smooth'
    });
}
UP_BUTTON.addEventListener("click", up)


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
    ["../media/images/portfolio-web.webp", "../media/images/portfolio-mobile.webp", "../media/images/portfolio-light.webp", "Web", "Portfolio", "01/04/2022", "https://davidgarxa.com", "HTML, CSS(SASS), Flexbox, Grid, Animations, RWD & JS", "My personal portfolio where I show all my projects and what technologies I like to implement to them."],
    ["../media/images/homer.webp", "../media/images/homer-mobile.webp", "../media/images/homer-light.webp", "Exercise", "Homer", "17/11/2021", "https://davidgarxa.com/homer", "HTML & CSS", "Draw of homer using HTML & CSS"],
    ["../media/images/dmm-web.webp", "../media/images/dmm-mobile.webp", "../media/images/dmm-light.webp", "Web", "Drilling Mud Mex", "17/02/2022", "https://davidgarxa.com/drilling-mud-mex/", "HTML, CSS, Flexbox, Animations & JS", "Petroleum Engineering web app that accurately describe the addition of weight material to clay/water muds."],
    ["../media/images/profile-web.webp", "../media/images/profile-mobile.webp", "../media/images/profile-light.webp", "Exercise", "Profile Card", "02/09/2021", "https://davidgarxa.com/profile-card", "HTML & CSS", "A profile card made with HTML & CSS"],

]

// filter button for finding projects
let filterAll = document.getElementById("gallery-filter-all")
let filterWeb = document.getElementById("gallery-filter-web")
let filterExercises = document.getElementById("gallery-filter-exercises")

// Projects with different information
projects.forEach(function (project, index) {
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
        buttonCloseProjectDetails.innerHTML = `
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
        projectDetailsTitle.innerHTML = `
                <div class="responsive-gallery__title">
                    <h1>Portfolio Details</h1>
                    <h2>${project[4]}</h2>
                </div>
                `
        projectDetails.appendChild(projectDetailsTitle)

        let prueba = document.createElement("div")
        prueba.classList.add("prueba")
        projectDetails.appendChild(prueba)

        let projectDetailsImageContainer = document.createElement("div")
        projectDetailsImageContainer.classList.add("responsive-gallery__image-container")
        prueba.appendChild(projectDetailsImageContainer)


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
        prueba.appendChild(projectDetailsInfoContainer)

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
        projectDetailsUrl.innerHTML = `<strong>Url: </strong><a target="_blank" href="${project[6]}">${project[6]}</a>`
        projectDetailsInfoContainer.appendChild(projectDetailsUrl)

        let projectDetailsTechnologies = document.createElement("p")
        projectDetailsTechnologies.innerHTML = `<p><strong><span class="responsive-gallery__tech">Technologies used: </span></strong>${project[7]}</p>`
        projectDetailsInfoContainer.appendChild(projectDetailsTechnologies)


        let projectDetailsDescriptionContainer = document.createElement("div")
        projectDetailsDescriptionContainer.classList.add("responsive-gallery__details-description-container")
        projectDetails.appendChild(projectDetailsDescriptionContainer)

        let projectDetailsDescription = document.createElement("p")
        projectDetailsDescription.innerHTML = `<h1>Description: </h1> <p>${project[8]}</p>`
        projectDetailsDescriptionContainer.appendChild(projectDetailsDescription)

        let projectDetailsFooter = document.createElement("footer")
        projectDetailsFooter.classList.add("responsive-gallery__details-footer")
        projectDetailsFooter.innerText = `© Copyright davidgarxa.com`
        projectDetails.appendChild(projectDetailsFooter)


    }
    projectIcon.addEventListener("click", displayProjectDetails)


})

//------------------------------------------------------------

let aboutImage = document.getElementById("about__image")
let occupation = document.getElementById("occupation")
let threeDCube = document.getElementById("threed-cube")
let sumaryAndEducation = document.getElementById("sumary-and-education")
let profesionalExperience = document.getElementById("resume__experience")
let galleryFilter = document.getElementById("gallery__filter")
let galleryItems = Array.from(document.querySelectorAll(".responsive-gallery__item"))
let diagramHead = document.getElementById("diagram-head")
let headText = document.getElementById("head-text")
let diagramSecond = document.getElementById("diagram-second")
let secondText = document.getElementById("second-paragraph")
let diagramThird = document.getElementById("diagram-third")
let thirdText = document.getElementById("third-paragraph")
let diagramFourth = document.getElementById("diagram-fourth")
let fourthText = document.getElementById("fourth-paragraph")
let diagramFifth = document.getElementById("diagram-fifth")
let fifthText = document.getElementById("fifth-paragraph")
let diagramSixth = document.getElementById("diagram-sixth")
let sixthText = document.getElementById("sixth-paragraph")

let headSlash = document.getElementById("head-slash")
let secondSlash = document.getElementById("second-slash")
let thirdSlash = document.getElementById("third-slash")
let fourthSlash = document.getElementById("fourth-slash")
let fifthSlash = document.getElementById("fifth-slash")

let emailMe = document.getElementById("email-me")
let callMe = document.getElementById("call-me")
let messageMe = document.getElementById("message-me")

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight));
};

let scrolling2 = () => {
    if (elementInView(aboutImage)) {
        aboutImage.classList.add("animated")
    }
    if (elementInView(occupation)) {
        occupation.classList.add("animated")
    }
    if (elementInView(threeDCube)) {
        threeDCube.classList.add("animated")
    }
    if (elementInView(sumaryAndEducation)) {
        sumaryAndEducation.classList.add("animated")
    }
    if (elementInView(profesionalExperience)) {
        profesionalExperience.classList.add("animated")
    }
    if (elementInView(galleryFilter)) {
        galleryFilter.classList.add("animated")
        galleryItems.forEach(item => item.classList.add("animated"))
    }
    if (elementInView(diagramHead)) {
        diagramHead.classList.add("animated")
    }
    let chain = () => {
        diagramSecond.classList.add("animated")
        headText.classList.add("animated")
        let chain2 = () => {
            diagramThird.classList.add("animated")
            secondText.classList.add("animated")
            let chain3 = () => {
                diagramFourth.classList.add("animated")
                thirdText.classList.add("animated")
                let chain4 = () => {
                    diagramFifth.classList.add("animated")
                    fourthText.classList.add("animated")
                    let chain5 = () => {
                        diagramSixth.classList.add("animated")
                        fifthText.classList.add("animated")
                        let chain6 = () => {
                            sixthText.classList.add("animated")
                            let chain7 = () => {
                                headSlash.classList.add("animated")
                                let chain8 = () => {
                                    secondSlash.classList.add("animated")
                                    let chain9 = () => {
                                        thirdSlash.classList.add("animated")
                                        let chain10 = () => {
                                            fourthSlash.classList.add("animated")
                                            let chain11 = () => {
                                                fifthSlash.classList.add("animated")
                                            }
                                            fourthSlash.addEventListener("animationend", chain11)
                                        }
                                        thirdSlash.addEventListener("animationend", chain10)
                                    }
                                    secondSlash.addEventListener("animationend", chain9)
                                }
                                headSlash.addEventListener("animationend", chain8)
                            }
                            sixthText.addEventListener("transitionend", chain7)
                        }
                        diagramSixth.addEventListener("animationend", chain6)
                    }
                    diagramFifth.addEventListener("animationend", chain5)
                }
                diagramFourth.addEventListener("animationend", chain4)
            }
            diagramThird.addEventListener("animationend", chain3)
        }
        diagramSecond.addEventListener("animationend", chain2)
    }
    diagramHead.addEventListener("animationend", chain)
    if (elementInView(emailMe)) {
        emailMe.classList.add("animated")
    }
    let contactChain1 = () => {
        callMe.classList.add("animated")
        let contactChain2 = () => {
            messageMe.classList.add("animated")
        }
        callMe.addEventListener("transitionend", contactChain2)
    }
    emailMe.addEventListener("transitionend", contactChain1)
}


addEventListener("scroll", scrolling2)

