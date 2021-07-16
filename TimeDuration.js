function identifyDuration(paragraphArray){
  let startDate = null ;
  let endDate = null ; 

  // use regex to find the data string
  var date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;

  for (let word of paragraphArray){
    if(word.match(date_regex)){
      let date = new Date(word);
      if(!startDate){
        startDate = date;
      }else if(startDate > date){
        startDate = date;
      }
      if(!endDate){
        endDate = date;
      }else if( endDate < date) {
        endDate = date;
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
  return 0;
}

module.exports = identifyDuration;