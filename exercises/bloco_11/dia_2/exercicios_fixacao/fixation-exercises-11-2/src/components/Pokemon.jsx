import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  generateInfoPokemon() {
    const infoPokemon = (
    <div className="pokemon-content-info">
      <span className="pokemon-info">{this.props.pokemon.name}</span>
      <span className="pokemon-info">{this.props.pokemon.type}</span>
      <span className="pokemon-info">
        {this.props.pokemon.averageWeight.value}
        {' '}
        {this.props.pokemon.averageWeight.measurementUnit}
      </span>
    </div>
    )
    return infoPokemon;
  }

  generateImagePokemon() {
    const imagePokemon = (
      <div className="pokemon-content-image">
        <a href={this.props.pokemon.moreInfo} target="_blanck">
          <img src={this.props.pokemon.image} alt="imagem pokemon"/>
        </a>
      </div>
    )
    return imagePokemon;
  }

  genereatePokemon() {
    return (
      <div className="pokemon">
        {this.generateInfoPokemon()}
        {this.generateImagePokemon()}
      </div>
    )
  }

  render() {
    return this.genereatePokemon();
  }
}

export default Pokemon;
