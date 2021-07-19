const identifySentiment = require("./SentimentIdentification").identifySentiment;
const countSentiment = require("./SentimentIdentification").countSentiment;
const getDate = require("./TimeDuration").getDate;
const getDuration = require("./TimeDuration").getDuration;
const identifyFemale = require("./FemaleIdentification");
const splitParagraph = require("./splitParagraph");

function creatSummary(data){
    // data process the paragraph
    let paragraphArray = splitParagraph(data);
    let countPositive = [0];
    let countNegative = [0];
    let startDate = [null] ;
    let endDate = [null] ; 
    let isFemale = false;

    for( let word of paragraphArray){
      // count sentiment
      countSentiment(word, countPositive, countNegative );
      // get date
      getDate(word, startDate, endDate);

      // get FemaleIdentification
      if(!isFemale){
        isFemale = identifyFemale(word);
      }
    }

    let sentiment = identifySentiment(countPositive, countNegative);
    let timeDuration = getDuration(startDate, endDate);

    let summary = {
      "timeDuration": timeDuration, 
      "femaleIdentified": isFemale? "female" : "other",
      "sentiment": sentiment
    }
    return summary;
}


module.exports = creatSummary;