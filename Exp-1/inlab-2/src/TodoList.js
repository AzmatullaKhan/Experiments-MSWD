import React, { useState } from 'react';

function TodoList({ todos }) {
  const [todoList, setTodoList] = useState(todos);

  const toggleTodoStatus = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodoList(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoStatus(index)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
