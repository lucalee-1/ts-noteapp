const NoteItem: React.FC<{text: string; onDeleteNote: () => void}> = ({text, onDeleteNote}) => {
  return (
    <li>{text} <button type="button" onClick={onDeleteNote}>X</button></li>
    )
}
export default NoteItem