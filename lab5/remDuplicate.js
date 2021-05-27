
Array.prototype.removeDuplicatesAsync=function(){
 new Promise((resolve,reject)=>{
      resolve([... new Set(this)]);
  });
  //p.then(res=>)
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);