const Employee = require("../lib/Employee");

test("Creates a new employee", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Tests name.", () => {
  const name = "Farhiya";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Tests ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Farhiya", id);
  expect(employeeInstance.id).toBe(id);
});

test("Tests email.", () => {
  const email = "farhiya.i.mahamud@gmail.com";
  const employeeInstance = new Employee("Farhiya", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Gets name through the getName method.", () => {
  const testName = "Farhiya";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Tests ID through the getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Farhiya", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through the getEmail method.", () => {
  const testEmail = "farhiya.i.mahamud@gmail.com";
  const employeeInstance = new Employee("Farhiya", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing the role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee(
    "Farhiya",
    2,
    "farhiya.i.mahamud@gmail.com"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
