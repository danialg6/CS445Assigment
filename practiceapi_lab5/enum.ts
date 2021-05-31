enum Color { RED, GREEN, BLUE };
let c: Color;
c = Color.RED;
console.log(c);
let user: [number, string, boolean, number, string];
user = [1, "John", true, 20, "Faculty"];

interface IEmployee {
    empCode: number;
    empName: string;
    setEmpName(name: string): void;
    getEmpName: () => string;
    }

    let emp: IEmployee = {
        empCode: 1001,
        empName: 'John',
        setEmpName: function (name: string): void {
        this.empName = name;
        },
        getEmpName: function () {
        return this.empName;
        }
        }
        emp.setEmpName('Edward');
        console.log(emp.getEmpName());