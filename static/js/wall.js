export default class Wall {
    static walls = []

    constructor({width=100, height=100, x=0, y=0, rotation=45, color='red'} = {}) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.element = document.createElement("div")
        this.element.classList.add("wall")
        this.element.style.width = width+"px"
        this.element.style.height = height+"px"
        this.element.style.left = x+"px"
        this.element.style.top = y+"px"
        this.element.style.backgroundColor = color
        this.element.style.rotate = rotation + "deg"
        Wall.walls.push(this)
    }
}