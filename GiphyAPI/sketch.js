/*
Search Endpoint Host: api.giphy.com
Path: /v1/gifs/search
The public beta key is "dc6zaTOxFJmzC”

This call to http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY returns 25 GIF Objects for the search term funny cat.
http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=funny+cat
*/

let wordnikAPI = "";
let GIPHYAPI = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC"; 
let searchTerm = "border+collie";
let query = "&q=" + searchTerm;

function setup() {
    noCanvas();
    let url = GIPHYAPI + query;
    loadJSON(url, gotData);
}

function gotData(giphy) {
    console.log(giphy.data[0]);

    giphy.data.forEach(element => {
        createImg(element.images.original.url);
    });

    //createImg(giphy.data[0].images.original.url);
}

