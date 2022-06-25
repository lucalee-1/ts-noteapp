import NewTodo from './components/NewTodoForm';
import Todos from './components/Todos';
import TodosContextProvider from './store/todosContext';

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
