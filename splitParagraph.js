function splitParagraph(data){
    // data process the paragraph
    let paragraphArray = data.paragraph.split(/[ ,.]+/);
    paragraphArray =  paragraphArray.map(word => word.toLowerCase());
    return paragraphArray;
}

module.exports = splitParagraph;