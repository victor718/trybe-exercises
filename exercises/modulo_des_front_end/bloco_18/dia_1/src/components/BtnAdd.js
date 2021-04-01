import React, { Component } from 'react';
import MyContext from '../contextAPI';

export default class BtnAdd extends Component {
  render() {
    return (
      <MyContext.Consumer>
        { (value) => (
          <button
            onClick={ () => {
              value.onClickAddList();
              value.resetInput();
            } }
            type="button"
          >
            Adicionar
          </button>
        )}
      </MyContext.Consumer>
    );
  }
}
