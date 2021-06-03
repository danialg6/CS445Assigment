function getRandomImage(){
    url="https://randomuser.me/api/"
    fetch(url)
    .then(function(response){
    return response.json()
})
.then(function(data){
    displayImage(data.message)
})
.catch(function(error) {
    console.log(error)
})
function displayImage(image_url) {
    document.getElementById("image").src=image_url;
}
}
    

      
