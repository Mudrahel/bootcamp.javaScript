function add(x,y) //normal function
{
    return x+y;
}

console.log("addition:",add(67,54));
console.log("addition:",add("ddd",54));
var ans =function(x,y) //anonymous function
{
    return x*y;
}

console.log("anoynmous function for multiplication:",ans(5,20));
console.log("anoynmous function for multiplication:",ans("sdad",20));

var div=(x,y) => {return x/y}; //arrow fucntion, similar to lambda

console.log("arrow function for division:",div(100,5));