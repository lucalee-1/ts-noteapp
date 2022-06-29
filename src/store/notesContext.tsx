import { createContext, useState } from 'react';
import Note from '../models/note';

type NotesContextObj = {
  items: Note[];
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
};
export const NotesContext = createContext<NotesContextObj>({
  items: [],
  addNote: (text: string) => {},
  deleteNote: (id: String) => {},
});

const NotesContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAddNote = (noteText: string) => {
    const newNote = new Note(noteText);
    setNotes((prevNotes) => {
      return prevNotes.concat(newNote);
    });
  };

  const handleDeleteNote = (noteId: string) => {
    if (window.confirm('Are you sure you want to delete it?')) {
      setNotes((prevNotes) => {
        return prevNotes.filter((t) => t.id !== noteId);
      });
    }
  };

  const contextValue: NotesContextObj = {
    items: notes,
    addNote: handleAddNote,
    deleteNote: handleDeleteNote,
  };
  return <NotesContext.Provider value={contextValue}>{children}</NotesContext.Provider>;
};

export default NotesContextProvider;
