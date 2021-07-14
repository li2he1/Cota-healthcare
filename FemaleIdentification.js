const constants = require("./constants");
const femalePronouns = constants.keyWords.femalePronouns;

function identifyFemale(paragraphArray){
  for( let word of paragraphArray){
    if(femalePronouns.includes(word)){
      return "female";
    }
  }
  return "other";
}

module.exports = { identifyFemale};