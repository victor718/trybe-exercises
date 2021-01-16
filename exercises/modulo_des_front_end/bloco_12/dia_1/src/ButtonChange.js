import React, { Component } from 'react';

class ButtonChange extends Component {

  render() {
    return <button
      onClick={ this.props.changeTypePokemon } 
      className={ 'on' }
      value={ this.props.type } >
        { this.props.type }
      </button>
  }
}

export default ButtonChange;