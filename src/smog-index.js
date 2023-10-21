import './sass/readinglevel.scss';
import { CalculateSmogIndex } from './helpers/smogindex';

/*
 * A  control that displays the smog index of the content inside this rich text field.
 */
const SmogIndex = ({ getEditorState }) => {
  const editorState = getEditorState();
  const content = editorState.getCurrentContent();
  const text = content.getPlainText();
  const stats = CalculateSmogIndex(text);

  let message = "SMOG Index: N/A";

  const elem = 'div';
  const classNames = 'tb-indicator';

  if (!stats) {
    return window.React.createElement(elem, { className: classNames }, `${message}`);
  }

  message = `SMOG Index: : ${stats.smogIndex}`;

  return window.React.createElement(elem, {
    className: classNames,
  }, message);

}

window.draftail.registerPlugin({
  type: 'readinglevelsmog',
  meta: SmogIndex,
}, 'controls');
