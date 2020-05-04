const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof(e)).toBe("object");
});

test("Can set name via super", () => {
  const name = "Louise the Engineer";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});

test("Can set id via super", () => {
  const testValue = 251;
  const e = new Engineer("Carol", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via super", () => {
  const testValue = "testeng@test.com";
  const e = new Engineer("David", 122, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() method from parent Employee class should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
