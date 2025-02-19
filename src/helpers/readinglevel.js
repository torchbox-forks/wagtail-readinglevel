function CalculateReadingLevel(text) {
    // Constants for our reading level calculation
    // These are part of the Automated Readability Index calculation
    // https://en.wikipedia.org/wiki/Automated_readability_index
    const CHARACTER_WEIGHT = 4.71;
    const SENTENCE_WEIGHT = 0.5;
    const BASE = 21.43;
  
    // Create the variables to hold the character, word and sentence counts
    let charCount = 0;
    let wordCount = 0;
    let sentenceCount = 0;
  
    const textClean = text.replace(/[^a-zA-Z ]/g, "");
  
    // Calculate the character count
    const textNoSpace = textClean.replace(/\s/g, "");
    const textNoPeriod = textNoSpace.replace(/\./g, "");
    charCount = textNoPeriod.length;
  
    // Calculate the word count -----------------
    const wordArray = textClean.split(" ");
    const wordArrayNoSpaces = wordArray.filter(v => v != '');
    wordCount = wordArrayNoSpaces.length;
  
    // Calculate the sentence count
    sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;
  
    // If we have an empty first value in the array we know our text box is actually empty
    // so we need to minus 1 from our word count
    if (text.split(" ")[0] == "") {
      wordCount -= 1;
    }
  
    const readabilityScore = (CHARACTER_WEIGHT * (charCount / wordCount))
      + (SENTENCE_WEIGHT * (wordCount / sentenceCount)) - BASE;
  
    let readingAge = (readabilityScore + 4).toFixed(1);
    // Modify the help area to include the new information
    if (isFinite(readingAge)) {
      if (readingAge > 18) { readingAge = "18+" }
      else if (readingAge < 4) { readingAge = 4 }
      return {
        age: readingAge,
        score: readabilityScore,
        words: wordCount,
        sentences: sentenceCount
      };
    }
    else {
      return null;
    }
  }

export { CalculateReadingLevel };
