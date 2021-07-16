const identifySentiment = require("./SentimentIdentification");
const identifyDuration = require("./TimeDuration");
const identifyFemale = require("./FemaleIdentification");
const splitParagraph = require("./splitParagraph");

function creatSummary(data){
    // data process the paragraph
    let paragraphArray = splitParagraph(data);
    
    // get sentiment
    let sentiment = identifySentiment(paragraphArray);

    // get duration
    let timeDuration = identifyDuration(paragraphArray);

    // get FemaleIdentification
    let femaleIdentified = identifyFemale(paragraphArray);
    
    let summary = {
      "timeDuration": timeDuration, 
      "femaleIdentified": femaleIdentified,
      "sentiment": sentiment
    }
    return summary;
}


module.exports = { creatSummary};