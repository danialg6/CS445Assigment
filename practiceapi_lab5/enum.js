var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var c;
c = Color.RED;
console.log(c);
var user;
user = [1, "John", true, 20, "Faculty"];
var emp = {
    empCode: 1001,
    empName: 'John',
    setEmpName: function (name) {
        this.empName = name;
    },
    getEmpName: function () {
        return this.empName;
    }
};
emp.setEmpName('Edward');
console.log(emp.getEmpName());
