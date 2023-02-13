const intToEnglish = require('../sample');
const expect = require("chai").expect;

describe("intToEnglish", () => {
  it("converts 1 to One", () => {
    expect(intToEnglish(1)).to.equal("One");
  });
  it("converts 11 to Eleven", () => {
    expect(intToEnglish(11)).to.equal("Eleven");
  });
  it("converts 16 to Sixteen", () => {
    expect(intToEnglish(16)).to.equal("Sixteen");
  });
  it("converts 19 to Nineteen", () => {
    expect(intToEnglish(19)).to.equal("Nineteen");
  });
  it("converts 23 to Twenty Three", () => {
    expect(intToEnglish(23)).to.equal("Twenty Three");
  });
  it("converts 102 to One Hundred Two", () => {
    expect(intToEnglish(102)).to.equal("One Hundred Two");
  });
  it("converts 100 to One Hundred", () => {
    expect(intToEnglish(100)).to.equal("One Hundred");
  });
  it("converts 1000 to One Thousand", () => {
    expect(intToEnglish(1000)).to.equal("One Thousand");
  });
  it("converts 10000 to Ten Thousand", () => {
    expect(intToEnglish(10000)).to.equal("Ten Thousand");
  });
  it("converts 100000 to One Hundred Thousand", () => {
    expect(intToEnglish(100000)).to.equal("One Hundred Thousand");
  });
  it("converts 1000000 to One Million", () => {
    expect(intToEnglish(1000000)).to.equal("One Million");
  });
  it("converts 10000000 to Ten Million", () => {
    expect(intToEnglish(10000000)).to.equal("Ten Million");
  });
  it("converts 100000000 to One Hundred Million", () => {
    expect(intToEnglish(100000000)).to.equal("One Hundred Million");
  });
  it("converts 1000000000 to One Billion", () => {
    expect(intToEnglish(1000000000)).to.equal("One Billion");
  });
});