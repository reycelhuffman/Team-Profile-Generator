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
            expect(employee.id).toEqual(4);
            expect(employee.email).toEqual("presidentsnow@gmail.com");
        });
    });

    describe("getName", () => {
        it("should set values of name when I set ", () => {
            // Arrange
            let employee = new Employee("President Snow");

            //Assert
            expect(employee.name).toEqual("President Snow");
        });
    });
    describe("getId", () => {
        it("should set values of id when I set ", () => {
            // Arrange
            let employee = new Employee("President Snow", 4);

            //ACt 
            // let getId = employee.getId();

            //Assert
            expect(employee.id).toEqual(4);

        });
    });
    describe("getEmail", () => {
        it("should return email when getEmail is called ", () => {

            //Arrange
            let employee = new Employee("President Snow", 4);
            
            //Act
            // let getEmail = employee.getEmail("presidentsnow@gmail.com");

            //Assert
            expect(employee.email).toEqual("presidentsnow@gmail.com");
        });
    });
    describe("getRole", () => {
        it("should return Manager when getRole is called ", () => {
            //Arrange
            let employee = new Employee();

            //Act
            let getRole = employee.getRole();

            //Assert
            expect(getRole).toEqual("Manager");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return officeNumbers when getOfficeNumber is called ", () => {
            //Arrange
            let employee = new Employee();

            //Act
            let getOfficeNumber = employee.getOfficeNumber();

            //Assert
            expect(getOfficeNumber).toEqual("officeNumbers");
        });
    });
});
