// run "yarn test" in the shell on the right and Jest will print test result
const identifySentiment = require("../SentimentIdentification").identifySentiment;
const splitParagraph = require("../splitParagraph")
let testData = require("./testData");

testData = testData.map(data => splitParagraph(data));

test('sentiment result to equal positive', () => {
  expect(identifySentiment(testData[0])).toBe("positive");
});

test('sentiment result to equal negative', () => {
  expect(identifySentiment(testData[1])).toBe("negative");
});