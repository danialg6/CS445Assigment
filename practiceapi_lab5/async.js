console.log(0);
setTimeout(function() {
console.log(1)
}, 2000);
setTimeout(function() {
console.log(2)
}, 0); //Zero delay doesn't actually mean the call back will fireoff after zero milliseconds.
setTimeout(function() {
console.log(3)
}); //default delay time is 0
for(let i=1;i<20;i++){
    console.log(i);
}
console.log(4);