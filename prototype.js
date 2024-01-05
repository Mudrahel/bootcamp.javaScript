class PersonB { //class example
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

PersonB.prototype.customAtt = "Buba"; //add propery to class
const objd = new PersonB("John", 25, "Chennai");
console.log(objd.name);
console.log(objd.age);
console.log(objd.city);
console.log(objd.customAtt);

function Person(name, age, city) { //constructor fucntion to declare class variant
    this.name = name;
    this.age = age;
    this.city = city;
}

Person.prototype.nationality = "Indian"; //prototype is like static variable i nJava. It is a class variable
Person.prototype.country = "India";

const obj = new Person("John", 25, "Chennai");
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj.country);
console.log(obj.nationality);