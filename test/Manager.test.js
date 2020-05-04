const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
  const e = new Manager();
  expect(typeof(e)).toBe("object");
});

test("Can set name via super", () => {
  const name = "Ann the Manager";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});

test("Can set id via super", () => {
  const testValue = 364;
  const e = new Manager("Ann", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via super", () => {
  const testValue = "testmgr@test.com";
  const e = new Manager("Ann", 386, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() method from parent Employee class should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
