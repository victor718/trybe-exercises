import React, { useState } from 'react';
import createContext from './createContext';

function ProviderTwo({ children }) {
  const [stateC, setStateC] = useState('initialStateC');
  const [stateD, setStateD] = useState('initialStateD');
  const contextValue = {
    stateC,
    setStateC,
    stateD,
    setStateD,
  };

  return (
    <createContext.Provider value={ contextValue }>
      { children }
    </createContext.Provider>
  );
}

export default ProviderTwo;
