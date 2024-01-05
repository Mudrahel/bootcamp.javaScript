class Product {
    //clss variables are created and assigned in cnstructore itslef
    constructor(id, name, qty) {
        this.id = id;
        this.name = name;
        this.qty = qty;
    }

    //fuinction that belongs to a class doesn't require function keyword
    show() {
        console.log("Product Id:" + this.id);
        console.log("Product Name:" + this.name);
        console.log("Qty :" + this.qty);
    }
}
var p_obj = new Product(1011, "Books", 200);
p_obj.show();

var p_obj1 = new Product(1012, "Furniture", 500);
p_obj1.show();