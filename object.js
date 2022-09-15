var a={
    name:'deepti',
    last:'chauhan',
    age:21,
    email:'deeptichauhan20@navgurukul.org',
    favmovie:['khani','serial','song'],
    salary:function(){
        return 25000;
    },
    fullname:function(){
        return this.name + " " + this.last;
    }
    

}
// console.log(a.favmovie[1])
console.log(a.fullname())