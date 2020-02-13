/*
https://developer.wordnik.com/docs#/word

coding train 10.8 wordnik API and Javascript p5.js tutorial up to h12:52 minutes through....

/word.json/{word}/relatedWords

https://api.wordnik.com/v4/word.json/happy/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=4d57dc1a087236a347001090b6404350c1093ff07794bb2ad
*/

let wordnikAPI = "";
let url1 = "https://api.wordnik.com/v4/word.json/";
let wordSearch = "horse";
let url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=4d57dc1a087236a347001090b6404350c1093ff07794bb2ad";
let link;

function setup() {
    noCanvas();
    let url = url1 + wordSearch + url2;
    console.log(url);
    loadJSON(url, gotData);
}

function gotData(fromWordNik) {
    // log the data retrived from the API
    console.log(fromWordNik);

    fromWordNik.forEach(element => {
        console.log(element.relationshipType);
        
        // find words that rhyme with the wordSearch specified, and log them all
        if (element.relationshipType == "rhyme") {
            console.log(element);

            element.words.forEach(wordElement => {
                console.log(wordElement);
            })
        }
        

    })
    
}



