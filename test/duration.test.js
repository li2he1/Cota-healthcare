// run "yarn test" in the shell on the right and Jest will print test result
const identifyDuration = require("../TimeDuration").identifyDuration;
const splitParagraph = require("../splitParagraph")
let testData = require("./testData");

testData = testData.map(data => splitParagraph(data));

test('duration result to equal 12', () => {
  expect(identifyDuration(testData[0])).toBe(12);
});

test('duration result to equal 6859', () => {
  expect(identifyDuration(testData[1])).toBe(6859);
});