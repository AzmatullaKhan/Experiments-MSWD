import React from 'react';
import './App.css';
import Counter from './Counter';
import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <Toggle />
    </div>
  );
}

export default App;
