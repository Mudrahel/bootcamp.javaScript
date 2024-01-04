class EmployeeManagementSystem {
    constructor() {
        this.employeeIds = new Set();
        this.employeeDetails = new Map();
    }

    addEmployee(id, name, department) {
        if (this.employeeIds.has(id)) {
            console.log(`Employee with ID ${id} already exists.`);
        } else {
            this.employeeIds.add(id);
            this.employeeDetails.set(id, { name, department });
            console.log(`Employee with ID ${id} added successfully.`);
        }
    }

    removeEmployee(id) {
        if (this.employeeIds.has(id)) {
            this.employeeIds.delete(id);
            this.employeeDetails.delete(id);
            console.log(`Employee with ID ${id} removed successfully.`);
        } else {
            console.log(`Employee with ID ${id} not found.`);
        }
    }

    getEmployeeDetails(id) {
        if (this.employeeIds.has(id)) {
            return this.employeeDetails.get(id);
        } else {
            console.log(`Employee with ID ${id} not found.`);
            return null;
        }
    }

    listAllEmployees() {
        const employees = [];
        for (const [id, details] of this.employeeDetails) {
            employees.push({ id, ...details });
        }
        return employees;
    }

    listAllIds() {
        const itr = this.employeeIds.values();
        for (let i = 0; i < this.employeeIds.size; i++) {
            console.log(itr.next().value);
        }
    }
}

const employeeSystem = new EmployeeManagementSystem();

employeeSystem.addEmployee(101, 'John Doe', 'Engineering');
employeeSystem.addEmployee(102, 'Jane Smith', 'Marketing');
employeeSystem.addEmployee(103, 'Bob Johnson', 'Finance');

console.log("\nListing all Employees:\n", employeeSystem.listAllEmployees());

console.log("\nListing all unique IDs:");
console.log(employeeSystem.listAllIds());

console.log("\nTry to add new Employee with ID that already exists:");
employeeSystem.addEmployee(103, 'Mona Lisa', 'Marketing');

console.log("\nTry to remove employee");
employeeSystem.removeEmployee(101);
console.log("\nTry to remove same employee again");
employeeSystem.removeEmployee(101);

console.log("\nTry to pull info abuot an employee");
console.log(employeeSystem.getEmployeeDetails(102));
console.log("\nTry to pull info abuot an employee than not exists");
console.log(employeeSystem.getEmployeeDetails(101));

console.log("\nListing all Employees:\n", employeeSystem.listAllEmployees());

console.log("\nListing all unique IDs:");
console.log(employeeSystem.listAllIds());