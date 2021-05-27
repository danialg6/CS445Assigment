let promise = new Promise(function(resolve, reject) {
    const random= Math.random();
    console.log('r a n d o m : ', random) ;
    if(random > 0.5) {
    setTimeout(()=> resolve(" d o n e !") , 1000) ;
    } else {
    setTimeout(() => reject(new Error(" W ho o p s ! ") ), 1000) ;
    }
    });