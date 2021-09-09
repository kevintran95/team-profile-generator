class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    
    // Returns name
    getName() {
        return this.name;
    }
    // Returns Id
    getId() {
        return this.id;
    }
    // Returns email
    getEmail() {
        return this.email;
    }
    // Returns role
    getRole() {
        return 'Employee'
    }
};

module.exports = Employee