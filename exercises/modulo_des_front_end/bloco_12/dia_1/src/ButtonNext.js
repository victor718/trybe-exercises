import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button className="btn-nextPokemon" onClick={ this.props.nextPokemon }>Próximo pokemon</button>
  }
}

export default Button;