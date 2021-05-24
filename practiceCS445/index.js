var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEEN"] = 1] = "GREEEN";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
;
var c1 = color.GREEEN;
console.log(c1);
var color2 = /** @class */ (function () {
    function color2(index) {
        this.index = index;
    }
    color2.RED = new color2(0);
    color2.GREEN = new color2(1);
    color2.BLUE = new color2(2);
    return color2;
}());
console.log(color2.RED);
