enum color {RED,GREEEN,BLUE};
let c1:color=color.GREEEN;
console.log(c1);

class color2 {
    index;
    static RED=new color2(0);
    static GREEN=new color2(1);
    static BLUE=new color2(2);
    constructor(index:number){
        this.index=index;
    }
}
console.log(color2.RED);