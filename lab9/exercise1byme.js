const shoppingCart=(function(){
    let basket=[];
    return{
        upsertItem:function(item){
            for(let i=0;i<basket.length;i++){
                if(basket[i].id!==item.id){
               basket.push(item);
                }if(basket[i].id===item.id){
                    let temp=basket[i];
                    basket[i]=item;
                    item=temp;
                }
            }
            item=null;
            return basket;
            },
            getItemsCount:function(){
                return basket.length;
            },
            getTotalPrice:function(){
                return basket.reduce(sum,e=>(sum+e.price),0)
            },
            removeItemById:function(id){
                for(let i=0;i<basket.length;i++){
                    if(basket[i].id=id){
                        basket[i]=baske[i+1]
                    }
                }
                return basket;
            }
    }
})()