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
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("katniss@gmail.com");
        });
    });

    describe("getName", () => {
        it("should set values of name when I set ", () => {
            // Arrange
            let employee = new Employee("Katniss");

            //Act
            let name = employee.getName();

            //Assert
            expect(employee.name).toEqual("Katniss");
        });
    });
    describe("getId", () => {
        it("should set values of id when I set ", () => {
            // Arrange
            let employee = new Employee("Katniss", 3);

            //ACt 
            // let getId = employee.getId("3");

            //Assert
            expect(employee.id).toEqual(3);

        });
    });
    describe("getEmail", () => {
        it("should return mail when getEmail is called ", () => {

            //Arrange
            let employee = new Employee("Katniss", 3);
            //Act
            // let getEmail = employee.getEmail("katniss@gmail.com");

            //Assert
            expect(employee.email).toEqual("katniss@gmail.com");
        });
    });
    describe("getRole", () => {
        it("should return Intern when getRole is called ", () => {
            //Arrange
            let employee = new Employee();

            //Act
            let getRole = employee.getRole();

            //Assert
            expect(getRole).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("should return Northwestern when getSchool is called ", () => {
            //Arrange
            let employee = new Employee();

            //Act
            let getSchool = employee.getSchool();

            //Assert
            expect(getSchool).toEqual("Northwestern");
        });
    });
});
