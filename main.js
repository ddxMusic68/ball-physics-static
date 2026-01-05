class Ball {
    constructor(radius=5, gravity=2, x_vel=0, y_vel=0, x=0, y=0) {
        this.radius = radius
        this.gravity = gravity
        this.x_vel = x_vel
        this.y_vel = y_vel
        this.x = x
        this.y = y
        this.element = document.createElement('div')
        this.element.classList.add('ball')
    }
}
let ball1 = new Ball(radius=10)
console.log(ball1)
document.body.appendChild(ball1.element)