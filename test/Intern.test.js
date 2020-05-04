const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof(e)).toBe("object");
});

test("Can set name via super", () => {
  const name = "Greg the Intern";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});

test("Can set id via super", () => {
  const testValue = 576;
  const e = new Intern("Greg", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via super", () => {
  const testValue = "testintern@test.com";
  const e = new Intern("Greg", 687, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() method from parent Employee class should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
