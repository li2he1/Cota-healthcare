function identifyDuration(paragraphArray){
  let startDate = null ;
  let endDate = null ; ;
  var date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;
  // console.log(paragraphArray);
  for (let word of paragraphArray){
    if(word.match(date_regex)){
      if(!startDate ){
        startDate = new Date(word);
      }else {
        endDate = new Date(word);
      }
    }
  }
  if(startDate && endDate){
    // To calculate the time difference of two dates
    var DifferenceInTime = endDate.getTime() - startDate.getTime();
    
    // To calculate the no. of days between two dates
    var DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24); 
    return DifferenceInDays+1;
  }
  return null;
}

module.exports = { identifyDuration};