import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>Toggle</h2>
      <button onClick={toggleState}>{isOn ? 'OFF' : 'ON'}</button>
    </div>
  );
}

export default Toggle;
