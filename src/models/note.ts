class Note {
  id: string;
  text: string;

  constructor(noteText: string) {
    this.text = noteText;
    this.id = new Date().toISOString();
  }
}

export default Note;
