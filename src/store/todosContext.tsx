import { createContext, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: String) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const handleDeleteTodo = (todoId: string) => {
    if (window.confirm('Are you sure you want to delete it?')) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todoId);
      });
    }
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddTodo,
    deleteTodo: handleDeleteTodo,
  };
  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
