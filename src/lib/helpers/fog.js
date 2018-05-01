'use strict';

var syllable = require('syllable');

function CalculateFogIndex(text) {
    // Clean up the text and create a word array from it
    var textClean = text.replace(/[^a-zA-Z ]/g, "");
    var wordArray = textClean.split(" ");
    var wordArrayNoSpaces = wordArray.filter(v=>v!='');
    var wordCount = wordArrayNoSpaces.length;

    // Figure out how many polysyllabic words are in the text
    var polysyllabicWords = [];
    for(var i=0; i < wordArray.length; i++) {
        if(syllable(wordArray[i]) > 2) {
            polysyllabicWords.push(wordArray[i]);
        }
    }

    // Calculate the sentence count
    var sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;
    
    // Calculate the FOG Index and truncate it to 2 decimal places
    var avgSentenceLength = wordCount / sentenceCount;
    var fogIndex = 0.4 * ((avgSentenceLength) + (100 * (polysyllabicWords.length/wordCount)));
    fogIndex = (Math.floor(fogIndex * 100) / 100);

    // Set up the return data, making sure the fog index is a valid number
    var data = {
        index: (isFinite(fogIndex) ? fogIndex : 0),
    }

    return data;
}

/**
 * Export
 */
module.exports = CalculateFogIndex;
