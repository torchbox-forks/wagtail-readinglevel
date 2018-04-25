'use strict';

function CalculateFleschReadingEase(text) {
    // Calculate Flesch Reading Ease Score
    var fleschReadingEaseScore = 0;
    
    // Truncate as best we can to 2 decimal places
    fleschReadingEaseScore = (Math.floor(fleschReadingEaseScore * 100) / 100)
    
    // Set up the data
    var data = {
        score: isFinite(fleschReadingEaseScore) ? fleschReadingEaseScore : 0,
    }

    return data;
}

/**
 * Export
 */
module.exports = CalculateFleschReadingEase;
