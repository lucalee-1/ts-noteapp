const TodoItem: React.FC<{text: string; onDeleteTodo: () => void}> = ({text, onDeleteTodo}) => {
  return (
    <li>{text} <button type="button" onClick={onDeleteTodo}>X</button></li>
    )
}
export default TodoItem