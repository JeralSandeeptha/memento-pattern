import { History } from "./classes/EditorCaretaker.js";
import { Editor } from "./classes/EditorOriginator.js";

const editor = new Editor();
const history = new History();

editor.type("Hello ");
history.push(editor.save());

editor.type("World!");
history.push(editor.save());

console.log(editor.getContent()); // Hello World!

// Undo
const lastState = history.pop();
if (lastState) {
  editor.restore(lastState);
}

console.log(editor.getContent()); // Hello World!

const previousState = history.pop();
if (previousState) {
  editor.restore(previousState);
}

console.log(editor.getContent()); // Hello