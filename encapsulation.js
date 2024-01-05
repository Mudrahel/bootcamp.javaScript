class Employee {

    constructor() {
        //private variables which can be accessed only though getter/setter
        let id, name, dept;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

var obj = new Employee();
obj.setId(100011);
console.log("Employee Id:" + obj.getId());
obj.setName("Sachin");
console.log("Employee Name:" + obj.getName());