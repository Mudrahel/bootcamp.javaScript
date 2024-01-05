//overloading in JavaScrip is not supported, only overriding

class parent {
    calc(x, y) {

        console.log("from parent class:", (x * y));
    }
}

class child extends parent {
    calc(x, y) {


        console.log("from child class:", (x + y));
    }
}
var c_obj = new child();
c_obj.calc(20, 30);