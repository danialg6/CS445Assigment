function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
}
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
