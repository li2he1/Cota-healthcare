const constants = require("./constants");
const positiveSentiments = constants.keyWords.positiveSentiments;
const negativeSentiments = constants.keyWords.negativeSentiments;

function identifySentiment(paragraphArray){
  // count keyWords
  let countPositive = 0;
  let countNegative = 0;

  for( let word of paragraphArray){
    if(positiveSentiments.includes(word)){
      countPositive++;
    }else if(negativeSentiments.includes(word) ){
      countNegative++;
    }
  }
  if(countPositive === 0 && countNegative === 0){
    return "unknown";
  }
  if(countPositive === countNegative){
    return "mixed";
  }
  if(countPositive > countNegative){
    return "positive";
  } else {
    return "negative";
  }
}


module.exports = { identifySentiment};