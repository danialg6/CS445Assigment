function Car(name:string):void { 
	this.name = name; 
	this.acceleration = 0; 
	this.honk = function():void { 
		console.log(` ${this.name} is saying: Toooooooooot!`); 
	}; 
	this.accelerate = function(speed:number) { 
		this.acceleration = this.acceleration + speed; 
	} 
} 
let car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60