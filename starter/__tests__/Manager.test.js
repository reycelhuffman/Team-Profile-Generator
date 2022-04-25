const Employee = require("../lib/Employee");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set the values of name, id and email, when i set them.", () => {
            // Arrange
            let name = "President Snow";
            let id = 4;
            let email = "presidentsnow@gmail.com";
            //Act
            let employee = new Employee(name, id, email);

            //Assert
            expect(employee.name).toEqual("President Snow");
            expect(employee.id).toEqual("4");
            expect(employee.email).toEqual("presidentsnow@gmail.com");
        });
    });

    describe("getName", () => {
        it("should set values of name when I set ", () => {
            // Arrange
            let employee = new Employee(name);

            //Act
            let name = employee.getName("president Snow");

            //Assert
            expect(getName).toEqual("Employee");
        });
    });
    describe("getId", () => {
        it("should set values of id when I set ", () => {
            // Arrange
            let employee = new Employee(id);

            //ACt 
            let getId = employee.getId("3");

            //Assert
            expect(getId).toEqual("Employee");

        });
    });
    describe("getEmail", () => {
        it("should return Employee when getEmail is called ", () => {

            //Arrange
            let employee = new Employee(email);
            
            //Act
            let getEmail = employee.getEmail("presidentsnow@gmail.com");

            //Assert
            expect(getEmail).toEqual("Employee");
        });
    });
    describe("getRole", () => {
        it("should return Employee when getRole is called ", () => {
            //Arrange
            let employee = new Employee(role);

            //Act
            let getRole = employee.getRole("Manager");

            //Assert
            expect(getRole).toEqual("Employee");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return Employee when getOfficeNumber is called ", () => {
            //Arrange
            let employee = new Employee(officeNumber);

            //Act
            let getOfficeNumber = employee.getOfficeNumber("officeNumber");

            //Assert
            expect(getOfficeNumber).toEqual("Employee");
        });
    });
});
