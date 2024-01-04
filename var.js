var x=100; //<- global scope
console.log("x value",x);

var x=200; //<- no issue
console.log("x value",x);

{
    console.log("x value",x);//200
    
    var x=250; //<- still global scope variable o it goes outside of {}
    console.log("x value",x);
}
console.log("x value",x);//250