import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverseString,
} from "../src/index.js";

test("capitalize: Happy path", () => {
  expect(capitalize("this sentence.")).toBe("This sentence.");
});

test("capitalize: First char is upper", () => {
  expect(capitalize("This sentence.")).toBe("This sentence.");
});

test("capitalize: First char is number", () => {
  expect(capitalize("10 people sentence.")).toBe("10 people sentence.");
});

test("capitalize: First char is special char", () => {
  expect(capitalize("$example -terminal -command")).toBe(
    "$example -terminal -command",
  );
});

test("reverseString: Happy path", () => {
  expect(reverseString("Example String")).toBe("gnirtS elpmaxE");
});

test("calculator: Add", () => {
  expect(calculator.add(10, 2)).toBe(12);
});

test("calculator: Subtract", () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test("calculator: Divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("calculator: Multiply", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("caesar: Happy Path", () => {
  expect(caesarCipher("test", 1)).toBe("uftu");
});

test("caesar: Maintains capital letters", () => {
  expect(caesarCipher("tEsT", 1)).toBe("uFtU");
});

test("caesar: Maintains special letters", () => {
  expect(caesarCipher("te, st!", 1)).toBe("uf, tu!");
});

test("caesar: Wraps past z", () => {
  expect(caesarCipher("zzz", 1)).toBe("aaa");
});

test("caesar: Wraps past Z", () => {
  expect(caesarCipher("ZZZ", 1)).toBe("AAA");
});

test("analyzeArray: Happy Path", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
