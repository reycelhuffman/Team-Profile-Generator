const Employee = require("./Employee";)
class Manager {

    constructor(name, id, email, officeNumber) {

        super (name, id, email)
        
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }

    getRole() {
        return this.officeNumber
    }

}


module.exports = Manager;