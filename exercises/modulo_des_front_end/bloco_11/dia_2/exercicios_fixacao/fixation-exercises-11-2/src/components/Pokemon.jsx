import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.pokemon.name,
      type: props.pokemon.type,
      value: props.pokemon.averageWeight.value,
      measurementUnit: props.pokemon.averageWeight.measurementUnit,
      moreInfo: props.pokemon.moreInfo,
      image: props.pokemon.image
    };
  }

  generateInfoPokemon() {
    const infoPokemon = (
    <div className="pokemon-content-info">
      <span className="pokemon-info">{this.state.name}</span>
      <span className="pokemon-info">{this.state.type}</span>
      <span className="pokemon-info">
      Average Weight: {this.state.value}
        {' '}
        {this.state.measurementUnit}
      </span>
    </div>
    )
    return infoPokemon;
  }

  generateImagePokemon() {
    const imagePokemon = (
      <div className="pokemon-content-image">
        <a href={this.state.moreInfo} target="_blanck">
          <img src={this.state.image} alt="imagem pokemon"/>
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
