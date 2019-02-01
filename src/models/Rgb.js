export class Rgb {
    constructor(red, green, blue) {
        this.Red = red
        this.Green = green
        this.Blue = blue
    }

    changeColor() {
        this.Red = Math.ceil(Math.random()*255)
        this.Green = Math.ceil(Math.random()*255)
        this.Blue = Math.ceil(Math.random()*255)
    }

    animateColor() { 
        this.Red += Math.ceil(Math.random() * 10)
        this.Red > 255 ? this.Red = 0 : {}

        this.Green += Math.ceil(Math.random() * 10)
        this.Green > 255 ? this.Green = 0 : {}

        this.Blue += Math.ceil(Math.random() * 10)
        this.Blue > 255 ? this.Blue = 0 : {}

    }

    getCssColor() {
        return `rgb(${this.Red}, ${this.Green}, ${this.Blue})`
    }
}
