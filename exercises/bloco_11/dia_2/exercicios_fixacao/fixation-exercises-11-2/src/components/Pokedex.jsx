import React, { Component } from 'react';
import Data from '../data';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component {
  mountPokedex() {
    return Data.map(pokemon => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />
      })
  }

  render() {
    return [
      <div className="content-title">
        <h1 className="title-pokedex">Pokedex</h1>
      </div>,
      <div className="pokedex-content">
        {this.mountPokedex()}
      </div>
    ]
  }
}

export default Pokedex;