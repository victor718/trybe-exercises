import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/Private';
import ClientsList from './pages/ClientsList';
import CustomerBase from './pages/CustomerBase';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={ (props) => (<Login { ...props } />) } />
        <Route exact path="/" render={ (props) => (<Home { ...props } />) } />
        <PrivateRoute
          path="/register-clients"
          render={ ClientsList }
          msgAlert="Login não efetuado"
        />
        <PrivateRoute
          path="/cadastrar"
          render={ CustomerBase }
          msgAlert="Login não efetuado"
        />
        <Route path="*" render={ () => <h1>Not FOUND</h1> } />
      </Switch>
    </div>
  );
}

export default App;
