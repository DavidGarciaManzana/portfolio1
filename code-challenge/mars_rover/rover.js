let roverPosition = [0, 0]
let roverDirection = "N"

let F = 1
let B = 1

let rover = document.getElementById("rover")


let moveSound = () => {
    let audio = new Audio("media/sounds/sound.wav")
    audio.play()
}

let rotateSound =()=>{
    let audio = new Audio("media/sounds/rotate.wav")
    audio.play()
}

let marsIsASphere = (position) => {
    if (position[0] === -1) {
        roverPosition[0] = 10
    }
    if (position[1] === -1) {
        roverPosition[1] = 10
    }
    if (position[0] === 11) {
        roverPosition[0] = 0
    }
    if (position[1] === 11) {
        roverPosition[1] = 0
    }
}


//---------------------------------------MOVE THE ROVER
let up = document.getElementById("up")
let down = document.getElementById("down")

let move = (direction, move) => {
    let roverPositionHeigth = rover.style.bottom
    let roverPositionMoveH = roverPositionHeigth.slice(0, -3)

    let roverPositionWidth = rover.style.left
    let roverPositionMoveW = roverPositionWidth.slice(0, -3)
    if (direction === "N") {
        if (move === "F") {
            moveSound()
            roverPosition[1] += F
            rover.style.bottom = Number(roverPositionMoveH) + 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveH > 14) {
                rover.style.bottom = 0.5 + "rem"
            }
            return roverPosition
        }
        if (move === "B") {
            moveSound()
            roverPosition[1] -= B
            rover.style.bottom = Number(roverPositionMoveH) - 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveH < 1) {
                rover.style.bottom = 15.5 + "rem"
            }
            return roverPosition
        }
    }
    if (direction === "S") {
        if (move === "F") {
            moveSound()
            roverPosition[1] -= F
            rover.style.bottom = Number(roverPositionMoveH) - 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveH < 1) {
                rover.style.bottom = 15.5 + "rem"
            }
            return roverPosition
        }
        if (move === "B") {
            moveSound()
            roverPosition[1] += B
            rover.style.bottom = Number(roverPositionMoveH) + 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveH > 14) {
                rover.style.bottom = 0.5 + "rem"
            }
            return roverPosition
        }
    }
    if (direction === "E") {
        if (move === "F") {
            moveSound()
            roverPosition[0] += F
            rover.style.left = Number(roverPositionMoveW) + 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveW > 13) {
                rover.style.left = -0.7 + "rem"
            }
            return roverPosition
        }
        if (move === "B") {
            moveSound()
            roverPosition[0] -= B
            rover.style.left = Number(roverPositionMoveW) - 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveW < 0) {
                rover.style.left = 14.3 + "rem"
            }
            return roverPosition
        }
    }
    if (direction === "W") {
        if (move === "F") {
            moveSound()
            roverPosition[0] -= F
            rover.style.left = Number(roverPositionMoveW) - 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveW < 0) {
                rover.style.left = 14.3 + "rem"
            }
            return roverPosition
        }
        if (move === "B") {
            moveSound()
            roverPosition[0] += B
            rover.style.left = Number(roverPositionMoveW) + 1.5 + "rem";
            marsIsASphere(roverPosition)
            if (roverPositionMoveW > 13) {
                rover.style.left = -0.7 + "rem"
            }
            return roverPosition
        }
    }
}
up.addEventListener("click", () => {
    move(roverDirection, "F")
})
down.addEventListener("click", () => {
    move(roverDirection, "B")
})

//----------------------------------ROTATE THE ROVER

let left = document.getElementById("left");
let right = document.getElementById("right");

let rotate = (actualDirection = "N", rotateDirection = R) => {
    if (actualDirection === "N") {
        if (rotateDirection === "R") {
            rotateSound()
            rover.style.transform = "rotate(90deg)";
            return roverDirection = "E"
        }
        if (rotateDirection === "L") {
            rotateSound()
            rover.style.transform = "rotate(-90deg)";
            return roverDirection = "W"
        }
    }
    if (actualDirection === "E") {
        if (rotateDirection === "R") {
            rotateSound()
            rover.style.transform = "rotate(180deg)";
            return roverDirection = "S"
        }
        if (rotateDirection === "L") {
            rotateSound()
            rover.style.transform = "rotate(0deg)";
            return roverDirection = "N"
        }
    }
    if (actualDirection === "S") {
        if (rotateDirection === "R") {
            rotateSound()
            rover.style.transform = "rotate(-90deg)";
            return roverDirection = "W"
        }
        if (rotateDirection === "L") {
            rotateSound()
            rover.style.transform = "rotate(90deg)";
            return roverDirection = "E"
        }
    }
    if (actualDirection === "W") {
        if (rotateDirection === "R") {
            rotateSound()
            rover.style.transform = "rotate(0deg)";
            return roverDirection = "N"
        }
        if (rotateDirection === "L") {
            rotateSound()
            rover.style.transform = "rotate(180deg)";
            return roverDirection = "S"
        }
    }
}
right.addEventListener("click", () => {
    rotate(roverDirection, "R")
})
left.addEventListener("click", () => {
    rotate(roverDirection, "L")
})
//---------------------------WHERES THE ROVER

let mayday = document.getElementById("show-data")
let showData =()=> {
    alert(`Rover position: ${roverPosition}`)
    alert(`Rover direction: ${roverDirection}`)
}
mayday.addEventListener("click",showData)