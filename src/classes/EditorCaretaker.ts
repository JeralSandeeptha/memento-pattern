import type { EditorMemento } from "./EditorMemento.js";

export class History {
  private mementos: EditorMemento[] = [];

  push(memento: EditorMemento) {
    this.mementos.push(memento);
  }

  pop(): EditorMemento | undefined {
    return this.mementos.pop();
  }
};
