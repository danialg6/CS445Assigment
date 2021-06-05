window.onload=function(){
    let url='http://www.mapquestapi.com/geocoding/v1/reverse?key=tWbaBBw92lD6YInMlGnx6xwwj8GpGZVO&location=81.1496,-37.3159';
    fetch(url).then(response=>response.json())
    .then(d=>console.log(d.results[0].locations[0].street))

    let user=fetch('http://jsonplaceholder.typicode.com/users')
    .then(data=>data.json()).then(console.log)
}
//locations