const KEYWORDS = require("./constants");
const femalePronouns = KEYWORDS.femalePronouns;

function identifyFemale(paragraphArray){
  for( let word of paragraphArray){
    if(femalePronouns.includes(word)){
      return "female";
    }
  }
  return "other";
}

module.exports = identifyFemale;