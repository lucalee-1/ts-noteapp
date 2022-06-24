import { useState } from "react";
import NewTodo from "./components/NewTodoForm";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const initialTodos = [
  new Todo('Learn React'),
  new Todo('Learn TypeScript')
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((prevState) => {return prevState.concat(newTodo)})
  }

  return (
    <div> 
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
