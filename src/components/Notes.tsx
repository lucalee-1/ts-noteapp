import { useContext } from 'react';
import { NotesContext } from '../store/notesContext';
import NoteItem from './NoteItem';

const Notes: React.FC = () => {
  const notesCtx = useContext(NotesContext);

  return (
    <ul>
      {notesCtx.items.map((item) => (
        <NoteItem
          key={item.id}
          text={item.text}
          onDeleteNote={notesCtx.deleteNote.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Notes;
