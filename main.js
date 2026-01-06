import Ball from "./ball.js"

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

for (const ball of Ball.balls) {
    document.body.appendChild(ball.element)
}

async function run() {
    while (running) {
        for (const ball of Ball.balls) {
            ball.update_pos()
            ball.update_html()
            ball.handle_bounce()
        }
        await sleep(1000/60) // 1 fps
    }
}



console.log(width, height)
