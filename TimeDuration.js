// use regex to find the data string
const date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;

function getDate(word, startDate, endDate ){
  if(word.match(date_regex)){
    let date = new Date(word);
    if(!isNaN(date.getTime())){
      if(!startDate[0]){
       startDate[0] = date;
      }else if(startDate[0] > date){
        startDate[0] = date;
      }
      if(!endDate[0]){
        endDate[0] = date;
      }else if( endDate[0] < date) {
        endDate[0] = date;
      }
      // console.log(startDate[0]);
      // console.log(endDate[0]);
    } 
  }
}

function getDuration(startDate, endDate){
  
  if(startDate[0] && endDate[0]){
    // To calculate the time difference of two dates
    var DifferenceInTime = endDate[0].getTime() - startDate[0].getTime();
    
    // To calculate the no. of days between two dates
    var DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24); 
    return DifferenceInDays+1;
  }
  return 0;
}

module.exports = {getDate, getDuration};