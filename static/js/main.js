import Ball from "./ball.js"
import Wall from "./wall.js"

// Global vars
let running = 0
let width = document.body.getBoundingClientRect().width
let height = document.body.getBoundingClientRect().height

// Global funcs
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// HTML Elements
const play_btn = document.querySelector(".play_btn")
play_btn.addEventListener("click", (e) => {
    running = !running
    if (running) {
        run()
        play_btn.innerText = "Pause"
    }
    else {
        play_btn.innerText = "Play"
    }
})

const side_panel = document.querySelector(".side_panel")
const side_panel_btn = document.querySelector(".side_panel_btn")
side_panel_btn.addEventListener("click", (e) => {
    side_panel.classList.toggle("hide")
})

let mousepos = [0, 0]
document.addEventListener('mousemove', (e) => {
    mousepos = [e.clientX, e.clientY]
})

document.addEventListener('mousedown', (e) => {
    console.log(mousepos)
})

const view = document.querySelector(".view")

// Main
let b1 = new Ball({radius:100, x_vel:2})
let w1 = new Wall({})

for (const corner of w1.getCorners()) {
    let point = document.createElement("div")
    point.classList.add("point")
    point.style.left = corner[0]+"px"
    point.style.top = corner[1]+"px"
    view.appendChild(point)
}

for (const ball of Ball.balls) { // adds balls to page
    view.appendChild(ball.element)
}
for (const wall of Wall.walls) { // adds walls to page
    view.appendChild(wall.element)
}

async function run() { // runs code mainloop
    while (running) {
        for (const ball of Ball.balls) {
            width = document.body.getBoundingClientRect().width
            height = document.body.getBoundingClientRect().height
            ball.update_pos()
            ball.update_html()
            ball.handle_bounce(width, height)
        }
        await sleep(1000/60) // 60fps
    }
}

