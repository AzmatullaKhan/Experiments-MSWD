import TodoList from './TodoList';
import './App.css';

function App() {
  const todos = [
    { title: 'Buy groceries', completed: false },
    { title: 'Walk the dog', completed: true },
    { title: 'Write code', completed: false },
  ];

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

