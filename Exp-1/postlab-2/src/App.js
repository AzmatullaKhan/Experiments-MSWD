import UserList from './UserList';
import './App.css';

function App() {
  const users = [
    { name: 'Eren yeager', email: 'john@example.com' },
    { name: 'Yuji Itadori', email: 'jane@example.com' },
    { name: 'Tanjiro Kamado', email: 'bob@example.com' },
  ];

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
