//click run on the top to run the program and result will be output to the report.json

//read json
const paragraphs = require("./paragraph");
const fs = require("fs");
const Summary = require("./Summary");
let report = [];
for (let data of paragraphs ){
  let summary = Summary.creatSummary(data);
  report.push(summary);
}
console.log(report);
// extract  facts from form English text
fs.writeFile("report.json", JSON.stringify(report), err => {
    // Checking for errors
    if (err) throw err; 
    console.log("Done report writing"); // Success
});


// Use  Jest to write the tests
// check the test file in the test folder and follow the instruction to run the test