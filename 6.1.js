class Circle {
    constructor(xPos, yPos, radius)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset)
    {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return this.radius * this.radius * Math.PI;
    }
}
let c = new Circle(5, 7, 2);
c.move(1, 0);
console.log(`x: ${c.xPos}\ny: ${c.yPos}\nSurface: ${c.surface}`);