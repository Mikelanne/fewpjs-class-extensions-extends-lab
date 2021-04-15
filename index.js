// Your code here

class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }

    get countSides() {
        this.sides = this.sidesArray.length
        return this.sides
    }

    get perimeter() {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        this.sum = this.sidesArray.reduce(reducer)
        return this.sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        this.side1 = this.sidesArray[0]
        this.side2 = this.sidesArray[1]
        this.side3 = this.sidesArray[2]
       if ((this.side1 + this.side2) > this.side3 && (this.side2 + this.side3) > this.side1 && ((this.side3 + this.side1) > this.side2)) {
           return true
       } else {
           return false
       }
    }
}

class Square extends Polygon {
    get isValid() {
        this.side1 = this.sidesArray[0]
        this.side2 = this.sidesArray[1]
        this.side3 = this.sidesArray[2]
        this.side4 = this.sidesArray[3]
        if (this.side1 === this.side2 && this.side2 === this.side3 && this.side3 === this.side4) {
            return true
        } else {
            return false
        }
    }

    get area() {
        let squareArea = (this.sidesArray[0] * this.sidesArray[1])
        return squareArea
    }
}