
 class bankAccount { 
	money:number= 2000 
	deposit(value:number) { 
		this.money += value; 
	} 
}; 
class myself extends bankAccount { 
	name:string= "Asaad", 
	bankAccount:number= new bankAccount(), 
	hobbies:string= ["Violin", "Cooking"] 
}; 

let a=new myself.bankAccount.deposit(3000); 
console.log(myself);