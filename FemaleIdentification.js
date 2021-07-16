const KEYWORDS = require("./constants");
const femalePronouns = KEYWORDS.femalePronouns;

function identifyFemale(word){
  if(femalePronouns.includes(word)){
    return true;
  }
  return false;
}

module.exports = identifyFemale;