import { useRef, useContext } from 'react';
import { NotesContext } from '../store/notesContext';

const NewNote: React.FC = () => {
  const notesCtx = useContext(NotesContext);

  const noteTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = noteTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //toast or error
      return;
    }
    notesCtx.addNote(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noteText">New Note </label>
      <input type="text" id="noteText" ref={noteTextInputRef} />
      <button>Add Note</button>
    </form>
  );
};
export default NewNote;
