$(function (){
    // REGULAR RICH TEXT AREAS -----------------------------------------------
    // Get all of the regular rich text areas (non-streamfield)
	var regular_rich_text_areas = $('.hallo_rich_text_area .richtext');

    // Loop through the regular rich text areas
    if(regular_rich_text_areas) {
        regular_rich_text_areas.each(function() {
            // Get the current rich text area for this loop the parent area
            // and the help text container so we can target and modify them
            var richTextArea = $(this)
            var richTextParent = richTextArea.parent().parent().parent().parent();
            var helpTextContainer = richTextParent.find('.object-help');
            if (helpTextContainer.html()) {
                helpTextContainer.addClass('readinglevel');
            }
            else {
                // Didn't find an existing help box so create one with our custom class
                richTextParent.append("<div style='opacity:1;' class='object-help help readinglevel'>Test help text</div");
            }
            $(richTextArea.find('.richtext')).bind('hallomodified', function(event) {
                var text = event.currentTarget.innerText;
                console.log("INNER TEXT");
                console.log(text);
            });
        });
    }

    // STREAMFIELD RICH TEXT AREAS --------------------------------------------
    // Get all of the streamfield rich text areas
	var widget_rich_text_areas = $('.widget-hallo_rich_text_area .richtext');

    if(widget_rich_text_areas) {

        // Loop through the streamfield rich text areas
        widget_rich_text_areas.each(function() {
            // Get the current rich text area for this loop the parent area
            // and the help text container so we can target and modify them
            var richTextArea = $(this)
            var richTextParent = richTextArea.parent().parent();
            var helpTextContainer = richTextParent.find('.help');
            if (helpTextContainer.html()) {
                helpTextContainer.addClass('readinglevel');
            }
            else {
                // Didn't find an existing help box so create one with our custom class
                richTextParent.append("<p class='help readinglevel'>Test help text</div");
            }
            richTextArea.on('hallomodified', function(event, data) {
                var text = $(richTextArea).text()
                
                // Calculate the character count
                var charCount = text.length;    

                // Calculate the word count
                var wordCount = text.split(" ").length;

                // Calculate the sentence count
                var sentenceCount = (text.replace(/\w[.?!](\s|$)/g, "$1|").split("|").length) - 1;

                // If we have an empty first value in the array we know our text box is actually empty
                // so we need to minus 1 from our word count
                if(text.split(" ")[0] == "") {
                    wordCount -= 1;
                }

                // Modify the help area to include the new information
                richTextParent.find('p.help').text("Char count: " + charCount +  " Word count: " + wordCount + " Sentences: " + sentenceCount);
            });
        });
    }
});
