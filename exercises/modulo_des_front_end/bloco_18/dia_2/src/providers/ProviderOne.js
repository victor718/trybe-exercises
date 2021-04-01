import React, { useState } from 'react';
import isContext from './createContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <isContext.Provider value={ contextValue }>
      {children}
    </isContext.Provider>
  );
}

export default Provider;
