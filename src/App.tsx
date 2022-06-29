import NewNote from './components/NewNoteForm';
import Notes from './components/Notes';
import NotesContextProvider from './store/notesContext';

function App() {
  return (
    <div>
      <NotesContextProvider>
        <NewNote />
        <Notes />
      </NotesContextProvider>
    </div>
  );
}

export default App;
