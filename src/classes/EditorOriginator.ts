import { EditorMemento } from "./EditorMemento.js";

export class Editor {
  private content: string = "";

  type(words: string) {
    this.content += words;
  }

  getContent(): string {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento) {
    this.content = memento.getContent();
  }
};
