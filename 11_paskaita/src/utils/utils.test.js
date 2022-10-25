import { multiply, lowerCase } from "./index";

test("multiply", () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(6, -2)).toBe(-12);
});

test("lowerCase", () => {
  expect(lowerCase("Liudmila")).toBe("liudmila");
  expect(lowerCase("DOG")).toBe("dog");
  expect(lowerCase("cat")).toBe("cat");
  expect(lowerCase("PEDRo")).toBe("pedro");
});
