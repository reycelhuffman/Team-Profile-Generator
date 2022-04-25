const Employee = require("../lib/Employee");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set the values of name, id and email, when i set them.", () => {
            // Arrange
            let name = "Plutarch";
            let id = 2;
            let email = "plutarch@gmail.com";
            //Act
            let employee = new Employee(name, id, email);

            //Assert
            expect(employee.name).toEqual("Plutarch");
            expect(employee.id).toEqual("2");
            expect(employee.email).toEqual("Plutarch@gmail.com");
        });
    });

    describe("getName", () => {
        it("should set values of name when I set ", () => {
            // Arrange
            let id = 2;
            let email = "Plutarch@gmail.com";
            let employee = new Employee(name, id, email);

            //Act
            let name = employee.getName("Plutarch");

            //Assert
            expect(getName).toEqual("Employee");
        });
    });
    describe("getId", () => {
        it("should set values of id when I set ", () => {
            // Arrange
            let name = "Plutarch";
            let email = "plutarch@gmail.com";

            //ACt 
            let getId = employee.getId("2");

            //Assert
            expect(getId).toEqual("Employee");

        });
    });
    describe("getEmail", () => {
        it("should return Employee when getEmail is called ", () => {

            //Arrange
            let name = "Plutarch";
            let id = 1;
            let employee = new Employee(name, id, email);
            //Act
            let getEmail = employee.getEmail("Plutarch@gmail.com");

            //Assert
            expect(getEmail).toEqual("Employee");
        });
    });
    describe("getRole", () => {
        it("should return Employee when getRole is called ", () => {
            //Arrange
            // Arrange
            let name = "Plutarch";
            let id = 1;
            let email = "Plutarch@gmail.com";
            let employee = new Employee(name, id, email);

            //Act
            let getRole = employee.getRole();

            //Assert
            expect(getRole).toEqual("Employee");
        });
    });
    describe("getGitHub", () => {
        it("should return Employee when getGitHub is called ", () => {
            //Arrange
            // Arrange
            let name = "Plutarch";
            let id = 2;
            let email = "Plutarch@gmail.com";
            let employee = new Employee(name, id, email);

            //Act
            let getGitHub = employee.getGitHub();

            //Assert
            expect(getGitHub).toEqual("Employee");
        });
    });
});
