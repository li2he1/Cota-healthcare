
// run "yarn test" in the shell on the right and Jest will print test result

const identifyFemale = require("../FemaleIdentification").identifyFemale;
const splitParagraph = require("../splitParagraph")
let testData = require("./testData");

testData = testData.map(data => splitParagraph(data));

test('test result to equal female', () => {
  expect(identifyFemale(testData[0])).toBe("female");
});

test('test result to equal other', () => {
  expect(identifyFemale(testData[1])).toBe("other");
});

