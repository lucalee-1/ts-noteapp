import classes from './NoteItem.module.css';

const NoteItem: React.FC<{ text: string; onDeleteNote: () => void }> = ({ text, onDeleteNote }) => {
  return (
    <li className={classes.item}>
      {text}
      <button type="button" onClick={onDeleteNote}>
        X
      </button>
    </li>
  );
};
export default NoteItem;
