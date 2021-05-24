
    class bankAccount {
        money:number=2000;
	deposit(value:number):void { 
		this.money += value; 
    }
};
class myself extends bankAccount {
    name:string="Assad";
    hoobies:string[]= ["Violin", "Cooking"] ;
} 
let m=new myself();
m.deposit(3000);
console.log(m);