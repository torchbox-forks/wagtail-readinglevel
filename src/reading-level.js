import './sass/readinglevel.scss';
import { CalculateReadingLevel } from './helpers/readinglevel';

/*
 * A  control that displays the reading age of the content inside this rich text field.
 * Uses the Automated Readability Index to calculate.
 */
const ReadingLevel = ({ getEditorState }) => {
  const editorState = getEditorState();
  const content = editorState.getCurrentContent();
  const text = content.getPlainText();
  const stats = CalculateReadingLevel(text);

  let message = "Reading Age: N/A";

  const elem = 'div';
  const classNames = 'tb-indicator';

  if (!stats) {
    return window.React.createElement(elem, { className: classNames }, `${message}`);
  }

  message = `Reading age: ${stats.age}, Readability Score: ${stats.score}`;

  return window.React.createElement(elem, {
    className: classNames,
  }, message);

}

window.draftail.registerPlugin({
  type: 'readinglevel',
  meta: ReadingLevel,
  CSS: 'w-inline-block w-tabular-nums w-mr-2',
}, 'controls');
