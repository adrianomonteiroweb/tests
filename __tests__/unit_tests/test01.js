const { deepEquals } = require("../../utils/functions");

const object1 = { a: 0, b: 1 };
const object2 = { a: 0, b: 1 };
const object2_differ_key = { a: 0, c: 1 };
const object2_string = { a: 0, b: "1" };
const object2_one_key = { a: 0 };

describe("Test deepEquals function", () => {
  test("1/4 - It should return false if two objects are different, with different number of keys.", () => {
    expect(deepEquals(object1, object2_one_key)).toEqual(false);
  });

  test("2/4 - It should return false if two objects are different, with a different key.", () => {
    expect(deepEquals(object1, object2_differ_key)).toEqual(false);
  });

  test("4/5 - It should return true if two objects are different, with a different type value", () => {
    expect(deepEquals(object1, object2_string)).toEqual(false);
  });

  test("4/4 - It should return true if two objects are equal.", () => {
    expect(deepEquals(object1, object2)).toEqual(true);
  });
});
