const intToEnglish = require('./sample');
 
// describe("intToEnglish", () => {
//     test("converts numbers to their English word representation", () => {
//       expect(intToEnglish(1)).toBe("One");
//       expect(intToEnglish(11)).toBe("Eleven");
//       expect(intToEnglish(16)).toBe("Sixteen");
//       expect(intToEnglish(19)).toBe("Nineteen");
//       expect(intToEnglish(23)).toBe("Twenty Three");
//       expect(intToEnglish(102)).toBe("One Hundred Two");
//       expect(intToEnglish(100)).toBe("One Hundred");
//       expect(intToEnglish(1000)).toBe("One Thousand");
//       expect(intToEnglish(10000)).toBe("Ten Thousand");
//       expect(intToEnglish(100000)).toBe("One Hundred Thousand");
//       expect(intToEnglish(1000000)).toBe("One Million");
//       expect(intToEnglish(10000000)).toBe("Ten Million");
//       expect(intToEnglish(100000000)).toBe("One Hundred Million");
//       expect(intToEnglish(1000000000)).toBe("One Billion");
//     });
//   });

describe("intToEnglish", () => {
    test("converts 1 to One", () => {
      expect(intToEnglish(1)).toBe("One");
    });
    test("converts 11 to Eleven", () => {
      expect(intToEnglish(11)).toBe("Eleven");
    });
    test("converts 16 to Sixteen", () => {
      expect(intToEnglish(16)).toBe("Sixteen");
    });
    test("converts 19 to Nineteen", () => {
      expect(intToEnglish(19)).toBe("Nineteen");
    });
    test("converts 23 to Twenty Three", () => {
      expect(intToEnglish(23)).toBe("Twenty Three");
    });
    test("converts 102 to One Hundred Two", () => {
      expect(intToEnglish(102)).toBe("One Hundred Two");
    });
    test("converts 100 to One Hundred", () => {
      expect(intToEnglish(100)).toBe("One Hundred");
    });
    test("converts 1000 to One Thousand", () => {
      expect(intToEnglish(1000)).toBe("One Thousand");
    });
    test("converts 10000 to Ten Thousand", () => {
      expect(intToEnglish(10000)).toBe("Ten Thousand");
    });
    test("converts 100000 to One Hundred Thousand", () => {
      expect(intToEnglish(100000)).toBe("One Hundred Thousand");
    });
    test("converts 1000000 to One Million", () => {
      expect(intToEnglish(1000000)).toBe("One Million");
    });
    test("converts 10000000 to Ten Million", () => {
      expect(intToEnglish(10000000)).toBe("Ten Million");
    });
    test("converts 100000000 to One Hundred Million", () => {
      expect(intToEnglish(100000000)).toBe("One Hundred Million");
    });
    test("converts 1000000000 to One Billion", () => {
      expect(intToEnglish(1000000000)).toBe("One Billion");
    });
  });
  