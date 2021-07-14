//read json
const paragraphs = require("./paragraph");
const fs = require("fs");
const Summary = require("./Summary");
let report = Summary.creatSummary(paragraphs);

fs.writeFile("report.json", JSON.stringify(report), err => {
    // Checking for errors
    if (err) throw err; 
    console.log("Done report writing"); // Success
});