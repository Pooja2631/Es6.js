function some()
{
    return "Chauhan";
}
function add(a,b="Pooja",c=some()){
    return a + " " + b +" " + c;
}
console.log(add("deepti"))
