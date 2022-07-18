class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length)
    {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle)
    {

        let left = this.topLeftXPos;
        let right = this.topLeftXPos + this.width;
        let up = this.topLeftYPos;
        let down = this.topLeftYPos - this.length;
    
        let leftR = otherRectangle.topLeftXPos;
        let rightR = otherRectangle.topLeftXPos + otherRectangle.width;
        let upR = otherRectangle.topLeftYPos;
        let downR = otherRectangle.topLeftYPos - otherRectangle.length;
    
        if((leftR >= left && leftR <= right) || (rightR >= left && rightR <= right))
        {
    
            if((upR >= down && upR <= up) || (downR >= down && downR <= up))
            {
                return true;
            }
        }
        return false;
    }
}
let a = new Rectangle(0, 0, 2, 1);
let b = new Rectangle(1, 0, 2, 1);
let c = new Rectangle(2, 0, 2, 1);
let d = new Rectangle(3, 0, 2, 1);

console.log(a.collides(b));
console.log(a.collides(c));
console.log(a.collides(d)); 