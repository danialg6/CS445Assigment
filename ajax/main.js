let ourRequest=new XMLHttpRequest();
ourRequest.use.header({"Access-Control-Allow-Origin": "*"});
   // next();
  //})
//   $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
ourRequest.open('GET','https://github.com/danialg6/CS445Assigment/blob/master/ajax/refresh.json');
ourRequest.onload=function(){
   // console.log(ourRequest.responseText)
    let ourData=JSON.parse(ourRequest.responseText);
    console.log(ourData.results[0]);
};
ourRequest.send();
 