import { useContext } from 'react';
import { TodosContext } from '../store/todosContext';
import TodoItem from './TodoItem';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
