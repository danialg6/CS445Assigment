const {fromEvent}=rxjs;

    let node=document.getElementById("search");

    const inputobs=fromEvent(node,'input');
    inputobs.subscribe({
        next:event=>console.log('you typed ${event.target.value}'),
        error:err=>console.log('Ooops ${err}'),
        complete:()=>console.log('complete'),
    })
