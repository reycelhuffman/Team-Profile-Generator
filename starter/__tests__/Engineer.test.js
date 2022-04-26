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
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual("plutarch@gmail.com");
        });
    });

    describe("getName", () => {
        it("should set values of name when I set ", () => {
            // Arrange
            let employee = new Employee("Plutarch");

            //Assert
            expect(employee.name).toEqual("Plutarch");
        });
    });
    describe("getId", () => {
        it("should set values of id when I set ", () => {
            // Arrange
            let employee = new Employee("Plutarch", 2);

            //ACt 
            let getId = employee.getId();

            //Assert
            expect(employee.id).toEqual(2);
        
        });
    });
    describe("getEmail", () => {
        it("should return email when getEmail is called ", () => {

            //Arrange
            let employee = new Employee("Plutarch", 2);
            //Act
            let getEmail = employee.getEmail();

            //Assert
            expect(getEmail).toEqual("plutarch@gmail.com");
        });
    });
    describe("getRole", () => {
        it("should return Engineer when getRole is called ", () => {
            //Arrange
            let employee = new Employee();

            //Act
            let getRole = employee.getRole();

            //Assert
            expect(getRole).toEqual("Engineer");
        });
    });
    describe("getGitHub", () => {
        it("should return GitHub when getGitHub is called ", () => {
            //Arrange
            let employee = new Employee();

            //Act
            let getGitHub = employee.getGitHub();

            //Assert
            expect(getGitHub).toEqual("GitHub");
        });
    });
});
