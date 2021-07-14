const sentimentIdentification = require("./SentimentIdentification");
const TimeDuration = require("./TimeDuration");
const FemaleIdentification = require("./FemaleIdentification");
const splitParagraph = require("./splitParagraph");

function creatSummary(data){
    // data process the paragraph
    let paragraphArray = splitParagraph(data);
    
    // get sentiment
    let sentiment = sentimentIdentification.identifySentiment(paragraphArray);

    // get duration
    let timeDuration = TimeDuration.identifyDuration(paragraphArray);

    // get FemaleIdentification
    let femaleIdentified = FemaleIdentification.identifyFemale(paragraphArray);
    
    let summary = {
      "timeDuration": timeDuration, 
      "femaleIdentified": femaleIdentified,
      "sentiment": sentiment
    }
    return summary;
}


module.exports = { creatSummary};