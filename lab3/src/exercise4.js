var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.width = 5;
        this.length = 2;
    }
    //   constructor(width:number,length:number){
    //      super(width,length);
    //   }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}());
var rec = new Rectangle();
console.log(rec.calcSize()); // 10
