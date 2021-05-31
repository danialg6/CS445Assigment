// console.log(0);
// setTimeout(function() {
// console.log(1)
// }, 2000);
// setTimeout(function() {
// console.log(2)
// }, 0); //Zero delay doesn't actually mean the call back will fireoff after zero milliseconds.
// setTimeout(function() {
// console.log(3)
// }); //default delay time is 0
// for(let i=1;i<20;i++){
//     console.log(i);
// }
// console.log(4);

let count = 22;
const counter = { 
   count: 0, 
   incrementPeriodically() { 
   let count = 10;
   setInterval(() => { console.log(++this.count); }, 1000); } 
}; 
const test = counter.incrementPeriodically;
test();

