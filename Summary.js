const sentimentIdentification = require("./SentimentIdentification");
const TimeDuration = require("./TimeDuration");
const FemaleIdentification = require("./FemaleIdentification");

function creatSummary(paragraphs){
  let report = [];
  for (let data of paragraphs){
    let paragraphArray = data.paragraph.split(/[ ,.]+/);
    paragraphArray =  paragraphArray.map(word => word.toLowerCase());
    let sentiment = sentimentIdentification.identifySentiment(paragraphArray);
    let timeDuration = TimeDuration.identifyDuration(paragraphArray);
    let femaleIdentified = FemaleIdentification.identifyFemale(paragraphArray);
    let Summary = {
      "timeDuration": timeDuration, 
      "femaleIdentified": femaleIdentified,
      "sentiment": sentiment
    }
    report.push(Summary);
  }
  return report;
}


module.exports = { creatSummary};