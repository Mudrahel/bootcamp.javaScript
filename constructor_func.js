//constructor function, creates a class
function Product(id, name, qty) {
    this.id = id;
    this.name = name;
    this.qty = qty;

    this.show = function () {
        return "Product Id is :" + this.id + " \n" + " Name :" + this.name + " \n" + "Qty :" + this.qty;
    }

}

//mine function
function customShow(product){
    console.log("Custom. Product Id is :" + product.id + " \n" + " Name :" + product.name + " \n" + "Qty :" + product.qty);
}

var obj = new Product(111, "Stationary", 50);
console.log(obj.show());

customShow(obj);

var obj1 = new Product(112, "books", 500);
console.log(obj1.show());

