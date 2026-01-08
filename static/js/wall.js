const pi = 3.14159

function degToRad(degrees) {
    return (degrees*pi)/180
}

export default class Wall {
    static walls = []

    constructor({width=100, height=100, x=200, y=200, rotation=45, color='red'} = {}) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.rotation = rotation
        this.element = document.createElement("div")
        this.element.classList.add("wall")
        this.element.style.width = width+"px"
        this.element.style.height = height+"px"
        this.element.style.left = x+"px"
        this.element.style.top = y+"px"
        this.element.style.backgroundColor = color
        this.element.style.rotate = -rotation + "deg"
        Wall.walls.push(this)
    }

    getNormalVector() {
        return [Math.cos(degToRad(this.rotation)), Math.sin(degToRad(this.rotation))]
    }
}

// console.log(getNormalVector())