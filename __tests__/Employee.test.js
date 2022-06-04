
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // Arrange
      let name = "Effie";
      let id = 1;
      let email = "effie@gmail.com";
      //Act
      let employee = new Employee(name, id, email);

      //Assert
      expect(employee.name).toEqual("Effie");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("effie@gmail.com");
    });
  });

  describe("getName", () => {
    it("should set values of name when I set ", () => {
      // Arrange
      let name = "Effie"
      
      let employee = new Employee("Effie");


      expect(employee.name).toEqual("Effie");
    });
  });
  describe("getId", () => {
    it("should set values of id when I set ", () => {
      
      let employee = new Employee("Effie", 1);
      
      //ACt 
      // let getId = employee.getId();

      //Assert
      expect(employee.id).toEqual(1);

    });
  });
  describe("getEmail", () => {
    it("should return email when getEmail is called ", () => {

      //Arrange
      let employee = new Employee("Effie", 1, "email");
      //Act
      let getEmail = employee.getEmail();

      //Assert
      expect(employee.email).toEqual("email");
      
    });
  });
  describe("getRole", () => {
    it("should return Employee when getRole is called ", () => {
      //Arrange
      let employee = new Employee();

      //Act
      let getRole = employee.getRole();

      //Assert
      expect(getRole).toEqual("Employee");
    });
  });
});
