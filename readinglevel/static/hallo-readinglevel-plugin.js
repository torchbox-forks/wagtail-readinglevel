$(function (){
    // REGULAR RICH TEXT AREAS -----------------------------------------------
    // Get all of the regular rich text areas (non-streamfield)
	var regular_rich_text_areas = $('.hallo_rich_text_area .richtext');

    // Loop through the regular rich text areas
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

            // Find the newly created text box and hide it so that it only 
            // displays when the user clicks in the rich text box like normal
            helpTextContainer = richTextParent.find('.object-help');
            helpTextContainer.style.opacity(0);
        }
    });

    // STREAMFIELD RICH TEXT AREAS --------------------------------------------
    // Get all of the streamfield rich text areas
	var widget_rich_text_areas = $('.widget-hallo_rich_text_area .richtext');

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

            // Find the newly created text box and hide it so that it only 
            // displays when the user clicks in the rich text box like normal
            helpTextContainer = richTextParent.find('.help');
        }
    }); 
});
