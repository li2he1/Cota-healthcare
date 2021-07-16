const KEYWORDS = require("./constants");
const positiveSentiments = KEYWORDS.positiveSentiments;
const negativeSentiments = KEYWORDS.negativeSentiments;

function countSentiment(word, countPositive, countNegative){
  // count keyWords
  if(positiveSentiments.includes(word)){
    countPositive[0]++;
  }else if(negativeSentiments.includes(word) ){
    countNegative[0]++;
  }
}

function identifySentiment(countPositive, countNegative){
  if(countPositive[0] === 0 && countNegative[0] === 0){
    return "unknown";
  }
  // assume equal count as a mixed
  if(countPositive[0] === countNegative[0]){
    return "mixed";
  }
  if(countPositive[0] > countNegative[0]){
    return "positive";
  } else {
    return "negative";
  }
  
}


module.exports = {identifySentiment,countSentiment} ;
