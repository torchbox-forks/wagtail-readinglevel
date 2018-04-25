import PropTypes from 'prop-types';
import React from 'react';
import { ToolbarButton } from '../lib';
import CalculateFogIndex from '../lib/helpers/fog';

const TOOLBAR_ICON = null;

/*
 * A  control that displays the smog index of the content inside this rich text field.
 */
const FogIndex = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateFogIndex(text);
    
    if(!stats) {
        var message = "FOG Index: N/A"
    }
    else {
        var message = "FOG Index: " + stats.index;
    }

    return (
        <ToolbarButton
            name="FOG_INDEX"
            icon={TOOLBAR_ICON}
            label={`${message}`}
        />
    );
};

FogIndex.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default FogIndex;
