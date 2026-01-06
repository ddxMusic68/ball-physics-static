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
        play_btn.innerText = "||"
    }
    else {
        play_btn.innerText = "|>"
    }
})

// Main
new Ball({radius:100, x_vel:2})
new Ball({radius:50, x_acc:3, color:'blue'})
let wall = new Wall({})

for (const ball of Ball.balls) {
    document.body.appendChild(ball.element)
}
for (const wall of Wall.walls) {
    document.body.appendChild(wall.element)
}

async function run() {
    while (running) {
        for (const ball of Ball.balls) {
            width = document.body.getBoundingClientRect().width
            height = document.body.getBoundingClientRect().height
            ball.update_pos()
            ball.update_html()
            ball.handle_bounce(width, height)
        }
        await sleep(1000/60) // 60 fps
    }
}

