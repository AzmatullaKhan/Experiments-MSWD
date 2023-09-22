import React from 'react';
import './App.css';
import Counter from './Counter';
import UserList from './UserList';

function App() {
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <div className="App">
      <Counter />
      <UserList users={users} />
    </div>
  );
}

export default App;
