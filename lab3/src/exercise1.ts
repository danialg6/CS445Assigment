function University(name:string, dept:string) { 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year:number) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
let miu=new University("MIU", "Computer Science"); 
miu.graduation(2019);