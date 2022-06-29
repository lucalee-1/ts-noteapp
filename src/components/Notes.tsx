import { useContext } from 'react';
import { NotesContext } from '../store/notesContext';
import NoteItem from './NoteItem';
import classes from './Notes.module.css';

const Notes: React.FC = () => {
  const notesCtx = useContext(NotesContext);

  return (
    <ul className={classes.notes}>
      {notesCtx.items.map((item) => (
        <NoteItem
          key={item.id}
          text={item.text}
          onDeleteNote={notesCtx.deleteNote.bind(null, item.id, item.text)}
        />
      ))}
    </ul>
  );
};
export default Notes;
