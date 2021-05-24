interface IBaseObject {
    width:number;
	length:number;
//     constructor(width:number=0,length:number=0){
// this.width=width;
// this.length=length;
     //}
}
class Rectangle implements IBaseObject{
       width:number=5;
       length:number=2; 
    //   constructor(width:number,length:number){
    //      super(width,length);
    //   }
     calcSize():number { 
	return this.width * this.length; 
} 
}
let rec=new Rectangle();
console.log(rec.calcSize()); // 10