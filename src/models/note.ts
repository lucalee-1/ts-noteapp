import { v4 as uuidv4 } from 'uuid';


class Note {
  id: string;
  text: string;

  constructor(noteText: string) {
    this.text = noteText;
    this.id = uuidv4()
  }
}

export default Note;
