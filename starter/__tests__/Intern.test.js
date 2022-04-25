const Employee = require("../lib/Employee");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should set the values of name, id and email, when i set them.", () => {
            // Arrange
            let name = "Katniss";
            let id = 3;
            let email = "katniss@gmail.com";
            //Act
            let employee = new Employee(name, id, email);

            //Assert
            expect(employee.name).toEqual("Katniss");
            expect(employee.id).toEqual("3");
            expect(employee.email).toEqual("katniss@gmail.com");
        });
    });

    describe("getName", () => {
        it("should set values of name when I set ", () => {
            // Arrange
            let id = 3;
            let email = "katniss@gmail.com";
            let employee = new Employee(name, id, email);

            //Act
            let name = employee.getName("Katniss");

            //Assert
            expect(getName).toEqual("Employee");
        });
    });
    describe("getId", () => {
        it("should set values of id when I set ", () => {
            // Arrange
            let name = "Katniss";
            let email = "Katniss@gmail.com";

            //ACt 
            let getId = employee.getId("3");

            //Assert
            expect(getId).toEqual("Employee");

        });
    });
    describe("getEmail", () => {
        it("should return Employee when getEmail is called ", () => {

            //Arrange
            let name = "Katniss";
            let id = 3;
            let employee = new Employee(name, id, email);
            //Act
            let getEmail = employee.getEmail("katniss@gmail.com");

            //Assert
            expect(getEmail).toEqual("Employee");
        });
    });
    describe("getRole", () => {
        it("should return Employee when getRole is called ", () => {
            //Arrange
            // Arrange
            let name = "Katniss";
            let id = 3;
            let email = "Katniss@gmail.com";
            let employee = new Employee(name, id, email);

            //Act
            let getRole = employee.getRole("Intern");

            //Assert
            expect(getRole).toEqual("Employee");
        });
    });
    describe("getSchool", () => {
        it("should return Employee when getSchool is called ", () => {
            //Arrange
            // Arrange
            let name = "Katniss";
            let id = 3;
            let email = "Katniss@gmail.com";
            let employee = new Employee(name, id, email);

            //Act
            let getSchool = employee.getSchool("School");

            //Assert
            expect(getSchool).toEqual("Employee");
        });
    });
});
