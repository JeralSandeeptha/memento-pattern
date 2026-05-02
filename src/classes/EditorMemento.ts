export class EditorMemento {
  constructor(private readonly content: string) {}

  getContent(): string {
    return this.content;
  }
};
