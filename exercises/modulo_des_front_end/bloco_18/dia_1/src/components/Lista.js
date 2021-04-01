import React, { Component } from 'react';
import MyContext from '../contextAPI';

export default class Lista extends Component {
  render() {
    return (
      <MyContext.Consumer>
        { ({ lista }) => (
          <ul>
            { lista.map((el, index) => (
              <li id={ index } key={ index }>{el}</li>
            ))}
          </ul>
        )}
      </MyContext.Consumer>
    );
  }
}
