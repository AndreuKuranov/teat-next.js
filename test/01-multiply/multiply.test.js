import { multiply } from './multiply.js'; 

// test('multiply 2 by 2 should be equal 4', () => {
//   expect(multiply(2, 2)).toBe(4);
// });

describe("multiply", () => {
  it("multiply 2 by 2 should be equal 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it("multiply 2 by 3 should be equal 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("multiply 2 by 4 should be equal 8", () => {
    expect(multiply(2, 4)).toBe(8);
  });
})