export default class Ball {
    static balls = []

    constructor({radius=5, gravity=2, y_acc=1, x_acc=0,  x_vel=2, y_vel=0, x=0, y=0, color="red"} = {}) {
        this.radius = radius
        this.gravity = gravity
        this.x_acc = x_acc
        this.y_acc = y_acc
        this.x_vel = x_vel
        this.y_vel = y_vel
        this.x = x
        this.y = y
        this.element = document.createElement('div')
        this.element.classList.add('ball')
        this.element.style.width = radius*2+"px"
        this.element.style.height = radius*2+"px"
        this.element.style.left = x-radius+"px"
        this.element.style.top = y-radius+"px"
        this.element.style.backgroundColor = color
        Ball.balls.push(this)

    }
    update_pos() {
        this.x_vel += this.x_acc
        this.y_vel += this.y_acc
        this.x += this.x_vel
        this.y += this.y_vel
    }
    update_html() {
        this.element.style.left = this.x+"px"
        this.element.style.top = this.y+"px"
    }
    handle_bounce() {
        width = document.body.getBoundingClientRect().width
        height = document.body.getBoundingClientRect().height
        if (this.x<0) {
            this.x = 0
            this.x_vel = -this.x_vel
        }
        if (this.x>width ) {
            this.x = width
            this.x_vel = -this.x_vel
        }
        if (this.y>height ) {
            this.y = height
            this.y_vel = -this.y_vel
        }
        if (this.y<0) {
            this.y = 0
            this.y_vel = -this.y_vel
        }
    }
}