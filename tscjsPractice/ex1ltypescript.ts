function University(name:string, dept:string) { 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
let miu =new Univeristy("MIU", "Computer Science"); 
miu.graduation(2019);