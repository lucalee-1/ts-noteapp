import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todosContext';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //toast or error
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoText">New To-Do Item </label>
      <input type="text" id="todoText" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
