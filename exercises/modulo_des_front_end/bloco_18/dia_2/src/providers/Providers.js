import React, { createContext } from 'react';
import ProviderOne from './ProviderOne';
import ProviderTwo from './ProviderTwo';

export const thisContext = createContext();

function Providers({ children }) {
  return (
    <thisContext.Provider value={ { contextOne: ProviderOne, contextTwo: ProviderTwo } }>
      {children}
    </thisContext.Provider>
  );
}

export default Providers;
