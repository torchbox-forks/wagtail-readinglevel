import './sass/readinglevel.scss';
import { CalculateColemanIndex } from './helpers/coleman';

/*
 * A control that displays the coleman liau index of the content inside this rich text field.
 */
const ColemanLiau = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateColemanIndex(text);

    let message = "CL Index: N/A";

    const elem = 'div';
    const classNames = 'tb-indicator';

    if (!stats) {
        return window.React.createElement(elem, { className: classNames }, `${message}`);
    }

    message = `CL Index: ${stats.index}`;

    return window.React.createElement(elem, {
        className: classNames,
    }, message);
};

window.draftail.registerPlugin({
    type: 'readinglevelcoleman',
    meta: ColemanLiau,
}, 'controls');
