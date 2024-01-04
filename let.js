//let can't be re declared
let x =100;
console.log("x value"+x); //100
// let x=200;
 x=900;
console.log("x value"+x); //900

// value can be changed
x=800;
console.log("x value"+x); //800

//let is  local scope
{
   
let x=300;
console.log("x value",x); //300
}
console.log("x value",x); //800