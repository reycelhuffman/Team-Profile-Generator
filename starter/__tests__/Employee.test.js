
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
      let employee = new Employee(name);

      //Act
      let name = employee.getName("Effie");

      //Assert
      expect(getName).toEqual("Employee");
    });
  });
  describe("getId", () => {
    it("should set values of id when I set ", () => {
      // Arrange
      let employee = new Employee(id);
      
      //ACt 
      let getId = employee.getId("1");

      //Assert
      expect(getId).toEqual("Employee");

    });
  });
  describe("getEmail", () => {
    it("should return Employee when getEmail is called ", () => {

      //Arrange
      let employee = new Employee(email);
      //Act
      let getEmail = employee.getEmail("effie@gmail.com");

      //Assert
      expect(getEmail).toEqual("Employee");
    });
  });
  describe("getRole", () => {
    it("should return Employee when getRole is called ", () => {
      //Arrange
      let employee = new Employee(role);

      //Act
      let getRole = employee.getRole("Employee");

      //Assert
      expect(getRole).toEqual("Employee");
    });
  });
});
