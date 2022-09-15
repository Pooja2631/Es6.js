// let a=[10,20,30,40,60]
// let newdata=a.map(function(item){
//     return item*2
// })

// console.log(newdata)

let item={
    name:"deepti",
    getName:function(){
        console.log("normal",this)
    },
    getNameArrow:()=>{
        console.log("arrow",this)
    }
}
item.getName();
item.getNameArrow();