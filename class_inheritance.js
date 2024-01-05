class Customer {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    cus_data() {
        console.log("Customer id:" + this.id);
        console.log("Customer Name:" + this.name);
        console.log("Address :" + this.address);
    }
}

class Product extends Customer {
    //when inherit a class, cll parameters frm its constructor has to be added to child constructor
    constructor(id, name, address, Pro_name, price) {
        super(id, name, address);
        this.Pro_name = Pro_name;
        this.price = price;
    }
    pro_data() {
        console.log("Customer id:" + this.id);
        console.log("Customer Name:" + this.name);
        console.log("Address :" + this.address);
        console.log("Product Name:" + this.Pro_name);
        console.log("Price :" + this.price);
    }
}
var obj = new Product(10011, "ABC", "Chennai", "Laptop", 45000);
obj.cus_data(); //method of parent class
console.log("==========================");
obj.pro_data(); //method of child class