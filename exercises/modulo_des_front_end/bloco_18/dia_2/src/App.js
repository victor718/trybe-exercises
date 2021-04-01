import React, { useContext } from 'react';
import { thisContext } from './providers/Providers';

function App() {
  const { contextOne } = useContext(thisContext);
  contextOne.setStateA('NOME');
  console.log(contextOne);
  console.log(contextOne.stateA);
  return (
    <div>
      test
    </div>
  );
}

export default App;
